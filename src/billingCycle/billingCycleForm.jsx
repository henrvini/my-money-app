import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";

class BillingCycleForm extends Component {
  render() {
    const { handleSubmit } = this.props;

    return (
      <form role="form" onSubmit={handleSubmit}>
        <div className="box-body">
          <Field name="name" component="input" type="text" />
          <Field name="month" component="input" type="text" />
          <Field name="year" component="input" type="text" />
        </div>
        <div className="box-footer">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default reduxForm({ form: "billingCycleForm" })(BillingCycleForm);
