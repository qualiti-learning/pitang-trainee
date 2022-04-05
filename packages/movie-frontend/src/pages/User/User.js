import {
  InputWrapper,
  Input,
  Select,
  Checkbox,
  PasswordInput,
  Button,
  Title,
} from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import axios from "../../services/api";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { showNotification } from "@mantine/notifications";

const UserForm = ({ form, setForm }) => {
  const onChange = (event) => {
    const {
      target: { name, type, checked, value },
    } = event;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  return (
    <>
      <InputWrapper
        mb={8}
        id="name"
        required
        label="Name"
        description="Your full name"
      >
        <Input id="name" name="name" onChange={onChange} value={form.name} />
      </InputWrapper>

      <InputWrapper
        mb={8}
        id="email"
        required
        label="Email"
        description="Company Email"
      >
        <Input id="email" name="email" onChange={onChange} value={form.email} />
      </InputWrapper>

      <PasswordInput
        mb={8}
        placeholder="Password"
        label="Password"
        description="Password must include at least one letter, number and special character"
        required
        onChange={onChange}
        name="password"
        value={form.password}
      />

      <Select
        mb={8}
        required
        label="User Role"
        placeholder="Pick one"
        value={form.role}
        onChange={(value) => onChange({ target: { name: "role", value } })}
        data={[
          { value: "ADMINISTRATOR", label: "Administrador" },
          { value: "USER", label: "User" },
        ]}
      />

      <DatePicker
        label="Birthdate"
        mb={8}
        onChange={(value) => onChange({ target: { name: "birthDate", value } })}
        placeholder="Select Birthdate"
        value={form.birthDate}
      />

      <Checkbox
        label="Reviewer"
        mt={8}
        name="reviewer"
        onChange={onChange}
        checked={form.reviewer}
      />
    </>
  );
};

const User = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
    birthDate: new Date(1990, 0, 1),
    reviewer: false,
  });

  const isNewUser = userId === "new";

  useEffect(() => {
    if (!isNewUser) {
      axios.get(`/user/${userId}`).then((response) =>
        setForm({
          ...response.data,
          birthDate: new Date(response.data.birthDate),
        })
      );
    }
  }, [isNewUser, userId]);

  const onSubmit = async () => {
    const user = {
      ...form,
      birthDate: form.birthDate.toISOString(),
    };

    try {
      if (isNewUser) {
        await axios.post("/user", user);
      } else {
        await axios.put(`/user/${userId}`, user);
      }

      showNotification({
        message: `User ${isNewUser ? "created" : "updated"} with success`,
        title: "Success",
      });

      navigate("/user");
    } catch (error) {
      console.log(error);
    }
  };

  const pageTitle = `${isNewUser ? "Create" : "Update"} User`;

  return (
    <div>
      <Title mb={16}>{pageTitle}</Title>

      <UserForm form={form} setForm={setForm} />

      <Button mt={16} onClick={onSubmit}>
        {pageTitle}
      </Button>
    </div>
  );
};

export default User;
