import React from 'react';
import TextField from '@mui/material/TextField';
import { FormControl, Grid, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import '../styles/TodoInput.css';

function TodoInput({ onTextChange, onAddTodo, todo }) {

    return (
        <Grid item className='todo-input'>
            <form onSubmit={onAddTodo}>
                <FormControl error variant='standard'>
                    <TextField
                        id='todo-input'
                        label='Add Todo'
                        variant='standard'
                        size='small'
                        onChange={onTextChange}
                        value={todo.text}
                    />
                </FormControl>
                <IconButton
                    type='submit'
                    aria-label='add'
                    size='large'
                    sx={{ ml: 1 }}
                >
                    <AddIcon />
                </IconButton>
            </form>
        </Grid>
    );

}

export default TodoInput;