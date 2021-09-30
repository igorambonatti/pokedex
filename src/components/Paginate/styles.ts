import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  .pagination__container {
    display: flex;
    justify-content: center;
    flex: 1;

    li {
      background-color: #fff;
      border-radius: 4px;
      color: #000;
      cursor: pointer;
      font-size: 1.4rem;
      list-style: none;
      height: 32px;
      transition: 0.15s linear;
      margin: 0 16px;

      &.pagination__active_page {
        color: var(--primary);

        &:hover {
          color: ${(props) => shade(0.2, '#000')};
        }
      }

      &.previous {
        margin-right: 16px;
      }

      &.break {
        > a {
          margin-top: 4px;
        }
      }

      &.next {
        margin-left: 16px;
      }

      > a {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    }
  }
`;

export const Buttons = styled.div`
  display: flex;

  a + a {
    margin-left: 8px;
  }
`;
