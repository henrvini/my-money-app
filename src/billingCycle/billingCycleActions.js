import axios from "axios";
import { toastr } from "react-redux-toastr";

const BASE_URL = "http://localhost:3003/api";

function getList() {
  const request = axios.get(`${BASE_URL}/billingCycles`);
  return {
    type: "BILLING_CYCLES_FETCHED",
    payload: request,
  };
}

function create(values) {
  axios
    .post(`${BASE_URL}/billingCycles`, values)
    .then((res) => {
      toastr.success("Sucesso", "Operação realizada com sucesso");
    })
    .catch((error) => {
      error.response.data.errors.forEach((error) =>
        toastr.error("Erro", error)
      );
    });
  return {
    type: "TEMP",
  };
}

module.exports = { getList, create };
