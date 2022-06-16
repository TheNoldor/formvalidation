import { Button } from "@mui/material";
import React from "react";
import { Message, useForm, ValidationRule } from "react-hook-form";
import { useDispatch } from "react-redux";

export type RegisterOptions = Partial<{
  input: {
    required: Message | ValidationRule<boolean>;
    min: ValidationRule<number | string>;
    max: ValidationRule<number | string>;
    maxLength: ValidationRule<number | string>;
    minLength: ValidationRule<number | string>;
    pattern: ValidationRule<RegExp>;
  };
}>;

const Step1 = (input: RegisterOptions) => {
  const dispatch = useDispatch();

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data: any) => {
    console.log(data.firstName + " " + data.lastName);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        <div>First Name:</div>
        <input
          {...register("firstName", {
            required: true,
            pattern: {
              value: /^[a-zA-Z]+$/g,
              message: "Please, use A-z symbold only!",
            },
            minLength: {
              value: 2,
              message: "Requires at least 2 characters in the field!",
            },
          })}
        />
      </label>
      <div style={{ height: 20, color: "red" }}>
        {errors?.firstName && (
          <p> {errors?.firstName?.message || "Please, fill fields in form!"}</p>
        )}
      </div>
      <label>
        <div>Last Name:</div>
        <input
          {...register("lastName", {
            required: true,
            pattern: {
              value: /^[a-zA-Z]+$/g,
              message: "Please, use A-z symbold only!",
            },
            minLength: {
              value: 2,
              message: "Requires at least 2 characters in the field",
            },
          })}
        />
      </label>
      <div style={{ height: 20, color: "red" }}>
        {errors?.lastName && (
          <p> {errors?.lastName?.message || "Please, fill fields in form!"}</p>
        )}
      </div>
      <div className="button-control">
        <Button
          variant="contained"
          sx={{
            mt: 1,
            mr: 1,
            backgroundColor: "#095b10",
            borderRadius: "15px",
            border: "solid 3px white",
          }}
          onClick={() => dispatch({ type: "BACK_STEP" })}
        >
          ◄ BACK
        </Button>
        <Button
          type="submit"
          disabled={!isValid}
          variant="contained"
          sx={{
            mt: 1,
            mr: 1,
            backgroundColor: "#52bd00",
            borderRadius: "15px",
            border: "solid 3px white",
          }}
          onClick={() => dispatch({ type: "NEXT_STEP" })}
        >
          NEXT ►
        </Button>
      </div>
    </form>
  );
};

export default Step1;
