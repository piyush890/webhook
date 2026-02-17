import { createSlice } from "@reduxjs/toolkit";

const DialogLoaderRedux = createSlice({
  name: "Dialog Loader",
  initialState: {
  open: false,
  },
  reducers: {
    setOpenLoader: (state,action) => {
      state.open = action.payload.open;
    },
    
  },
});

export const { setOpenLoader } = DialogLoaderRedux.actions;
export default DialogLoaderRedux.reducer;
