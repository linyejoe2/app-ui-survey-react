// import { AnyAction } from 'redux'
// import { createReducer, createAction, PayloadAction, createSlice } from '@reduxjs/toolkit'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ISurveyData } from '../interface'

const themeSlice = createSlice({
  name: 'themeState',
  initialState: true,
  reducers: {
    // eslint-disable-next-line no-return-assign
    toggleTheme: (state) => state === false
      ? state = true
      : state = false
  }
})

export const themeState = themeSlice.reducer
export const { toggleTheme } = themeSlice.actions

const surveySlice = createSlice({
  name: 'surveySlice',
  initialState: '',
  reducers: {
    // storeSurveyData: (state, action: PayloadAction<ISurveyData>) => action.payload
    storeSurveyData: (state, action: PayloadAction<string>) => {
      // console.log(action.payload)
      state = action.payload
      return action.payload
    }
  }
})

export const gSurveyData = surveySlice.reducer
export const { storeSurveyData } = surveySlice.actions

const surveySlice2 = createSlice({
  name: 'surveySlice',
  initialState: {
    user: '',
    gender: '',
    age: '',
    defaultUI: '',
    themeStyle: '',
    themeMode: 'light',
    UIStyle: undefined,
    positionDatas: []
  } as ISurveyData,
  reducers: {
    // storeSurveyData: (state, action: PayloadAction<ISurveyData>) => action.payload
    storeSurveyData2: (state, action: PayloadAction<ISurveyData>) => {
      try {
        return (JSON.parse(JSON.stringify(action.payload)))
      } catch (error) {
        console.log(error)
      }
    }
  }
})

export const gSurveyData2 = surveySlice2.reducer
export const { storeSurveyData2 } = surveySlice2.actions
