import React from 'react'
import PropTypes from 'prop-types'
import styled from '@xstyled/emotion'

const Form = styled.form``

const Field = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20;
`

const Label = styled.label`
  font-weight: bold;
  font-size: 1.2em;
`

const Input = styled.input`
  padding: 3;
  font-size: 1.2em;
  border: 2;
  border-radius: 5;
  border-color: border;
`

const Submit = styled.input`
  cursor: pointer;
  border-radius: 5;
  border: none;
  color: #fff;
  font-size: 1.2em;
  font-weight: bold;
  letter-spacing: 0.1em;
  padding: 3;
  text-transform: uppercase;
  width: 100%;
  background-color: primary;
  &:hover {
    background-color: secondary;
  }
`

const AuthForm = ({ register, handleSubmit, errors, onSubmit, submitText }) => {
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Field>
        <Label htmlFor='email'>Email Address</Label>
        <Input
          name='email'
          type='text'
          ref={register({ required: true })}
          placeholder='name@planet.com'
        />
        {errors.email && <span>Valid email is required</span>}
      </Field>

      <Field>
        <Label htmlFor='password'>Password</Label>
        <Input
          name='password'
          type='password'
          ref={register({ required: true })}
          placeholder='*****'
        />
        {errors.password && <span>Password is required</span>}
      </Field>

      <Submit type='submit' value={submitText} />
    </Form>
  )
}

AuthForm.propTypes = {
  register: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  onSubmit: PropTypes.func.isRequired,
  submitText: PropTypes.string.isRequired
}

export default AuthForm
