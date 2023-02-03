import styled from "styled-components";

export const ProfileContainer = styled.div`
  width: 100%;
  max-width: 54rem;
  margin: 0 auto;
  padding: 2rem 2.5rem;
  border-radius: 10px;
  background: ${props => props.theme["base-profile"]};

  display: flex;
  margin-top: -5rem;
  gap: 2rem;

  img {
    width: 148px;
    height: 148px;
    border-radius: 8px;
  }
`;

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 8px;
  width: 100%;
`;

export const ProfileInfoHeader = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    color: ${props => props.theme["base-title"]};
    font-size: 1.5rem;
    font-weight: bold;
  }
  a {
    display: flex;
    gap: 8px;
    align-items: center;

    text-decoration: none;
    color: ${props => props.theme.blue};
    font-size: 0.75rem;
    font-weight: bold;
  }
`;

export const ProfileInfoFooter = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 24px;
  
  span {
    display: flex;
    gap: 8px;
  }
`;