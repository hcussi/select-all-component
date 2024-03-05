import { fireEvent, render, screen } from "@testing-library/react";

import { CheckBoxGroup } from ".";

const label =  "Select All";
const values = ["USA", "India", "France"];

describe("Checkbox", () => {
  it("should not be selected by default", () => {
    render(<CheckBoxGroup label={label} values={values} />);
    const checkboxes = screen.getAllByRole<HTMLInputElement>("checkbox");

    checkboxes.forEach((checkbox) => expect(checkbox.checked).toBe(false));
  });

  it("should select all when clicking", () => {
    render(<CheckBoxGroup label={label} values={values} />);
    const checkbox = screen.getByTestId<HTMLInputElement>("checkbox_Select All");
    expect(checkbox).toBeInTheDocument();
    fireEvent.click(checkbox);

    let checkboxes = screen.getAllByRole<HTMLInputElement>("checkbox");

    checkboxes.forEach((checkbox) => expect(checkbox.checked).toBe(true));
  });

  it("should unselect all when clicking", () => {
    render(<CheckBoxGroup label={label} values={values} />);
    const checkbox = screen.getByTestId<HTMLInputElement>("checkbox_Select All");
    fireEvent.dblClick(checkbox);

    const checkboxes = screen.getAllByRole<HTMLInputElement>("checkbox");

    checkboxes.forEach((checkbox) => expect(checkbox.checked).toBe(false));
  });

});