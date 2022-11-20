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
import { useTranslation } from "react-i18next";
import { Calculate, Sd } from "@mui/icons-material";
import { TableDnD } from "../../components/dnd/table";
import useMediaQuery from '@mui/material/useMediaQuery';
import { IpositionData, IsurveyData, ISurveyProps, UiStyle } from "../../interface";
import { SurveyStep } from "./SurveyStep";
import { Phone } from "../../components/Phone/Phone";
import TopNavigationBar from "../../components/TopNavigationBar";
import { useState } from "react";

const positionDatas: IpositionData[] = [
  {
    uid: '1', name: 'searchBar', position: '1', enable: true, style: "Facebook",
    color: "#ffffff"
    // color: "#1976d2"
  },
  { uid: '2', name: 'postBar', position: '2', enable: true, style: "Facebook", color: "inherit" },
  { uid: '3', name: 'Short', position: '3', enable: true, style: "Facebook", color: "inherit" },
  { uid: '4', name: 'Content', position: '4', enable: true, style: "Facebook", color: "inherit" },
  { uid: '5', name: 'NavigationBar', position: '5', enable: true, style: "Facebook", color: "inherit" },
]

const surveyDate: IsurveyData = {
  gender: '',
  age: '',
  defaultUI: "",
  positionDatas
}

export default function Survey() {
  const [state, changeState] = useState(surveyDate);
  const changeSurveyData = (updateData: IsurveyData) => {
    changeState(state => ({
      ...state,
      ...updateData
    }))
  }
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    // boxShadow: "7px 5px rgba(0, 0, 0, 0.4)"
  }));

  return (
    <Box sx={{
      flexGrow: 1, m: '15px',
    }}>
      <Grid container rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        className='survey-container'>
        <Grid xs={12} sm={6} md={9}>
          {/* <Skeleton variant="rectangular" height='40px' /> */}
          <Paper elevation={5}
            sx={{
              textAlign: 'center',
            }}>
            {/* <Button variant="outlined" onClick={() => {
              let temp = state
              temp.defaultUI = "Facebook"
              changeSurveyData(temp)
              console.log("in")
            }}> change </Button> */}
            <MainStepper state={state} changeSurveyData={changeSurveyData}></MainStepper>
          </Paper>
        </Grid>
        <Grid xs={12} sm={6} md={3} display="flex" justifyContent="center">
          {state.defaultUI ?
            <Phone state={state} changeSurveyData={changeSurveyData} /> :
            <Skeleton variant="rounded" height='660px' width="340px" />
          }
        </Grid>
        <Grid xs={12} sm={12} md={12} display="flex" justifyContent="center">
          {JSON.stringify(state)
          }
        </Grid>
      </Grid>
    </Box>
  );
}

