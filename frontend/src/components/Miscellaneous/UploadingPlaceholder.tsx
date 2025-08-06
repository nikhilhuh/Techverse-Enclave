import React, { useEffect, useState } from "react";

const UploadPlaceholder: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 80); // ~4s total

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full p-4 rounded-lg border border-[var(--foreground)]/20 bg-[var(--background)] shadow-sm relative overflow-hidden">
      <div className="flex items-start gap-4">
        <div className="h-10 w-10 rounded-full bg-gray-500 text-white flex items-center justify-center font-bold text-sm">
          NT
        </div>
        <div className="flex-1">
          <div className="font-semibold text-[var(--foreground)]">Nikhil Tiwari</div>
          <div className="text-sm text-muted-foreground">Co-Founder </div>
          <div className="mt-2 text-sm text-[var(--foreground)]">Uploading...</div>
        </div>
      </div>
      <div className="absolute left-0 bottom-0 h-[4px] bg-blue-500 transition-all duration-100"
           style={{ width: `${progress}%` }} />
    </div>
  );
};

export default UploadPlaceholder;
