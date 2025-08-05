import { ImageIcon, Link2, Video } from "lucide-react";
import React from "react";
import { useTheme } from "../../context/ThemeProvider";

interface NewPostProps {
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const NewPost: React.FC<NewPostProps> = ({ setShowModal }) => {
  const { lightMode } = useTheme();

  return (
    <div className="glass-card border-[var(--foreground)]/20 rounded-lg">
      <div className="p-4 md:p-6">
        <div className="flex items-center space-x-2 md:space-x-4 mb-4">
          {/* Pfp */}
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOGmbVlXYi1BEuOw7ySL36qCQ7BvT5jqzxvg&s"
            alt="PFP"
            className="h-12 w-12 md:h-15 md:w-15 rounded-full"
          />
          {/* post starter button to open post creator modal */}
          <button
            onClick={() => setShowModal(true)}
            type="button"
            className={`border ${
              lightMode
                ? "bg-transparent border-[var(--foreground)]/80"
                : "bg-[var(--foreground)]/5 border-[var(--foreground)]/20"
            } text-[var(--foreground)] w-full h-12 md:h-15 px-2 py-1 md:px-4 md:py-2 rounded-full flex flex-wrap justify-start items-center text-xs md:text-sm hover:cursor-pointer`}
          >
            Share your thoughts with the community...
          </button>
        </div>

        {/* Actions */}
        <div className="flex flex-wrap items-center justify-between gap-5 md:justify-center md:gap-10 mt-5">
          <p className="text-xs text-[var(--foreground)]/60">Add a :</p>

          {/* Trigger modal instead of file input */}
          <button
            onClick={() => setShowModal(true)}
            className={`flex items-center space-x-2 text-[var(--foreground)]/70 ${
              lightMode
                ? "hover:text-[var(--neon-blue)]"
                : "hover:text-[var(--neon-cyan)]"
            } hover:cursor-pointer transition-all duration-500`}
          >
            <ImageIcon className="h-5 w-5" />
            <span className="text-sm">Photo</span>
          </button>

          <button
            onClick={() => setShowModal(true)}
            className={`flex items-center space-x-2 text-[var(--foreground)]/70 ${
              lightMode
                ? "hover:text-[var(--neon-blue)]"
                : "hover:text-[var(--neon-cyan)]"
            } hover:cursor-pointer transition-all duration-500`}
          >
            <Video className="h-5 w-5" />
            <span className="text-sm">Video</span>
          </button>

          <button
            onClick={() => setShowModal(true)}
            className={`flex items-center space-x-2 text-[var(--foreground)]/70 ${
              lightMode
                ? "hover:text-[var(--neon-blue)]"
                : "hover:text-[var(--neon-cyan)]"
            } hover:cursor-pointer transition-all duration-500`}
          >
            <Link2 className="h-5 w-5" />
            <span className="text-sm">Link</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewPost;
