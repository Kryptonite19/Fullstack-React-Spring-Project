import React from 'react'
import RegisterForm from '../../components/RegisterForm/RegisterForm'

function RegisterPage() {
  return (
    <>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        }}>
        <RegisterForm/>
      </div>
    </>
  )
}

export default RegisterPage