import {
  Input,
  InputWrapper,
  Autocomplete,
  Select,
  PasswordInput,
  Button,
} from "@mantine/core";
import { DatePicker } from "@mantine/dates";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import { showNotification } from "@mantine/notifications";

import axios from "../../services/api";
import useCountries from "../../hooks/useCoutries";
import AutoCompleteItem from "../../components/AutoCompleteItem";

const User = () => {
  const navigate = useNavigate();
  const { userId } = useParams();
  const [form, setForm] = useState({
    birthDate: "",
    country: "",
    email: "",
    name: "",
    password: "",
    phone: "",
    role: "",
  });

  const countries = useCountries();

  const isNewUser = userId === "new";
  const pageTitle = isNewUser ? "Create User" : "Update User";

  useEffect(() => {
    if (!isNewUser) {
      axios
        .get(`/user/${userId}`)
        .then((response) =>
          setForm({
            ...response.data,
            birthDate: new Date(response.data.birthDate),
          })
        )
        .catch((error) => {
          showNotification({
            color: "red",
            title: "Error",
            message: error.response.data.message || error.message,
          });

          navigate("/user");
        });
    }
  }, [isNewUser, userId, navigate]);

  const onChange = (event) => {
    setForm((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const onSubmit = useCallback(async () => {
    try {
      if (isNewUser) {
        await axios.post("/user", form);
      } else {
        await axios.put(`/user/${userId}`, form);
      }

      showNotification({
        color: "green",
        title: "Success",
        message: `User ${isNewUser ? "created" : "updated"} with success`,
      });

      navigate("/user");
    } catch (error) {
      showNotification({
        color: "red",
        title: "Failed",
        message: error.message,
      });
    }
  }, [form, isNewUser, navigate, userId]);

  return (
    <div>
      <h1>{pageTitle}</h1>

      <InputWrapper id="name" required label="Name" description="User Fullname">
        <Input
          id="name"
          name="name"
          onChange={onChange}
          placeholder="John Doe"
          value={form.name}
        />
      </InputWrapper>

      <InputWrapper id="email" required label="Email Address" mb={8}>
        <Input
          id="email"
          name="email"
          onChange={onChange}
          placeholder="example@mantine.com"
          value={form.email}
        />
      </InputWrapper>

      <PasswordInput
        description="Password must include at least one letter, number and special character"
        label="Password"
        name="password"
        onChange={onChange}
        placeholder="Password"
        required
        value={form.password}
      />

      <Select
        label="User Role"
        mb={8}
        onChange={(value) => onChange({ target: { name: "role", value } })}
        placeholder="Pick one"
        value={form.role}
        data={[
          { value: "ADMINISTRATOR", label: "ADMINISTRATOR" },
          { value: "USER", label: "USER" },
          { value: "REVIEWER", label: "REVIEWER" },
        ]}
      />

      <Autocomplete
        data={countries}
        filter={(value, item) =>
          item.value.toLowerCase().includes(value.toLowerCase().trim()) ||
          item.description.toLowerCase().includes(value.toLowerCase().trim())
        }
        itemComponent={AutoCompleteItem}
        label="Choose you born country"
        mb={8}
        onChange={(value) => onChange({ target: { name: "country", value } })}
        placeholder="Pick one"
        value={form.country}
      />

      <InputWrapper id="phone" required label="Phone Number" mb={8}>
        <Input
          label="Phone Number"
          id="phone"
          name="phone"
          onChange={onChange}
          placeholder="81999999999"
          value={form.phone}
        />
      </InputWrapper>

      <DatePicker
        label="Birthdate"
        onChange={(value) => onChange({ target: { name: "birthDate", value } })}
        required
        value={form.birthDate}
      />

      <Button mt={16} onClick={onSubmit}>
        {pageTitle}
      </Button>
    </div>
  );
};

export default User;
