import { apiRequest } from "./apiHelper";

export const getProjectApi = (params) =>
  apiRequest("GET", "/project/v1/projects", params);

export const createProjectsApi = (params) =>
  apiRequest("POST", "/project/v1/createproject", params);

export const updateProjectApi = (params) =>
  apiRequest("PUT", "/project/v1/updateproject", params);

export const getGatewaysApi = (params) =>
  apiRequest("POST", "/project/v1/getAllGateways", params);

