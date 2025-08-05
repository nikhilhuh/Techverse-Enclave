export interface MediaFile {
  type: "image" | "video";
  url: string;
  name: string;
}

export interface CreatePost {
  content: string;
  media: MediaFile | null;
}

export interface Post {
  id: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  timestamp: string;
  content: string;
  media: MediaFile | null;
  likes: number;
  isLiked: boolean;
  comments: Comment[];
}

export interface Comment {
  id: string;
  author: {
    name: string;
    avatar: string;
  };
  timestamp: string;
  content: string;
}