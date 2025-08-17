"use client"

import { useRef, useState, useCallback } from "react"

export const useAudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentAudioUrl, setCurrentAudioUrl] = useState<string | null>(null)

  const playAudio = useCallback(
    async (audioUrl: string) => {
      try {
        // Initialize audio element if not exists
        if (!audioRef.current) {
          audioRef.current = new Audio()
          audioRef.current.addEventListener("ended", () => {
            setIsPlaying(false)
            setCurrentAudioUrl(null)
          })
          audioRef.current.addEventListener("error", () => {
            setIsPlaying(false)
            setCurrentAudioUrl(null)
          })
        }

        const audio = audioRef.current

        // Stop current audio if playing
        if (isPlaying) {
          audio.pause()
          audio.currentTime = 0
        }

        // Set new audio source and play
        audio.src = audioUrl
        setCurrentAudioUrl(audioUrl)
        setIsPlaying(true)

        await audio.play()
      } catch (error) {
        console.error("Audio playback failed:", error)
        setIsPlaying(false)
        setCurrentAudioUrl(null)
      }
    },
    [isPlaying],
  )

  const stopAudio = useCallback(() => {
    if (audioRef.current) {
      audioRef.current.pause()
      audioRef.current.currentTime = 0
    }
    setIsPlaying(false)
    setCurrentAudioUrl(null)
  }, [])

  return {
    playAudio,
    stopAudio,
    isPlaying,
    currentAudioUrl,
  }
}
