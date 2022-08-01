import axios from "axios";

const TOKEN = `Bearer ${process.env.REACT_APP_API_TOKEN}`;

export const AXIOS_GET = (url: string) => {
  return axios.get(url, {
    headers: { Authorization: TOKEN },
  });
};

export const AXIOS_POST = (url: string, requestBody: any) => {
  return axios.post(url, requestBody, {
    headers: {
      Authorization: TOKEN,
      "Content-Type": "application/json",
    },
  });
};
