import React from "react";
import { Post } from "../../../utils/constants";
import { useTheme } from "../../../context/ThemeProvider";
import LinkifyText from "../../Miscellaneous/LinkifyText";

interface PostContentProps {
  selectedPost: Post;
}

const PostContent: React.FC<PostContentProps> = ({ selectedPost }) => {
  const { lightMode } = useTheme();

  return (
    <>
      {/* Header */}
      <div className="flex gap-2 lg:gap-4">
        <div className="w-15 h-15 rounded-full bg-gradient-to-br from-[var(--neon-purple)] to-[var(--neon-cyan)] flex items-center justify-center text-white font-bold text-lg">
          {selectedPost.author.avatar}
        </div>
        <div>
          <h3
            className="font-semibold text-md lg:text-lg text-[var(--foreground)] max-w-[75vw] truncate"
            title={selectedPost.author.name}
          >
            {selectedPost.author.name}
          </h3>
          <p
            className={`text-xs lg:text-sm truncate ${
              lightMode ? "text-[var(--neon-blue)]" : "text-[var(--neon-cyan)]"
            }`}
          >
            {selectedPost.author.role}
          </p>
          <p className="text-xs text-[var(--foreground)]/60">
            {selectedPost.timestamp}
          </p>
        </div>
      </div>

      {/* Post Text */}
      <p className="mt-4 mb-4 text-md lg:text-lg text-[var(--foreground)]/90 leading-relaxed">
        <LinkifyText text={selectedPost.content || ""} />
      </p>

      {/* Media */}
      {selectedPost.media && (
        <div className="mb-4 rounded-md overflow-hidden bg-black max-h-[500px]">
          {selectedPost.media.type === "image" ? (
            <img
              src={selectedPost.media.url}
              alt="post media"
              className="w-full max-h-[400px] object-contain"
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
    </>
  );
};

export default PostContent;
