import React, { useRef, useState } from "react";
import { X, ArrowLeft, ImageIcon, Video } from "lucide-react";
import { CreatePost, MediaFile, Post } from "../../utils/constants";
import { useTheme } from "../../context/ThemeProvider";

interface CreatePostModalProps {
  onClose: () => void;
  setPosts: React.Dispatch<React.SetStateAction<Post[]>>;
  setUploading: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreatePostModal: React.FC<CreatePostModalProps> = ({
  onClose,
  setPosts,
  setUploading,
}) => {
  const { lightMode } = useTheme();
  const [newPost, setNewPost] = useState<CreatePost>({
    content: "",
    media: null,
  });

  const [mediaPreview, setMediaPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  React.useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewPost({ ...newPost, content: e.target.value });
  };

  // to be done later and better
  const handleMediaUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const type = file.type;
    if (!type.startsWith("image/") && !type.startsWith("video/")) return;

    const mediaFile: MediaFile = {
      type: type.startsWith("image/") ? "image" : "video",
      url: URL.createObjectURL(file),
      name: file.name,
    };

    setNewPost({ ...newPost, media: mediaFile });
    setMediaPreview(mediaFile.url);
  };

  // to be done later and better
  const removeMedia = () => {
    setNewPost({ ...newPost, media: null });
    setMediaPreview(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handlePost = () => {
    setUploading(true);

    const post: Post = {
      id: Date.now().toString(), // unique id
      author: {
        name: "Nikhil Tiwari",
        avatar: "NT",
        role: "Co Founder",
      },
      comments: [],
      isLiked: false,
      likes: 0,
      media: newPost.media,
      timestamp: "Just now",
      content: newPost.content,
    };

    // Simulate upload time
    setTimeout(() => {
      setUploading(false);
      setPosts((prev) => [post, ...prev]);
    }, 4000);

    onClose();
  };

  return (
    <div className="fixed h-full inset-0 z-50 bg-black/40 flex justify-center items-center md:p-10">
      <div className="relative w-full h-full md:w-[60vw] md:h-auto bg-[var(--background)] text-[var(--foreground)] md:rounded-xl shadow-xl flex flex-col">
        {/* Top bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--foreground)]/10 md:rounded-t-xl">
          <button
            onClick={onClose}
            className="md:hidden text-[var(--foreground)] hover:opacity-80 hover:cursor-pointer"
          >
            <ArrowLeft className="h-6 w-6" />
          </button>
          <span className="text-md font-semibold mx-auto md:mx-0">
            Create a Post
          </span>
          <button
            onClick={onClose}
            className="hidden md:block text-[var(--foreground)] hover:opacity-80 hover:cursor-pointer"
          >
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Content Area */}
        <div className="flex-1 flex flex-col p-4 gap-4 overflow-y-auto">
          {/* Text Area */}
          <textarea
            id="PostContent"
            value={newPost.content}
            onChange={handleChange}
            placeholder="What do you want to talk about?"
            className="w-full h-full md:h-[300px] resize-none bg-transparent text-[var(--foreground)] placeholder:text-[var(--foreground)]/50 p-2 outline-none rounded-lg"
          />

          {/* to be done later and better */}
          {/* Media Preview */}
          {mediaPreview && (
            <div className="relative w-full rounded-lg overflow-hidden max-h-[300px]">
              {newPost.media?.type.startsWith("image/") ? (
                <img
                  src={mediaPreview}
                  alt="preview"
                  className="w-full object-contain rounded-md"
                />
              ) : (
                <video
                  src={mediaPreview}
                  controls
                  className="w-full object-contain rounded-md"
                />
              )}
              <button
                onClick={removeMedia}
                className="absolute top-2 right-2 bg-black/60 p-1 rounded-full text-white hover:bg-black/80"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          )}

          {/*  to be done later and better */}
          {/* Media Upload Buttons */}
          {!newPost.media && (
            <div className="flex w-full gap-4 justify-center items-center">
              <button
                onClick={() => {
                  if (!newPost.media) fileInputRef.current?.click();
                }}
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
                onClick={() => {
                  if (!newPost.media) fileInputRef.current?.click();
                }}
                className={`flex items-center space-x-2 text-[var(--foreground)]/70 ${
                  lightMode
                    ? "hover:text-[var(--neon-blue)]"
                    : "hover:text-[var(--neon-cyan)]"
                } hover:cursor-pointer transition-all duration-500`}
              >
                <Video className="h-5 w-5" />
                <span className="text-sm">Video</span>
              </button>

              <input
                type="file"
                accept="image/*,video/*"
                ref={fileInputRef}
                onChange={handleMediaUpload}
                className="hidden"
              />
            </div>
          )}
        </div>

        {/* Bottom Bar */}
        <div className="px-4 py-3 border-t border-[var(--foreground)]/10 bg-[var(--background)] md:rounded-b-xl flex items-center justify-end">
          <button
            onClick={handlePost}
            className="w-full md:w-auto bg-[var(--neon-blue)] hover:bg-[var(--neon-purple)] hover:cursor-pointer text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-200"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreatePostModal;
