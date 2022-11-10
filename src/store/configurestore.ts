import { configureStore } from '@reduxjs/toolkit'
import themeReducer, { numReducer2, ThemeReducer } from '../reducers/themeReducer'

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    theme2: ThemeReducer,
    num: numReducer2
  }
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch