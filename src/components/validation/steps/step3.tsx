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

const Step3 = (input: RegisterOptions) => {
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: "onChange",
  });

  const onSubmit = (data: any) => {
    console.log(data.email + " " + data.password);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        <div>Email:</div>
        <input
          {...register("email", {
            required: true,
            pattern: {
              value: /^\w+([/.-]?\w+)*@\w+([/.-]?\w+)*(\.\w{2,3})+$/,
              message: "Please, check the spelling is correct!",
            },
            minLength: {
              value: 7,
              message: "Requires at least 7 characters in the field!",
            },
          })}
        />
      </label>
      <div style={{ height: 20, color: "red" }}>
        {errors?.email && (
          <p> {errors?.email?.message || "Please, fill fields in form!"}</p>
        )}
      </div>
      <label>
        <div>Password:</div>
        <input
          type="password"
          {...register("password", {
            required: true,
            pattern: {
              value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{5,}$/,
              message:
                "Password should contain at least one digit,\n contain at least one lower and upper case!",
            },
            minLength: {
              value: 6,
              message: "Password should contain at least 6 symbols",
            },
          })}
        />
      </label>
      <div style={{ height: 25, color: "red" }}>
        {errors?.password && (
          <p> {errors?.password?.message || "Please, fill fields in form!"}</p>
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

export default Step3;
