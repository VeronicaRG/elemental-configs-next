'use client'
import { ThemeProvider } from 'styled-components'
import { theme } from '../styles/theme'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
