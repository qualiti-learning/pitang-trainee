import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";

import Sessions from "./pages/Session";
import Movies from "./pages/Movie";
import Homes from "./pages/Home";
import Users from "./pages/User";
import User from "./pages/User/User";
import Tickets from "./pages/Ticket";

import Layout from "./components/Layout";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route element={<Homes />} index />
          <Route path="session" element={<Sessions />} />
          <Route path="movie" element={<Movies />} />
          <Route path="user" element={<Outlet />}>
            <Route element={<Users />} index />
            <Route element={<User />} path=":userId" />
          </Route>
          <Route path="ticket" element={<Tickets />} />
          <Route path="*" element={<h1>not found</h1>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
