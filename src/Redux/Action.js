// export const CREATE_TODO = "CREATE_TODO";

// export const createTodo = (payload) => {
//   console.log("payload---------->", payload);

//   return {
//     type: CREATE_TODO,
//     payload,
//   };
// };

export const CREATE_TODO = "CREATE_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const RESTORE_TODO = "RESTORE_TODO";

export const create = (payload) => {
  //   console.log("payload=======>", payload);

  return {
    type: CREATE_TODO,
    payload,
  };
};

export const deleteTodo = (payload) => {
  //   console.log("payload=======>", payload);

  return {
    type: DELETE_TODO,
    payload,
  };
};

export const editTodo = (payload, editValue) => {
  console.log("payload=======>", payload, editValue);

  return {
    type: EDIT_TODO,
    payload,
    editValue,
  };
};

export const restoreTodo = (payload) => {
  //   console.log("payload=======>", payload);

  return {
    type: RESTORE_TODO,
    payload,
  };
};
