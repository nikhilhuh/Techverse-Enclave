import React, { useState } from "react";
import NewPost from "../components/Posts/NewPost";
import EachPost from "../components/Posts/EachPost";
import { ArrowUp } from "lucide-react";
import CreatePostModal from "../components/Modals/CreatePostModal";
import { Post } from "../utils/constants";
import UploadPlaceholder from "../components/Posts/UploadingPlaceholder";
import DetailedPost from "../components/Posts/DetailedPost";

const mockPosts: Post[] = [
  {
    id: "1",
    author: {
      name: "Sarah Chen",
      avatar: "SC",
      role: "Founder & CEO",
    },
    timestamp: "2 hours ago",
    content:
      'Excited to announce that our latest hackathon project "DevHub Platform" has reached 1000+ users! 🚀 This is what happens when passionate developers come together. Looking forward to seeing what we build next!',
    media: null,
    likes: 42,
    isLiked: false,
    comments: [
      {
        id: "c1",
        author: { name: "Alex Thompson", avatar: "AT" },
        timestamp: "1 hour ago",
        content:
          "Congratulations! The platform has been incredibly helpful for showcasing my projects.",
      },
      {
        id: "c2",
        author: { name: "Priya Sharma", avatar: "PS" },
        timestamp: "45 mins ago",
        content:
          "Amazing milestone! This community never ceases to amaze me. 🎉",
      },
    ],
  },
  {
    id: "2",
    author: {
      name: "Marcus Johnson",
      avatar: "MJ",
      role: "Co-Founder & CTO",
    },
    timestamp: "5 hours ago",
    content:
      "Just wrapped up an amazing code review session with our open source contributors. The quality of code submissions keeps getting better! Here are some key tips for effective code reviews: https://about.gitlab.com/topics/version-control/what-is-code-review/",
    media: null,
    likes: 28,
    isLiked: true,
    comments: [
      {
        id: "c3",
        author: { name: "Elena Rodriguez", avatar: "ER" },
        timestamp: "3 hours ago",
        content:
          "Great insights! Code reviews have really helped our team grow together.",
      },
    ],
  },
  {
    id: "3",
    author: {
      name: "Elena Rodriguez",
      avatar: "ER",
      role: "Co-Founder & Head of Community",
    },
    timestamp: "1 day ago",
    content:
      "Community spotlight: Our member Lisa just landed her first software engineering role at a top tech company! 🎉 From beginner to professional in just 8 months through our mentorship program. Stories like these fuel our passion for what we do.",
    media: {
      type: "image",
      url: "https://media.licdn.com/dms/image/v2/C4E1BAQFBnLglgXnVfg/company-background_10000/company-background_10000/0/1634317493065/pktechverse_cover?e=2147483647&v=beta&t=_rPJvuOF6UJLHG5W-u3nGy6zViKt3flkSfWkddrc9L0",
      name: "community-success.jpg",
    },
    likes: 67,
    isLiked: false,
    comments: [
      {
        id: "c4",
        author: { name: "David Kim", avatar: "DK" },
        timestamp: "20 hours ago",
        content:
          "Incredible journey! Lisa was so dedicated during the mentorship sessions.",
      },
      {
        id: "c5",
        author: { name: "James Wilson", avatar: "JW" },
        timestamp: "18 hours ago",
        content:
          "This is why I love this community! Everyone supports each other's growth.",
      },
    ],
  },
];

// ONLY run if no saved posts
if (!localStorage.getItem("posts")) {
  localStorage.setItem("posts", JSON.stringify(mockPosts));
}

const Community: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>(
    JSON.parse(localStorage.getItem("posts") || "[]").length > 0
      ? JSON.parse(localStorage.getItem("posts") || "[]")
      : mockPosts
  );
  const [isScrolled, setIsScrolled] = React.useState<boolean>(false);
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const [uploading, setUploading] = React.useState<boolean>(false);
  const [selectedPostId, setSelectedPostId] = React.useState<string | null>(
    null
  );
  const [selectedPost, setSelectedPost] = React.useState<Post | null>(null);

  React.useEffect(() => {
    window.scrollTo(0, 0);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 150);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    localStorage.setItem("posts", JSON.stringify(posts));
  }, [posts]);

  React.useEffect(() => {
    if (selectedPostId) {
      // Simulated API call
      setTimeout(() => {
        const found = posts.find((p) => p.id === selectedPostId);
        setSelectedPost(found || null);
      }, 2000);
    }
  }, [selectedPostId]);

  return (
    <div className="pt-[10dvh] pb-[15dvh] max-w-7xl mx-auto space-y-6 px-4 py-2">
      {/* Post creation popup */}
      {showModal && (
        <CreatePostModal
          onClose={() => setShowModal(false)}
          setPosts={setPosts}
          setUploading={setUploading}
        />
      )}
      {selectedPostId ? (
        <DetailedPost
          selectedPost={selectedPost}
          onClose={() => setSelectedPost(null)}
        />
      ) : (
        <>
          <NewPost setShowModal={setShowModal} />

          {/* Posts Feed */}
          <div className="space-y-6">
            {uploading && <UploadPlaceholder />}
            {posts.map((post) => (
              <EachPost
                key={post.id}
                post={post}
                setSelectedPostId={setSelectedPostId}
              />
            ))}
          </div>

          {/* Scroll to top */}
          <button
            onClick={() => window.scrollTo(0, 0)}
            title="Scroll to top"
            className={`${
              isScrolled ? "fixed" : "hidden"
            } bottom-8 right-5 md:bottom-10 md:right-10 hover:cursor-pointer transition-all duration-300 bg-[var(--neon-purple)] p-2 rounded-full text-white shadow-lg`}
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </>
      )}
    </div>
  );
};

export default Community;
