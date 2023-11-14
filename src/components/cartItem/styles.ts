import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-radius: 8px;
  background: #fff;
  box-shadow: -2px 2px 10px 0px rgba(0, 0, 0, 0.05);

  @media (max-width: 450px) {
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  height: 80px;
  width: 80px;

  img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 450px) {
    height: 80px;
    width: 80px;
  }
`;

export const DetailsContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  div {
    p {
      color: #000;
      font-family: Montserrat;
      font-size: 14px;
      font-style: normal;
      font-weight: 700;
      line-height: 17px;
    }
  }

  @media (max-width: 450px) {
    flex-direction: column;
    gap: 5px;

    div {
      p {
        color: #ffffff;
        padding: 5px 10px;
        border-radius: 5px;
        background: #373737;
      }
    }
  }
`;

export const ProductName = styled.p`
  color: #2c2c2c;
  min-width: 70px;
  max-width: 70px;
  font-family: Montserrat;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 17px;
  margin-left: 10px;

  @media (max-width: 450px) {
    max-width: 100%;
  }
`;

export const ButtonsContainer = styled.div`
  p {
    color: #000;
    font-family: Montserrat;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  div {
    display: flex;
    gap: 5px;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    border: 0.3px solid #bfbfbf;
    background: #fff;
  }

  @media (max-width: 450px) {
    p {
      display: none;
    }
  }
`;

export const PriceContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-left: 20px;

  @media (max-width: 450px) {
flex-direction: row;
    justify-content: center;
    gap: 30px;
  }
`;

export const Button = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  align-items: center;
  cursor: pointer;

  span {
    color: #000;
    font-family: Montserrat;
    font-size: 10px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-align: center;
  }
`;

export const Separator = styled.div`
  width: 0.25px;
  height: 11.5px;
  background-color: #bfbfbf;
`;

export const DeleteButton = styled.button`
  position: absolute;
  top: 0px;
  right: 0px;
  width: 18px;
  height: 18px;
  background-color: #000000;
  border: none;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  span {
    color: #fff;
    font-family: Montserrat;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 17px;
  }

  @media (max-width: 450px) {
    background-color: transparent;
    top: 5px;
    right: 5px;

    span {
      color: #000000;
      font-size: 26px;
    }
  }
`;
