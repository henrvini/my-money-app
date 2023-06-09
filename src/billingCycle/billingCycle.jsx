import { connect } from "react-redux";
import React, { Component } from "react";
import { bindActionCreators } from "redux";

import Form from "./billingCycleForm";
import Tabs from "../common/tab/tabs";
import List from "./billingCycleList";
import TabHeader from "../common/tab/tabHeader";
import Content from "../common/template/content";
import TabContent from "../common/tab/tabContent";
import TabsHeader from "../common/tab/tabsHeader";
import TabsContent from "../common/tab/tabsContent";
import ContentHeader from "../common/template/contentHeader";
import { create, update, remove, init } from "./billingCycleActions";

class BillingCycle extends Component {
  componentWillMount() {
    this.props.init();
  }

  render() {
    return (
      <div>
        <ContentHeader title="Ciclos de Pagamento" small="Cadastro" />
        <Content>
          <Tabs>
            <TabsHeader>
              <TabHeader label="Listar" icon="bars" target="tabList" />
              <TabHeader label="Incluir" icon="plus" target="tabCreate" />
              <TabHeader label="Alterar" icon="pencil" target="tabUpdate" />
              <TabHeader label="Excluir" icon="trash-o" target="tabDelete" />
            </TabsHeader>
            <TabsContent>
              <TabContent id="tabList">
                <List />
              </TabContent>
              <TabContent id="tabCreate">
                <Form
                  onSubmit={(values) => this.props.create(values)}
                  submitLabel="Incluir"
                  submitClass="primary"
                />
              </TabContent>
              <TabContent id="tabUpdate">
                <Form
                  onSubmit={(values) => this.props.update(values)}
                  submitLabel="Alterar"
                  submitClass="info"
                />
              </TabContent>
              <TabContent id="tabDelete">
                <Form
                  readOnly={true}
                  onSubmit={(values) => this.props.remove(values)}
                  submitLabel="Excluir"
                  submitClass="danger"
                />
              </TabContent>
            </TabsContent>
          </Tabs>
        </Content>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ create, update, remove, init }, dispatch);

export default connect(null, mapDispatchToProps)(BillingCycle);
