import axios from "axios";

const BASE_URL = "http://localhost:3003/api";

function getList() {
  const request = axios.get(`${BASE_URL}/billingCycles`);
  return {
    type: "BILLING_CYCLES_FETCHED",
    payload: request,
  };
}

function create(values) {
  axios.post(`${BASE_URL}/billingCycles`, values);
  return {
    type: "TEMP",
  };
}

module.exports = { getList, create };
