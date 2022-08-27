import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import "./stepper.css";

export default function VerticalLinearStepper({
  steps,
  activeStep,
  handleBack,
  handleNext,
}) {
  return (
    <Box className="stepper">
      <div className="column steps">
        <Stepper activeStep={activeStep} orientation="vertical">
          {steps.map((label) => {
            return (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
      </div>
      <Box className="controls">
        <Button
          variant="contained"
          disabled={activeStep === 0}
          onClick={handleBack}
        >
          Back
        </Button>
        <Button variant="contained" onClick={handleNext}>
          {" "}
          {activeStep === steps.length - 1 ? "Finish" : "Next"}
        </Button>
      </Box>
    </Box>
  );
}
