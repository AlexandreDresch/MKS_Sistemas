import styled from "styled-components";

export const Container = styled.div`
  width: 218px;
  height: auto;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0px 2px 8px 0px #00000022;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 12px;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;

  img {
    width: 100%;
    height: auto;
  }
`;

export const NameValueContainer = styled.div`
  width: 100%;
  min-height: 38px;
  display: flex;
  justify-content: space-between;

  h1 {
    max-width: 50%;
    color: #2c2c2c;
    font-family: Montserrat;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
  }
`;

export const BadgeContainer = styled.div`
  width: 64px;
  height: 26px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: #373737;

  span {
    color: #fff;
    font-family: Montserrat;
    font-size: 15px;
    font-style: normal;
    font-weight: 700;
  }
`;

export const DescriptionContainer = styled.div`
  color: #2c2c2c;
  font-family: Montserrat;
  font-size: 12px;
  font-style: normal;
  font-weight: 300;
  line-height: 12px;
`;

export const Button = styled.button`
  display: flex;
  width: 100%;
  height: 32px;
  align-items: center;
  justify-content: center;
  gap: 15px;
  padding: 15px 25px 15px 15px;
  border: none;
  border-radius: 0px 0px 8px 8px;
  background: #0f52ba;
  cursor: pointer;

  span {
    color: #fff;
    font-family: Montserrat;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 18px; /* 128.571% */
  }

  img {
    width: 19px;
    height: 19px;
  }
`;
