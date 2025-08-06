import React from "react";
import { ArrowLeft, MoreVertical } from "lucide-react";
import { useNavigate } from "react-router-dom";

const PostSkeleton: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative bg-[var(--background)] text-[var(--foreground)] flex flex-col min-h-screen pb-20 animate-pulse">
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
            <div className="h-4 w-24 bg-[var(--foreground)]/10 rounded"></div>
          </div>
          <MoreVertical className="text-[var(--foreground)]/40" />
        </div>
      </div>

      {/* Post Content */}
      <div className="w-full max-w-4xl mx-auto p-4 lg:mt-4">
        {/* Header */}
        <div className="flex gap-4 items-center mb-4">
          <div className="w-14 h-14 rounded-full bg-[var(--foreground)]/10" />
          <div className="space-y-2 flex-1">
            <div className="h-4 w-1/3 bg-[var(--foreground)]/10 rounded" />
            <div className="h-3 w-1/4 bg-[var(--foreground)]/10 rounded" />
            <div className="h-2 w-1/6 bg-[var(--foreground)]/10 rounded" />
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-2 mb-4">
          <div className="w-full h-4 bg-[var(--foreground)]/10 rounded" />
          <div className="w-3/4 h-4 bg-[var(--foreground)]/10 rounded" />
          <div className="w-2/3 h-4 bg-[var(--foreground)]/10 rounded" />
        </div>

        {/* Media */}
        <div className="w-full h-[250px] bg-[var(--foreground)]/10 rounded-md mb-4" />

        {/* Like + Comment Count */}
        <div className="flex justify-between text-sm text-[var(--foreground)]/60 px-4 py-2 border-t border-[var(--foreground)]/10">
          <div className="h-3 w-1/5 bg-[var(--foreground)]/10 rounded" />
          <div className="h-3 w-1/6 bg-[var(--foreground)]/10 rounded" />
        </div>

        {/* Actions */}
        <div className="flex divide-x divide-[var(--foreground)]/10 border-t border-[var(--foreground)]/10">
          {[...Array(3)].map((_, idx) => (
            <div key={idx} className="w-full p-3 flex justify-center">
              <div className="h-3 w-1/2 bg-[var(--foreground)]/10 rounded"></div>
            </div>
          ))}
        </div>

        {/* Comments */}
        <div className="mt-6 space-y-5">
          {[...Array(2)].map((_, i) => (
            <div key={i} className="flex gap-4 items-start">
              <div className="w-10 h-10 bg-[var(--foreground)]/10 rounded-full" />
              <div className="flex-1 space-y-2">
                <div className="h-3 w-1/4 bg-[var(--foreground)]/10 rounded" />
                <div className="h-3 w-2/3 bg-[var(--foreground)]/10 rounded" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Sticky Input */}
      <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-[var(--foreground)]/10 bg-[var(--background)] px-4 py-3">
        <div className="max-w-4xl mx-auto flex items-center gap-3">
          <div className="w-10 h-10 bg-[var(--foreground)]/10 rounded-full" />
          <div className="flex-1 h-9 rounded-full bg-[var(--foreground)]/10" />
          <div className="w-6 h-6 bg-[var(--foreground)]/10 rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default PostSkeleton;
