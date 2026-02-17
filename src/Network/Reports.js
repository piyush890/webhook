import { apiRequest } from "./apiHelper";

export const getAllReportApi = (params) =>
  apiRequest("GET", "/report/v1/transactions", params);
export const getRefundReportApi = (params) =>
  apiRequest("GET", "/report/v1/refunds", params);

