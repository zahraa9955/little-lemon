import {
	render,
	screen,
	fireEvent,
	waitFor,
	userEvent,
} from "@testing-library/react";
import App from "./App";
import BookingForm from "./components/BookingForm";
import Reservation from "./pages/Reservation";
import { BrowserRouter, Routes, Route } from "react-router-dom";

describe("Reservation", () => {
	it("should call updateTimes when the button is clicked", () => {
		const updateTimes = jest.fn();
		render(
			<BookingForm availableTimes={["11:00"]} updateTimes={updateTimes} />
		);

		const dateInput = screen.getByTestId("date");
		fireEvent.change(dateInput, { target: { value: "2023-06-23" } });

		expect(updateTimes).toHaveBeenCalled();
	});

	it("should call Validation when the Email field input is invalid", async () => {
		const updateTimes = jest.fn();
		render(
			<BookingForm availableTimes={["11:00"]} updateTimes={updateTimes} />
		);

		const Email = screen.getByTestId("email");
		fireEvent.change(Email, { target: { value: "invalid email value" } });

		const submitButton = screen.getByText("Submit & Pay");
		fireEvent.click(submitButton);

		await waitFor(() => {
			const expectedText = screen.getByText("Invalid email"); // Replace 'Success message' with the expected text
			expect(expectedText).toBeInTheDocument();
		});
	});
});
