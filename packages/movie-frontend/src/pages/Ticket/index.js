import { useState } from "react";
import { useModals } from "@mantine/modals";
import { showNotification } from "@mantine/notifications";

import TicketForm from "./Ticket";
import ListView from "../../components/ListView";
import axios from "../../services/api";

const Ticket = () => {
  const [refetchTimestamp, setRefetchTimeStamp] = useState();
  const modals = useModals();

  const onSubmit = (modalId) => async (form) => {
    try {
      if (form.id) {
        await axios.put(`/ticket/${form.id}`, form);
      } else {
        await axios.post("/ticket", form);
      }

      showNotification({
        title: "Success",
        message: `Ticket ${form.id ? "Updated" : "Created"} with Success`,
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

  const openContentModal = (ticket) => {
    const id = modals.openModal({
      title: `${ticket?.id ? "Update" : "Create"} Ticket`,
      size: "xl",
      children: (
        <TicketForm ticket={ticket} onSubmit={(form) => onSubmit(id)(form)} />
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
          key: "session",
          render: (session) => session.movie.name,
          value: "Movie",
        },
        {
          key: "category",
          value: "Ticket Category",
        },
        {
          key: "paymentStatus",
          render: (paymentStatus) => (paymentStatus ? "Paid" : "Waiting"),
          value: "Payment Status",
        },
        {
          key: "session",
          render: (session) => session.room,
          value: "Session Room",
        },
        {
          key: "seat",
          render: (seat) => seat.name,
          value: "Seat",
        },
        {
          key: "user",
          render: (user) => user.name,
          value: "User",
        },
      ]}
      endpoint="/ticket"
      title="Ticket"
      openContentModal={openContentModal}
      refetchTimestamp={refetchTimestamp}
    />
  );
};

export default Ticket;
