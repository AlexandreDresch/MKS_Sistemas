import styled from "styled-components";
import Link from "next/link";

export const Container = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  
  align-items: center;
  justify-content: space-between;
  padding: 28px 65px 28px 65px;
  background-color: #0f52ba;
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
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-items: center;
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
`;
