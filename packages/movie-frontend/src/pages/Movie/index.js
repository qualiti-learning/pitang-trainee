import { Button } from "@mantine/core";
import { useModals } from "@mantine/modals";

import ListView from "../../components/ListView";
import MovieForm from "./Movie";
import { useForm } from "@mantine/form";

const Movie = () => {
  const form = useForm({
    initialValues: {
      name: "",
      description: "",
      classification: "",
      duration: "",
    },
  });

  console.log({ form });

  const modals = useModals();

  const openContentModal = () => {
    const id = modals.openModal({
      title: "Create Movie",
      size: "xl",
      children: (
        <>
          <MovieForm form={form} />

          <Button fullWidth onClick={() => modals.closeModal(id)}>
            Submit
          </Button>
        </>
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
          key: "name",
          value: "Name",
        },
        {
          key: "description",
          value: "Description",
        },
        {
          key: "classification",
          value: "Classification",
        },
        {
          key: "duration",
          value: "Duration",
        },
      ]}
      endpoint="/movie"
      title="Movie"
      onClickNew={openContentModal}
    />
  );
};

export default Movie;
