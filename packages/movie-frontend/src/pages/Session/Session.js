import {
  InputWrapper,
  Select,
  NumberInput,
  Autocomplete,
  Button,
} from "@mantine/core";
import { DatePicker } from "@mantine/dates";

import { useEffect, useState } from "react";

import axios from "../../services/api";

const initialState = {
  room: "",
  price: "",
  sessionDate: new Date(),
  movieId: "",
};

const Session = ({ session = initialState, onSubmit }) => {
  const [movies, setMovies] = useState([]);
  const [form, setForm] = useState(session);

  useEffect(() => {
    axios.get("/movie").then((response) => setMovies(response.data));
  }, []);

  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;

    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  return (
    <div>
      <InputWrapper mb={8} id="name" required label="Movie">
        <Autocomplete
          value={form.movieId}
          onChange={(value) => onChange({ target: { name: "movieId", value } })}
          data={movies.map((movie) => ({ value: movie.id, label: movie.name }))}
        />
      </InputWrapper>

      <DatePicker
        value={form.sessionDate}
        label="Session Date"
        onChange={(value) =>
          onChange({ target: { name: "sessionDate", value } })
        }
      />

      <Select
        mt={8}
        mb={8}
        required
        label="Room"
        onChange={(value) => onChange({ target: { name: "room", value } })}
        value={form.room}
        placeholder="Pick one"
        data={[
          {
            value: "COMMON",
            label: "COMMON",
          },
          { value: "DLUX", label: "DLUX" },
          { value: "IMAX", label: "IMAX" },
        ]}
      />

      <NumberInput
        label="Price"
        value={form.price}
        onChange={(value) => onChange({ target: { name: "price", value } })}
      />

      <Button mt={24} fullWidth onClick={() => onSubmit(form)}>
        Submit
      </Button>
    </div>
  );
};

export default Session;
