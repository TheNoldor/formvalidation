import { Button } from "@mui/material";
import React, { useEffect, useState } from "react";

const useValidation = (value: string, validations: any) => {
  const [isEmpty, setEmpty] = useState(true);
  const [minLenghtError, setMinLenghtError] = useState(false);
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);

  useEffect(() => {
    for (const validation in validations) {
      switch (validation) {
        case "minLenght":
          value.length < validations[validation]
            ? setMinLenghtError(true)
            : setMinLenghtError(false);
          break;
        case "isEmpty":
          value ? setEmpty(false) : setEmpty(true);
          break;
        case "isFirstName":
          const check = /^[a-zA-Z]+$/g;
          check.test(String(value).toLowerCase())
            ? setFirstNameError(false)
            : setFirstNameError(true);
          break;
        case "isLastName":
          const check1 = /^[a-zA-Z]+$/g;
          check1.test(String(value).toLowerCase())
            ? setLastNameError(false)
            : setLastNameError(true);
          break;
      }
    }
  }, [validations, value]);
  return { isEmpty, minLenghtError, firstNameError, lastNameError };
};

const useInput = (initialValue: string, validations: any) => {
  const [value, setValue] = useState(initialValue);
  const [isDirty, setDirty] = useState(false);
  const valid = useValidation(value, validations);

  const onChange = (e: any) => {
    setValue(e.target.value);
  };

  const onBlur = (e: any) => {
    setDirty(true);
  };

  return { value, onChange, onBlur, isDirty, ...valid };
};

const Step1 = () => {
  const firstName = useInput("", {
    isEmpty: true,
    minLenght: 2,
    isFirstName: false,
  });
  const lastName = useInput("", {
    isEmpty: true,
    minLenght: 2,
    isLastName: false,
  });

  const [formValid, setFormValid] = useState(false);

  return (
    <div className="stepContainer">
      <h2 className="App-header">Registrarion</h2>
      <form>
        {firstName.isDirty && firstName.isEmpty && (
          <div style={{ color: "red", fontSize: "12px" }}>
            First name can't be empty!{" "}
          </div>
        )}
        {firstName.isDirty && firstName.minLenghtError && (
          <div style={{ color: "red", fontSize: "12px" }}>
            First name can't be smaller than 2 symbols!
          </div>
        )}
        {firstName.isDirty && firstName.firstNameError && (
          <div style={{ color: "red", fontSize: "12px" }}>
            Use only A-z symbols!
          </div>
        )}
        <input
          onBlur={(e) => firstName.onBlur(e)}
          name="firstName"
          type="text"
          placeholder="First name"
          value={firstName.value}
          onChange={(e) => firstName.onChange(e)}
        />

        {lastName.isDirty && lastName.isEmpty && (
          <div style={{ color: "red", fontSize: "12px" }}>
            Last name can't be empty!
          </div>
        )}
        {lastName.isDirty && lastName.minLenghtError && (
          <div style={{ color: "red", fontSize: "12px" }}>
            last name can't be smaller than 2 symbols!
          </div>
        )}
        {lastName.isDirty && lastName.lastNameError && (
          <div style={{ color: "red", fontSize: "12px" }}>
            Use only A-z symbols!
          </div>
        )}
        <input
          onBlur={(e) => lastName.onBlur(e)}
          name="lastName"
          type="text"
          placeholder="Last name..."
          value={lastName.value}
          onChange={(e) => lastName.onChange(e)}
        />
        <Button
          variant="contained"
          //onClick={() => handleNext()}
          sx={{ mt: 1, mr: 1 }}
        >
          Continue
        </Button>
      </form>
    </div>
  );
};

export default Step1;
