import { cleanup, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Movie from "./Movie";

describe("Movie", () => {
  beforeEach(() => {
    cleanup();
  });

  it("Renders Movie", () => {
    render(<Movie />);
  });

  it("Renders Movie with Movie Props", () => {
    const movie = {
      name: "Spider Man",
      description: "Amigo da vizanhança",
      classification: "RESTRICTED",
      duration: 180,
    };

    const onSubmitFn = jest.fn();

    const { container, queryByText } = render(
      <Movie movie={movie} onSubmit={onSubmitFn} />
    );

    const movieName = container.querySelector("input[name='name']");
    const movieDuration = container.querySelector("input[name='duration']");
    const movieDescription = container.querySelector(
      "textarea[name='description']"
    );

    expect(movieName).toHaveValue("Spider Man");
    expect(movieDuration).toHaveValue("180");
    expect(movieDescription).toHaveValue("Amigo da vizanhança");

    const submit = queryByText("Submit");

    userEvent.click(submit);

    expect(onSubmitFn).lastCalledWith(movie);

    userEvent.clear(movieName);
    userEvent.type(movieName, "The Batman");

    expect(movieName).toHaveValue("The Batman");

    userEvent.click(submit);

    expect(onSubmitFn).lastCalledWith({ ...movie, name: "The Batman" });
  });
});
