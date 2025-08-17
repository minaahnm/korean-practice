"use client"

import { useState } from "react"
import { speakKorean } from "@/src/lib/tts"
import { Volume2 } from "lucide-react"

interface DialogueItem {
  speaker: string
  korean: string
  japanese: string
}

interface DialogueSectionProps {
  dialogues: DialogueItem[]
}

export function DialogueSection({ dialogues }: DialogueSectionProps) {
  const [playingIndex, setPlayingIndex] = useState<number | null>(null)

  const handleSpeak = async (korean: string, index: number) => {
    if (playingIndex === index) return

    setPlayingIndex(index)
    try {
      await speakKorean(korean)
    } finally {
      setPlayingIndex(null)
    }
  }

  return (
    <div className="mb-8">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">動画のやり取り</h2>
      <div className="space-y-4">
        {dialogues.map((dialogue, index) => (
          <div
            key={index}
            className={`p-4 rounded-lg cursor-pointer hover:shadow-md transition-shadow ${
              dialogue.speaker === "女性客"
                ? "bg-pink-50 border-l-4 border-pink-400 ml-4"
                : "bg-blue-50 border-l-4 border-blue-400 mr-4"
            } ${playingIndex === index ? "opacity-75" : ""}`}
            onClick={() => handleSpeak(dialogue.korean, index)}
          >
            <div className="flex items-center mb-2">
              <span className="text-sm font-medium text-gray-600">{dialogue.speaker}</span>
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <p className="text-base font-medium text-gray-900 flex-1">{dialogue.korean}</p>
                <div className="p-1 rounded-full bg-white shadow-sm">
                  <Volume2 size={16} className={playingIndex === index ? "text-gray-400" : "text-gray-600"} />
                </div>
              </div>
              <p className="text-sm text-gray-600">{dialogue.japanese}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
