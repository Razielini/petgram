import React, { useContext } from 'react'
import { Context } from '../Context'
import { SubmitButton } from '../components/SubmitButton/index'

export const User = () => {
  const { removeAuth } = useContext(Context)
  return (
    <>
      <h1>User Register</h1>
      <SubmitButton onClick={removeAuth}>Cerrar Sesión</SubmitButton>
    </>
  )
}
