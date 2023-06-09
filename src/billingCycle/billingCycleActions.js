import axios from "axios";
import { toastr } from "react-redux-toastr";
import { reset as resetForm, initialize } from "redux-form";
import { showTabs, selectTab } from "../common/tab/tabActions";

const BASE_URL = "http://localhost:3003/api";
const INITIAL_VALUES = { credits: [{}], debts: [{}] };

function getList() {
  const request = axios.get(`${BASE_URL}/billingCycles`);
  return {
    type: "BILLING_CYCLES_FETCHED",
    payload: request,
  };
}

function create(values) {
  return submit(values, "post");
}

function update(values) {
  return submit(values, "put");
}

function remove(values) {
  return submit(values, "delete");
}

function submit(values, method) {
  return (dispatch) => {
    const id = values._id ? values._id : "";
    axios[method](`${BASE_URL}/billingCycles/${id}`, values)
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

// Refatorar os métodos showUpdate e showDelete para uma função unica como foi feito em submit

function showUpdate(billingCycle) {
  return [
    showTabs("tabUpdate"),
    selectTab("tabUpdate"),
    initialize("billingCycleForm", billingCycle),
  ];
}

function showDelete(billingCycle) {
  return [
    showTabs("tabDelete"),
    selectTab("tabDelete"),
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

export { getList, create, update, remove, showUpdate, showDelete, init };
