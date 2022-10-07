import { request, gql } from "graphql-request";

const graphqlAPI = import.meta.env.VITE_API;

export const getCategories = async () => {
  try {
    const query = gql`
      query getCategories {
        languagesConnection {
          edges {
            node {
              name
              slug
              categories {
                name
                slug
                posts {
                  title
                  slug
                }
              }
            }
          }
        }
      }
    `;
    const result = await request(graphqlAPI, query);

    // console.log(result);
    return result.languagesConnection.edges;
  } catch (error) {
    return error;
  }
};
