'use client'

import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'
import '../assets/i18n'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="es">
      <body>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
