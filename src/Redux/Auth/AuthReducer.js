import { createSlice } from "@reduxjs/toolkit";

const AuthRedux = createSlice({
  name: "Auth Redux",
  initialState: {
  isAuthenticated: false,
  user: 0,
  type:0,
  loading:true,
  name:"",
  email:""
  },
  reducers: {
    setLoginSuccess: (state,action) => {
      state.isAuthenticated = action.payload.isAuthenticated;
      state.user = action.payload.user;
      state.type = action.payload.type;
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.loading = false;
    },
    setAuthChecked:(state) =>{
      state.loading = false;
    }
  },
});

export const { setLoginSuccess,setAuthChecked } = AuthRedux.actions;
export default AuthRedux.reducer;
