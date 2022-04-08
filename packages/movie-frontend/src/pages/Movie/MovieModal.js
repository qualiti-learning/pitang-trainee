import {
  Modal,
  TextInput,
  Textarea,
  NumberInput,
  Button,
  Select,
  MultiSelect,
} from "@mantine/core";
import { useState } from "react";

const MovieModal = ({
  opened,
  toggle,
  movie = {
    name: "",
    description: "",
    duration: 0,
    director: "",
    parental_guidance: "",
    thumbnail: "",
    rating: 0,
    languages: [],
  },
  onSubmit,
}) => {
  const [form, setForm] = useState(movie);

  const onChange = (event) => {
    setForm((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <Modal opened={opened} onClose={toggle} size="70%" title="Movie">
      <TextInput
        label="Name"
        mb={16}
        name="name"
        value={form.name}
        onChange={onChange}
      />

      <TextInput
        label="Thumbnail"
        name="thumbnail"
        mb={16}
        value={form.thumbnail}
        onChange={onChange}
      />

      {form.thumbnail && (
        <img src={form.thumbnail} height={300} width={300} alt="Thumbnnail" />
      )}

      <Textarea
        label="Description"
        mb={16}
        value={form.description}
        name="description"
        onChange={onChange}
      />

      <NumberInput
        label="Duration"
        min={0}
        max={500}
        mb={16}
        onChange={(value) => onChange({ target: { name: "duration", value } })}
        value={form.duration}
      />

      <TextInput
        label="Director / Producer"
        mb={16}
        value={form.director}
        name="director"
        onChange={onChange}
      />

      <Select
        data={[
          { label: "General Audience", value: "GENERAL_AUDIENCE" },
          {
            label: "Parental Guidance Suggested",
            value: "PARENTAL_GUIDANCE_SUGGESTED",
          },
          {
            label: "Parental Strongly Cautioned",
            value: "PARENTAL_STRONGLY_CAUTIONED",
          },
          { label: "Restricted", value: "RESTRICTED" },
        ]}
        label="Parental Guidance"
        mb={16}
        onChange={(value) =>
          onChange({ target: { name: "parental_guidance", value } })
        }
        value={form.parental_guidance}
      />

      <MultiSelect
        data={[
          { label: "Portuguese (pt-BR)", value: "pt_BR" },
          { label: "English", value: "en_US" },
          { label: "Spanish", value: "es_ES" },
          { label: "Italian", value: "it_IT" },
          { label: "French", value: "fr_FR" },
        ]}
        label="Available Languages"
        mb={16}
        nothingFound="Nothing found"
        searchable
        onChange={(value) => onChange({ target: { name: "languages", value } })}
        value={form.languages}
      />

      <Button mt={16} onClick={() => onSubmit(form)}>
        Submit
      </Button>
    </Modal>
  );
};

export default MovieModal;
