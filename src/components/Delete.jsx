import React from 'react'
import { Trash2 } from 'lucide-react';
import axios from 'axios';

function Delete(props) {
const {id} = props;

const deleteTodoHandler = async (id) => {
    try {
        await axios.delete(`/api/v1/todo/delete/${id}`);
        // Optionally, update the state to remove the deleted item from the UI
    } catch (error) {
        console.error(error);
    }
};
  return (
    <button onClick={deleteTodoHandler}><Trash2 size={24} color='#ffffff' /></button>
  )
}

export default Delete