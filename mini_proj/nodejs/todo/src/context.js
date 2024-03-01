import { createContext, useContext, useEffect, useState } from "react";

export const TodoContext = createContext();

export const ContextStore = (props) => {
  const [todo, setTodo] = useState([]);

  return (
    <TodoContext.Provider value={[todo, setTodo]}>
      {props.children}
    </TodoContext.Provider>
  )
};