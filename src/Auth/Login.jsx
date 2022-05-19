import React, { useState } from 'react'
import { Link } from "react-router-dom";



export default function Login() {

//states for users data
const [ email, setEmail ] = useState('')
const [ password, setPassword ] = useState('')


  return (
    <div className='md:container md:mx-auto form'>
      
      <section className='center sm:container'>

      <h2>Discover</h2>
      <form className='forms sm:container w-full md:w-2/4'>

      <div>
          <h3>Welcome</h3>
        </div>


        <div className='form-input'>
          <label>Email</label>
          <input type="email"
          value={email}
          onChange= {(e) => setEmail(e.target.value)}
          />
        </div>

        <div className='form-input'>
          <label>Password</label>
          <input type="password"
          value={password}
          onChange= {(e) => setPassword(e.target.value)}
          />
        </div>

        <div className='form-input'>
          <button type='submit'>Login</button>
        </div>

        <div>
          <Link to = "/forgot-passsword">Forgot Password ?</Link>
          
          <p>Dont have an account?</p>
          <div className='form-inputs'>
          <button><Link to = "/signup">Signup</Link></button> 
          </div>
         
        </div>


      </form>
      </section>
    </div>
  )
}
