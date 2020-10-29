import { gql } from '@apollo/client';

export const GET_USERNAME = gql`
  {
    getDoritosLotbUser(
      id: 19
    ) {
      username
    }
  }
`;

export const GET_INTEREST_LISTINGS = gql`
  {
    getDoritosLotbInterestListing(
      defaultLanguage: "en"
    ){
      edges{
        node {
          name
        }
      }
    }
  }
`;

export const SET_LOGIN = gql`
  mutation userLogin($username: String!, $password: String!) {
    userLogin(
      username: $username
      password: $password
    ) {
      token
      status
    }
  }
`;
