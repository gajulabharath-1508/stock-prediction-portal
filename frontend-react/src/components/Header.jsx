import React from 'react'
import Buttons from './Buttons'
import { Link } from 'react-router-dom'
import Login from './Login'
const Header = () => {
  return (
    <>
      {/* <h2 className='text-light'>Header</h2> */}
      <nav className='navbar container pt-3 pb-3 align-items-start'>
        <Link className='navbar-brand text-light' to='/'>Stock Prediction Portal</Link>
        <div>
            <Buttons text="Login" class="btn btn-outline-info" url='/login'/>
            &nbsp;
            <Buttons  text='Register' class='btn btn-info' url='/register' />
        </div>
      </nav>
    </>
  )
}

export default Header
