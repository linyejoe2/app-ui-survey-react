import { configureStore } from '@reduxjs/toolkit'
import { gSurveyData, gSurveyData2, themeState } from './services'
import { useDispatch, useSelector } from 'react-redux'

export const store = configureStore({
  reducer: {
    themeState,
    gSurveyData,
    gSurveyData2
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export { useDispatch, useSelector }
