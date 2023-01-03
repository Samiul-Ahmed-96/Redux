import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header-main sticky-top'>
        <div className="header ">
     
              <li><Link to="/">Home</Link></li>
              <li><Link to="/quiz">Quizzes</Link></li>
              <li><Link to="/addQuiz">Add Quiz</Link></li>
           
        </div>
    </div>
  )
}

export default Header