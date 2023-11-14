import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: center;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(auto, 1fr); 
  grid-column-gap: 22px;
  grid-row-gap: 30px;
  margin-top: 80px;   
`;