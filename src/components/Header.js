import React from 'react'

const Header = () => {
  return (
    <header>
      <div>
        <a href='/menu'>Menu</a>
      </div>

      <h1>
        <img src='/assets/images/logo.svg' alt='The Galactic News' />
      </h1>

      <div>
        <a href='/register'>Register</a>
        <a href='/login'>Login</a>
      </div>
    </header>
  )
}

export default Header
