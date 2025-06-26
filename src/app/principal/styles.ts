import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: ${({ theme }) => theme.spacing.lg};
`

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
`

export const Button = styled.button`
  color: ${({ theme }) => theme.colors.primary};
`
