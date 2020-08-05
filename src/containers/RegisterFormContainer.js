import React from 'react'
import { useForm } from 'react-hook-form'

import { AuthForm } from '../components'

const RegisterFormContainer = () => {
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
      submitText='Create Account'
    />
  )
}

export default RegisterFormContainer
