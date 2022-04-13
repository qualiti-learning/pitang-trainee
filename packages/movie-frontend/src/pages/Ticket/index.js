import { showNotification } from "@mantine/notifications";
import { useState } from "react";

import axios from "../../services/api";
import ListView from "../../components/ListView";
import TicketModal from "./TicketModal";

var brlConverter = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
});

const Ticket = () => {
  const [forceRefetch, setForceRefetch] = useState();
  const [modal, setModal] = useState({ opened: false, data: null });

  const toggle = () => {
    setModal({ ...modal, opened: !modal.opened });
  };

  const onClickActionButton = (ticket) => {
    setModal({
      data: ticket,
      opened: !modal.opened,
    });
  };

  const onSubmit = async (form) => {
    const { id, ...ticket } = form;

    try {
      if (id) {
        await axios.put(`/ticket/${id}`, ticket);
      } else {
        await axios.post("/ticket", ticket);
      }

      showNotification({
        color: "green",
        message: `Ticket ${id ? "updated" : "created"} with success`,
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
            key: "session",
            render: (session) => session.movie.name,
            value: "Movie",
          },
          {
            key: "session",
            render: (session) => session.room,
            value: "Room",
          },
          {
            key: "price",
            render: (price) => brlConverter.format(price),
            value: "Price",
          },
          {
            key: "user",
            render: (user) => user.name,
            value: "User",
          },
          {
            key: "seat",
            render: (seat) => `${seat.line}${seat.column}`,
            value: "Seat",
          },
        ]}
        forceRefetch={forceRefetch}
        endpoint="/ticket"
        title="Ticket"
        onClickActionButton={onClickActionButton}
      />

      {modal.opened && (
        <TicketModal
          opened={modal.opened}
          ticket={modal.data}
          toggle={toggle}
          onSubmit={onSubmit}
        />
      )}
    </>
  );
};

export default Ticket;
