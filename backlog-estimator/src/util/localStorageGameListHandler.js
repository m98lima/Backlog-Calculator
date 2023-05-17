const addNewItem = (key, value) => {
  localStorage.setItem(key, value);
};

const returnAllItems = () => {
  let result = [];
  for (let [key, value] of Object.entries(localStorage)) {
    if (!isNaN(key)) {
      result = [...result, JSON.parse(value)];
    }
  }
  return result;
};

const removeItem = (key) => {
  localStorage.removeItem(key);
};

export default function localStorageGameListHandler(method, key, value) {
  if (method == "list") {
    return returnAllItems();
  } else if (method == "add") {
    addNewItem(key, value);
  } else if (method == "remove") {
    removeItem(key);
  }
}

export const isGameOnTheList = (key) => {
  const result = localStorage.getItem(key);
  if (result) {
    return true;
  } else {
    return false;
  }
};
