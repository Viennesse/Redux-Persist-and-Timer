import { createSlice } from '@reduxjs/toolkit'


const stanPoczatkowy = {
    tabb: [1,2],
}

const secondCounterSlice = createSlice({
  name: 'secondCounter',
  initialState: stanPoczatkowy,
  reducers: {
    load: (state) => {
      state.tabb = [...state.tabb, 7]
    },
    clear: (state) => {
      state.tabb = [1,2]
    },
    
  },
})



export const { load, clear } = secondCounterSlice.actions

export default secondCounterSlice.reducer


