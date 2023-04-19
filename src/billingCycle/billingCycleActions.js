import axios from "axios";
import { toastr } from "react-redux-toastr";
import { reset as resetForm, initialize } from "redux-form";
import { showTabs, selectTab } from "../common/tab/tabActions";

const BASE_URL = "http://localhost:3003/api";
const INITIAL_VALUES = {};

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
        dispatch(init());
      })
      .catch((error) => {
        error.response.data.errors.forEach((error) =>
          toastr.error("Erro", error)
        );
      });
  };
}

function showUpdate(billingCycle) {
  return [
    showTabs("tabUpdate"),
    selectTab("tabUpdate"),
    initialize("billingCycleForm", billingCycle),
  ];
}

function init() {
  return [
    showTabs("tabList", "tabCreate"),
    selectTab("tabList"),
    getList(),
    initialize("billingCycleForm", INITIAL_VALUES),
  ];
}

module.exports = { getList, create, showUpdate, init };
