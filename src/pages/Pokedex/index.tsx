import React, { useCallback, useEffect, useState } from 'react';

import Header from '../../components/Header';
import api from '../../services/api';
import Paginate from '../../components/Paginate';
import { pagination } from '../../utils/pagination';
import Error from '../../assets/error.png';
import {
  Container,
  Card,
  Types,
  PokeImage,
  Content,
  NumberPoke,
  NamePoke,
  IdentificationPoke,
  ErrorImage,
  ErrorView,
  ErrorText,
  ErrorButton,
} from './styles';

const Pokedex: React.FC = () => {
  const [pokemons, setPokemons] = useState<string[][]>();
  const [initialPokemons, setInitialPokemons] = useState<[]>();
  const [numberPage, setNumberPage] = useState<number>(0);

  const onSubmitSearch = useCallback(() => {
    const inputValue = (document.getElementById('search') as HTMLInputElement)
      .value;
    if (inputValue === '') return setPokemons(pagination(initialPokemons));
    const filtredPokemons = initialPokemons?.filter((item: any) => {
      return (
        item?.name === inputValue ||
        item?.num === inputValue ||
        parseInt(item?.num).toFixed(0) === inputValue
      );
    });
    setPokemons(pagination(filtredPokemons));
  }, [initialPokemons]);

  useEffect(() => {
    async function loadPokemons(): Promise<void> {
      try {
        const response = await api.get('');
        setInitialPokemons(response.data.pokemon);
        const paginated = pagination(response.data.pokemon);
        return setPokemons(paginated);
      } catch (e) {
        return alert(e);
      }
    }
    loadPokemons();
  }, []);

  return (
    <>
      {pokemons && (
        <Container>
          <Header onSubmitFilter={onSubmitSearch} />
          <Content>
            {pokemons[numberPage]?.map((pokemon: any) => {
              return (
                <Card key={pokemon?.num}>
                  <PokeImage src={pokemon?.img} alt="" />
                  <NumberPoke>#{pokemon?.num}</NumberPoke>
                  <NamePoke>{pokemon?.name}</NamePoke>
                  <Types>
                    {pokemon?.type.map((pokeType: string, index: number) => {
                      return (
                        <IdentificationPoke type={pokeType} key={index}>
                          {pokeType}
                        </IdentificationPoke>
                      );
                    })}
                  </Types>
                </Card>
              );
            })}
            {pokemons?.length > 0 && (
              <Paginate
                pageCount={pokemons.length}
                onPageChange={({ selected }) => setNumberPage(selected)}
              />
            )}
          </Content>
        </Container>
      )}
      {pokemons?.length === 0 && (
        <ErrorView>
          <ErrorImage src={Error} alt="" />
          <ErrorText>Nenhum resultado encontrado</ErrorText>
          <ErrorButton
            onClick={() => {
              (document.getElementById('search') as HTMLInputElement).value =
                '';
              onSubmitSearch();
            }}
          >
            tente novamente
          </ErrorButton>
        </ErrorView>
      )}
    </>
  );
};
export default Pokedex;
