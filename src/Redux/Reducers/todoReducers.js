import React from "react";
import {
  CREATE_TODO,
  DELETE_TODO,
  EDIT_TODO,
  RESTORE_TODO,
} from "../Action/Index";

const initialState = {
  todoArr: [],
  restoreArr: [],
  idCnt: 1,
};

const TodoReducers = (state = initialState, action) => {
  //   console.log("state======>", state);

  const { type, payload, editValue } = action;
  switch (type) {
    case CREATE_TODO:
      const todoObj = {
        value: payload,
        id: state.idCnt,
      };
      //   console.log("todoData=======>", todoObj);
      return {
        ...state,
        todoArr: [...state.todoArr, todoObj],
        idCnt: state.idCnt + 1,
      };

    case DELETE_TODO:
      const deleteData = state.todoArr.filter((item) => {
        return item.id != payload;
      });

      const retoreItem = state.todoArr.find((item) => {
        return item.id === payload;
      });
      //   console.log("deleteData==========>", deleteData);
      //   console.log("retoreItem=======>", retoreItem);

      return {
        ...state,
        todoArr: deleteData,
        restoreArr: [...state.restoreArr, retoreItem],
      };

    case RESTORE_TODO:
      const newData = state.restoreArr.filter((item) => {
        return item.id != payload.id;
      });

      //   console.log("newData=======>", newData);

      return {
        restoreArr: newData,
        todoArr: [...state.todoArr, payload],
      };

    case EDIT_TODO:
      const updateData = state.todoArr.map((item) => {
        if (item.id === payload.id) {
          return {
            value: editValue,
            id: item.id,
          };
        }
        return item;
      });

      //   console.log("updateData=======>", updateData);

      return {
        ...state,
        todoArr: updateData,
      };

    default:
      return state;
  }
};
export default TodoReducers;
