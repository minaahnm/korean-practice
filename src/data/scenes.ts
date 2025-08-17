export type Phrase = {
  id: string
  ko: string // 韓国語
  ja: string // 日本語訳
  audioUrl?: string // 音声ファイルのパス
}

export type Scene = {
  id: string // "izakaya" | "cafe" | ...
  title: string // 表示名
  videoUrl: string // YouTube埋め込みURLまたはMP4
  phrases: Phrase[] // 会話フレーズ一覧
}

export const scenes: Scene[] = [
  {
    id: "izakaya",
    title: "居酒屋編",
    videoUrl: "https://www.youtube-nocookie.com/embed/DMfrfytPrMU?rel=0&loop=1&playlist=DMfrfytPrMU",
    phrases: [
      {
        id: "p1",
        ko: "사장님〜! 추천 메뉴가 뭐예요?",
        ja: "店長さん〜！おすすめは何ですか？",
        audioUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/p1-3Q6TXi1flYImO8n9mamHV2mfhGfIZQ.mp3",
      },
      {
        id: "p2",
        ko: "저희 김치전이 정말 맛있어요!",
        ja: "うちのキムチチヂミが本当に美味しいです！",
        audioUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/p2-rj5RgP8tnj6GNBJhINtCcWfg8Ba08I.mp3",
      },
      {
        id: "p3",
        ko: "그럼 김치전 하나 주세요.",
        ja: "じゃあキムチチヂミを1つください。",
        audioUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/p3-PigIE2ifxn9KHWZL27X5t6IEIWgAOW.mp3",
      },
      {
        id: "p4",
        ko: "네, 잠시만 기다려 주세요.",
        ja: "はい、少々お待ちください。",
        audioUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/p4-lPiNJQWlYwVCGtwwSixZ7YBbEHIxKH.mp3",
      },
    ],
  },
  {
    id: "cafe",
    title: "カフェ編",
    videoUrl: "",
    phrases: [],
  },
  {
    id: "market",
    title: "市場編",
    videoUrl: "",
    phrases: [],
  },
  {
    id: "hotel",
    title: "ホテルチェックイン編",
    videoUrl: "",
    phrases: [],
  },
  {
    id: "directions",
    title: "道案内編",
    videoUrl: "",
    phrases: [],
  },
]
