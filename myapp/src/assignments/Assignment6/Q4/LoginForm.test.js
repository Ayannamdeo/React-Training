
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { LoginForm } from "./LoginForm";

test('Username, Password text found', () => {
    render(<LoginForm />);
    const usertext = screen.getByText("Username:");
    const passwordtext = screen.getByText("Password:");
    expect(usertext).toBeInTheDocument();
    expect(passwordtext).toBeInTheDocument();
});

test('should allow entering text into username and password field', ()=> {
    render(<LoginForm/>);
    const usernameInput = screen.getByLabelText('Username:');
    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    expect(usernameInput.value).toBe('testuser');

    const passwordInput = screen.getByLabelText('Password:');
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });
    expect(passwordInput.value).toBe('testpassword'); 
});


test('username and password should be console.logged', ()=> {
    render(<LoginForm />);
    jest.spyOn(console, "log").mockImplementation(() => {});

    const usernameInput = screen.getByLabelText("Username:");
    const passwordInput = screen.getByLabelText("Password:");
    const submitButton = screen.getByText("Submit");

    fireEvent.change(usernameInput, { target: { value: "testuser" } });
    fireEvent.change(passwordInput, { target: { value: "testpassword" } });
    fireEvent.click(submitButton);

    expect(console.log).toHaveBeenCalledWith("testuser", "testpassword");

});