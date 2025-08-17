export type Phrase = {
  id: string
  ko: string // 韓国語
  ja: string // 日本語訳
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
        id: "1",
        ko: "안녕하세요! 두 명이에요.",
        ja: "こんにちは！2名です。",
      },
      {
        id: "2",
        ko: "맥주 두 잔 주세요.",
        ja: "ビール2杯ください。",
      },
      {
        id: "3",
        ko: "이거 맛있어요!",
        ja: "これ美味しいです！",
      },
      {
        id: "4",
        ko: "계산서 주세요.",
        ja: "お会計をお願いします。",
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
