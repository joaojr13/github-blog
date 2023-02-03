import { Outlet } from "react-router-dom";
import { Header } from "../components/Header";
import { Profile } from "../components/Profile";
import { LayoutContainer } from "./styles";

export function DefaultLayout() {
  return (
    <LayoutContainer >
      <Header />
      <Profile />
      <Outlet />
    </LayoutContainer>
  )
}