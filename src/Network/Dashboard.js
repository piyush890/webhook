import { apiRequest } from "./apiHelper";

export const dashboardApi = (params) =>
  apiRequest("GET", "/dashboards/v1/txnData", params);
export const dashboardPaymentMethodApi = (params) =>
  apiRequest("GET", "/dashboards/v1/payment_methods", params);
export const dashboardPerHourTxnApi = (params) =>
  apiRequest("GET", "/dashboards/v1/txnperhour", params);
export const dashboardStatusPerHourTxnApi = (params) =>
  apiRequest("GET", "/dashboards/v1/txnstatusperhour", params);
export const dashboardRefundDataApi = (params) =>
  apiRequest("GET", "/dashboards/v1/txnRefundData", params);
export const dashboardTxnListto5 = (params) =>
  apiRequest("GET", "/dashboards/v1/txns", params);
