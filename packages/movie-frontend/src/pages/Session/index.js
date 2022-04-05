import ListView from "../../components/ListView";

const Session = () => (
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
  />
);

export default Session;
