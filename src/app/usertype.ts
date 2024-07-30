export type PostType = {
  content: string;
  likes: number;
};

export type UserType = {
  email: string;
  password: string;
  username: string;
  hobbies: string[];
  post: PostType[];
};
