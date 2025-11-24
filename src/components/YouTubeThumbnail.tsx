import React, { Dispatch, SetStateAction } from "react";

interface YouTubeThumbnailProps {
  videoId: string;
  setVideoId: Dispatch<SetStateAction<string>>
}

export const YouTubeThumbnail: React.FC<YouTubeThumbnailProps> = ({
  videoId,
  setVideoId,
}) => {


  if (!videoId) return <div>Invalid YouTube URL</div>;

  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  return (
    <>
      <img
        src={thumbnailUrl}
        alt="youtube-thumbnail"
        className="
          w-[180px] h-[100px]
          sm:w-[320px] sm:h-[180px]
          md:w-[480px] md:h-[270px]
          lg:w-[640px] lg:h-[360px]
          rounded-lg shadow cursor-pointer object-cover
        "
        onClick={() => setVideoId(videoId)}
      />
    </>
  );
};
