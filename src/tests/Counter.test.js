// import necessary react testing library helpers here
// import the Counter component here

import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "../components/Counter";

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);
  const counterMessage = screen.getByText(/Counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);
  const countElement = screen.getByTestId("count");
  expect(countElement).toHaveTextContent("0");
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);
  const button = screen.getByText("+");
  fireEvent.click(button);
  const countElement = screen.getByTestId("count");
  expect(countElement).toHaveTextContent("1");
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above
  render(<Counter />);
  const button = screen.getByText("-");
  fireEvent.click(button);
  const countElement = screen.getByTestId("count");
  expect(countElement).toHaveTextContent("-1");
});
