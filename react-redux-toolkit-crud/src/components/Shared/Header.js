import React from 'react';
import { Link } from "react-router-dom";


const Header = () => {
  return (
    <div className='header'>
        <Link to="/home">Home</Link>
        <Link to="/showBooks">Show Books</Link>
        <Link to="/addBook">Add Book</Link>
    </div>
  )
}

export default Header