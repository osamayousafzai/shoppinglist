import AllShoppingList from "../assets/allshoppingitems.json";
import { ADD_ITEM, REMOVE_ITEM } from "../actions/index.js";
import { AddSelectedItem } from "./helper_reducers";

function ShoppingList(state = AllShoppingList, action) {
  switch (action.type) {
    case ADD_ITEM:
      let item = state.filter(i => i.id !== action.id);
      return item;
    case REMOVE_ITEM:
      item = [...state, AddSelectedItem(action.id)];
      return item;
    default:
      return state;
  }
}

export default ShoppingList;
