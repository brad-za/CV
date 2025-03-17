import { request, gql } from "graphql-request";
import {
  Author,
  Category,
  Connection,
  Edge,
  Language,
  LanguagesResponse,
  Post,
  PostsArrayResponse,
  PostsResponse,
} from "../types/blog";

const graphqlAPI =
  "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cl8wysww80qjm01t7flfe9olh/master";

// Local posts storage (will be implemented later)
const localPosts: Post[] = [];

export const getCategories = async (): Promise<Edge<Language>[]> => {
  try {
    const query = gql`
      query {
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
    const result = await request<LanguagesResponse>(graphqlAPI, query);

    return result.languagesConnection.edges;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};

export const getPosts = async (): Promise<Edge<Post>[]> => {
  try {
    const query = gql`
      query {
        postsConnection(orderBy: publishedAt_DESC) {
          edges {
            node {
              exerpt
              slug
              author {
                bio
                name
                id
                photo {
                  url
                }
              }
              createdAt
              title
              featuredImage {
                url
              }
              categories {
                name
                slug
                posts {
                  id
                }
              }
              language {
                slug
                name
                icon {
                  url
                }
              }
            }
          }
        }
      }
    `;
    const result = await request<PostsResponse>(graphqlAPI, query);
    return result.postsConnection.edges;
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
};

export const getRecentPosts = async (): Promise<Post[]> => {
  try {
    const query = gql`
      query {
        posts(orderBy: createdAt_ASC, last: 3) {
          title
          slug
          createdAt
          language {
            name
            slug
            icon {
              url
            }
          }
          categories {
            name
            slug
          }
          featuredImage {
            url
          }
        }
      }
    `;
    const result = await request<PostsArrayResponse>(graphqlAPI, query);
    return result.posts;
  } catch (error) {
    console.error("Error fetching recent posts:", error);
    return [];
  }
};

export const getSimilarPosts = async (
  categories2: string,
  slug2: string
): Promise<Post[]> => {
  try {
    const query = gql`
      query ($slug2: String!, $categories2: String!) {
        posts(
          where: {
            slug_not: $slug2
            AND: { categories_some: { slug: $categories2 } }
          }
        ) {
          title
          slug
          createdAt
          language {
            name
            slug
            icon {
              url
            }
          }
          categories {
            name
            slug
          }
          featuredImage {
            url
          }
        }
      }
    `;
    const result = await request<PostsArrayResponse>(graphqlAPI, query, {
      slug2,
      categories2,
    });

    return result.posts;
  } catch (error) {
    console.error("Error fetching similar posts:", error);
    return [];
  }
};

export const getSimilarPosts2 = async (
  categories2: string,
  slug2: string,
  language: string
): Promise<Post[]> => {
  try {
    const query = gql`
      query ($slug2: String!, $language: String!, $categories2: String!) {
        posts(
          where: {
            slug_not: $slug2
            OR: [
              { categories_some: { slug: $categories2 } }
              { language: { slug: $language } }
            ]
          }
        ) {
          title
          slug
          createdAt
          language {
            name
            slug
            icon {
              url
            }
          }
          featuredImage {
            url
          }
          categories {
            name
            slug
          }
        }
      }
    `;
    const result = await request<PostsArrayResponse>(graphqlAPI, query, {
      slug2,
      categories2,
      language,
    });
    return result.posts;
  } catch (error) {
    console.error("Error fetching similar posts:", error);
    return [];
  }
};

export const getCategoriesSimple = async (
  category: string
): Promise<Edge<Language>[]> => {
  try {
    const query = gql`
      query ($category: String!) {
        languagesConnection {
          edges {
            node {
              name
              slug
              icon {
                url
              }
              categories(where: { NOT: { slug: $category } }) {
                name
                slug
              }
            }
          }
        }
      }
    `;
    const result = await request<LanguagesResponse>(graphqlAPI, query, {
      category,
    });
    return result.languagesConnection.edges;
  } catch (error) {
    console.error("Error fetching simple categories:", error);
    return [];
  }
};

export const getLanguagePosts = async (slug: string): Promise<Edge<Post>[]> => {
  try {
    const query = gql`
      query ($slug: String!) {
        postsConnection(where: { language: { slug: $slug } }) {
          edges {
            node {
              exerpt
              slug
              author {
                bio
                name
                id
                photo {
                  url
                }
              }
              createdAt
              title
              featuredImage {
                url
              }
              categories {
                name
                slug
                posts {
                  id
                }
              }
              language {
                slug
                name
                icon {
                  url
                }
              }
            }
          }
        }
      }
    `;
    const result = await request<PostsResponse>(graphqlAPI, query, { slug });
    return result.postsConnection.edges;
  } catch (error) {
    console.error("Error fetching language posts:", error);
    return [];
  }
};

export const getCategoryPosts = async (slug: string): Promise<Edge<Post>[]> => {
  try {
    const query = gql`
      query ($slug: String!) {
        postsConnection(where: { categories_some: { slug: $slug } }) {
          edges {
            node {
              exerpt
              slug
              author {
                bio
                name
                id
                photo {
                  url
                }
              }
              createdAt
              title
              featuredImage {
                url
              }
              categories {
                name
                slug
                posts {
                  id
                }
              }
              language {
                slug
                name
                icon {
                  url
                }
              }
            }
          }
        }
      }
    `;
    const result = await request<PostsResponse>(graphqlAPI, query, { slug });
    return result.postsConnection.edges;
  } catch (error) {
    console.error("Error fetching category posts:", error);
    return [];
  }
};

export const getPostDetails = async (slug: string): Promise<Post[]> => {
  try {
    const query = gql`
      query ($slug: String!) {
        posts(where: { slug: $slug }) {
          exerpt
          slug
          content {
            raw
          }
          author {
            bio
            name
            id
            photo {
              url
            }
          }
          createdAt
          title
          featuredImage {
            url
          }
          categories {
            name
            slug
            posts {
              id
            }
          }
          language {
            slug
            name
            icon {
              url
            }
          }
        }
      }
    `;
    const result = await request<PostsArrayResponse>(graphqlAPI, query, {
      slug,
    });
    return result.posts;
  } catch (error) {
    console.error("Error fetching post details:", error);
    return [];
  }
};
