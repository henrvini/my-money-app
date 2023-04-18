import axios from "axios";
import { toastr } from "react-redux-toastr";
import { reset as resetForm } from "redux-form";
import { showTabs, selectTab } from "../common/tab/tabActions";

const BASE_URL = "http://localhost:3003/api";

function getList() {
  const request = axios.get(`${BASE_URL}/billingCycles`);
  return {
    type: "BILLING_CYCLES_FETCHED",
    payload: request,
  };
}

function create(values) {
  return (dispatch) => {
    axios
      .post(`${BASE_URL}/billingCycles`, values)
      .then((res) => {
        toastr.success("Sucesso", "Operação realizada com sucesso");
        dispatch([
          resetForm("billingCycleForm"),
          getList(),
          selectTab("tabList"),
          showTabs("tabList", "tabCreate"),
        ]);
      })
      .catch((error) => {
        error.response.data.errors.forEach((error) =>
          toastr.error("Erro", error)
        );
      });
  };
}

module.exports = { getList, create };
