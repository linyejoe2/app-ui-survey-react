import "./Survey.css"
import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from "@mui/material/Unstable_Grid2/Grid2";
import Card from '@mui/material/Card';
import Skeleton from "@mui/material/Skeleton";
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
// const Grid = Grid2

const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];

export default function Survey() {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    // <Box sx={{ flexGrow: 1 }}>
    <Box sx={{
      flexGrow: 1, m: '15px',
      // maxWidth: '1200px',
      // display: "flex",
      // justifyContent: "center"
    }}>
      <Grid container rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        className='survey-container'>
        <Grid xs={12} sm={6} md={9}>
          {/* <Skeleton variant="rectangular" height='40px' /> */}
          <Item>
            <MainStepper></MainStepper>
          </Item>
        </Grid>
        <Grid xs={12} sm={6} md={3} display="flex" justifyContent="center">
          <Skeleton variant="rounded" height='660px' width="340px" />
          {/* <svg className="outline" width="340" height="660" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#030a1d" d="M 44,0 C 19.71051,0 0,19.71051 0,44 v 572 c 0,24.28949 19.71051,44 44,44 h 252 c 24.28949,0 44,-19.71051 44,-44 V 44 C 340,19.71051 320.28949,0 296,0 Z m 0,10 h 252 c 18.92247,0 34,15.077533 34,34 v 572 c 0,18.92247 -15.07753,34 -34,34 H 44 C 25.077533,650 10,634.92247 10,616 V 44 C 10,25.077533 25.077533,10 44,10 Z"></path>
            <div>

            </div>
          </svg> */}
        </Grid>
      </Grid>
    </Box>
    // </Box>
  );
}

const MainStepper = (props: React.PropsWithChildren) => {

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());

  const isStepOptional = (step: number) => {
    return step === 1;
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const [value, setValue] = React.useState('female');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  const subTab = () => {
    switch (activeStep) {
      case 0: {
        return <>
          <FormControl sx={{ mt: 2, mb: 1,  }}>
            <FormLabel id="demo-controlled-radio-buttons-group">To which gender identity do you</FormLabel>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel value="female" control={<Radio />} label="Female" />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
            </RadioGroup>
          </FormControl>
        </>
      }
      case 1: {
        return <>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
        </>
      }
      case 2: {
        return <>
          <Typography sx={{ mt: 2, mb: 1 }}>Step {activeStep + 1}</Typography>
        </>
      }
      default: {
        return <> <Typography
          sx={{ mt: 2, mb: 1 }}>
          All steps completed - you&apos;re finished
        </Typography> </>
      }
    }
  }

  return (
    <Box sx={{ width: '100%' }}>
      {/* top stepper */}
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {/* tab */}
      {subTab()}
      {/* bottom button group */}
      {activeStep === steps.length ? (
        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
          <Box sx={{ flex: '1 1 auto' }} />
          <Button onClick={handleReset}>Reset</Button>
        </Box>
      ) : (
        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2 }}>
          <Button
            color="inherit"
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}
          >
            Back
          </Button>
          <Box sx={{ flex: '1 1 auto' }} />
          {isStepOptional(activeStep) && (
            <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
              Skip
            </Button>
          )}
          <Button onClick={handleNext}>
            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </Box>
      )}
    </Box>
  )
}