import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

test("renders initial todos", () => {
  render(<TodoList />);
  expect(screen.getByText("Learn React")).toBeInTheDocument();
});

test("adds a new todo", () => {
  render(<TodoList />);
  fireEvent.change(screen.getByPlaceholderText(/add new todo/i), {
    target: { value: "New Task" },
  });
  fireEvent.click(screen.getByText(/add/i));
  expect(screen.getByText("New Task")).toBeInTheDocument();
});

test("toggles a todo", () => {
  render(<TodoList />);
  const todo = screen.getByText("Learn React");
  fireEvent.click(todo);
  expect(todo).toHaveClass("completed");
});

test("deletes a todo", () => {
  render(<TodoList />);
  fireEvent.click(screen.getAllByText(/delete/i)[0]);
  expect(screen.queryByText("Learn React")).not.toBeInTheDocument();
});
