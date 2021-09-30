import styled, { keyframes } from 'styled-components';
import { shade } from 'polished';

interface Identification {
  type: string;
}

const defineColorText = (type?: string): string => {
  if (
    type === 'Fire' ||
    type === 'Ice' ||
    type === 'Psychic' ||
    type === 'Poison' ||
    type === 'Grass' ||
    type === 'Water' ||
    type === 'Bug' ||
    type === 'Dragon' ||
    type === 'Electric' ||
    type === 'Ground'
  ) {
    return '#fff';
  }

  return '#000';
};
const defineBackgroundColor = (type?: string): string => {
  if (type === 'Fire') {
    return '#FF4500';
  }
  if (type === 'Ice') {
    return '#4169E1';
  }
  if (type === 'Flying') {
    return '#FFD700';
  }
  if (type === 'Psychic') {
    return '#8B0000';
  }
  if (type === 'Poison') {
    return '#01BD0A';
  }
  if (type === 'Grass') {
    return '#FF00F2';
  }
  if (type === 'Water') {
    return '#00C3FF';
  }
  if (type === 'Bug') {
    return '#64431E';
  }
  if (type === 'Dragon') {
    return '#FF0000';
  }
  if (type === 'Ground') {
    return '#1500CE';
  }
  if (type === 'Electric') {
    return '#7300B6';
  }

  return '#D0D322';
};

export const appearFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translateX(-50px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  animation: ${appearFromLeft} 1s;
`;
export const Content = styled.div`
  margin: 16px 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 250px;
  box-shadow: 2px 5px 15px 1px rgba(0, 0, 0, 0.2);
  margin: 16px;
`;
export const Types = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 0 16px;
  margin: 10px 0;
`;
export const ErrorView = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ErrorImage = styled.img`
  width: 400px;
  height: 400px;
`;
export const ErrorButton = styled.button`
  background-color: transparent;
  border: none;
  color: var(--primary);
  font-size: 18px;
  margin: 16px 0;
  &:hover {
    color: ${shade(0.2, '#fa9600')};
  }
`;
export const ErrorText = styled.text`
  margin-top: 12px;
  font-size: 32px;
  font-weight: bold;
  text-align: center;
  color: #bdb8b8ef;
`;

export const NumberPoke = styled.span`
  padding: 0 16px;
  color: #80858b;
  text-align: left;
  font-size: 16px;
`;
export const NamePoke = styled.span`
  padding: 0 16px;
  color: #393d42;
  text-align: left;
  font-weight: bold;
  font-size: 22px;
`;

export const PokeImage = styled.img`
  /* width: 250px; */
  height: 250px;
  background-color: #bdb7b711;
`;
export const IdentificationPoke = styled.div<Identification>`
  color: ${(props) => defineColorText(props.type)};
  display: flex;
  background-color: ${(props) => defineBackgroundColor(props.type)};
  font-size: 12px;
  padding: 4px 0;
  width: 70px;
  justify-content: center;
  font-weight: bold;
  border-radius: 5px;
  & + & {
    margin-left: 3px;
  }
`;
