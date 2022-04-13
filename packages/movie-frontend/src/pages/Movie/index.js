import { showNotification } from "@mantine/notifications";
import { useState } from "react";

import axios from "../../services/api";
import ListView from "../../components/ListView";
import MovieModal from "./MovieModal";

const Movie = () => {
  const [forceRefetch, setForceRefetch] = useState();
  const [modal, setModal] = useState({ opened: false, data: null });

  const toggle = () => {
    setModal({ ...modal, opened: !modal.opened });
  };

  const onClickActionButton = (movie) => {
    setModal({ data: movie, opened: !modal.opened });
  };

  const onSubmit = async (form) => {
    const { id, ...movie } = form;

    try {
      if (id) {
        await axios.put(`/movie/${id}`, movie);
      } else {
        await axios.post("/movie", movie);
      }

      showNotification({
        color: "green",
        message: `Movie ${id ? "updated" : "created"} with success`,
        title: "Success",
      });

      setForceRefetch(new Date().getTime());

      toggle();
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
      <ListView
        columns={[
          {
            key: "thumbnail",
            render: (thumbnail) => (
              <img width={40} height={40} src={thumbnail} alt="thumbnail" />
            ),
            value: "#",
          },
          { key: "id", value: "ID" },
          { key: "name", value: "Movie" },
          {
            key: "description",
            render: (description) => `${description.substr(0, 180)}...`,
            value: "Description",
          },
          { key: "duration", value: "Duration" },
          { key: "director", value: "Director" },
          { key: "parental_guidance", value: "Parental Guidance" },
          { key: "rating", value: "Rating" },
          {
            key: "languages",
            render: (languages) => languages.join(", "),
            value: "Languages",
          },
        ]}
        forceRefetch={forceRefetch}
        endpoint="/movie"
        title="Movie"
        onClickActionButton={onClickActionButton}
      />

      {modal.opened && (
        <MovieModal
          opened={modal.opened}
          movie={modal.data}
          toggle={toggle}
          onSubmit={onSubmit}
        />
      )}
    </>
  );
};

export default Movie;
