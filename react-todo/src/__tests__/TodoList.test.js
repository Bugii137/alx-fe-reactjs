import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import TodoList from "../components/TodoList";

test("renders the todo input and add button", () => {
  render(<TodoList />);
  expect(screen.getByPlaceholderText(/add a todo/i)).toBeInTheDocument();
  expect(screen.getByTestId("add-btn")).toBeInTheDocument();
});

test("adds a new todo when clicking the button", () => {
  render(<TodoList />);
  const input = screen.getByTestId("todo-input");
  const button = screen.getByTestId("add-btn");

  fireEvent.change(input, { target: { value: "Learn React" } });
  fireEvent.click(button);

  expect(screen.getByText("Learn React")).toBeInTheDocument();
});

test("does not add empty todos", () => {
  render(<TodoList />);
  const button = screen.getByTestId("add-btn");

  fireEvent.click(button);

  expect(screen.queryByTestId("todo-item")).not.toBeInTheDocument();
});
