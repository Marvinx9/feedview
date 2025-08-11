type AuthorData = {
  avatarUrl: string;
  name: string;
  role: string;
};

export type PostType = {
  id?: number;
  author: AuthorData;
  content: string;
  publishedAt: Date;
};
