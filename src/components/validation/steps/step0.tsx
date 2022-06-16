import { Button } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

const Step0 = () => {
  const dispatch = useDispatch();
  const { handleSubmit } = useForm();
  const onSubmit = () => {
    console.log("Yes");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Button
        type="submit"
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
    </form>
  );
};

export default Step0;
