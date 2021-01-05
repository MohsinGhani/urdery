import React from "react";
import { Col, Form } from "react-bootstrap";

const InputField = ({
  Label,
  type,
  placeholder,
  customClass,
  textArea,
  rowNumber,
}) => {
  return (
    <Form.Group
      as={Col}
      controlId="formHorizontalEmail"
      className={`${customClass} input-field-container`}
    >
      <Form.Label className="input-label">{Label}</Form.Label>

      <Form.Control
        type={type}
        placeholder={placeholder}
        className="input-field"
        as={textArea}
        rows={rowNumber}
      />
    </Form.Group>
  );
};

export default InputField;
