import { gql } from '@apollo/client'

export const LOGIN = gql`
  mutation LogIn($input: LogInInput!) {
    logIn(input: $input) {
      token
    }
  }
`
