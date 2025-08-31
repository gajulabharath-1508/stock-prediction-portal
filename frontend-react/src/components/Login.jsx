import React,{useContext,useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../AuthProvider'

const Login = () => {
const [username,setUsername]=useState("")
const [password,setPassword]=useState("")
const [loading,setLoading]=useState(false)
const navigate =useNavigate()
const [error,setError]=useState('')
const {isLoggedIn,setIsLoggedIn}=useContext(AuthContext)

const handleLogin= async (e) =>{
  e.preventDefault();
  setLoading(true);

  const userData={username,password}
    // console.log(userData);
    try{
      const response = await axios.post('http://127.0.0.1:8000/api/v1/token/', userData)
      console.log("Successfull");
      localStorage.setItem('accessToken',response.data.access)
      localStorage.setItem('refreshToken',response.data.refresh)

      console.log('Login successful');
      navigate('/')
      setIsLoggedIn(true)

    }catch(error){
      console.error( 'Invalid credentials')
      setError('Invalid credentials')
      if (error.response) {
      console.error("Error response:", error.response.data);
      setError(error.response.data.detail || 'Invalid credentials');
      }else {
      console.error("Error:", error.message);
      setError('Something went wrong');
    }

    }finally{
      setLoading(false);
    }
  }
  return (
    <>
      <div className='container'>
        <div className="row justify-content-center">
          <div className="col-md-6 bg-light-dark p-5 rounded">
            <h3 className='text-light text-center mb-4'>Create an Account</h3>
            <form onSubmit={handleLogin}>
              <div className='mb-3'>
                <input type="text" className='form-control ' placeholder='UserName' value={username} onChange={(e)=>setUsername(e.target.value)}/>
                

              </div>
              <div className='mb-3'>
                <input type="text" className='form-control' placeholder='Set Password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
               

              </div>

              {error && <div className='text-danger'>{error}</div>}

              
              {loading ?(
                <button type='submit' className='btn btn-info d-block mx-auto' disabled> <FontAwesomeIcon icon={faSpinner} spin/>Logging you in..</button>
              ):(
                <button type='submit' className='btn btn-info d-block mx-auto'>Login</button>

              )}
              

            </form>

          </div>
        </div> 
      </div>
    
    
    </>
  )
}

export default Login
