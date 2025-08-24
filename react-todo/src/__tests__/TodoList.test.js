import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  it("renders heading and initial todos", () => {
    render(<TodoList />);
    expect(screen.getByText("Todo List")).toBeInTheDocument();
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
  });

  it("adds a new todo when button is clicked", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText("Enter a task");
    const button = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "Test Todo" } });
    fireEvent.click(button);

    expect(screen.getByText("Test Todo")).toBeInTheDocument();
  });

  it("toggles todo completion status", () => {
    render(<TodoList />);
    const todoItem = screen.getByText("Learn React");
    expect(todoItem).not.toHaveStyle("text-decoration: line-through");
    fireEvent.click(todoItem);
    expect(todoItem).toHaveStyle("text-decoration: line-through");
  });

  it("deletes a todo", () => {
    render(<TodoList />);
    const todoItem = screen.getByText("Learn React");
    const deleteBtn = screen.getAllByTestId("delete-btn")[0];
    fireEvent.click(deleteBtn);
    expect(todoItem).not.toBeInTheDocument();
  });
});