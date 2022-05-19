import React, { useState } from 'react'


export default function PasswordReset() {
    const [ newpassword, setNewpassword ] = useState('')
const [ confirmpassword, setConfirmPassword ] = useState('')

  return (
    <div className='md:container md:mx-auto formzz'>
      
      <section className='center sm:container'>

      {/* <h2>Discover</h2> */}
      <form className='forms sm:container w-full md:w-2/4'>
      
      <div>
          <h3>Password Reset</h3>
        </div>

        
        <div className='form-input'>
          <label>New Password</label>
          <input type="password"
          value={newpassword}
          onChange= {(e) => setNewpassword(e.target.value)}
          />
        </div>

        <div className='form-input'>
          <label>Confirm Password</label>
          <input type="password"
          value={confirmpassword}
          onChange= {(e) => setConfirmPassword(e.target.value)}
          />
        </div>

        <div className='form-input'>
          <button type='submit'>Reset</button>
        </div>


      </form>
      </section>
    </div>
  )
}
