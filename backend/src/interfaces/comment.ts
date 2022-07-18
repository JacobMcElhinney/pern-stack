export interface Comment {
    id: number;
    content: string;
    author: string | null; // nullable
    postId: number;
  } 