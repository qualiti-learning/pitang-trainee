import { Badge, Button, Space, Table, Title } from "@mantine/core";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Pencil, Trash } from "tabler-icons-react";
import { showNotification } from "@mantine/notifications";

import axios from "../../services/api";

const User = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("/user").then((response) => setUsers(response.data));
  }, []);

  const onRemoveUser = async (id) => {
    try {
      await axios.delete(`/user/${id}`);

      showNotification({
        message: "User Removed with Success",
        title: "Success",
      });

      setUsers(users.filter((user) => user.id !== id));
    } catch (error) {
      showNotification({
        color: "red",
        message: error.response.data.message,
        title: "Error",
      });
    }
  };

  return (
    <>
      <Title>Users ({users.length})</Title>

      <Button mt={12} onClick={() => navigate("new")}>
        Create User
      </Button>

      <Space h="xl" />

      <Table highlightOnHover>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>BirthDate</th>
            <th>Reviewer</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>{user.birthDate}</td>
              <td>
                <Badge
                  variant="gradient"
                  gradient={{ from: "indigo", to: "cyan" }}
                >
                  {user.reviewer ? "Yes" : "No"}
                </Badge>
              </td>
              <td>
                <Button
                  leftIcon={<Pencil />}
                  onClick={() => navigate(user.id)}
                  variant="white"
                >
                  Edit User
                </Button>{" "}
                <Button
                  leftIcon={<Trash />}
                  onClick={() => onRemoveUser(user.id)}
                  ml={3}
                  variant="white"
                  color="red"
                >
                  Remove User
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default User;
