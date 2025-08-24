import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  it("renders heading correctly", () => {
    render(<TodoList />);
    expect(screen.getByText("Todo List")).toBeInTheDocument();
  });

  it("adds a new todo when button is clicked", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText("Enter a task");
    const button = screen.getByText("Add");

    fireEvent.change(input, { target: { value: "Learn React" } });
    fireEvent.click(button);

    expect(screen.getByText("Learn React")).toBeInTheDocument();
  });
});
