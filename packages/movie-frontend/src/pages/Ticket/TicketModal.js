import { Button, NumberInput, Modal, Select } from "@mantine/core";

import axios from "../../services/api";
import { useEffect, useState } from "react";

const TicketModal = ({
  opened,
  toggle,
  ticket = {
    sessionId: "",
    sessionSeatsId: "",
    userId: "",
    price: 0,
    type: "",
  },
  onSubmit,
}) => {
  const [sessions, setSessions] = useState([]);
  const [users, setUsers] = useState([]);
  const [seats, setSeats] = useState([]);
  const [form, setForm] = useState(ticket);

  useEffect(() => {
    const fetchData = async () => {
      const [session, user, seat] = await Promise.all([
        axios.get("/session"),
        axios.get("/user"),
        axios.get("/seat"),
      ]);

      setSessions(session.data);
      setUsers(user.data);
      setSeats(seat.data);
    };

    fetchData();
  }, []);

  const onChange = (event) => {
    setForm((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <Modal opened={opened} onClose={toggle} size="70%" title="Ticket">
      <Select
        data={sessions.map((session) => ({
          label: `${session.movie.name} - ${session.room} - ${session.sessionDate}`,
          value: session.id,
        }))}
        label="Session"
        mb={16}
        onChange={(value) => onChange({ target: { name: "sessionId", value } })}
        value={form.sessionId}
      />

      <Select
        data={users.map((user) => ({
          label: user.name,
          value: user.id,
        }))}
        label="User"
        mb={16}
        onChange={(value) => onChange({ target: { name: "userId", value } })}
        value={form.userId}
      />

      <Select
        data={seats.map((seat) => ({
          label: `${seat.line}${seat.column}`,
          value: seat.id,
        }))}
        label="Seat"
        mb={16}
        onChange={(value) =>
          onChange({ target: { name: "sessionSeatsId", value } })
        }
        value={form.sessionSeatsId}
      />

      <NumberInput
        label="Price"
        value={form.price}
        onChange={(value) => onChange({ target: { name: "price", value } })}
        parser={(value) => value.replace(/\$\s?|(,*)/g, "")}
        formatter={(value) =>
          !Number.isNaN(parseFloat(value))
            ? `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            : "$ "
        }
      />

      <Select
        data={["FREE", "HALF_PRICE", "PROMOTION", "STANDARD"]}
        label="Ticket Type"
        mb={16}
        onChange={(value) => onChange({ target: { name: "type", value } })}
        value={form.type}
      />

      <Button mt={16} onClick={() => onSubmit(form)}>
        Submit
      </Button>
    </Modal>
  );
};

export default TicketModal;
