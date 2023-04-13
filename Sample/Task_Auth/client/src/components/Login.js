import React from 'react'

function Login() {
  
  return (
    <div class="form-container sign-in-container">
            <form id="login_form" method="post" action="./index.html" onsubmit=" return loginForm()">
            <label for="email">Email:</label>
         <input class="form-control"  type="email" id="email" name="email" placeholder="Email"/>
         <label for="password">Password:</label>
       <input class="form-control"  type="password" id="password" name="password" placeholder="Enter Password"/>
                <div class="button_space">
          <button type="submit" class="loginButton">Login</button>
         </div>
                <a href="#">Forgot your password?</a>
            </form>
        </div>
  )
}

export default Login
