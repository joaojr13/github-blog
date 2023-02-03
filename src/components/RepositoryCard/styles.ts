import styled from "styled-components";

export const RepositoriesCard = styled.div`
display: flex;
flex-direction: column;
background: ${props => props.theme["base-post"]};
width: 416px;
height: 260px;
border-radius: 10px;
padding: 2rem;
gap: 1.25rem;

p {
  text-overflow: ellipsis;
  overflow: hidden;
  word-break: break-all;
}

`;

export const RepositoriesCardHeader = styled.div`
display: flex;
align-items: center;
justify-content: space-between;

span {
  font-size: 1.75rem;
  font-weight: bold;
  color: ${props => props.theme["base-title"]};
}

button {
  background: transparent;
  border: 0;
  /* color: ${props => props.theme["base-title"]}; */

  &:hover {
    svg {
      color: ${props => props.theme["base-title"]};
      transition: background-color 0.2s;
    }
  }
}
`;