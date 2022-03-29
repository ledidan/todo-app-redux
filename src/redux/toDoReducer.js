import { combineReducers } from "redux";
import filterReducer from "../components/Filters/filterSlice";
import todoReducer from "../components/TodoList/todoSlice";

// const rootReducer = (state = {}, action) => {c
//   return {
//     filters: FilterReducer(state.filters, action),
// toDoList: TodoReducer(state.toDoList, action),
//   };
// };

const rootReducer = combineReducers({
  filters: filterReducer,
  toDoList: todoReducer,
});

export default rootReducer;
