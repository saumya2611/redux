import React, { useEffect, useState } from "react";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";

const Todo = () => {
  const [inputValue, setInputValue] = useState("");

  //   const currentState = useSelector((state) => {
  //     return state;
  //   });

  //   console.log("currentState-------->", currentState);

  const dispatch = useDispatch();

  const addItem = () => {
    dispatch(createTodo(inputValue));
    console.log("inputValue----->", inputValue);
    setInputValue("");
  };

  //   useEffect(() => {
  //     console.log("inputValue--------->", inputValue);
  //   }, [inputValue]);

  return (
    <div className="h-[50vh] flex justify-center items-center">
      <div className="flex gap-1">
        <input
          type="text"
          placeholder="Add Item"
          className="px-3 py-2 w-[300px] focus:outline-none border border-1 rounded-sm"
          value={inputValue}
          onChange={(ev) => setInputValue(ev.target.value)}
        />
        <Button
          title={"Add"}
          className={`px-7 py-2 bg-slate-500 hover:bg-slate-400 text-white rounded-sm`}
          onClick={addItem}
        />
      </div>
    </div>
  );
};

export default Todo;
