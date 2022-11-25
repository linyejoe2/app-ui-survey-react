import './Survey.css'
import * as React from 'react'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Stepper from '@mui/material/Stepper'
import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Grid from '@mui/material/Unstable_Grid2/Grid2'
import Skeleton from '@mui/material/Skeleton'
import { FormControl, FormControlLabel, FormLabel, MobileStepper, Radio, RadioGroup } from '@mui/material'
import { useTranslation } from 'react-i18next'
import { TableDnD } from '../../components/dnd/table'
import useMediaQuery from '@mui/material/useMediaQuery'
import { ISurveyData, ISurveyProps, TSocialMedia } from '../../interface'
import { SurveyStep } from './SurveyStep'
import { Phone } from '../../components/Phone/Phone'
import { useState } from 'react'
import { DcPositionDatas, FbPositionDatas, FbUIStyle, IgPositionDatas, IgUIStyle, YTPositionDatas, YTUIStyle } from '../../const'
import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material'

const surveyDate: ISurveyData = {
  user: '',
  gender: '',
  age: '',
  defaultUI: '',
  themeStyle: '',
  themeMode: 'light',
  UIStyle: undefined,
  positionDatas: undefined
}

export default function Survey() {
  React.useEffect(() => {
    window.onbeforeunload = function (event) {
      return confirm('Confirm refresh')
    }
  })

  const [state, changeState] = useState(surveyDate)
  // const onMobile = useMediaQuery('(min-width:600px)')
  const changeSurveyData = (updateData: ISurveyData) => {
    changeState(state => ({
      ...state,
      ...updateData
    }))
  }

  return (
    <Box sx={{ flexGrow: 1, m: '15px' }}>
      <Grid container rowSpacing={3}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        className='survey-container'>
        <Grid xs={12} sm={6} md={9}>
          <Paper elevation={5}
            sx={{ textAlign: 'center' }}>
            <MainStepper state={state} changeSurveyData={changeSurveyData}>
            </MainStepper>
          </Paper>
        </Grid>
        <Grid xs={12} sm={6} md={3} display="flex" justifyContent="center">
          {state.defaultUI
            ? <Phone state={state} changeSurveyData={changeSurveyData} />
            : <Skeleton variant="rounded" height='660px' width="340px" />
          }
        </Grid>
        {/* <Grid xs={12} sm={12} md={12} display="flex" justifyContent="center">
          {JSON.stringify(state)
          }
        </Grid> */}
      </Grid>
    </Box>
  )
}

