import React from "react";
import {
  ArrowLeft,
  MessageCircle,
  MoreHorizontal,
  Repeat2,
  Share2,
  ThumbsUp,
} from "lucide-react";
import { Post } from "../../utils/constants";
import { useTheme } from "../../context/ThemeProvider";
import PostSkeleton from "./PostSkeleton";

interface PostProps {
  selectedPost: Post | null;
  onClose: () => void;
}

const DetailedPost: React.FC<PostProps> = ({ selectedPost, onClose }) => {
  const { lightMode } = useTheme();

  if (!selectedPost) return <PostSkeleton />;

  return (
    <div className="fixed inset-0 z-50 bg-[var(--background)] text-[var(--foreground)] overflow-y-auto flex flex-col">
      {/* Top Bar */}
      <div className="sticky top-0 z-50 flex items-center px-4 py-3 border-b border-[var(--foreground)]/10 bg-[var(--background)] backdrop-blur-md">
        <button
          onClick={onClose}
          className="text-[var(--foreground)] hover:opacity-80"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h2 className="ml-3 text-lg font-semibold">Post</h2>
      </div>

      {/* Post Content */}
      <div className="w-full max-w-2xl mx-auto p-4">
        {/* Header */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-start gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--neon-purple)] to-[var(--neon-cyan)] text-white font-bold flex items-center justify-center">
              {selectedPost.author.avatar}
            </div>
            <div>
              <h3 className="font-semibold">{selectedPost.author.name}</h3>
              <p
                className={`text-sm ${
                  lightMode
                    ? "text-[var(--neon-blue)]"
                    : "text-[var(--neon-cyan)]"
                }`}
              >
                {selectedPost.author.role}
              </p>
              <p className="text-xs text-[var(--foreground)]/60 mt-0.5">
                {selectedPost.timestamp}
              </p>
            </div>
          </div>
          <button className="text-[var(--foreground)]/50 hover:text-[var(--foreground)]">
            <MoreHorizontal className="h-5 w-5" />
          </button>
        </div>

        {/* Text */}
        <div className="whitespace-pre-wrap break-words mb-4 text-[var(--foreground)]/90 leading-relaxed">
          {selectedPost.content}
        </div>

        {/* Media */}
        {selectedPost.media && (
          <div className="w-full max-h-[500px] overflow-hidden rounded-md mb-4 bg-black">
            {selectedPost.media.type === "image" ? (
              <img
                src={selectedPost.media.url}
                alt="post media"
                className="w-full h-auto object-cover"
              />
            ) : (
              <video
                src={selectedPost.media.url}
                controls
                className="w-full max-h-[400px] object-contain"
              />
            )}
          </div>
        )}

        {/* Action Bar */}
        <div className="flex items-center justify-between border-t border-[var(--foreground)]/10 mt-4">
          {[
            { icon: ThumbsUp, label: "Like" },
            { icon: MessageCircle, label: "Comment" },
            { icon: Repeat2, label: "Repost" },
            { icon: Share2, label: "Share" },
          ].map((action, idx) => (
            <button
              key={idx}
              className="w-full flex items-center justify-center gap-2 py-2 text-sm hover:bg-[var(--foreground)]/5 transition-all"
            >
              <action.icon className="w-4 h-4" />
              <span>{action.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailedPost;
