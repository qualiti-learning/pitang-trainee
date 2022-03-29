import { Title } from "@mantine/core";
import { Outlet } from "react-router-dom";

const UserOutlet = () => (
  <div>
    <Title>User</Title>

    <Outlet />
  </div>
);

export default UserOutlet;
