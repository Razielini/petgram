import React, { useContext } from 'react'
import { Context } from '../Context'
import { UserForm } from '../components/UserForm/index'
import { RegisterMutation } from '../container/RegisterMutation'
import { LoginMutation } from '../container/LoginMutation'

export const NotRegisteredUser = () => {
  const { activateAuth } = useContext(Context)

  return (
    <>
      <RegisterMutation>
        {
          (register, { data, loading, error }) => {
            const onSubmit = ({ email, password }) => {
              const input = { email, password }
              const variables = { input }
              register({ variables }).then(response => {
                console.log(response)
                const { signup } = response.data
                activateAuth(signup)
              })
            }

            const errorMsg = error && 'El usuario ya existe o hay algun problema.'
            return (
              <UserForm
                disabled={loading}
                error={errorMsg}
                onSubmit={onSubmit}
                title='Registrarse'
              />
            )
          }
        }
      </RegisterMutation>

      <LoginMutation>
        {
          (login, { data, loading, error }) => {
            const onSubmit = ({ email, password }) => {
              const input = { email, password }
              const variables = { input }
              login({ variables }).then(response => {
                console.log(response.data)
                const { login } = response.data
                activateAuth(login)
              })
            }

            const errorMsg = error && 'El usuario no existe o la contraseña es incorrecta.'
            return (
              <UserForm
                disabled={loading}
                error={errorMsg}
                onSubmit={onSubmit}
                title='Iniciar Sesión'
              />
            )
          }
        }
      </LoginMutation>
    </>
  )
}
