import { apiRequest } from "./apiHelper";

export const usersList = (params) =>
  apiRequest("POST", "/userslist", params);
export const usersStatus = (params) =>
  apiRequest("POST", "/userblock", params);