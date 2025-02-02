import { render, screen } from "@testing-library/react";

import TaskList from ".";

it("Render TaskList items", () => {
  const tasksMocks = ["Task 1", "Task 2", "Task 3"];

  render(<TaskList tasks={tasksMocks} />);

  expect(screen.getByText("Task 1")).toBeInTheDocument();
});
