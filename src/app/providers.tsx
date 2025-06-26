'use client'

import '../assets/i18n' 
import { theme } from '../styles/theme'
import { ThemeProvider } from 'styled-components'

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}