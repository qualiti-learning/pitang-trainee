import { useState } from "react";
import { useModals } from "@mantine/modals";
import { showNotification } from "@mantine/notifications";

import SessionForm from "./Session";
import ListView from "../../components/ListView";
import axios from "../../services/api";

const Session = () => {
  const [refetchTimestamp, setRefetchTimeStamp] = useState();
  const modals = useModals();

  const onSubmit = (modalId) => async (form) => {
    try {
      if (form.id) {
        delete form.SessionSeats;
        delete form.movie;
        await axios.put(`/session/${form.id}`, form);
      } else {
        await axios.post("/session", form);
      }

      showNotification({
        title: "Success",
        message: `Session ${form.id ? "Updated" : "Created"} with Success`,
        color: "green",
      });

      setRefetchTimeStamp(new Date().getTime());

      modals.closeModal(modalId);
    } catch (error) {
      showNotification({
        title: "Error",
        message: error.response.data.message,
        color: "red",
      });
    }
  };

  const openContentModal = (session) => {
    const _session = { ...session };

    if (_session.sessionDate) {
      _session.sessionDate = new Date(_session.sessionDate);
    }

    const id = modals.openModal({
      title: `${_session?.id ? "Update" : "Create"} Session`,
      size: "xl",
      children: (
        <SessionForm
          session={_session.id ? _session : undefined}
          onSubmit={(form) => onSubmit(id)(form)}
        />
      ),
    });
  };

  return (
    <ListView
      columns={[
        {
          key: "id",
          value: "ID",
        },
        {
          key: "movie",
          render: (movie) => movie.name,
          value: "Movie",
        },
        {
          key: "sessionDate",
          value: "Session Date",
        },
        {
          key: "room",
          value: "Room",
        },
        {
          key: "SessionSeats",
          render: (sessionSeats) => {
            const availableSeats = sessionSeats.filter(
              ({ state }) => state === "AVAILABLE"
            );
            return `${availableSeats.length}/${sessionSeats.length}`;
          },
          value: "Availability",
        },
        {
          key: "price",
          render: (price) =>
            new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(price),
          value: "Price",
        },
      ]}
      endpoint="/session"
      title="Session"
      openContentModal={openContentModal}
      refetchTimestamp={refetchTimestamp}
    />
  );
};

export default Session;
