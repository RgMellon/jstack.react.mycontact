import styled from 'styled-components';

export const Overlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(5px);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 450px;
  background-color: #fff;
  border-radius: 4px;
  padding: 24px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04px);

  h1 {
    font-size: 22px;
  }

  p {
    margin-top: 8px;
    color: #999;
  }
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: flex-end;

  .cancel-button {
    background: transparent;
    border: none;
    margin-right: 8px;
    font-size: 16px;
    color: ${({ theme }) => theme.color.gray[200]};
  }
`;
