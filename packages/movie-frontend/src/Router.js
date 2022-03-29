import { BrowserRouter, Route, Routes } from "react-router-dom";

import Layout from "./components/Layout";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Session from "./pages/Session";
import Users from "./pages/User";
import User from "./pages/User/User";
import UserOutlet from "./pages/User/UserOutlet";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route element={<Home />} index />
          <Route path="/movie" element={<Movie />} />
          <Route path="/session" element={<Session />} />
          <Route path="/user" element={<UserOutlet />}>
            <Route element={<Users />} index />

            <Route element={<User />} path=":userId" />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
