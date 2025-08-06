import React from "react";
import { Comment } from "../../../utils/constants";
import NoCommentsSVG from "../../../assets/images/no-comments.svg";
import { useTheme } from "../../../context/ThemeProvider";
import LinkifyText from "../../Miscellaneous/LinkifyText";

interface CommentSectionProps {
  comments: Comment[];
}

const CommentSection: React.FC<CommentSectionProps> = ({ comments }) => {
  const { lightMode } = useTheme();

  return (
    <>
      {comments.length === 0 ? (
        <div className="mx-auto mt-10">
          <img
            src={NoCommentsSVG}
            alt="No Cooments"
            className="h-[30vh] w-full"
          />
          <p className="text-[var(--foreground)] text-center mt-2 lg:mt-5 text-md font-sans">
            Be the first one to comment
          </p>
        </div>
      ) : (
        <div className="mt-4 space-y-6">
          {comments.map((comment) => (
            <div key={comment.id} className="flex flex-col gap-3 items-start">
              {/* Header */}
              <div className="flex w-full items-center justify-between gap-4">
                <div className="flex gap-2">
                  <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gradient-to-br from-[var(--neon-purple)] to-[var(--neon-cyan)] flex items-center justify-center text-white font-bold text-lg">
                    {comment.author.avatar}
                  </div>
                  <div>
                    <h3
                      className="font-semibold text-md text-[var(--foreground)] max-w-[75vw] truncate"
                      title={comment.author.name}
                    >
                      {comment.author.name}
                    </h3>
                    <p
                      className={`text-xs max-w-[40vw] truncate ${
                        lightMode
                          ? "text-[var(--neon-blue)]"
                          : "text-[var(--neon-cyan)]"
                      }`}
                    >
                      {comment.author.name}
                    </p>
                  </div>
                </div>
                <p className="text-xs text-[var(--foreground)]/60">
                  {comment.timestamp}
                </p>
              </div>
              {/* comment */}
              <p className="text-sm lg:text-md text-[var(--foreground)]/90 leading-relaxed">
                <LinkifyText text={comment.content || ""} />
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default CommentSection;
