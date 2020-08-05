import React from 'react'
import { useForm } from 'react-hook-form'

const RegisterFormContainer = () => {
  const { register, handleSubmit, errors } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name='email' type='text' ref={register({ required: true })} />
      {errors.email && <span>Valid email is required</span>}
      <input
        name='password'
        type='password'
        ref={register({ required: true })}
      />
      {errors.password && <span>Password is required</span>}
      <input type='submit' value='Register' />
    </form>
  )
}

export default RegisterFormContainer