const MainStepper = (props: ISurveyProps) => {
  // const [sd, changeSurveyData] = useState(surveyDate);
  const { t } = useTranslation()
  // const steps = [t('p1.t'), t('p2.t'), t('p3.t'), t('p4.t')];
  const steps: string[] = []
  for (let i = 1; i < 10; i++) {
    steps.push(t('p' + i + '.t'))
  }
  // const theme = useTheme()
  const onMobile = useMediaQuery('(max-width:600px)')
  const [activeStep, setActiveStep] = React.useState(0)
  const [skipped, setSkipped] = React.useState(new Set<number>())

  const isStepOptional = (step: number) => {
    return step === -1
  }

  const isStepSkipped = (step: number) => {
    return skipped.has(step)
  }

  const handleNext = () => {
    switch (activeStep) {
      case 0:
        if (!surveyDate.gender) { /* empty */ }
        break

      default:
        break
    }
    let newSkipped = skipped
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values())
      newSkipped.delete(activeStep)
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1)
    setSkipped(newSkipped)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.")
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1)
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values())
      newSkipped.add(activeStep)
      return newSkipped
    })
  }

  const handleReset = () => {
    setActiveStep(0)
  }

  const matches = useMediaQuery('(min-width:1200px)')

  // const [value, setValue] = React.useState('female')

  const subTab = () => {
    switch (activeStep) {
      case 0: {
        return <>
          <FormControl className={'survey-step-form'}>
            <FormLabel className={'survey-step-label'} id='gender'>{t('p1.q1')}</FormLabel>
            <RadioGroup
              sx={{ mt: 2 }}
              name="gender-button-group"
              // defaultValue={props.state.gender}
              // defaultValue='male'
              onChange={(ev, val) => {
                const temp = props.state
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
          <FormControl className={'survey-step-form'}>
            <FormLabel className={'survey-step-label'} id="ageFormLabel">{t('p2.q1')}</FormLabel>
            <RadioGroup
              sx={{ mt: 2 }}
              name="age-button-group"
              // defaultValue={props.state.age}
              // value={surveyDate.age}
              // onChange={(ev, val) => {
              //   surveyDate.age = val
              //   console.log(surveyDate)
              // }}
              onChange={(ev, val) => {
                const temp = props.state
                temp.age = val
                props.changeSurveyData(temp)
              }}
            >
              <FormControlLabel value="0" control={<Radio />} label={t('p2.a1')} />
              <FormControlLabel value="20" control={<Radio />} label={t('p2.a2')} />
              <FormControlLabel value="30" control={<Radio />} label={t('p2.a3')} />
              <FormControlLabel value="40" control={<Radio />} label={t('p2.a4')} />
              <FormControlLabel value="50" control={<Radio />} label={t('p2.a5')} />
              <FormControlLabel value="60" control={<Radio />} label={t('p2.a6')} />
              <FormControlLabel value="70" control={<Radio />} label={t('p2.a7')} />
            </RadioGroup>
          </FormControl>
        </>
      }
      case 2: {
        return <>
          <FormControl className={'survey-step-form'}>
            <FormLabel className={'survey-step-label'} >{t('p3.q1')}</FormLabel>
            <FormLabel className={'survey-step-sub-label'} >{t('p3.q2')}</FormLabel>
            <RadioGroup
              sx={{ mt: 2 }}
              name="dafault-ui-button-group"
              // value={surveyDate.age}
              onChange={(ev, val) => {
                const temp = props.state
                temp.defaultUI = val as TSocialMedia
                switch (val) {
                  case 'Facebook':
                    temp.UIStyle = FbUIStyle
                    temp.positionDatas = FbPositionDatas
                    break
                  case 'Instagram':
                    temp.UIStyle = IgUIStyle
                    temp.positionDatas = IgPositionDatas
                    break
                  case 'Dcard':
                    temp.UIStyle = FbUIStyle
                    temp.positionDatas = DcPositionDatas
                    break
                  case 'YouTube':
                    temp.UIStyle = YTUIStyle
                    temp.positionDatas = YTPositionDatas
                    break
                }
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
          <FormControl className={'survey-step-form'}>
            <FormLabel className={'survey-step-label'} >{t('p4.q1')}</FormLabel>
            <FormLabel sx={{ fontSize: '20px' }} >{t('p4.q2')}</FormLabel>
            <Box sx={{
              display: 'flex',
              justifyContent: 'center'
            }}>
              <TableDnD state={props.state} changeSurveyData={props.changeSurveyData}></TableDnD>
            </Box>
          </FormControl>
        </>
      }
      case 4: {
        // console.log(positionDatas)
        return <>
          <SurveyStep stepId="5" positionData={props.state.positionDatas![0]} />
        </>
      }
      case 5: {
        return <>
          <SurveyStep stepId="6" positionData={props.state.positionDatas![1]} />
        </>
      }
      case 6: {
        return <>
          <SurveyStep stepId="7" positionData={props.state.positionDatas![2]} />
        </>
      }
      case 7: {
        return <>
          <SurveyStep stepId="8" positionData={props.state.positionDatas![3]} />
        </>
      }
      case 8: {
        return <>
          <SurveyStep stepId="9" positionData={props.state.positionDatas![4]} />
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
      height: '650px',
      p: 2
    }}
      className='center-child'
    >
      {/* top stepper */}
      <Box>
        {!onMobile
          ? <Stepper activeStep={activeStep}>
            {steps.map((label, index) => {
              const stepProps: { completed?: boolean } = {}
              const labelProps: {
                optional?: React.ReactNode;
              } = {}
              if (isStepOptional(index)) {
                labelProps.optional = (
                  <Typography variant="caption">Optional</Typography>
                )
              }
              if (isStepSkipped(index)) {
                stepProps.completed = false
              }
              return (
                <Step key={label} {...stepProps}>
                  {matches
                    ? <StepLabel {...labelProps}>{label}</StepLabel>
                    : <StepLabel {...labelProps}></StepLabel>
                  }
                </Step>
              )
            })}
          </Stepper>
          : <></>
        }
      </Box>
      {/* tab */}
      <Box sx={{
        height: onMobile ? 'calc(100% - 40px)' : 'calc(100% - 140px)',
        pt: onMobile ? 0 : 4
      }}>
        {subTab()}
      </Box>
      {/* bottom button group */}
      {onMobile
        // onMobile
        ? <MobileStepper activeStep={activeStep}
          variant="text"
          steps={steps.length}
          position="static"
          nextButton={
            <Button
              size="small"
              onClick={handleNext}
              disabled={activeStep === steps.length - 1}
            >
              Next
              <KeyboardArrowRight />
              {/* {theme.direction === 'rtl'
                ? (<KeyboardArrowLeft />)
                : (<KeyboardArrowRight />)} */}
            </Button>
          }
          backButton={
            <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
              <KeyboardArrowLeft />
              {/* {theme.direction === 'rtl'
                ? (<KeyboardArrowRight />)
                : (<KeyboardArrowLeft />)} */}
              Back
            </Button>
          } />
        // onDesktop
        : activeStep === steps.length
          ? (<Box sx={{ display: 'flex', flexDirection: 'row', pt: 2, px: 2 }}>
            <Box sx={{ flex: '1 1 auto' }} />
            <Button
              variant="outlined"
              size="large"
              onClick={handleReset}>Reset</Button>
          </Box>)
          : (<Box sx={{ display: 'flex', flexDirection: 'row', pt: 2, px: 2 }}>
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
          </Box>)
      }
    </Box >
  )
}
