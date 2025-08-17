interface YouTubePlayerProps {
  videoUrl: string
  title: string
}

export function YouTubePlayer({ videoUrl, title }: YouTubePlayerProps) {
  return (
    <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg">
      <iframe
        src={videoUrl}
        title={title}
        className="w-full h-full"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  )
}
