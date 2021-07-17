import React from "react";
import "./inputDropdown.css";
import {
  Dropdown,
  DropdownButton,
  Form,
  FormControl,
  InputGroup,
} from "react-bootstrap";

export default function inputDropDown({ label, units, type }) {
  return (
    <div>
      <Form.Group className="mb-3" controlId="price">
        <Form.Label>{label}</Form.Label>
        <InputGroup>
          <FormControl
            type={type}
            aria-label="Text input with dropdown"
            className="input-field-with-dropdown"
          />
          <DropdownButton
            variant="outline-secondary"
            title="Dollar ($)"
            id="input-group-dropdown-4"
            align="end"
          >
            {units?.map((unit) => (
              <Dropdown.Item>{unit}</Dropdown.Item>
            ))}
          </DropdownButton>
        </InputGroup>
      </Form.Group>
    </div>
  );
}
