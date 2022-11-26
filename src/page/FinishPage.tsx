import { Phone } from '../components/Phone/Phone'
import { useSelector } from 'react-redux'
import { RootState } from '../service/store'

export const FinishPage = () => {
  const gSurveyData2 = useSelector((state: RootState) => state.gSurveyData2)
  return <Phone state={gSurveyData2} changeSurveyData={() => { }} />
}
