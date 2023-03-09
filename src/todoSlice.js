import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: [],
}

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    add: (state, action) => {
      state.value.push(action.payload)
    },
    update: (state, action) => {
      state.value.map((t) => {
        if(t.id === action.payload.id) {
            t["item"] = action.payload.item
        }
      });
    },
    remove: (state, action) => {
      state.value.filter((t) => t.id !== action.payload.id)
    },
  },
})


export const { add,update,remove } = todoSlice.actions
export default todoSlice.reducer

