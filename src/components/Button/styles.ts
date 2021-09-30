import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: var(--primary);
  border-radius: 10px;
  border: 0;
  color: #fff;
  font-weight: 500;
  padding: 0 16px;
  width: 100%;
  height: 56px;
  transition: background-color 0.2s;
  &:hover {
    background: ${shade(0.2, '#fa9600')};
  }
`;
