import React from 'react'
import styled from '@xstyled/emotion'

const ToggleButton = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin: 0 10;
  transition: opacity 0.2s ease-in-out;
  &:hover {
    opacity: 0.5;
  }
`

const Image = styled.img`
  height: 30;
`

const icon = {
  default: '/assets/icons/sun.svg',
  dark: '/assets/icons/moon.svg'
}

const Toggle = ({ mode, onClick }) => {
  return (
    <ToggleButton onClick={onClick}>
      <Image
        src={mode === 'dark' ? icon['default'] : icon['dark']}
        alt='Mode'
      />
    </ToggleButton>
  )
}

export default Toggle
