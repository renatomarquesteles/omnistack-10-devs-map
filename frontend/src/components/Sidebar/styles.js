import styled from 'styled-components';
import { darken } from 'polished';

import colors from '../../styles/colors';

export const Container = styled.aside`
  width: 320px;
  background: ${colors.container};
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.02);
  border-radius: 2px;
  padding: 30px 20px;
  animation: sidebarFadeIn 0.6s ease-out;

  @keyframes sidebarFadeIn {
    0% {
      opacity: 0;
      transform: translateX(-200px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  strong {
    font-size: 20px;
    text-align: center;
    display: block;
    color: #333;
  }

  form {
    margin-top: 30px;

    button[type='submit'] {
      width: 100%;
      border: 0;
      margin-top: 30px;
      background: ${colors.primary};
      border-radius: 2px;
      padding: 15px 20px;
      font-size: 16px;
      font-weight: bold;
      color: #fff;
      cursor: pointer;
      transition: background 0.3s;

      &:hover {
        background: ${darken(0.06, colors.primary)};
      }
    }
  }
`;

export const InputBlock = styled.div`
  form > & + & {
    margin-top: 20px;
  }

  label {
    color: #333;
    font-size: 14px;
    font-weight: bold;
    display: block;
    margin-bottom: 5px;
  }

  input {
    width: 100%;
    height: 32px;
    padding: 0 8px;
    font-size: 14px;
    color: #333;
    border: 0;
    background: none;
    border: 1px solid rgba(0, 0, 0, 0.15);
    border-radius: 5px;
  }
`;

export const InputGroup = styled.div`
  margin-top: 20px;
  display: grid;
  gap: 20px;
  grid-template-columns: 1fr 1fr;

  > div:last-child {
    margin-top: 0;
  }
`;
