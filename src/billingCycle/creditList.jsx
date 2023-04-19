import { Field, arrayInsert } from "redux-form";
import { connect } from "react-redux";
import React, { Component } from "react";
import { bindActionCreators } from "redux";

import Grid from "../common/layout/grid";
import Input from "../common/form/input";

class CreditList extends Component {
  add(index, item = {}) {
    if (!this.props.readOnly) {
      this.props.arrayInsert("billingCycleForm", "credits", index, item);
    }
    return false;
  }

  renderRows() {
    const list = this.props.list || [];

    return list.map((item, index) => (
      <tr key={Number(index)}>
        <td>
          <Field
            name={`credits[${index}].name`}
            component={Input}
            placeholder="informe o nome"
            readOnly={this.props.readOnly}
          />
        </td>
        <td>
          <Field
            name={`credits[${index}].value`}
            component={Input}
            placeholder="informe o valor"
            readOnly={this.props.readOnly}
          />
        </td>
        <td>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => this.add(index + 1)}
          >
            <i className="fa fa-plus" />
          </button>
          <button
            type="button"
            className="btn btn-warning"
            onClick={() => this.add(index + 1, item)}
          >
            <i className="fa fa-clone" />
          </button>
        </td>
      </tr>
    ));
  }

  render() {
    return (
      <Grid cols={this.props.cols}>
        <fieldset>
          <legend>Créditos</legend>
          <table className="table">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Valor</th>
                <th className="table-actions">Ações</th>
              </tr>
            </thead>
            <tbody>{this.renderRows()}</tbody>
          </table>
        </fieldset>
      </Grid>
    );
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ arrayInsert }, dispatch);

export default connect(null, mapDispatchToProps)(CreditList);
