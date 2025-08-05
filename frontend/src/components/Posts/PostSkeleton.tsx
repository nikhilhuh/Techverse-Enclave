import React from "react";

const PostSkeleton: React.FC = () => {
  return (
    <div className="w-full max-w-xl mx-auto bg-[var(--background)] border border-[var(--foreground)]/10 rounded-xl shadow-md animate-pulse overflow-hidden">
      <div className="flex items-center gap-4 p-4">
        <div className="w-12 h-12 bg-[var(--foreground)]/10 rounded-full" />
        <div className="flex-1 space-y-2">
          <div className="w-1/3 h-4 bg-[var(--foreground)]/10 rounded"></div>
          <div className="w-1/2 h-3 bg-[var(--foreground)]/10 rounded"></div>
        </div>
      </div>

      <div className="px-4 space-y-2 mb-4">
        <div className="w-full h-3 bg-[var(--foreground)]/10 rounded"></div>
        <div className="w-3/4 h-3 bg-[var(--foreground)]/10 rounded"></div>
      </div>

      <div className="w-full h-56 bg-[var(--foreground)]/10" />

      <div className="flex divide-x divide-[var(--foreground)]/10 border-t border-[var(--foreground)]/10">
        {[...Array(4)].map((_, idx) => (
          <div key={idx} className="w-full p-3">
            <div className="h-3 w-1/2 mx-auto bg-[var(--foreground)]/10 rounded"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostSkeleton;
