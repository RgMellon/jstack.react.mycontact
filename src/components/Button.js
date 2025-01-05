import styled, { css } from 'styled-components';

export const Button = styled.button`
  height: 52px;
  padding: 0px 16px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04px);
  border-radius: 4px;
  font-size: 16px;
  background-color: ${({ theme }) => theme.color.primary.main};
  transition: background 0.2 ease-in;
  color: #fff;
  border: none;

  &:hover {
    background-color: ${({ theme }) => theme.color.primary.light};
  }

  &:active {
    background-color: ${({ theme }) => theme.color.primary.dark};
  }

  &[disabled] {
    background-color: #ccc;
    cursor: default;
  }

  ${({ theme, danger }) =>
    danger &&
    css`
      background-color: ${theme.color.danger.main};

      &:hover {
        background-color: ${theme.color.primary.light};
      }

      &:active {
        background-color: ${theme.color.primary.dark};
      }
    `}
`;
