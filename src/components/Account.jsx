import React from 'react'
import { UserAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Account = () => {

	const {user, logout} = UserAuth()
	const navigate = useNavigate()

	const handlelogout = async () =>{
		try {
			await logout()
			navigate('/')
		} catch (error) {
			console.log(error.message);
		}
	}

  return (
	<div>
		<div className="text-center text-3xl py-28">
			<h1 className="">Hello World <span className="block"> {user?.email}</span></h1>
			<button onClick={handlelogout} className="mt-10 bg-blue-500 px-5 py-3 text-white rounded-xl">Log out</button>
		</div>
	</div>
  )
}

export default Account