import React from 'react'
import styled, { useColorMode } from '@xstyled/emotion'

import { Toggle } from '../components'

const InnerDarkModeToggle = styled.div`
  display: flex;
  margin: 0 auto;
  & > button {
    font-size: 1.2em;
    background: none;
    border: none;
    color: #ffe600;
    cursor: pointer;
    transition: color 0.3s ease;
    &:last-child {
      color: #666;
    }
    &:focus {
      outline: none;
    }
  }
`

const ColorModeToggle = () => {
  const [mode, setColorMode] = useColorMode(false)

  return (
    <InnerDarkModeToggle>
      <Toggle
        checked={mode === 'dark'}
        onChange={() => setColorMode(mode === 'dark' ? 'default' : 'dark')}
      />
    </InnerDarkModeToggle>
  )
}

export default ColorModeToggle
