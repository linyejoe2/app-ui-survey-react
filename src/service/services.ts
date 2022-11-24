// import { AnyAction } from 'redux'
// import { createReducer, createAction, PayloadAction, createSlice } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'

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

// const initialState = {
//   darkTheme: false
// }

// const toggleTheme = createAction('CHANGE_THEME')
// // const addOne = createAction("ADD_ONE")
// // const delOne = createAction("DEL_ONE")

// export const ThemeReducer = createReducer(initialState, {
//   [toggleTheme.type]: (state, action) => {
//     return {
//       ...state,
//       darkTheme: !state.darkTheme
//     }
//   }
// })

// // export const numReducer = createReducer(2, {
// //   [addOne.type]: (state, action) => state + 1,
// //   [delOne.type]: (state, action) => state - 1
// // })

// const countSlice = createSlice({
//   name: 'numReducer2',
//   initialState: 3,
//   reducers: {
//     addOne: (state) => state + 1,
//     delOne: (state, action: PayloadAction<undefined>) => state - 1
//   }
// })

// export const numReducer2 = countSlice.reducer
// export const { addOne, delOne } = countSlice.actions

// const reducer = (state = initialState, action: AnyAction) => {
//   switch (action.type) {
//     case 'CHANGE_THEME':
//       return {
//         ...state,
//         darkTheme: !state.darkTheme
//       }
//     default:
//       return state
//   }
// }

// export default reducer;
