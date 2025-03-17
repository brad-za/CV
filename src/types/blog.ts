// Blog-related TypeScript interfaces

// Base interfaces for common properties
interface BaseNode {
  id?: string;
  name?: string;
  slug: string;
}

// Image interface
export interface Image {
  url: string;
  width?: number;
  height?: number;
}

// Author interface
export interface Author extends BaseNode {
  bio?: string;
  photo: Image;
}

// Language interface
export interface Language extends BaseNode {
  icon: Image;
  categories?: Category[];
}

// Category interface
export interface Category extends BaseNode {
  posts?: Post[];
}

// Content interfaces for rich text
export interface RichTextChild {
  text?: string;
  type?: string;
  bold?: boolean;
  italic?: boolean;
  underline?: boolean;
  code?: boolean;
  href?: string;
  title?: string;
  children?: RichTextChild[];
  className?: string;
  // Image properties
  src?: string;
  height?: number;
  width?: number;
}

export interface RichTextContent {
  type: string;
  children: RichTextChild[];
  className?: string;
}

export interface PostContent {
  raw: {
    children: RichTextContent[];
  };
}

// Post interface
export interface Post {
  title: string;
  slug: string;
  exerpt?: string;
  author: Author;
  createdAt: string;
  featuredImage: Image;
  categories: Category[];
  language: Language;
  content?: PostContent;
  isLocal?: boolean; // Flag to identify local posts
}

// GraphQL response interfaces
export interface Edge<T> {
  node: T;
}

export interface Connection<T> {
  edges: Edge<T>[];
}

export interface LanguagesResponse {
  languagesConnection: Connection<Language>;
}

export interface PostsResponse {
  postsConnection: Connection<Post>;
}

export interface PostsArrayResponse {
  posts: Post[];
}

// Table of contents interface
export interface TableOfContentItem {
  text: string;
  id: string;
  indent: number;
}
