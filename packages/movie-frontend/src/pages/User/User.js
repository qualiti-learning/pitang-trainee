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
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { showNotification } from "@mantine/notifications";

const User = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
    birthDate: new Date(1990, 0, 1),
    reviewer: false,
  });

  const onChange = (event) => {
    const {
      target: { name, type, checked, value },
    } = event;

    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const onSubmit = async () => {
    const user = {
      ...form,
      birthDate: form.birthDate.toISOString(),
    };

    try {
      await axios.post("/user", user);

      showNotification({
        message: "User created with success",
        title: "Success",
      });

      navigate("/user");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Title mb={16}>Create User</Title>

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
        value={form.reviewer}
      />

      <Button mt={16} onClick={onSubmit}>
        Create User
      </Button>
    </div>
  );
};

export default User;
