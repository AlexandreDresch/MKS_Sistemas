import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  margin-bottom: 80px;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(auto, 1fr); 
  grid-column-gap: 22px;
  grid-row-gap: 30px;
  margin-top: 80px;  

  @media (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 502px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
