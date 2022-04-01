import { Button, Table } from "@mantine/core";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Pencil, Trash } from "tabler-icons-react";
import { showNotification } from "@mantine/notifications";

import axios from "../../services/api";

const User = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("/user")
      .then((response) => setUsers(response.data))
      .catch((error) => console.error(error));
  }, []);

  const onCreateUser = () => {
    navigate("new");
  };

  const onRemoveUser = async (id) => {
    try {
      await axios.delete(`/user/${id}`);

      setUsers(users.filter((user) => user.id !== id));

      showNotification({
        color: "green",
        title: "Success",
        message: "User Removed with Success",
      });
    } catch (error) {
      console.error(error);

      showNotification({
        color: "red",
        title: "Error",
        message: error.response.data.message,
      });
    }
  };

  return (
    <div>
      <h1>Users ({users.length})</h1>

      <Button onClick={onCreateUser}>Create User</Button>

      <Table highlightOnHover mt={12} striped>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Role</th>
            <th>Country</th>
            <th>Email</th>
            <th>BirthDate</th>
            <th>Phone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.role}</td>
              <td>{user.country}</td>
              <td>{user.email}</td>
              <td>{user.birthDate}</td>
              <td>{user.phone}</td>
              <td>
                <Button
                  leftIcon={<Pencil />}
                  variant="white"
                  color="gray"
                  onClick={() => navigate(user.id)}
                >
                  Edit User
                </Button>

                <Button
                  color="red"
                  leftIcon={<Trash />}
                  ml={16}
                  onClick={() => onRemoveUser(user.id)}
                  variant="white"
                >
                  Remove User
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default User;
