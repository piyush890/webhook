import axios from "axios";

const BASE_URL = "https://testingapi.vaultpaysolutions.com"; // change this

export async function apiRequest(method, url, data = {}, headers = {}) {
  try {
    const response = await axios({
      method,
      url: BASE_URL + url,
      data,
      headers: {
        "Content-Type": "application/json",
      },
    });

    return {
      status: response.status,
      data: response.data,
    };

  } catch (error) {
    throw {
      status: error.response?.status,
      code: error.response?.data?.code,
      message: error.response?.data?.msg || "Request failed",
    };
  }
}