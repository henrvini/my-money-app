import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import Tabs from "../common/tab/tabs";
import TabHeader from "../common/tab/tabHeader";
import Content from "../common/template/content";
import TabContent from "../common/tab/tabContent";
import TabsHeader from "../common/tab/tabsHeader";
import TabsContent from "../common/tab/tabsContent";
import { selectTab, showTabs } from "../common/tab/tabActions";
import ContentHeader from "../common/template/contentHeader";

class BillingCycle extends Component {
  componentWillMount() {
    this.props.selectTab("tabList");
    this.props.showTabs("tabList", "tabCreate");
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
                <h1>Lista</h1>
              </TabContent>
              <TabContent id="tabCreate">
                <h1>Create</h1>
              </TabContent>
              <TabContent id="tabUpdate">
                <h1>Update</h1>
              </TabContent>
              <TabContent id="tabDelete">
                <h1>Delete</h1>
              </TabContent>
            </TabsContent>
          </Tabs>
        </Content>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) =>
  bindActionCreators({ selectTab, showTabs }, dispatch);

export default connect(null, mapDispatchToProps)(BillingCycle);
