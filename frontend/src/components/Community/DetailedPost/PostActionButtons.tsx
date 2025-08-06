import { Heart, MessageCircle, Share2 } from "lucide-react";
import React from "react";
import { Post } from "../../../utils/constants";

interface PostActionButtonsProps {
  selectedPost: Post;
  onCommentClick: () => void;
}

const PostActionButtons: React.FC<PostActionButtonsProps> = ({ selectedPost, onCommentClick }) => {
  return (
    <div className="flex items-center justify-between text-sm text-[var(--foreground)]/80 border-t border-[var(--foreground)]/10 py-5 px-4">
      <button
        // onClick={() => handleLike(post.id)}
        className={`flex items-center space-x-2 transition-colors hover:cursor-pointer ${
          selectedPost.isLiked
            ? "text-red-400"
            : "text-[var(--foreground)]/70 hover:text-red-400"
        }`}
      >
        <Heart
          className={`h-5 w-5 ${selectedPost.isLiked ? "fill-current" : ""}`}
        />
        <span className="text-sm">
          {selectedPost.isLiked ? "Liked" : "Like"}
        </span>
      </button>
      <button
        onClick={onCommentClick}
        className="flex items-center space-x-2 text-[var(--foreground)]/70 hover:text-[var(--neon-blue)] transition-colors hover:cursor-pointer"
      >
        <MessageCircle className="h-5 w-5" />
        <span className="text-sm">Comment</span>
      </button>
      <button className="flex items-center space-x-2 text-[var(--foreground)]/70 hover:text-[var(--neon-purple)] transition-colors hover:cursor-pointer">
        <Share2 className="h-5 w-5" />
        <span className="text-sm">Share</span>
      </button>
    </div>
  );
};

export default PostActionButtons;
