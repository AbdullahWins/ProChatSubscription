import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import Login from "./Login";

// Mock the useContext and useNavigate
jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useContext: jest.fn(),
  useNavigate: jest.fn(),
}));

describe("Login Component", () => {
  it("renders the login form", () => {
    // Mock the context values
    const contextValue = {
      loginUserEmail: jest.fn(),
      loading: false,
    };
    React.useContext.mockReturnValue(contextValue);

    const { getByText, getByPlaceholderText, getByRole } = render(<Login />);

    // Assertions
    expect(getByText("Welcome back!")).toBeInTheDocument();
    expect(getByText("Login to continue")).toBeInTheDocument();
    expect(getByPlaceholderText("Email")).toBeInTheDocument();
    expect(getByPlaceholderText("Password")).toBeInTheDocument();
    expect(getByRole("button", { name: "Login" })).toBeInTheDocument();
  });

  it("handles form submission", async () => {
    const mockLoginUserEmail = jest.fn();
    const mockUseNavigate = jest.fn();
    // Mock the context values
    const contextValue = {
      loginUserEmail: mockLoginUserEmail,
      loading: false,
    };
    React.useContext.mockReturnValue(contextValue);
    React.useNavigate.mockReturnValue(mockUseNavigate);

    const { getByPlaceholderText, getByRole } = render(<Login />);

    const emailInput = getByPlaceholderText("Email");
    const passwordInput = getByPlaceholderText("Password");
    const submitButton = getByRole("button", { name: "Login" });

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "password123" } });
    fireEvent.click(submitButton);

    await waitFor(() => {
      // Assertions
      expect(mockLoginUserEmail).toHaveBeenCalledWith("test@example.com", "password123");
      expect(mockUseNavigate).toHaveBeenCalledWith("/");
    });
  });
});
