import styled from 'styled-components';

export const Container = styled.header`
  padding: 22px 22px 12px 22px;
  background-color: var(--secondary);
  width: 100%;
  box-shadow: 2px 5px 15px 1px rgba(0, 0, 0, 0.2);
`;

export const HeaderContent = styled.div`
  /* display: flex; */
`;

export const Top = styled.div`
  display: flex;
`;
export const InputText = styled.input`
  background: #fff;
  height: 56px;
  width: 100%;
  border: 2px solid var(--primary);
  color: var(--primary);
  display: flex;
  flex: 1;
  padding: 0 10px;
  min-width: 200px;
  font-size: 28px;
`;
export const SearchBar = styled.div`
  display: flex;
  padding: 20px;
  height: 100px;
  align-items: center;
  max-width: 500px;
  width: 40%;
  > button {
    margin-left: 5px;
    width: 80px;
  }
`;
