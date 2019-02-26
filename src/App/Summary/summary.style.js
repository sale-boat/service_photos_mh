import styled from 'styled-components';

// eslint-disable-next-line import/prefer-default-export
export const Container = styled.div`
  width: 53%;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  font-family: "Lato", serif;
  img.ad {
    width: 100%;
  }
`;

export const Title = styled.div`
  h5 {
    font-size: 21px;
    margin: 0px;
  }
  a {
    color: #0066c0;
    text-decoration: none;
  }
  a:hover {
    color: #c45500;
    text-decoration: underline;
  }
  p {
    font-size: 13px;
    margin-top: 1px;
    margin-bottom: 2px;
    span {
      color: #0066c0;
    }
  }
`;

export const Stats = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  a {
    color: #0066c0;
    text-decoration: none;
  }
  a:hover {
    color: #c45500;
    text-decoration: underline;
  }
  a, span {
    margin-left: 2px;
    font-size: 13px;
  }
  img {
    height: 16px;
  }
  div.stars {
    cursor: pointer;
    display: flex;
    flex-direction: row;
    align-items: center;
  }
  img.carrot {
    margin-right: 3px;
    margin-left: 2px;
  }
`;

export const Price = styled.div`
  margin-top: 5px;
  margin-bottom: 5px;
  display: flex;
  flex-direction: column;
  div.price {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 2px;
    margin-bottom: 2px;
    p {
      font-size: 13px;
      margin-top: 0px;
      margin-bottom: 0px;
      margin-right: 4px;
    }
    span.priceNum {
      font-size: 13px;
      color: #B12704;
    }
    img {
      height: 13px;
    }
  }
  div.discoverBonus {
    margin-top: 4px;
    margin-bottom: 10px;
    p {
      font-size: 13px;
      margin-top: 0px;
      margin-bottom: 0px;
    }
    span.strikeThrough {
      text-decoration: line-through;
    }
  }
`;

export const Description = styled.ul`
  padding: 0px;
  margin-left: 15px;
  font-size: 13px;
  li {
    padding-left: 3px;
    color: #949494;
    span {
      color: black;
    }
  }
`;

export const Links = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 13px;
  a {
    text-decoration: none;
    color: #0066c0;
  }
  a:hover {
    color: #c45500;
    text-decoration: underline;
  }
  img {
    height: 13px;
  }
`;
