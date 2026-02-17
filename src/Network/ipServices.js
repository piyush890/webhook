import { apiRequest } from "./apiHelper";

export const ipaddressAddApi = (params) =>
  apiRequest("POST", "/ipaddress", params);