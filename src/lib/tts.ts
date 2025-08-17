let voicesReady: Promise<SpeechSynthesisVoice[]> | null = null
let audioUnlocked = false

function isIOS() {
  if (typeof navigator === "undefined") return false
  const ua = navigator.userAgent || ""
  return /iPhone|iPad|iPod/.test(ua)
}

function loadVoicesOnce(): Promise<SpeechSynthesisVoice[]> {
  if (voicesReady) return voicesReady
  voicesReady = new Promise<SpeechSynthesisVoice[]>((resolve) => {
    const synth = window.speechSynthesis
    const voices = synth.getVoices()
    if (voices && voices.length > 0) {
      resolve(voices)
      return
    }
    const onChange = () => {
      synth.removeEventListener("voiceschanged", onChange)
      resolve(synth.getVoices())
    }
    synth.addEventListener("voiceschanged", onChange)
    // 念のため遅延評価
    setTimeout(() => resolve(synth.getVoices()), 1200)
  })
  return voicesReady
}

async function unlockAudioIfNeeded() {
  if (audioUnlocked) return
  if (typeof window === "undefined") return
  // iOSはユーザー操作内でのAudioContext resumeが有効
  try {
    const Ctx = (window as any).AudioContext || (window as any).webkitAudioContext
    if (!Ctx) {
      audioUnlocked = true
      return
    }
    const ctx = new Ctx()
    if (ctx.state === "suspended") {
      await ctx.resume()
    }
    audioUnlocked = true
  } catch {
    audioUnlocked = true // 失敗しても先へ進む
  }
}

function pickKoreanVoice(voices: SpeechSynthesisVoice[]) {
  const ko = voices.find((v) => v.lang && v.lang.toLowerCase().startsWith("ko"))
  if (ko) return ko
  const def = voices.find((v) => (v as any).default) || voices[0]
  return def || null
}

// 公開API
export async function initTTS() {
  if (typeof window === "undefined") return
  await unlockAudioIfNeeded()
  await loadVoicesOnce()
}

let speaking = false

export async function speakKorean(text: string) {
  if (typeof window === "undefined") return
  const synth = window.speechSynthesis
  // 初期化（ユーザー操作内で呼ばれる想定）
  await initTTS()

  const voices = (await loadVoicesOnce()) || []
  const voice = pickKoreanVoice(voices)

  try {
    synth.cancel()
    const u = new SpeechSynthesisUtterance(text)
    if (voice) u.voice = voice
    u.lang = voice?.lang || "ko-KR"
    u.rate = 0.95

    speaking = true
    u.onend = () => {
      speaking = false
    }
    u.onerror = () => {
      speaking = false
    }

    synth.speak(u)
  } catch (e) {
    // フォールバック：最低限1度空読みで音を起こす（無音端末対策）
    try {
      synth.cancel()
      const u2 = new SpeechSynthesisUtterance(text)
      u2.rate = 1.0
      synth.speak(u2)
    } catch (err) {
      console.warn("TTS failed:", err)
    }
  }
}
