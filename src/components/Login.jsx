import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom';
import { UserAuth } from '../context/AuthContext';


const Main = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate();
  const { signin } = UserAuth();
  
  const handleSubmit = async (e)=>{
    e.preventDefault()
    setError('')
      try {
        await signin(email, password)
        navigate('/account')
      } catch (e) {
        setError(e.message)
      }
    }
  
 

  return (
    <>
      
      <div className="">
        <h1 className="text-3xl font-primary mt-10 text-center mb-10">Login here</h1>
        <div className="bg-gradient-to-r from-purple-100 via-green-100 to-cyan-100 shadow-xl rounded-xl px-10 mx-auto lg:w-[60%] md:[w-80%]  w-[90%] py-10">
          <form onSubmit={handleSubmit}>
            <div className="text-xl py-2 flex flex-col">
              <label className='mb-1'>Email:</label>
              <input onChange={(e)=>{setEmail(e.target.value)}} className='px-3 bg-gray-100  md:w-[60%] rounded-xl py-1 shadow-inner' type="email" />
            </div>
            <div className="text-xl py-2 flex flex-col">
              <label className='mb-1'>Password:</label>
              <input onChange={(e)=>{setPassword(e.target.value)}} className='px-3 bg-gray-100  md:w-[60%] rounded-xl py-1 shadow-inner' type="password" />
            </div>
            <p className="mt-1">New here? <Link to="/" className='text-blue-500 ml-1'>Sign up</Link> </p>
            <div className="flex items-center mt-8">
              <button className="bg-[#4285F4] font-secondary font-semibold text-white px-5 py-2 rounded-full mr-7 hover:bg-blue-600 hover:text-white ">Log in</button>
            </div>
          </form>
        </div>
        {error ? <p className='text-red-500 mt-5 ml-9'>{error}</p> : null}
      </div>
    </>
  )
}

export default Main