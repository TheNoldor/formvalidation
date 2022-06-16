import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Step0 from "./steps/step0";
import Step1 from "./steps/step1";
import Step2 from "./steps/step2";
import Step3 from "./steps/step3";
import { useDispatch, useSelector } from "react-redux";

import "./index.scss";
import { Button } from "@mui/material";

const steps = [
  {
    label: "Welcome!",
    description: `Finish all steps to sign in!`,
    function: <Step0 />,
  },
  {
    label: "What is your name?",
    description: `      `,
    function: <Step1 />,
  },
  {
    label: "Where are you from?",
    description: `      `,
    function: <Step2 />,
  },
  {
    label: "Email and password",
    description: `      `,
    function: <Step3 />,
  },
];

interface RootState {
  activeStep: number;
}

export const StepStat = () => {
  let aStep = useSelector((state: RootState) => state.activeStep);
  const dispatch = useDispatch();
  return (
    <div className="border-stepper">
      <div className="stepper">
        <Box
          sx={{
            marginTop: -2,
            width: 400,
            minHeight: 450,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Stepper activeStep={aStep} orientation="vertical">
            {steps.map((step, aStep) => (
              <Step key={step.label}>
                <StepLabel
                  optional={
                    aStep === 3 ? (
                      <Typography variant="caption">Last step</Typography>
                    ) : null
                  }
                >
                  <h3>{step.label}</h3>
                </StepLabel>
                <StepContent>
                  <Typography sx={{ fontSize: "14px" }}>
                    {step.description}
                  </Typography>
                  <div className="Step">{step.function} </div>
                </StepContent>
              </Step>
            ))}
          </Stepper>
          {aStep === steps.length && (
            <Paper
              square
              elevation={0}
              sx={{
                p: 3,
                backgroundColor: "#be97b9",
                borderRadius: "15px",
                border: "solid 3px white",
              }}
            >
              <Typography>
                All steps completed - you&apos;re finished
              </Typography>
              <Button
                type="submit"
                variant="contained"
                sx={{
                  mt: 1,
                  mr: 1,
                  backgroundColor: "red",
                  borderRadius: "15px",
                  border: "solid 3px white",
                }}
                onClick={() => dispatch({ type: "RESET_STEP" })}
              >
                FINISH
              </Button>
            </Paper>
          )}
        </Box>
      </div>
    </div>
  );
};

export default StepStat;
