import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 32px;
  margin-bottom: 24px;

  a {
    text-decoration: none;
    display: flex;
    align-items: center;
    span {
      color: ${({ theme }) => theme.color.primary.main};
      font-weight: bold;
    }

    img {
      margin-right: 8px;
      transform: rotate(-90deg);
    }
  }

  h1 {
    font-size: 24px;
  }
`;
