import { Grid, List } from '@mui/material';
import React from 'react';
import TodoItem from './TodoItem';
import '../styles/TodoList.css';


function TodoList({ todos, onTodoClick, onTodoDelete, onTodoEdit, editing, onTextChange }) {
    return (
        <Grid item className='todo-list'>
            <List
                sx={{
                    width: '100%',
                    maxWidth: 360,
                    bgcolor: 'background.paper',
                }}
            >
                {todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onTodoClick={onTodoClick}
                        onTodoDelete={onTodoDelete}
                        onTodoEdit={onTodoEdit}
                    />
                ))}
            </List>
        </Grid>
    );
}

export default TodoList;