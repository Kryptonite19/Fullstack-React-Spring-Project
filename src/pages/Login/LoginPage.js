import React from 'react'
import LoginForm from '../../components/LoginForm/LoginForm'

function LoginPage() {
  return (
    <>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        }}>
        <LoginForm/>
      </div>
    </>
  )
}

export default LoginPage