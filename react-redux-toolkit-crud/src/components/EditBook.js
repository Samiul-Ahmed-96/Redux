import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';
import { updateBook } from '../features/books/bookSlice';
const EditBook = () => {
const location = useLocation();
const navigate = useNavigate();

const [id,setId] = useState(location.state.id)
const [title,setTitle] = useState(location.state.title)
const [author,setAuthor] = useState(location.state.author)
const dispatch = useDispatch();
const handleUpdate = (e) =>{
    e.preventDefault();
    const newBook = {
        id,
        title,
        author
    }
    dispatch(updateBook(newBook))
    navigate('/showBooks')
}   
  return (
    <div>
        <h4>Edit Book</h4>
        <form onSubmit={handleUpdate}>
            <label htmlFor="">Title</label>
            <br />
            <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title} />
            <br />
            <label htmlFor="">Author</label>
            <br />
            <input type="text" onChange={(e)=>setAuthor(e.target.value)} value={author}/>
            <br />
            <input type="submit" value="Update" />
        </form>
    </div>
    
  )
}

export default EditBook