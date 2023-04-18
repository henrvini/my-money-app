import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";

import TabReducer from "../common/tab/tabReducer";
import DashboardReducer from "../dashboard/dashboardReducer";
import BillingCycleReducer from "../billingCycle/billingCycleReducer";

const rootReducer = combineReducers({
  dashboard: DashboardReducer,
  tab: TabReducer,
  billingCycle: BillingCycleReducer,
  form: formReducer,
});

export default rootReducer;
