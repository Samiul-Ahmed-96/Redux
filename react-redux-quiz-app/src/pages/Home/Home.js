import React from 'react'
import { Link } from 'react-router-dom'
import homeImg from '../../image/home.svg'


const Home = () => {
  return (
    <div className='home'>
        <div className="container">
          <div className="row align-items-center">
          <div className="col-md-8 col-sm-12"><img src={homeImg} alt="" /></div>
          <div className="col-md-4 col-sm-4">
            <h2>Welcome to quiz contest</h2>
          <Link className='common-btn' to='/quiz'>Start Now</Link></div>
          </div>
        </div>  
    </div>
  )
}

export default Home