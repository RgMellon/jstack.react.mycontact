import styled, { css } from 'styled-components';

const containerVariant = (type, theme) => {
  const status = {
    default: theme.color.primary.main,
    danger: theme.color.danger.main,
    success: 'green',
  };

  return css`
    background-color: ${status[type]};
  `;
};

export const Container = styled.div`
  padding: 16px 32px;
  border-radius: 4px;
  box-shadow: 0px 20px 20px -16px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  cursor: pointer;

  ${({ type, theme }) => containerVariant(type, theme)}

  img {
    margin-right: 5px;
  }

  & + & {
    margin-top: 12px;
  }

  strong {
    font-size: 14px;
  }
`;
