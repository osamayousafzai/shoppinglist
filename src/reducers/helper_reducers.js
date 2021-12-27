import AllShoppingItems from "../assets/allshoppingitems.json";

export function AddSelectedItem(id) {
  let item = AllShoppingItems.find(i => i.id === id);
  return item;
}