const MainStepper = (props: ISurveyProps) => {
  // const [sd, changeSurveyData] = useState(surveyDate);
  const { t } = useTranslation();
  // const steps = [t('p1.t'), t('p2.t'), t('p3.t'), t('p4.t')];
  const steps: string[] = [];
  for (let i = 1; i < 10; i++) {
    steps.push(t('p' + i + '.t'))
  }

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set<number>());

  const isStepOptional = (step: number) => {
    return step === -1;
  };

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };


  const handleNext = () => {
    switch (activeStep) {
      case 0:
        if (!surveyDate.gender) {

        }
        break;

      default:
        break;
    }
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

  const matches = useMediaQuery('(min-width:1200px)');


  const [value, setValue] = React.useState('female');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
    console.log(value)
  };


  const subTab = () => {
    switch (activeStep) {
      case 0: {
        return <>
          <FormControl sx={{ mt: 4, mb: 1, }}>
            <FormLabel sx={{ fontSize: '24px' }} id='gender'>{t('p1.q1')}</FormLabel>
            <RadioGroup
              sx={{ mt: 2 }}
              name="gender-button-group"
              // value={value}
              // defaultValue='male'
              onChange={(ev, val) => {
                let temp = props.state
                temp.gender = val
                props.changeSurveyData(temp)
              }}
            >
              <FormControlLabel value="male" control={<Radio />} label={t('p1.a1')} />
              <FormControlLabel value="female" control={<Radio />} label={t('p1.a2')} />
              <FormControlLabel value="other" control={<Radio />} label={t('p1.a3')} />
            </RadioGroup>
          </FormControl>
        </>
      }
      case 1: {
        return <>
          <FormControl sx={{ mt: 4, mb: 1, }}>
            <FormLabel sx={{ fontSize: '24px' }} >{t('p2.q1')}</FormLabel>
            <RadioGroup
              sx={{ mt: 2 }}
              name="age-button-group"
              // value={surveyDate.age}
              // onChange={(ev, val) => {
              //   surveyDate.age = val
              //   console.log(surveyDate)
              // }}
              onChange={(ev, val) => {
                let temp = props.state
                temp.age = val
                props.changeSurveyData(temp)
              }}
            >
              <FormControlLabel value="15" control={<Radio />} label={t('p2.a1')} />
              <FormControlLabel value="25" control={<Radio />} label={t('p2.a2')} />
              <FormControlLabel value="35" control={<Radio />} label={t('p2.a3')} />
              <FormControlLabel value="45" control={<Radio />} label={t('p2.a4')} />
              <FormControlLabel value="55" control={<Radio />} label={t('p2.a5')} />
              <FormControlLabel value="65" control={<Radio />} label={t('p2.a6')} />
              <FormControlLabel value="75" control={<Radio />} label={t('p2.a7')} />
            </RadioGroup>
          </FormControl>
        </>
      }
      case 2: {
        return <>
          <FormControl sx={{ mt: 4, mb: 1, }}>
            <FormLabel sx={{ fontSize: '24px' }} >{t('p3.q1')}</FormLabel>
            <FormLabel sx={{ fontSize: '20px' }} >{t('p3.q2')}</FormLabel>
            <RadioGroup
              sx={{ mt: 2 }}
              name="dafault-ui-button-group"
              // value={surveyDate.age}
              onChange={(ev, val) => {
                let temp = props.state
                temp.defaultUI = val
                props.changeSurveyData(temp)
              }}
            >
              <FormControlLabel value={t('p3.a1')} control={<Radio />} label={t('p3.a1')} />
              <FormControlLabel value={t('p3.a2')} control={<Radio />} label={t('p3.a2')} />
              <FormControlLabel value={t('p3.a3')} control={<Radio />} label={t('p3.a3')} />
              <FormControlLabel value={t('p3.a4')} control={<Radio />} label={t('p3.a4')} />
            </RadioGroup>
          </FormControl>
        </>
      }
      case 3: {
        return <>
          <FormControl sx={{ mt: 4, mb: 1, }}>
            <FormLabel sx={{ fontSize: '24px' }} >{t('p4.q1')}</FormLabel>
            <FormLabel sx={{ fontSize: '20px' }} >{t('p4.q2')}</FormLabel>
            <Box sx={{
              display: "flex",
              justifyContent: "center"
            }}>
              <TableDnD positionDatas={positionDatas}></TableDnD>
            </Box>
          </FormControl>
        </>
      }
      case 4: {
        console.log(positionDatas)
        return <>
          <SurveyStep stepId="5" positionData={positionDatas[0]} />
        </>
      }
      case 5: {
        return <>
          <SurveyStep stepId="6" positionData={positionDatas[1]} />
        </>
      }
      case 6: {
        return <>
          <SurveyStep stepId="7" positionData={positionDatas[2]} />
        </>
      }
      case 7: {
        return <>
          <SurveyStep stepId="8" positionData={positionDatas[3]} />
        </>
      }
      case 8: {
        return <>
          <SurveyStep stepId="9" positionData={positionDatas[4]} />
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
    <Box sx={{
      width: '100%',
      height: '650px'
    }}
      className='center-child'
    >
      {/* top stepper */}
      <Box sx={{ pt: 2, px: 2 }}>
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
                {matches ?
                  <StepLabel {...labelProps}>{label}</StepLabel>
                  : <StepLabel {...labelProps}></StepLabel>
                }
              </Step>
            );
          })}
        </Stepper></Box>
      {/* tab */}
      <Box sx={{ height: 'calc(100% - 140px)', pt: 4 }}>
        {subTab()}
      </Box>
      {/* bottom button group */}
      {activeStep === steps.length ? (
        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2, px: 2 }}>
          <Box sx={{ flex: '1 1 auto' }} />
          <Button
            variant="outlined"
            size="large"
            onClick={handleReset}>Reset</Button>
        </Box>
      ) : (
        <Box sx={{ display: 'flex', flexDirection: 'row', pt: 2, px: 2 }}>
          <Button
            // color="inherit"
            variant="outlined"
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}
            size="large"
          >
            Back
          </Button>
          <Box sx={{ flex: '1 1 auto' }} />
          {isStepOptional(activeStep) && (
            <Button
              variant="text"
              size="large" onClick={handleSkip} sx={{ mr: 1 }}>
              Skip
            </Button>
          )}
          <Button
            variant="contained"
            onClick={handleNext}
            size="large">
            {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
          </Button>
        </Box>
      )}
    </Box>
  )
}