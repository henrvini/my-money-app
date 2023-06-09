import { connect } from "react-redux";
import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { reduxForm, Field, formValueSelector } from "redux-form";

import { init } from "./billingCycleActions";
import LabelAndInput from "../common/form/labelAndInput";
import ItemList from "./itemList";
import Summary from "./summary";

class BillingCycleForm extends Component {
  calculateSummary() {
    const sum = (acc, curr) => acc + curr;

    return {
      sumOfCredits: this.props.credits
        .map((credit) => +credit.value || 0)
        .reduce(sum),
      sumOfDebts: this.props.debts.map((debt) => +debt.value || 0).reduce(sum),
    };
  }

  render() {
    const {
      handleSubmit,
      readOnly,
      submitClass,
      submitLabel,
      init,
      credits,
      debts,
    } = this.props;

    const { sumOfCredits, sumOfDebts } = this.calculateSummary();

    return (
      <form role="form" onSubmit={handleSubmit}>
        <div className="box-body">
          <Field
            name="name"
            component={LabelAndInput}
            readOnly={readOnly}
            type="text"
            label="Nome"
            cols="12 4"
            placeholder="Informe o nome"
          />
          <Field
            name="month"
            component={LabelAndInput}
            readOnly={readOnly}
            type="number"
            label="Mês"
            cols="12 4"
            placeholder="Informe o mês"
          />
          <Field
            name="year"
            component={LabelAndInput}
            readOnly={readOnly}
            type="number"
            label="Ano"
            cols="12 4"
            placeholder="Informe o ano"
          />

          <Summary credit={sumOfCredits} debts={sumOfDebts} />

          <ItemList
            cols="12 6"
            list={credits}
            readOnly={readOnly}
            field="credits"
            legend="Créditos"
          />
          <ItemList
            cols="12 6"
            list={debts}
            readOnly={readOnly}
            field="debts"
            legend="Débitos"
            showStatus={true}
          />
        </div>
        <div className="box-footer">
          <button type="submit" className={`btn btn-${submitClass}`}>
            {submitLabel}
          </button>
          <button type="button" className="btn btn-default" onClick={init}>
            Cancel
          </button>
        </div>
      </form>
    );
  }
}

BillingCycleForm = reduxForm({
  form: "billingCycleForm",
  destroyOnUnmount: false,
})(BillingCycleForm);

const selector = formValueSelector("billingCycleForm");

const mapStateToProps = (state) => ({
  credits: selector(state, "credits"),
  debts: selector(state, "debts"),
});
const mapDispatchToProps = (dispatch) => bindActionCreators({ init }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(BillingCycleForm);
