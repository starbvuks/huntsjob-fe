import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  ApolloLink,
} from "@apollo/client";
import { gql } from "@apollo/client/core";

const baseUrl =
  "https://4bwp3j8vdl.execute-api.ap-south-1.amazonaws.com/Prod/api/";

const httpLink = createHttpLink({ uri: baseUrl });

const restLink = new ApolloLink((operation, forward) => {
  operation.setContext(({ headers = {} }) => ({
    headers: {
      ...headers,
      "Content-Type": "application/json",
    },
  }));

  return forward(operation);
}).concat(httpLink);

const client = new ApolloClient({
  link: restLink,
  cache: new InMemoryCache(),
});

// Country List
export const getCountryList = async () => {
  try {
    const response = await client.query({
      query: gql`
        query {
          Candidateregistration_GetCountryWithCountryCodesList {
            isSuccess
            message
            data
          }
        }
      `,
    });

    return response.data.Candidateregistration_GetCountryWithCountryCodesList
      .data;
  } catch (error) {
    console.error("Error fetching country list:", error);
    throw error;
  }
};

// Current Location List
const getCurrentLocationList = async () => {
  try {
    const response = await client.query({
      query: gql`
        query {
          Profile_GetLocations {
            isSuccess
            message
            data
          }
        }
      `,
    });

    return response.data.Profile_GetLocations.data;
  } catch (error) {
    console.error("Error fetching current location list:", error);
    throw error;
  }
};

// Nationality List
const getNationalityList = async () => {
  try {
    const response = await client.query({
      query: gql`
        query {
          Common_GetCountryList {
            isSuccess
            message
            data
          }
        }
      `,
    });

    return response.data.Common_GetCountryList.data;
  } catch (error) {
    console.error("Error fetching nationality list:", error);
    throw error;
  }
};

// Current Position List
const getCurrentPositionList = async () => {
  try {
    const response = await client.query({
      query: gql`
        query {
          CandidateRegistration_GetFunctionalAreaSpecializationDropDown {
            isSuccess
            message
            data
          }
        }
      `,
    });

    return response.data
      .CandidateRegistration_GetFunctionalAreaSpecializationDropDown.data;
  } catch (error) {
    console.error("Error fetching current position list:", error);
    throw error;
  }
};
