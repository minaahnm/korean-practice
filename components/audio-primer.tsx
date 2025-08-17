"use client"
import { useState } from "react"
import { initTTS, speakKorean } from "@/src/lib/tts"

export default function AudioPrimer() {
  const [ready, setReady] = useState(false)
  const [busy, setBusy] = useState(false)

  const handleClick = async () => {
    if (busy) return
    setBusy(true)
    try {
      await initTTS()
      // 短い韓国語で解放を確実化
      await speakKorean("안녕하세요")
      setReady(true)
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className="rounded-xl border p-3 bg-gray-50">
      <div className="text-sm mb-2">iPhoneをご利用の方は、最初に下のボタンを押して音声を有効化してください。</div>
      <button
        type="button"
        onClick={handleClick}
        className="rounded-lg border px-3 py-2 text-sm font-medium hover:bg-gray-100 active:scale-[0.99] transition"
        disabled={busy}
      >
        {ready ? "準備OK：もう押す必要はありません" : busy ? "準備中…" : "音声テスト（クリック）"}
      </button>
    </div>
  )
}
