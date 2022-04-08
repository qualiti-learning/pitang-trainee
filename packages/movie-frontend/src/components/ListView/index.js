import { useEffect, useState } from "react";
import { showNotification } from "@mantine/notifications";
import { Pencil, Trash } from "tabler-icons-react";
import { useModals } from "@mantine/modals";
import { Button, Text } from "@mantine/core";

import axios from "../../services/api";
import Table from "../Table";

const ListView = ({
  columns,
  endpoint,
  title,
  forceRefetch,
  onClickActionButton = () => {},
}) => {
  const [rows, setRows] = useState([]);
  const modals = useModals();

  useEffect(() => {
    axios
      .get(endpoint)
      .then((response) => setRows(response.data))
      .catch(console.error);
  }, [endpoint, forceRefetch]);

  const onDelete = (row) => {
    const onConfirmDeletion = async () => {
      try {
        await axios.delete(`${endpoint}/${row.id}`);

        setRows((prevRows) => prevRows.filter(({ id }) => row.id !== id));

        showNotification({
          color: "green",
          title: "Deleted",
          message: `${title} successfully removed`,
        });
      } catch (error) {
        showNotification({
          color: "red",
          title: "Error",
          message: `Error delete ${title}`,
        });
      }
    };

    modals.openConfirmModal({
      title: "Delete",
      centered: true,
      children: (
        <Text size="sm">
          Are you sure you want to delete your {title}? This action is
          destructive and you cannot restore your data.
        </Text>
      ),
      labels: { confirm: `Delete ${title}`, cancel: "No don't delete it" },
      confirmProps: { color: "red" },
      closeOnClickOutside: false,
      onCancel: () => alert("Cancel"),
      onConfirm: onConfirmDeletion,
    });
  };

  const actions = [
    {
      leftIcon: <Pencil />,
      onClick: (item) => onClickActionButton(item),
    },
    {
      mt: 8,
      color: "red",
      leftIcon: <Trash />,
      onClick: onDelete,
    },
  ];

  return (
    <>
      <h1>{`${title} (${rows.length})`}</h1>

      <Button mb={16} onClick={() => onClickActionButton()}>
        Add {title}
      </Button>

      <Table actions={actions} columns={columns} rows={rows} />
    </>
  );
};

export default ListView;
