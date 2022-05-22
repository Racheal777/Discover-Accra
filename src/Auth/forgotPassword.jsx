
import React, { useState } from 'react'
import { Link } from "react-router-dom";

const ForgotPassword = () => {
    const [ email, setEmail ] = useState('')


    return (
        <div className='md:container md:mx-auto formzz'>
      
      <section className='center sm:container'>

      <h2>Discover</h2>
      <form className='forms sm:container w-full md:w-2/4'>
      <div>
          <h3>Forgot Password</h3>
        </div>
        
        <div className='form-input'>
          <label>Email</label>
          <input type="email"
          value={email}
          placeholder="please enter your email"
          onChange= {(e) => setEmail(e.target.value)}
          />
        </div>


        <div className='form-input'>
          <button type='submit'>Send Mail</button>
        </div>
        <Link to = '/password-reset'>reset password</Link>
        


      </form>
      </section>
    </div>
    );
}

export default ForgotPassword;
