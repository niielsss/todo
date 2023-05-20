import { ListItem, ListItemButton } from "@mui/material";
import React, { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CloseIcon from '@mui/icons-material/Close';
import { ListItemIcon, ListItemText } from "@mui/material";
import { Checkbox, IconButton } from "@mui/material";
import '../styles/TodoItem.css';
import { FormControl, TextField } from "@mui/material";

function TodoItem({ todo, onTodoClick, onTodoDelete, onTodoEdit }) {
    const [isEditing, setIsEditing] = useState(false);
    const [editedText, setEditedText] = useState(todo.text);

    const handleTextChange = (e) => {
        setEditedText(e.target.value);
    };

    const handleEditSubmit = (e) => {
        e.preventDefault();
        onTodoEdit(todo.id, editedText);
        setIsEditing(false);
    };

    const handleEditClick = () => {
        setIsEditing(true);
        setEditedText(todo.text);
    };

    const handleCancelClick = () => {
        setIsEditing(false);
        setEditedText(todo.text);
    };


    return (
        <ListItem
            disablePadding
            secondaryAction={
                <>
                    {isEditing ? (
                        <>
                            <IconButton edge='end' aria-label='cancel' onClick={handleCancelClick}>
                                <CloseIcon />
                            </IconButton>
                            <IconButton edge='end' aria-label='save' onClick={handleEditSubmit}>
                                <EditIcon />
                            </IconButton>
                        </>
                    ) : (
                        <IconButton edge='end' aria-label='edit' onClick={handleEditClick}>
                            <EditIcon />
                        </IconButton>
                    )}
                    <IconButton
                        edge='end'
                        aria-label='delete'
                        onClick={() => onTodoDelete(todo.id)}
                    >
                        <DeleteIcon />
                    </IconButton>
                </>
            }
        >
            <ListItemButton
                role={undefined}
                dense
            >
                <ListItemIcon>
                    <Checkbox
                        edge='start'
                        checked={todo.completed}
                        tabIndex={-1}
                        disableRipple
                        onClick={() => onTodoClick(todo.id)}
                    />
                </ListItemIcon>
                {
                    isEditing ?
                        <form onSubmit={handleEditSubmit}>
                            <FormControl error variant='standard'>
                                <TextField
                                    id='todo-input-edit'
                                    label='Edit Todo'
                                    variant='standard'
                                    size='small'
                                    onChange={handleTextChange}
                                    value={editedText}
                                />
                            </FormControl>
                        </form>
                        :
                        <ListItemText
                            id={todo.id}
                            primary={todo.text}
                            sx={{
                                textDecoration: todo.completed ? 'line-through' : 'none',
                                color: todo.completed ? 'gray' : 'black',
                                wordBreak: 'break-word'
                            }}
                            className="todo-item-text"
                        />
                }
            </ListItemButton>
        </ListItem>
    )
}

export default TodoItem;