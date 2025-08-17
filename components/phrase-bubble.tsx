"use client"
import { Card } from "@/components/ui/card"
import type { Phrase } from "@/src/data/scenes"
import { useAudioPlayer } from "@/src/lib/useAudioPlayer"
import { Volume2 } from "lucide-react"

interface PhraseBubbleProps {
  phrase: Phrase
}

export function PhraseBubble({ phrase }: PhraseBubbleProps) {
  const { playAudio, isPlaying, currentAudioUrl } = useAudioPlayer()

  const handlePlayAudio = () => {
    if (phrase.audioUrl) {
      playAudio(phrase.audioUrl)
    }
  }

  const isCurrentlyPlaying = isPlaying && currentAudioUrl === phrase.audioUrl

  return (
    <Card
      className={`p-4 mb-3 bg-gradient-to-r from-blue-50 to-white border-l-4 border-l-blue-500 cursor-pointer hover:shadow-md transition-all ${
        isCurrentlyPlaying ? "ring-2 ring-blue-400 bg-blue-100" : ""
      }`}
      onClick={handlePlayAudio}
    >
      <div className="flex items-start gap-3">
        <div className="flex-1">
          <div className="text-lg font-medium text-gray-900 mb-1">{phrase.ko}</div>
          <div className="text-sm text-gray-600">{phrase.ja}</div>
        </div>
        <div className="shrink-0 h-10 w-10 flex items-center justify-center">
          <Volume2 className={`h-4 w-4 ${isCurrentlyPlaying ? "text-blue-600" : "text-gray-500"}`} />
        </div>
      </div>
    </Card>
  )
}
