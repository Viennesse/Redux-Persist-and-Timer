import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    value:0,
    value2: 4,
}



const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    pushuj: (state) => {
      state.value2 += 3
    },
   
  },
})



// Action creators are generated for each case reducer function
export const { increment, pushuj} = counterSlice.actions

export default counterSlice.reducer