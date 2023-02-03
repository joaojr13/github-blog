import { HeaderContainer, HeaderContent, HeaderNavbar } from "./styles";
import logo from '../../assets/logo.svg';
import { NavLink } from "react-router-dom";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logo} alt="" />
        <HeaderNavbar >
          <NavLink to="/" title="Home" >
            HOME
          </NavLink>
          <NavLink to="/my-favorites" title="Meus Favoritos">
            FAVORITOS
          </NavLink>
        </HeaderNavbar>
      </HeaderContent>
    </HeaderContainer>
  )
}