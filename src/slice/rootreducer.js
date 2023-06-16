import DataSlice from "./DataSlice";
import CartSlice from "./CartSlice";
import { combineReducers } from "redux";

const rootreducer = combineReducers({
  datareducer: DataSlice,
  cartreducer: CartSlice,
});

export default rootreducer;
