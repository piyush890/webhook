import { createSlice } from "@reduxjs/toolkit";

const DialogRedux = createSlice({
  name: "Dialog Redux",
  initialState: {
  open: false,
  },
  reducers: {
    setOpen: (state,action) => {
      state.open = action.payload.open;
    },
    
  },
});

export const { setOpen } = DialogRedux.actions;
export default DialogRedux.reducer;
