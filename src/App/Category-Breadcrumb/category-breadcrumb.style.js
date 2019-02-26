import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div`
  font-family: lato, sans-serif;
  padding-left: 15px;
  width: 98%;
  min-height: 20px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  a {
    font-size: 12px;
    text-decoration: none;
    color: #555;
  }
  a:hover {
    color: #c45500;
    text-decoration: underline;
  }
`;
