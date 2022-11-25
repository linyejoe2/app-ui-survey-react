import { FormControl, FormLabel, RadioGroup, FormControlLabel, Radio } from '@mui/material'
import { FC, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { IpositionData, TSocialMedia } from '../../interface'

interface PostsProps {
  stepId: string, positionData: IpositionData
}

export const SurveyStep: FC<PostsProps> = ({ stepId, positionData }) => {
  const [state, setState] = useState(positionData)
  const { t } = useTranslation()
  return <>
    {positionData.enable
      ? <FormControl className={ 'survey-step-form' }>
        <FormLabel className={ 'survey-step-label' } id='gender'>{t(`p${stepId}.q1`)}</FormLabel>
        {/* <FormLabel sx={{ fontSize: '20px' }} >{t({`p${stepId}.q2')}</FormLabel> */}
        <RadioGroup
          sx={{ mt: 2 }}
          name={`style-${stepId}-button-group`}
          // value={value}
          // defaultValue='male'
          onChange={(ev, val) => {
            const temp: IpositionData = JSON.parse(JSON.stringify(state))
            temp.style = val as TSocialMedia
            setState(temp)
          }}
        >
          <FormControlLabel value={t(`p${stepId}.a1`)} control={<Radio />} label={t(`p${stepId}.a1`)} />
          <FormControlLabel value={t(`p${stepId}.a2`)} control={<Radio />} label={t(`p${stepId}.a2`)} />
          <FormControlLabel value={t(`p${stepId}.a3`)} control={<Radio />} label={t(`p${stepId}.a3`)} />
          <FormControlLabel value={t(`p${stepId}.a4`)} control={<Radio />} label={t(`p${stepId}.a4`)} />
        </RadioGroup>
      </FormControl>
      : <FormControl className={ 'survey-step-form' }>
        <FormLabel className={ 'survey-step-label' } id='gender'>{t(`p${stepId}.s1`)}</FormLabel>
        <FormLabel sx={{ fontSize: '20px' }} >{t(`p${stepId}.s2`)}</FormLabel>
      </FormControl>
    }
  </>
}
