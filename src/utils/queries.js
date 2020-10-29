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
  query userLogin($username: String!, $password: String!) {
    userLogin(
      username: $username
      password: $password
    ) {
      token
      status
    }
  }
`;

export const SET_METADATA = gql`
  mutation {
    createDoritosLotbMetaData(
      key: "meta"
      path: "/Doritos/LOTB/Data/MetaData/"
      input: {
        activity: $activity
        metaobject: {
          id: 26
          type: "object"
        }
        metauser: {
          id: 19
          type: "object"
        }
      }
    ) {
      success
      message
    }
  }
`;
