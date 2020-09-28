import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";

// load component Counter
import Counter from "./Counter";

export default function App() {
  // initial state
  const initialState = {
    count: 0
  };

  // reducer function ada tambah dan kurang
  const reducer = (state = initialState, action) => {
    //membuat switch
    switch (action.type) {
      // klo nambah
      case "INCREMENT":
        return { count: state.count + 1 };
      // klo kurang
      case "DECREMENT":
        return { count: state.count - 1 };
      // nilai default
      default:
        return state;
    }
  };

  // buat store(wadah data) agar bisa mengelola data yang disimpan
  const store = createStore(reducer);

  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
