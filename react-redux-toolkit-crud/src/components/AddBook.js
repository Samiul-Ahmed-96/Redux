import React, { useState } from 'react'

const AddBook = () => {
  const [title,setTitle] = useState('')
  const [author,setAuthor] = useState('')

  console.log(title,author)

  return (
    <div>
      <h4>Add New Book</h4>
      <form>
        <label htmlFor="">Book Title</label>
        <br />
        <input onBlur={(e)=>setTitle(e.target.value)} type="text" name="" id="" />
        <br />
        <label htmlFor="">Author</label>
        <br />
        <input onBlur={(e)=>setAuthor(e.target.value)} type="text" name="" id="" />
      </form>
    </div>
  )
}

export default AddBook