import React, { useState } from 'react'
import { Link } from "react-router-dom";



export default function Login() {

//states for users data
const [ email, setEmail ] = useState('')
const [ password, setPassword ] = useState('')


  return (
    <div className='md:container md:mx-auto form'>
      
      <section className='center'>

      <h2>Discover</h2>
      <form className='forms'>
        {/* <div>
          <h1>Login</h1>
        </div> */}
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
          <Link to = "/">Forgot Password ?</Link>
          <p>Dont have an account? <Link to = "/signup">Signup</Link></p>
        </div>

        {/* <div className=''>
          <button type='submit'>Login</button>
        </div> */}

      </form>
      </section>
    </div>
  )
}
