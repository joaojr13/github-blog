import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./Layouts";
import { Home } from "./pages/Home";
import { MyFavorites } from "./pages/MyFavorites";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />}/>
        <Route path="/my-favorites" element={<MyFavorites />}/>
      </Route>
    </Routes>
  )
}