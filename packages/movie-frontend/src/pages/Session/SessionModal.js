import { Button, Checkbox, Modal, Select } from "@mantine/core";
import { DatePicker } from "@mantine/dates";

import axios from "../../services/api";
import { useEffect, useState } from "react";

const SessionModal = ({
  opened,
  toggle,
  session = {
    movieId: "",
    caption: false,
    room: "",
    sessionDate: new Date(),
  },
  onSubmit,
}) => {
  const [movies, setMovies] = useState([]);
  const [form, setForm] = useState(session);

  useEffect(() => {
    axios.get("/movie").then((response) => setMovies(response.data));
  }, []);

  const onChange = (event) => {
    setForm((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <Modal opened={opened} onClose={toggle} size="70%" title="Session">
      <Select
        data={movies.map((movie) => ({ label: movie.name, value: movie.id }))}
        label="Movie"
        mb={16}
        onChange={(value) => onChange({ target: { name: "movieId", value } })}
        value={form.movieId}
      />

      <Select
        data={["D_BOX", "D_LUX", "IMAX", "STANDARD"]}
        label="Room"
        mb={16}
        onChange={(value) => onChange({ target: { name: "room", value } })}
        value={form.room}
      />

      <Checkbox
        checked={form.caption}
        label="Caption"
        onChange={({ target: { checked } }) =>
          onChange({ target: { name: "caption", value: checked } })
        }
      />

      <DatePicker
        mt={16}
        mb={8}
        value={form.sessionDate}
        label="Session Date"
        onChange={(value) =>
          onChange({ target: { name: "sessionDate", value } })
        }
      />

      <Button mt={16} onClick={() => onSubmit(form)}>
        Submit
      </Button>
    </Modal>
  );
};

export default SessionModal;
