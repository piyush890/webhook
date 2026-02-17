import axiosClient from "./axiosClient";

export const apiRequest = async (method, url, data = null) => {
  try {
    return await axiosClient({
      method,
      url,
      data,
    });
  } catch (error) {

    // Capture EXACT backend message
    if (error.response) {
      error.customMessage =
        error.response.data?.message;
    } else {
      error.customMessage = "Network error. Please try again.";
    }

    throw error;
  }
};
