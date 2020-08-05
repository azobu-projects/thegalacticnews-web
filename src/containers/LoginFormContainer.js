import React from 'react'
import { useForm } from 'react-hook-form'

import { AuthForm } from '../components'

const LoginFormContainer = () => {
  const { register, handleSubmit, errors } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <AuthForm
      register={register}
      handleSubmit={handleSubmit}
      errors={errors}
      onSubmit={onSubmit}
      submitText='Login to My Account'
    />
  )
}

export default LoginFormContainer
