import React, { useState } from 'react'
import { Link } from "react-router-dom";

const Signup = () => {
    const [ userName, setUserName ] = useState('') 
const [ email, setEmail ] = useState('')
const [ password, setPassword ] = useState('')
const [ confirmpassword, setConfirmpassword ] = useState('')

    return (
        <div className='md:container md:mx-auto formm'>
      
      <section className='center sm:container '>

      <h2>Discover</h2>
      <form className='forms sm:container w-full md:w-2/4'>
        <div>
          <h3>Register to join amazing community</h3>
        </div>
        <div className='form-input'>
        <label>Email</label>
          <input type="email"
          value={email}
          onChange= {(e) => setEmail(e.target.value)}
          />
        </div>

        <div className='form-input'>
        <label>Username</label>
          <input type="text"
          value={userName}
          onChange= {(e) => setUserName(e.target.value)}
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
        <label>Confirm Password</label>
          <input type="password"
          value={confirmpassword}
          onChange= {(e) => setConfirmpassword(e.target.value)}
          />
        </div>

        <div className='form-input'>
          <button type='submit'>Register</button>
        </div>

        <div>
          <p>Already have an account ?</p><Link to = "/login">Login</Link>
        </div>

        {/* <div className=''>
          <button type='submit'>Login</button>
        </div> */}

      </form>
      </section>
    </div>
    );
}

export default Signup;
