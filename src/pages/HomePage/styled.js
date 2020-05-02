import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr) );
  grid-template-rows: repeat(auto-fit, minmax(50px, 1fr) );
  grid-gap: 24px;
  padding-right: 16px;
`;
