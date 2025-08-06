import React from "react";
import {
  ArrowLeft,
  MoreVertical,
} from "lucide-react";
import { Post } from "../../utils/constants";
import PostSkeleton from "../../components/Miscellaneous/PostSkeleton";
import { useNavigate, useParams } from "react-router-dom";
import CommentSection from "../../components/Community/DetailedPost/CommentSection";
import PostActionButtons from "../../components/Community/DetailedPost/PostActionButtons";
import PostContent from "../../components/Community/DetailedPost/PostContent";
import CommentInput, { CommentInputRef } from "../../components/Community/DetailedPost/CommentInput";

const DetailedPost: React.FC = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const [posts] = React.useState<Post[]>(
    JSON.parse(localStorage.getItem("posts") || "[]")
  );
  const [selectedPost, setSelectedPost] = React.useState<Post | null>(null);
  const commentInputRef = React.useRef<CommentInputRef>(null);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  React.useEffect(() => {
    if (postId) {
      setTimeout(() => {
        const found = posts.find((p) => p.id === postId);
        setSelectedPost(found || null);
      }, 1000);
    }
  }, [postId, posts]);

    // 🔽 This function triggers the input focus
  const handleCommentClick = () => {
    commentInputRef.current?.focus();
  };

  if (!selectedPost) return <PostSkeleton />;

  return (
    <div className="relative bg-[var(--background)] text-[var(--foreground)] flex flex-col min-h-screen pb-20">
      {/* Top Bar */}
      <div className="sticky top-0 z-50 border-b border-[var(--foreground)]/10 bg-[var(--background)] backdrop-blur-md shadow-lg">
        <div className="flex items-center gap-3 px-4 py-3 max-w-6xl mx-auto justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate(-1)}
              className="hover:opacity-80 transition hover:cursor-pointer"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h2 className="text-lg font-semibold">Post</h2>
          </div>
          <MoreVertical className="hover:cursor-pointer text-[var(--foreground)]/60 hover:text-[var(--foreground)] transition-all" />
        </div>
      </div>

      {/* Post Content */}
      <div className="w-full max-w-4xl mx-auto p-4 lg:mt-4">
        <PostContent selectedPost={selectedPost} />

        {/* likes and comments count */}
        <div className="border-t border-[var(--foreground)]/10 mb-2 pt-2 text-sm text-[var(--foreground)]/70 flex items-center justify-between px-4 py-2">
          <span>
            {selectedPost.likes} {selectedPost.likes > 1 ? "likes" : "like"}
          </span>
          <span>
            {selectedPost.comments.length} {selectedPost.comments.length > 1 ? "comments" : "comment"}
          </span>
        </div>

        <PostActionButtons selectedPost={selectedPost} onCommentClick={handleCommentClick} />
        <CommentSection comments={selectedPost.comments} />
      </div>

      <CommentInput ref={commentInputRef} />
    </div>
  );
};

export default DetailedPost;
