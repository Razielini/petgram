import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Form, Input, Title, Error } from './styles'
import { SubmitButton } from '../SubmitButton/index'

export const UserForm = ({ error, disabled, onSubmit, title }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (event) => {
    event.preventDefault()
    const eValue = email.value
    const pValue = password.value
    console.log('email: ', { eValue })
    console.log('password: ', { pValue })
    onSubmit({
      email: email.value,
      password: password.value
    })
  }

  return (
    <>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Input
          disabled={disabled}
          type='text'
          placeholder='Email'
          {...email}
        />
        <Input
          disabled={disabled}
          type='password'
          placeholder='password'
          {...password}
        />
        <SubmitButton disabled={disabled}>{title}</SubmitButton>
      </Form>
      {
        error && <Error>{error}</Error>
      }
    </>
  )
}
