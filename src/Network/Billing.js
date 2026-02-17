import { apiRequest } from "./apiHelper";

export const billinApi = (params) =>
  apiRequest("POST", "/report", params);