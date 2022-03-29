// const stateDefault = [
//   { id: 1, name: "Learn ReactJS", completed: false, priority: "Medium" },
//   { id: 2, name: "Learn Redux", completed: true, priority: "High" },
//   { id: 3, name: "Learn JavaScript", completed: false, priority: "Low" },
//   { id: 4, name: "Fucking pretty girl", completed: true, priority: "Medium" },
//   { id: 5, name: "Doggy urly girl", completed: false, priority: "Low" },
// ];

// const TodoReducer = (state = stateDefault, action) => {
//   switch (action.type) {
//     case "toDoList/addToDo":
//       return [...state, action.payload];

//     case "toDoList/toggleToDoStatus":
//       return state.map((todo) =>
//         todo.id === action.payload
//           ? { ...todo, completed: !todo.completed }
//           : todo
//       );
//     default:
//       return state;
//   }
// };

// export default TodoReducer;
import { createSlice } from "@reduxjs/toolkit";
export default createSlice({
  name: "toDoList",
  initialState: [
    { id: 1, name: "Learn ReactJS", completed: false, priority: "Medium" },
    { id: 2, name: "Learn Redux", completed: true, priority: "High" },
    { id: 3, name: "Learn JavaScript", completed: false, priority: "Low" },
    { id: 4, name: "Fucking pretty girl", completed: true, priority: "Medium" },
    { id: 5, name: "Doggy urly girl", completed: false, priority: "Low" },
  ],
  reducers: {
    addToDo: (state, action) => {
      state.push(action.payload);
    },
    // action creators
    toggleToDoStatus: (state, action) => {
      const currentToDo = state.find((todo) => todo.id === action.payload);
      if (currentToDo) {
        currentToDo.completed = !currentToDo.completed;
      }
    },
  },
});
