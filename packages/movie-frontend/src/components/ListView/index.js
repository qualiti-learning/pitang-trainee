import { Button, Text, Title, Space } from "@mantine/core";
import { Pencil, Trash } from "tabler-icons-react";
import { showNotification } from "@mantine/notifications";
import { useCallback, useEffect, useState } from "react";
import { useModals } from "@mantine/modals";
import { useNavigate } from "react-router-dom";

import Table from "../Table";
import axios from "../../services/api";

const ListView = ({
  columns,
  endpoint,
  title,
  refetchTimestamp,
  openContentModal,
}) => {
  const modals = useModals();
  const [rows, setRows] = useState([]);
  const navigate = useNavigate();

  const titleLowerCase = title.toLowerCase();

  const onRemove = async ({ id }) => {
    const onRemoveAction = async () => {
      try {
        await axios.delete(`${endpoint}/${id}`);

        showNotification({
          message: `${title} Removed with Success`,
          title: "Success",
        });

        setRows(rows.filter((row) => row.id !== id));
      } catch (error) {
        showNotification({
          color: "red",
          message: error.response.data.message,
          title: "Error",
        });
      }
    };

    modals.openConfirmModal({
      title: `Delete your ${titleLowerCase}`,
      centered: true,
      children: (
        <Text size="sm">
          Are you sure you want to delete your {titleLowerCase}? This action is
          destructive and you will have to contact support to restore your data.
        </Text>
      ),
      labels: {
        confirm: `Delete ${titleLowerCase}`,
        cancel: "No don't delete it",
      },
      confirmProps: { color: "red" },
      onConfirm: onRemoveAction,
    });
  };

  const fetchData = useCallback(() => {
    axios.get(endpoint).then((response) => setRows(response.data));
  }, [endpoint]);

  useEffect(() => {
    fetchData();
  }, [fetchData, endpoint, refetchTimestamp]);

  const isContentModalFunction = typeof openContentModal === "function";

  return (
    <>
      <Title>{`${title} (${rows.length})`}</Title>

      <Button
        mt={12}
        onClick={() => {
          if (isContentModalFunction) {
            return openContentModal();
          }

          navigate("new");
        }}
      >
        Create {title}
      </Button>

      <Space h="xl" />

      <Table
        actions={[
          {
            color: "white",
            icon: <Pencil />,
            name: "Edit",
            onClick: (data) => {
              if (isContentModalFunction) {
                return openContentModal(data);
              }

              navigate(`${data.id}`);
            },
          },
          {
            color: "red",
            icon: <Trash />,
            name: "Remove",
            onClick: onRemove,
          },
        ]}
        columns={columns}
        rows={rows}
      />
    </>
  );
};

export default ListView;
