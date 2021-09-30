import React from 'react';

import { FaSearch } from 'react-icons/fa';
import { Container, SearchBar, HeaderContent, InputText } from './styles';
import Logo from '../../assets/logo.png';
import Button from '../Button';

interface ControlHead {
  onSubmitFilter: () => void;
}

const Header: React.FC<ControlHead> = ({ onSubmitFilter }) => {
  return (
    <Container>
      <HeaderContent>
        <img src={Logo} alt="" height="70" />
        <SearchBar>
          <InputText id="search" name="search" />
          <Button type="submit" onClick={onSubmitFilter}>
            <FaSearch size={25} />
          </Button>
        </SearchBar>
      </HeaderContent>
    </Container>
  );
};

export default Header;
