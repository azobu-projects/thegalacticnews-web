import React from 'react'
import styled, { useColorMode } from '@xstyled/emotion'

import { Toggle } from '../components'

const ColorModeToggle = () => {
  const [mode, setColorMode] = useColorMode(false)

  return (
    <Toggle
      mode={mode}
      onClick={() => setColorMode(mode === 'dark' ? 'default' : 'dark')}
    />
  )
}

export default ColorModeToggle
