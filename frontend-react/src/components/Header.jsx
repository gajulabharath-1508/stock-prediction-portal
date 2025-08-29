import React from 'react'
import Buttons from './Buttons'
const Header = () => {
  return (
    <>
      {/* <h2 className='text-light'>Header</h2> */}
      <nav className='navbar container pt-3 pb-3 align-items-start'>
        <a className='navbar-brand text-light' href='#'>Stock Prediction Portal</a>
        <div>
            <Buttons text="Login" class="btn btn-outline-info"/>
            &nbsp;
            <Buttons  text='Register' class='btn btn-info'  />
        </div>
      </nav>
    </>
  )
}

export default Header
