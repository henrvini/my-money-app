import { combineReducers } from "redux";

import TabReducer from "../common/tab/tabReducer";
import DashboardReducer from "../dashboard/dashboardReducer";
import BillingCycleReducer from "../billingCycle/billingCycleReducer";

const rootReducer = combineReducers({
  dashboard: DashboardReducer,
  tab: TabReducer,
  list: BillingCycleReducer,
});

export default rootReducer;
