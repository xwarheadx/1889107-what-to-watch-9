import { useEffect, useRef } from 'react';
import { PREVIEW_TIMEOUT } from '../../const';
type VideoPreviewProps = {
  previewVideo: string,
  poster: string,
  muted?: boolean,
  isPlaying?: boolean,
}

export default function VideoPreview({
  previewVideo,
  poster,
  muted = false,
  isPlaying,
}: VideoPreviewProps): JSX.Element {

  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current === null) {
      return;
    }
    let videoTimer: NodeJS.Timeout | null = null;
    if (isPlaying) {
      videoTimer = setTimeout(() => videoRef.current?.play(), PREVIEW_TIMEOUT);}
    videoRef.current.load();
    return () => {
      videoTimer && clearTimeout(videoTimer);
    };
  },[isPlaying]);

  return (
    <video
      src={previewVideo}
      poster={poster}
      muted={muted}
      ref={videoRef}
      width = "100%"
      height = "100%"
    />
  );
}
