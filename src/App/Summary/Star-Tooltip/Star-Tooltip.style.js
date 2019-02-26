import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  width: 200px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: lato, sans-serif;
  font-size: 13px;
  padding: 8px;
  opacity: 1;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0,0,0,.13);
  overflow: hidden;
  border: 1px solid #cdcdcd;
  border-color: rgba(0,0,0,.2);
  div.topRow {
    margin-bottom: 10px;
  }
  div.bottomRow {
    margin-top: 10px;
  }
  div.row {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    padding-bottom: 1px;
  }
  a {
    font-size: 13px;
    color: #0066c0;
    text-decoration: none;
  }
  a:hover {
    color: #c45500;
    text-decoration: underline;
  }
  p {
    min-width: 25px;
    margin: 0;
    padding: 0;
    text-align: right;
  }
`;

export const Bar = styled.div`
  width: 122px;
  height: 19px;
  border-radius: 1px;
  background: linear-gradient(to bottom,#eee,#f6f6f6);
  background-color: #f3f3f3;
  overflow: hidden;
  box-shadow: inset 0 0 0 1px rgba(0,0,0,.25), 
              inset 0 -1px 0 rgba(0,0,0,.05);
  display: flex;
  flex-direction: row;
  align-items: center;
  div.color {
    border-radius: 1px;
    background: linear-gradient(to bottom,#ffce00,#ffa700);
    background-color: #ffce00;
    transition: width .5s ease;
    float: left;
    font-size: 0;
    height: 100%;
    width: 0;
    box-sizing: border-box;
    box-shadow: inset 0 0 0 1px rgba(0,0,0,.25), inset 0 -1px 0 rgba(0,0,0,.05);
  }
`;
