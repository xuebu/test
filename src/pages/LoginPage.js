import React from 'react'
import { login } from '../utils/xhr'

const LoginPage = ({ history }) => (
  <div>
    <h1>Login Page</h1>
    <p>
      Hello World !
    </p>
    <button onClick={() => {
      login().then(() => {
        history.push('/app')
      })
    }}>Login</button>
  </div>
)

export default LoginPage