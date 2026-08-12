"use client";

import { usePostHog } from "posthog-js/react";
import { useRef } from "react";

interface TrackedVideoProps {
  src: string;
  videoId: string; // e.g., "testimonial-john-doe"
  className?: string;
  poster?: string;
}

export default function TrackedVideo({ src, videoId, className, poster }: TrackedVideoProps) {
  const posthog = usePostHog();
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlay = () => {
    posthog.capture("video_played", {
      video_id: videoId,
      video_url: src,
    });
  };

  const handlePause = () => {
    // We check if it ended, because the browser automatically fires a "pause" event when a video finishes. 
    // We only want to track actual manual pauses!
    if (videoRef.current && videoRef.current.currentTime !== videoRef.current.duration) {
      posthog.capture("video_paused", {
        video_id: videoId,
        video_url: src,
        seconds_watched: Math.round(videoRef.current.currentTime),
      });
    }
  };

  const handleEnded = () => {
    posthog.capture("video_completed", {
      video_id: videoId,
      video_url: src,
    });
  };

  return (
    <video
      ref={videoRef}
      src={src}
      poster={poster}
      className={className}
      controls
      playsInline
      onPlay={handlePlay}
      onPause={handlePause}
      onEnded={handleEnded}
    />
  );
}