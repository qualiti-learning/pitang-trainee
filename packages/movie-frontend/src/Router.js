import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Session from "./pages/Session";
import Users from "./pages/User";
import Ticket from "./pages/Ticket";
import User from "./pages/User/User";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route element={<Home />} index />
          <Route path="/movie" element={<Movie />} />
          <Route path="/session" element={<Session />} />
          <Route path="/ticket" element={<Ticket />} />
          <Route path="/user" element={<Outlet />}>
            <Route element={<Users />} index />
            <Route element={<User />} path=":userId" />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
