import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div`
  width: auto;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    max-width: 100%;
  }
  p {
    font-family: lato, sans-serif;
    font-size: 13px;
    text-align: center;
  }
`;
