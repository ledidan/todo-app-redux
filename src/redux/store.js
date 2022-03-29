// import { createStore } from "redux";
// import rootReducer from "./toDoReducer";

// const store = createStore(
//   rootReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// );

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import filterSlice from "../components/Filters/filterSlice";
import todoSlice from "../components/TodoList/todoSlice";

const store = configureStore({
  reducer: {
    filters: filterSlice.reducer,
    toDoList: todoSlice.reducer,
  },
});

export default store;
