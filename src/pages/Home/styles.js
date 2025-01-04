import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 32px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 32px;

  strong {
    color: #222;
    font-size: 24px;
  }

  a {
    color: ${({ theme }) => theme.color.primary.main};
    text-decoration: none;
    font-weight: bold;
    border: 2px solid ${({ theme }) => theme.color.primary.main};
    padding: 8px 16px;
    border-radius: 4px;
    transition: all 0.2s ease-in;

    &:hover {
      background: ${({ theme }) => theme.color.primary.main};
      color: #fff;
    }
  }
`;

export const ListContainer = styled.div`
  margin-top: 24px;

  header {
    margin-bottom: 8px;
    background: transparent;
    border: none;
    display: flex;
    align-items: center;

    span {
      font-weight: bold;
      margin-right: 8px;
      color: ${({ theme }) => theme.color.primary.main};
    }
  }
`;

export const Card = styled.div`
  background: #fff;
  padding: 16px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04px);
  border-radius: 4px;

  & + & {
    margin-top: 16px;
  }

  display: flex;
  justify-content: space-between;
  align-items: center;

  .info {
    .contact-name {
      display: flex;
      align-items: center;

      small {
        background: ${({ theme }) => theme.color.primary.lighter};
        color: ${({ theme }) => theme.color.primary.main};
        font-weight: bold;
        text-transform: uppercase;
        padding: 4px;
        border-radius: 4px;
        margin-left: 8px;
      }
    }

    span {
      display: block;
      font-size: 14px;
      color: ${({ theme }) => theme.color.gray[200]};
    }
  }

  .actions {
    display: flex;
    align-items: center;

    button {
      background: transparent;
      border: none;
      margin-left: 8px;
    }
  }
`;

export const InputSearchContainer = styled.div`
  width: 100%;

  input {
    width: 100%;
    height: 50px;
    border-radius: 25px;
    background: #fff;
    border: none;
    padding: 0 16px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
    outline: none;

    &::placeholder {
      color: #bfbfbf;
    }
  }
`;
