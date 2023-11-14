import styled from "styled-components";
import Link from "next/link";

export const Container = styled.div`
  display: flex;
  height: 100px;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 999;
  align-items: center;
  justify-content: space-between;
  padding: 28px 65px 28px 65px;
  background-color: #0f52ba;

  @media (max-width: 768px) {
    padding: 24px 55px 24px 55px;
  }

  @media (max-width: 425px) {
    height: 48px;
    padding: 0px 20px 0px 20px;
  }
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
`;

export const Title = styled.h1`
  text-decoration: none;
  font-family: "Montserrat", sans-serif;
  font-weight: 600;
  font-size: 40px;
  line-height: 19px;

  span {
    font-weight: 300;
    font-size: 20px;

    @media (max-width: 425px) {
      font-size: 16px;
    }
  }

  @media (max-width: 425px) {
    font-size: 32px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding: 15px 25px 15px 15px;
  border-radius: 8px;
  border: none;
  background-color: #ffffff;
  cursor: pointer;

  span {
    font-family: Montserrat;
    font-size: 18px;
    font-weight: 700;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;
  }

  img {
    width: 19px;
    height: 19px;
  }

  @media (max-width: 425px) {
    padding: 0px;
    width: 52px;
    height: 26px;
    gap: 5px;

    span {
      font-size: 12px;
    }

    img {
      width: 10px;
      height: 10px;
    }
  }
`;
