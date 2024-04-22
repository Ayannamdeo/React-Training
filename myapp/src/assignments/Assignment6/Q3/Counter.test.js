import { Counter } from "./Counter";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

test("Counter Text found", () => {
  render(<Counter />);
  const countertext = screen.getByText("Counter");
  expect(countertext).toBeInTheDocument();
});

test("Increment Text found", () => {
  render(<Counter />);
  const countertext = screen.getByText("Increment");
  expect(countertext).toBeInTheDocument();
});

test("Increment event working properly", () => {
  render(<Counter />);
  const incrementbutton = screen.getByText("Increment");
  const counterVal = screen.getByText("Counter is : 0")
  expect(counterVal).toBeInTheDocument();
  fireEvent.click(incrementbutton);
  const updatedVal = screen.getByText("Counter is : 1");
  expect(updatedVal).toBeInTheDocument();
});

test("Decrement Text Found", ()=>{
    render(<Counter/>);
    const countertext = screen.getByText("Decrement");
    expect(countertext).toBeInTheDocument();
});

test("Decrement event working properly", ()=>{
    render(<Counter />);
    const decrementbutton = screen.getByText("Decrement");
    const counterVal = screen.getByText("Counter is : 0");
    expect(counterVal).toBeInTheDocument();
    fireEvent.click(decrementbutton);
    fireEvent.click(decrementbutton);
    const updatedVal = screen.getByText("Counter is : -2");
    expect(updatedVal).toBeInTheDocument();
});
