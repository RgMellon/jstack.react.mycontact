import styled from 'styled-components';

export default styled.input`
  height: 52px;
  border: none;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04px);
  width: 100%;
  border-radius: 4px;
  border: 2px solid #fff;
  outline: none;
  padding: 0px 16px;
  font-size: 16px;
  transition: 0.2s ease-in;

  &:focus {
    border-color: ${({ theme }) => theme.color.primary.main};
  }
`;
