import {
  Input,
  InputWrapper,
  Autocomplete,
  Group,
  Avatar,
  Select,
  Text,
} from "@mantine/core";
import { useEffect, forwardRef, useState } from "react";

const AutoCompleteItem = forwardRef(
  ({ description, value, image, ...others }, ref) => (
    <div ref={ref} {...others}>
      <Group noWrap>
        <Avatar src={image} />

        <div>
          <Text>{value}</Text>
          <Text size="xs" color="dimmed">
            {description}
          </Text>
        </div>
      </Group>
    </div>
  )
);

const User = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((_countries) =>
        setCountries(
          _countries.map((country) => ({
            value: country.name.common,
            image: country.flags.png,
            label: country.name.common,
            description: country.name.official,
          }))
        )
      );
  }, []);

  return (
    <div>
      <h1>User</h1>

      <InputWrapper id="name" required label="Name" description="User Fullname">
        <Input id="name" placeholder="John Doe" />
      </InputWrapper>

      <InputWrapper id="email" required label="Email Address">
        <Input id="email" placeholder="example@mantine.com" />
      </InputWrapper>

      <Select
        label="User Role"
        placeholder="Pick one"
        data={[
          { value: "ADMINISTRATOR", label: "Administrator" },
          { value: "USER", label: "User" },
        ]}
      />

      <Autocomplete
        label="Choose you born country"
        placeholder="Pick one"
        itemComponent={AutoCompleteItem}
        data={countries}
        filter={(value, item) =>
          item.value.toLowerCase().includes(value.toLowerCase().trim()) ||
          item.description.toLowerCase().includes(value.toLowerCase().trim())
        }
      />
    </div>
  );
};

export default User;
