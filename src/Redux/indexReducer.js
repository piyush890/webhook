import { combineReducers } from "@reduxjs/toolkit";
import LoginReducer from '../Redux/Auth/AuthReducer';
import DialogReducer from '../Redux/Dialog';
import DialogLoaderReducer from '../Redux/Loader';

const rootReducer = combineReducers({
   LoggedIn: LoginReducer,
   DialogIn: DialogReducer,
   DialogLoader: DialogLoaderReducer,
});

export default rootReducer;