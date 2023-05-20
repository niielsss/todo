import React, { useState, useEffect, useContext } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import { Grid } from '@mui/material';
import '../styles/TodoContainer.css';
import { GlobalState } from '../context/GlobalState';

function TodoContainer() {
    const useGlobalState = () => useContext(GlobalState);
    const { todos } = useGlobalState();
    const [todoList, setTodoList] = useState(todos);
    const [todo, setTodo] = useState({ id: 0, text: '', completed: false });

    const updateTodos = () => {
        GlobalState.set({ todos: todoList });
    };

    useEffect(() => {
        updateTodos(todoList);
    }, [todoList]);

    const addTodo = (e) => {
        e.preventDefault()
        if (todo.text.trim() === '') {
            return;
        }

        const newTodo = {
            id: Math.max(...todoList.map(todo => todo.id), 0) + 1,
            text: todo.text,
            completed: false,
        };

        setTodoList([...todoList, newTodo]);
        setTodo({
            id: Math.max(...todoList.map(todo => todo.id), 0) + 1,
            text: '',
            completed: false,
        });
    };

    const handleTodoChange = (e) => {
        setTodo({
            ...todo,
            text: e.target.value,
        });
    };



    const handleTodoClick = (id) => {
        const updatedTodoList = todoList.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    completed: !todo.completed,
                };
            }
            return todo;
        });

        setTodoList(updatedTodoList);
    };

    const handleTodoDelete = (id) => {
        const updatedTodoList = todoList.filter((todo) => todo.id !== id);
        setTodoList(updatedTodoList);
    };

    const handleTodoEdit = (id, text) => {
        const updatedTodoList = todoList.map((todo) => {
            if (todo.id === id) {
                return {
                    ...todo,
                    text: text,
                };
            }
            return todo;
        });
        setTodoList(updatedTodoList);
    };



    return (
        <Grid container direction={'column'} justifyContent={'center'} className='todo-container'>
            <TodoInput onTextChange={handleTodoChange} onAddTodo={addTodo} todo={todo} />
            <TodoList
                todos={todoList}
                onTodoClick={handleTodoClick}
                onTodoDelete={handleTodoDelete}
                onTodoEdit={handleTodoEdit}
            />
        </Grid>
    );
}

export default TodoContainer;