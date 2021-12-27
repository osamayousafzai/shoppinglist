import { ADD_ITEM, REMOVE_ITEM } from "../actions";
import { AddSelectedItem } from "./helper_reducers";

function selctedItems(state = [], action) {
  switch (action.type) {
    case ADD_ITEM:
      let selectedItems = [...state, AddSelectedItem(action.id)];
      return selectedItems;
    case REMOVE_ITEM:
      let item = state.filter(i => i.id !== action.id);
      return item;
    default:
      return state;
  }
}

export default selctedItems;
