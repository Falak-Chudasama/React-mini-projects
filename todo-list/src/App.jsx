import React, { useState, useEffect } from 'react';
import TodoForm from './components/TodoForm.jsx';
import TodoItem from './components/TodoItem.jsx';
import TodoProvidor, { TodoContext, useTodo } from './context/TodoContext.js';

function App() {
    const [todos, setTodos] = useState([]); // id: Date.now, task: '', isCompleted: false

    const addTodo = (todo) => {
        setTodos([...todos, { id: Date.now(), ...todo }]);
    }
    
    const updatedTodo = (id, todo) => {
        setTodos(todos.map(originalTodo => (originalTodo.id === id ? todo : originalTodo)))
    }
    
    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    }
    
    const toggleTodo = (id) => {
        setTodos(todos.map(todo => (todo.id === id ? {...todo, isCompleted: !todo.isCompleted} : todo)))
    }

    useEffect(() => {
        const todos = JSON.parse(localStorage.getItem('todos'));

        if (todos && todos.length > 0) {
            setTodos(todos);
        }
    },[]);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

    return (
        <TodoProvidor value={{ todos, addTodo, updatedTodo, deleteTodo, toggleTodo }}>
            <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */}
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                    </div>
                </div>
            </div>
        </TodoProvidor>
    );
}

export default App;