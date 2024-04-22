// 10.Create a form with Material-UI text fields and implement form validation. Ensure that error messages are displayed when the user enters invalid data.
import React, { useState } from 'react';
import { TextField, Box, Button } from "@mui/material";


export function Q10() {
  return (
    <>
  <div>Ques10</div>
  <FormValidation />
    </>
  )
}

function FormValidation() {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);
  const handleNameChange = e => {
    setName(e.target.value);
    if (e.target.validity.valid) {
      setNameError(false);
    } else {
      setNameError(true);
    }
  };
  const handleEmailChange = e => {
    setEmail(e.target.value);
    if (e.target.validity.valid) {
      setEmailError(false);
    } else {
      setEmailError(true);
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (e.target.checkValidity()) {
      alert("Form is valid! Submitting the form...");
    } else {
      alert("Form is invalid! Please check the fields...");
    }
  };
  return (
    <Box component="form" onSubmit={handleSubmit} noValidate>
      <TextField
        required
        label="Name"
        value={name}
        onChange={handleNameChange}
        error={nameError}
        inputProps={{
          pattern: "[A-Za-z ]+",
        }}
        helperText={
          nameError ? "Please enter your name (letters and spaces only)" : ""
        }
      />

      <br />
      <br />

      <TextField
        required
        label="Email"
        value={email}
        onChange={handleEmailChange}
        error={emailError}
        helperText={emailError ? "Please enter a valid email" : ""}
        inputProps={{
          type: "email",
        }}
      />
      <br />
      <br />
      <Button variant="contained" color="primary" type="submit">
        Submit
      </Button>
    </Box>
  );
}