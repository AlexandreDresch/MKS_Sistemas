import styled from "styled-components";

export const Container = styled.div<{ sidebar: boolean }>`
  background-color: #0f52ba;
  box-shadow: -5px 0px 6px 0px rgba(0, 0, 0, 0.13);
  position: fixed;
  height: 100%;
  top: 0px;
  right: 0px;
  width: 450px;
  z-index: 999;
  right: ${(props) => (props.sidebar ? "0" : "-100%")};
  animation: showSidebar 0.08s;

  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 300px;
    }
  }

  @media (max-width: 450px) {
    width: 330px;
  }
`;

export const InnerContainer = styled.div`
  padding: 36px;
`;

export const ContentContainer = styled.div`
  margin-top: 70px;
  width: 100%;
  height: 560px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;

  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-width: 450px) {
    height: 530px;
  }
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  color: #fff;
  font-family: Montserrat;

  div {
    display: flex;
    flex-direction: column;
    font-size: 27px;
    font-style: normal;
    font-weight: 700;
  }

  button {
    width: 38px;
    height: 38px;
    background-color: #000000;
    color: #fff;
    text-align: center;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    border: none;
    border-radius: 50%;
    cursor: pointer;
  }
`;

export const FooterContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  color: #fff;
  font-family: Montserrat;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 15px;

  div {
    display: flex;
    justify-content: space-between;
    padding: 36px;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    padding-top: 40px;
    padding-bottom: 40px;
    width: 100%;
    color: #fff;
    background: #000;
    cursor: pointer;
  }

  @media (max-width: 450px) {
    button {
      height: 65px;
      padding: 0px;
      font-size: 20px;
    }
  }
`;
