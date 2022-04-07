import {
  InputWrapper,
  Input,
  Textarea,
  Select,
  NumberInput,
  Button,
} from "@mantine/core";

import { useState } from "react";

const initialState = {
  name: "",
  description: "",
  classification: "",
  duration: 0,
};

const Movie = ({ movie = initialState, onSubmit }) => {
  const [form, setForm] = useState(movie);

  const onChange = (event) => {
    const {
      target: { name, type, checked, value },
    } = event;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div>
      <InputWrapper mb={8} id="name" required label="Movie Name">
        <Input required name="name" value={form.name} onChange={onChange} />
      </InputWrapper>

      <InputWrapper mb={12} id="description" required label="Description">
        <Textarea
          id="description"
          name="description"
          value={form.description}
          onChange={onChange}
        />

        <Select
          mt={8}
          mb={8}
          required
          label="Classificationn"
          onChange={(value) =>
            onChange({ target: { name: "classification", value } })
          }
          value={form.classification}
          placeholder="Pick one"
          data={[
            {
              value: "PARENT_GUIDANCE_SUGGESTED",
              label: "PARENT_GUIDANCE_SUGGESTED",
            },
            { value: "RESTRICTED", label: "RESTRICTED" },
          ]}
        />

        <NumberInput
          label="Duration"
          id="duration"
          name="duration"
          value={form.duration}
          onChange={(value) =>
            onChange({ target: { name: "duration", value } })
          }
        />
      </InputWrapper>

      <Button fullWidth onClick={() => onSubmit(form)}>
        Submit
      </Button>
    </div>
  );
};

export default Movie;
