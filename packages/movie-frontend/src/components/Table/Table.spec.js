import { cleanup, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Table from ".";

const columns = [
  {
    key: "id",
    name: "ID",
  },
  {
    key: "name",
    name: "Name",
  },
];

const rows = [
  {
    id: "f18c9261-cc18-4d89-aefa-be1bfee1dca8",
    name: "Product One",
  },
  {
    id: "5f7baefe-4139-4bf1-b53a-a6432a4ec781",
    name: "Product Two",
  },
];

describe("Table", () => {
  beforeEach(() => {
    cleanup();
  });

  it("Render Table", () => {
    const { asFragment, container } = render(<Table />);

    expect(asFragment()).toMatchSnapshot();

    const thead = container.querySelector("thead");
    const tHeadRows = thead.querySelectorAll("tr");

    const tbody = container.querySelector("tbody");
    const tBodyRows = tbody.querySelectorAll("tr");

    expect(tHeadRows.length).toBe(1);
    expect(tBodyRows.length).toBe(0);
  });

  it("Render Table with Columns and Rows", () => {
    const { container, queryByText } = render(
      <Table columns={columns} rows={rows} />
    );

    const thead = container.querySelector("thead");
    const tHeadRows = thead.querySelectorAll("tr");

    const tbody = container.querySelector("tbody");
    const tBodyRows = tbody.querySelectorAll("tr");

    expect(tHeadRows.length).toBe(1);
    expect(tBodyRows.length).toBe(2);

    expect(queryByText("Product One")).toBeTruthy();
    expect(queryByText("Product Two")).toBeTruthy();
    expect(queryByText("Product Three")).toBeFalsy();
  });

  it("Render Table with Columns and Rows and Actions", () => {
    const editFn = jest.fn();

    const actions = [
      {
        color: "white",
        name: "Edit",
        onClick: editFn,
      },
    ];

    const { getAllByText } = render(
      <Table actions={actions} columns={columns} rows={rows} />
    );

    const [editProduct1, editProduct2] = getAllByText("Edit");

    expect(editFn).not.toHaveBeenCalled();

    userEvent.click(editProduct1);

    expect(editFn).lastCalledWith({
      id: "f18c9261-cc18-4d89-aefa-be1bfee1dca8",
      name: "Product One",
    });

    expect(editFn).toHaveBeenCalledTimes(1);

    userEvent.click(editProduct2);

    expect(editFn).lastCalledWith({
      id: "5f7baefe-4139-4bf1-b53a-a6432a4ec781",
      name: "Product Two",
    });

    expect(editFn).toHaveBeenCalledTimes(2);
  });
});
