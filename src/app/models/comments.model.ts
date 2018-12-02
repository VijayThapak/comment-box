export interface Comments {
  id: string;
  icon: string;
  username: string;
  profession: string;
  comment: string;
  like: boolean;
  reply: boolean;
  timestamp: string;
  replies: Comment[];
}

export interface Comment {
  id: string;
  icon: string;
  username: string;
  profession: string;
  comment: string;
  like: boolean;
  reply: boolean;
  timestamp: string;
}
