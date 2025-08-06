import React from "react";
import { Post } from "../../../utils/constants";
import {
  Calendar,
  Heart,
  MessageCircle,
  MoreHorizontal,
  Share2,
} from "lucide-react";
import { useTheme } from "../../../context/ThemeProvider";
import LinkifyText from "../../Miscellaneous/LinkifyText";
import { useNavigate } from "react-router-dom";

interface FeedPostProps {
  post: Post;
}

const FeedPost: React.FC<FeedPostProps> = ({ post }) => {
  const { lightMode } = useTheme();
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate(`${post.id}`)} className="glass-card border-[var(--foreground)]/10 hover:border-[var(--foreground)]/20 transition-colors md:rounded-md">
      <div className="p-4 md:p-6">
        {/* Post Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-start space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-[var(--neon-purple)] to-[var(--neon-cyan)] rounded-full flex items-center justify-center text-white font-bold">
              {post.author.avatar}
            </div>
            <div>
              <h3 className="font-semibold text-[var(--foreground)]">
                {post.author.name}
              </h3>
              <p
                className={`${
                  lightMode
                    ? "text-[var(--neon-blue)]"
                    : "text-[var(--neon-cyan)]"
                } text-sm`}
              >
                {post.author.role}
              </p>
            </div>
          </div>
          <button className="text-[var(--foreground)]/50 hover:text-[var(--foreground)]/70 transition-colors">
            <MoreHorizontal className="h-5 w-5" />
          </button>
        </div>

        {/* Post Content */}
        <div className="mb-4">
          <p className="text-[var(--foreground)]/90 leading-relaxed">
            <LinkifyText text={post.content || ""} />
          </p>
        </div>

        {/* Post Media */}
        {post.media && (
          <div className="mb-4">
            {post.media.type === "image" ? (
              <img
                src={post.media.url}
                alt="Post media"
                className="w-full rounded-lg max-h-80 object-contain"
              />
            ) : (
              <video
                src={post.media.url}
                className="w-full rounded-lg max-h-80 object-contain"
                controls
              />
            )}
          </div>
        )}

        {/* Post Actions */}
        <div className="flex flex-wrap gap-4 items-center justify-between pt-4 border-t border-[var(--foreground)]/10">
          <div className="flex flex-wrap gap-6">
            <button
              // onClick={() => handleLike(post.id)}
              className={`flex items-center space-x-2 transition-colors ${
                post.isLiked
                  ? "text-red-400"
                  : "text-[var(--foreground)]/70 hover:text-red-400"
              }`}
            >
              <Heart
                className={`h-5 w-5 ${post.isLiked ? "fill-current" : ""}`}
              />
              <span className="text-sm">{post.likes}</span>
            </button>
            <button
              // onClick={() => handleComment(post.id)}
              className="flex items-center space-x-2 text-[var(--foreground)]/70 hover:text-neon-cyan transition-colors"
            >
              <MessageCircle className="h-5 w-5" />
              <span className="text-sm">{post.comments.length}</span>
            </button>
            <button className="flex items-center space-x-2 text-[var(--foreground)]/70 hover:text-neon-purple transition-colors">
              <Share2 className="h-5 w-5" />
              <span className="text-sm">Share</span>
            </button>
          </div>
          <div className="flex items-center text-[var(--foreground)]/50 text-xs gap-1">
            <Calendar className="h-3 w-3" />
            {post.timestamp}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedPost;
