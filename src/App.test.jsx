import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import matchers from "@testing-library/jest-dom/matchers";
import FeedbackForm from "./components/FeedbackForm";

// expect.extend(matchers)

// we won't need to import it or test or expect,
// it("should have Little Lemon Restaurant", () => {
//     render(<App />);
//     const message = screen.queryByText(/Little Lemon Restaurant/i);
//     // expect(message).toBeVisible();
//     expect(message).toBeInTheDocument();
// });

it("Feedback Form", () => {
    test("Submission is disabled if score is lower than 5 and there is no feedback", () => {
        // mock function
        // a mock function is a special function that allows you to track how a particular function is called by external code.
        const handleSubmit = jest.fn();
        render(<FeedbackForm onFormSubmit={handleSubmit} />);

        const rangeInput = screen.getByLabelText(/Score:/);
        console.log("HEHEHE");

        fireEvent.change(rangeInput, { target: { value: "4" } });

        const submitButton = screen.getByRole("button");
        fireEvent.click(submitButton);

        expect(handleSubmit).not.toHaveBeenCalled();
        expect(submitButton).toHaveAttribute("disabled");
    });
});
