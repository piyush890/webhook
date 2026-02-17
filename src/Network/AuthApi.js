import { apiRequest } from "./apiHelper";

export const loginApi = (params) =>
  apiRequest("POST", "/auth/v1/login", params);

export const signupApi = (params) =>
  apiRequest("POST", "/auth/v1/register", params);
