import { createContext, useContext } from "react";

const TodoContext = createContext({
    todos: [],
    addTodo: (todo) => {},
    updatedTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleTodo: (id) => {}
});

const useTodo = () => {
    return useContext(TodoContext);
}

const TodoProvidor = TodoContext.Provider;


export default TodoProvidor;
export { TodoContext, useTodo }