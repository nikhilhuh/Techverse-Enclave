import { Send } from "lucide-react";
import React from "react";

export type CommentInputRef = {
  focus: () => void;
};

const CommentInput = React.forwardRef<CommentInputRef>((_, ref) => {
  const [commentText, setCommentText] = React.useState<string>("");

  const commentInputRef = React.useRef<HTMLInputElement>(null);

  // Expose focus method to parent
  React.useImperativeHandle(ref, () => ({
    focus: () => {
      commentInputRef.current?.focus();
    },
  }));

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-[var(--foreground)]/10 bg-[var(--background)] px-4 py-3">
      <div className="max-w-4xl mx-auto flex items-center gap-2">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--neon-purple)] to-[var(--neon-cyan)] text-white font-bold flex items-center justify-center">
          Y
        </div>
        <input
          ref={commentInputRef}
          type="text"
          id="commentInput"
          placeholder="Add a comment..."
          className="flex-1 px-4 py-2 rounded-full bg-[var(--foreground)]/10 text-sm outline-none placeholder:text-[var(--foreground)]/40 text-[var(--foreground)]"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          //   onKeyDown={(e) => {
          //     //       if (e.key === "Enter") handleCommentSubmit();
          //   }}
        />
        <button
          //     onClick={handleCommentSubmit}
          className="text-[var(--foreground)] hover:text-[var(--neon-blue)]"
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
});

export default CommentInput;
