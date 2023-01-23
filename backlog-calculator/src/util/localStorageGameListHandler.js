const addNewItem = (key, value) => {
  localStorage.setItem(key, value);
};

const returnAllItems = () => {
  return { ...localStorage };
};

export default function localStorageGameListHandler (method, key, value) {
  if (method == "list") {
    console.log(returnAllItems());
  } else if (method == "add") {
    addNewItem(key, value);
  }
};