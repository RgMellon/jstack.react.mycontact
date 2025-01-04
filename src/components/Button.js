import styled from 'styled-components';

export const Button = styled.button`
  height: 52px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04px);
  width: 100%;
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
`;
