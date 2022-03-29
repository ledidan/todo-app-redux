import { createSelector } from "@reduxjs/toolkit";

export const searchTextSelectors = (state) => state.filters.search;
export const statusFilterSelectors = (state) => state.filters.status;
export const filterPrioritiesSelectors = (state) => state.filters.priorities;
export const todoListSelectors = (state) => state.toDoList;

// export const todoListSelectors = (state) => {
//   const todoRemaining = state.toDoList.filter((todo) => {
//     return todo.name.includes(state.filters.search);
//   });
//   return todoRemaining;
// };
// export const searchTextSelectors = (state) => state.filters.search;
//reselect

export const todoRemainingSelector = createSelector(
  todoListSelectors,
  statusFilterSelectors,
  searchTextSelectors,
  filterPrioritiesSelectors,
  (todoList, status, searchText, priorities) => {
    return todoList.filter((todo) => {
      if (status === "All") {
        return priorities.length
          ? todo.name.includes(searchText) && priorities.includes(todo.priority)
          : todo.name.includes(searchText);
      }
      return (
        todo.name.includes(searchText) &&
        (status === "Completed"
          ? todo.completed
          : !todo.completed &&
            (priorities.length ? priorities.includes(todo.priority) : true))
      );
    });
  }
);
