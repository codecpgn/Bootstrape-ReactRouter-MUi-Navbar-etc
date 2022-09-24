import React from 'react'
import './Login3.css'
const Login3 = () => {
  return (
    <div>
      <div id="bg"></div>

<form>
  <div class="form-field">
    <input type="email" placeholder="Email / Username" required/>
  </div>
  
  <div class="form-field">
    <input type="password" placeholder="Password" required/>                       
      </div>
  
  <div class="form-field">
    <button class="btn" type="submit">Log in</button>
  </div>
</form>
    </div>
  )
}

export default Login3
