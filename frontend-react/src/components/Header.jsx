import {useContext} from 'react'
import Buttons from './Buttons'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Login from './Login'
import { AuthContext } from '../AuthProvider'
const Header = () => {


  const {isLoggedIn,setIsLoggedIn}=useContext(AuthContext);
  const navigate = useNavigate()

  const handleLogOut=()=>{
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refereshToken');
    setIsLoggedIn(false);
    navigate('./login');
  }


  return (
    <>
      {/* <h2 className='text-light'>Header</h2> */}
      <nav className='navbar container pt-3 pb-3 align-items-start'>
        <Link className='navbar-brand text-light' to='/'>Stock Prediction Portal</Link>
        <div>
          {isLoggedIn ?(
            <button className='btn btn-danger' onClick={handleLogOut}>Logout</button>
          ):(
            <>
            <Buttons text="Login" class="btn btn-outline-info" url='/login'/>
            &nbsp;
            <Buttons  text='Register' class='btn btn-info' url='/register' />

            
            </>
          )}


            
        </div>
      </nav>
    </>
  )
}

export default Header
