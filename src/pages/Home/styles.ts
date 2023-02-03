import styled from "styled-components";

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 100%;
  max-width: 54rem;
  margin-top: 4.5rem;
`;

export const InfoRepositoriesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.75rem;
`;

export const RepositoriesContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  margin-top: 3rem;
  margin-bottom: 10rem;
`;