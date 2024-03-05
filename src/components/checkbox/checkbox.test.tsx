import { fireEvent, render, screen } from "@testing-library/react";

import { CheckBox } from ".";
import { CheckBoxModel } from "../checkbox";

const checkboxModel: CheckBoxModel = {
  label: "USA",
  selected: false,
}

describe("Checkbox", () => {
  it("should not be selected by default", () => {
    render(<CheckBox model={checkboxModel} onChange={jest.fn()} />);
    const checkbox = screen.getByTestId<HTMLInputElement>("checkbox_USA");
    expect(checkbox).toBeInTheDocument();
    expect(checkbox.checked).toBe(false);
  });

  it("should be selected by default", () => {

    render(<CheckBox model={{...checkboxModel, selected: true}} onChange={jest.fn()} />);
    const checkbox = screen.getByTestId<HTMLInputElement>("checkbox_USA");
    expect(checkbox).toBeInTheDocument();
    expect(checkbox.checked).toBe(true);
  });

  it("should change check on click", () => {
    const onChangeMock = jest.fn();
    render(<CheckBox model={checkboxModel} onChange={onChangeMock} />);
    const checkbox = screen.getByTestId<HTMLInputElement>("checkbox_USA");
    expect(checkbox).toBeInTheDocument();
    expect(checkbox.checked).toBe(false);
    fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(true);
    expect(onChangeMock).toBeCalledWith(true, {"label": "USA", "selected": false});
  });
});