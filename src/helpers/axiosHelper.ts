import axios from "axios";

const TOKEN =
  "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImhlbWFzcmVlLm5lbGx1cnVAZ21haWwuY29tIiwiZ2l0aHViIjoiaHR0cHM6Ly9naXRodWIuY29tL0hlbWFzcmVlNWMyIiwiaWF0IjoxNjU5MzM0MTM5LCJleHAiOjE2NTk3NjYxMzl9.K_HsjNtZzW6bHCY_JU4CXGRFC24LlyA8TR8M7rHglVs";

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
