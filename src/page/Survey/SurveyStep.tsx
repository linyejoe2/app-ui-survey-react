import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material'
import { FC } from 'react'
import { useTranslation } from 'react-i18next'
import { IpositionData, ISurveyProps, TSocialMedia } from '../../interface'

interface PostsProps {
  stepId: string,
  uid: string,
  survey: ISurveyProps,
  handleNext: () => void
}

export const SurveyStep: FC<PostsProps> = ({ stepId, uid, survey, handleNext }) => {
  // const onLaptop = useMediaQuery('(max-width:1000px)')
  // const [state, setState] = useState(positionData)
  const pickBar = (uid: string, datas: IpositionData[]): IpositionData => {
    for (const ele of datas) {
      if (ele.uid === uid) return ele
    }
    return datas[0]
  }
  const { t } = useTranslation()
  return <>
    {pickBar(uid, survey.state.positionDatas).enable
      ? <FormControl key={'step' + stepId} className={'survey-step-form'}>
        <FormLabel className={'survey-step-label'} id={`style-${stepId}-label`}>{t(`p${stepId}.q1`)}</FormLabel>
        {/* <FormLabel sx={{ fontSize: '20px' }} >{t({`p${stepId}.q2')}</FormLabel> */}
        <RadioGroup name={`style-${stepId}-button-group`}
          // value={value}
          // defaultValue='male'
          onKeyDown={(ev) => {
            console.log(ev.key)
            if (ev.key === 'Enter') {
              handleNext()
            }
            // if (onLaptop) handleNext()
          }}
          onChange={(ev, val) => {
            const temp = survey.state
            pickBar(uid, temp.positionDatas).style = val as TSocialMedia
            survey.changeSurveyData(temp)
            // const temp: IpositionData = JSON.parse(JSON.stringify(state))
            // temp.style = val as TSocialMedia
            // setState(temp)
          }}
          value={pickBar(uid, survey.state.positionDatas).style}
        // defaultValue={pickBar(uid, survey.state.positionDatas).style}
        >
          <FormControlLabel value={t(`p${stepId}.a1`)} control={<Radio />} label={t(`p${stepId}.a1`)} sx={{ display: t(`p${stepId}.a1`) !== '' ? 'inline-flex' : 'none' }} />
          <FormControlLabel value={t(`p${stepId}.a2`)} control={<Radio />} label={t(`p${stepId}.a2`)} sx={{ display: t(`p${stepId}.a2`) !== '' ? 'inline-flex' : 'none' }} />
          <FormControlLabel value={t(`p${stepId}.a3`)} control={<Radio />} label={t(`p${stepId}.a3`)} sx={{ display: t(`p${stepId}.a3`) !== '' ? 'inline-flex' : 'none' }} />
          <FormControlLabel value={t(`p${stepId}.a4`)} control={<Radio />} label={t(`p${stepId}.a4`)} sx={{ display: t(`p${stepId}.a4`) !== '' ? 'inline-flex' : 'none' }} />
        </RadioGroup>
      </FormControl>
      : <FormControl className={'survey-step-form'}>
        <FormLabel className={'survey-step-label'} id={`style-${stepId}-label`}>{t(`p${stepId}.s1`)}</FormLabel>
        <FormLabel sx={{ fontSize: '20px' }} >{t(`p${stepId}.s2`)}</FormLabel>
      </FormControl>
    }
  </>
}
