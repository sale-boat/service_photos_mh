import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div`
  width: 40px;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-right: 10px;
  img {
    cursor: pointer;
    border-radius: 2px;
    margin-bottom: 5px;
    width: 40px;
    border: .5px solid black;
  }
  img:hover {
    border-color: #e77600;
    box-shadow: 0px 0px 2px 1px #e77600;
  }
  img.selected {
    border-color: #e77600;
    box-shadow: 0px 0px 2px 1px #e77600;
  }
`;
