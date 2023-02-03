import styled from "styled-components";

export const HeaderContainer = styled.header`
  height: 296px;
  padding: 2.5rem 0 7.5rem;
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const HeaderNavbar = styled.nav`
  display: flex;
  align-items: center;
  gap: 10px;
  
  a {
    color: ${props => props.theme["base-title"]};
    font-size: 1.75rem;
    font-weight: bold;
    align-items: center;

    text-decoration: none;
    color: ${props => props.theme.blue};
    font-size: 0.75rem;
    font-weight: bold;
  }
`;