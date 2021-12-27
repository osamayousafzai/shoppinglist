import { combineReducers } from "redux";
import ShoppingList from "./allShoppingList_reducer";
import selctedItems from "./selectedItem_reducer";

const rootReducer = combineReducers({
  ShoppingList,
  selctedItems
});

export default rootReducer;
