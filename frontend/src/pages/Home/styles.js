import styled from 'styled-components';
import colors from '../../styles/colors';
import { lighten, darken } from 'polished';

export const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 60px 30px;
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  main {
    width: 100%;
    flex: 1;
    margin-left: 30px;
  }

  @media (max-width: 700px) {
    flex-direction: column;

    main {
      margin-left: 0;
      margin-top: 30px;
    }

    aside {
      width: 100%;
    }

    ul {
      max-width: 700px;
    }
  }
`;

export const DevList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
  list-style: none;

  @media (max-width: 1000px) {
    grid-template-columns: 1fr;
    max-width: 500px;
  }
`;

export const Dev = styled.li`
  background: ${colors.container};
  box-shadow: 0 0 14px 0 rgba(0, 0, 0, 0.02);
  border-radius: 2px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  animation: fadeIn 0.6s ease-out;

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateX(300px);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }

  a {
    width: fit-content;
    color: ${lighten(0.06, colors.primary)};
    font-size: 14px;
    text-decoration: none;
    transition-duration: 0.2s;

    &:hover {
      color: ${darken(0.06, colors.primary)};
      text-decoration: underline;
    }
  }
`;

export const DevInfoContainer = styled.div`
  header {
    display: flex;
    flex-direction: row;
    align-items: center;

    img {
      width: 54px;
      height: 54px;
      border-radius: 50%;
    }
  }

  p {
    color: #666;
    font-size: 14px;
    line-height: 20px;
    margin: 10px 0;
  }
`;

export const DevInfo = styled.div`
  margin-left: 10px;

  strong {
    display: block;
    font-size: 16px;
    color: #333;
  }

  span {
    font-size: 13px;
    color: #999;
    margin-top: 2px;
  }
`;
