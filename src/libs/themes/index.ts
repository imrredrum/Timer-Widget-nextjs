'use client'

import { createTheme } from '@mui/material'

const theme = createTheme({
  cssVariables: true,
  typography: {
    fontFamily: 'var(--font-roboto)',
  },
  palette: {
    mode: 'dark',
  },
})

export default theme
