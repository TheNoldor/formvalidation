import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import React from "react";
import { Message, useForm, ValidationRule } from "react-hook-form";
import { useDispatch } from "react-redux";

import { CitiesData, IData, json } from "../../../store/data";

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

const Step2 = (input: RegisterOptions) => {
  const data: any = json;
  const dispatch = useDispatch();
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
  } = useForm({
    mode: "all",
  });

  const onSubmit = (data: any) => {
    console.log(data.country + " " + data.city + " " + data.adress);
  };
  const [country, setCountry] = React.useState("");
  const [city, setCity] = React.useState("");

  const handleChangeCountry = (event: SelectChangeEvent) => {
    setCountry(event.target.value as string);
  };
  const handleChangeCity = (event: SelectChangeEvent) => {
    setCity(event.target.value as string);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label>
        <div>Country:</div>
        <Box sx={{ minWidth: 120, borderRadius: "15", border: "none" }}>
          <FormControl
            fullWidth
            sx={{
              backgroundColor: "white",
              borderRadius: "15px",
              border: "solid 2px white",
            }}
          >
            <InputLabel
              id="demo-simple-select-label"
              sx={{
                color: "#784583",
                marginTop: "2px",
                fontFamily: "monospace",
              }}
            >
              Select country
            </InputLabel>
            <Select
              {...register("country", {
                required: true,
              })}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={country}
              label="Country"
              onChange={handleChangeCountry}
              sx={{
                border: "solid 2px white",
                borderRadius: "15px",
                color: "black",
                fontStyle: "italic",
                marginTop: "3px",
              }}
            >
              {!country && <MenuItem />}
              {data.map((c: any, i: any) => (
                <MenuItem value={c.value} key={i}>
                  {c.country}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </label>
      <div style={{ height: 20, color: "red" }}>
        {errors?.country && (
          <p> {errors?.country?.message || "Please, fill fields in form"}</p>
        )}
      </div>
      <label>
        <div>City:</div>
        <Box sx={{ minWidth: 120, borderRadius: "15", border: "none" }}>
          <FormControl
            fullWidth
            sx={{
              backgroundColor: "white",
              borderRadius: "15px",
              border: "solid 2px white",
            }}
          >
            <InputLabel
              id="demo-simple-select-label"
              sx={{
                color: "#784583",
                marginTop: "2px",
                fontFamily: "monospace",
              }}
            >
              Select city:
            </InputLabel>
            <Select
              {...register("city", {
                required: true,
              })}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={city}
              label="City"
              onChange={handleChangeCity}
              sx={{
                border: "solid 2px white",
                borderRadius: "15px",
                color: "black",
                fontStyle: "italic",
                marginTop: "3px",
              }}
            >
              {!city && <MenuItem />}
              {Object.values(data).find((c: any) => c.value === country) &&
                data
                  .find((c: IData) => c.value === country)
                  .cities?.map((c: CitiesData, i: any) => (
                    <MenuItem value={c.value} key={i}>
                      {c.city}
                    </MenuItem>
                  ))}
            </Select>
          </FormControl>
        </Box>
      </label>
      <label style={{ marginTop: -1 }}>
        <div>Adress:</div>
        <input
          {...register("adress", {
            required: true,
            pattern: {
              value: /^[A-Za-z0-9'/./-/s/,]/g,
              message: "Unccorrect info!",
            },
            minLength: {
              value: 3,
              message: "Requires at least 3 characters in the field!",
            },
          })}
          style={{ minWidth: 330, minHeight: 30 }}
        />
      </label>
      <div style={{ height: 20, color: "red" }}>
        {errors?.adress && (
          <p> {errors?.adress?.message || "Please, fill fields in form!"}</p>
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

export default Step2;
