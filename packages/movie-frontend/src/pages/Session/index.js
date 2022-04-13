import { showNotification } from "@mantine/notifications";
import { useState } from "react";

import axios from "../../services/api";
import ListView from "../../components/ListView";
import SessionModal from "./SessionModal";

const Session = () => {
  const [forceRefetch, setForceRefetch] = useState();
  const [modal, setModal] = useState({ opened: false, data: null });

  const toggle = () => {
    setModal({ ...modal, opened: !modal.opened });
  };

  const onClickActionButton = (session) => {
    setModal({
      data: session
        ? { ...session, sessionDate: new Date(session.sessionDate) }
        : undefined,
      opened: !modal.opened,
    });
  };

  const onSubmit = async (form) => {
    const { id, movieId, caption, sessionDate, room } = form;

    const session = {
      movieId,
      caption,
      sessionDate,
      room,
    };

    try {
      if (id) {
        await axios.put(`/session/${id}`, session);
      } else {
        await axios.post("/session", session);
      }

      showNotification({
        color: "green",
        message: `Session ${id ? "updated" : "created"} with success`,
        title: "Success",
      });

      setForceRefetch(new Date().getTime());

      toggle();
    } catch (error) {
      showNotification({
        color: "red",
        message: error.response?.data?.message,
        title: "Error",
      });
    }
  };

  return (
    <>
      <ListView
        columns={[
          { key: "id", value: "ID" },
          {
            key: "movie",
            render: ({ name }) => <span>{name}</span>,
            value: "Movie",
          },
          { key: "room", value: "Room" },
          {
            key: "sessionDate",
            value: "Session Date",
          },
          {
            key: "caption",
            render: (caption) => (caption ? "Yes" : "No"),
            value: "Caption",
          },
          {
            key: "movie",
            render: ({ duration }) => duration,
            value: "Duration",
          },
          {
            key: "SessionSeats",
            render: (SessionSeats = []) => {
              const availableSeats = SessionSeats.filter(
                ({ status }) => status === "AVAILABLE"
              );

              return `${availableSeats.length}/${SessionSeats.length}`;
            },
            value: "Available Tickets",
          },
        ]}
        forceRefetch={forceRefetch}
        endpoint="/session"
        title="Session"
        onClickActionButton={onClickActionButton}
      />

      {modal.opened && (
        <SessionModal
          opened={modal.opened}
          session={modal.data}
          toggle={toggle}
          onSubmit={onSubmit}
        />
      )}
    </>
  );
};

export default Session;
