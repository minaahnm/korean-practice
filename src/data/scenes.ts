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
    videoUrl: "https://www.youtube-nocookie.com/embed/4DjrC3lIEng?rel=0&loop=1&playlist=4DjrC3lIEng",
    phrases: [
      {
        id: "p1",
        ko: "아메리카노 한 잔 주세요.",
        ja: "アメリカーノを1杯ください",
        audioUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/p1-4PQLhps05Ed4sMxoyuP28hGEiuKCVv.mp3",
      },
      {
        id: "p2",
        ko: "여기서 드세요?",
        ja: "ここで召し上がりますか？",
        audioUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/p2-xrBujijT9QHzMxnDJMD5Ba1K4V3DY4.mp3",
      },
      {
        id: "p3",
        ko: "5000원입니다.",
        ja: "5,000ウォンです",
        audioUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/p3-6lT9RGSHNj5HYV5jNMc4PDTc4WFqs7.mp3",
      },
      {
        id: "p4",
        ko: "자리에서 기다려 주세요.",
        ja: "お席でお待ちください",
        audioUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/p4-dQ15oNeSRPe2MrNMklRXKAyfqZLpwi.mp3",
      },
    ],
  },
  {
    id: "shopping",
    title: "買い物編",
    videoUrl: "https://www.youtube-nocookie.com/embed/qzO5KL7P46k?rel=0&loop=1&playlist=qzO5KL7P46k",
    phrases: [
      {
        id: "p1",
        ko: "사장님〜! 이 컵 얼마예요?",
        ja: "社長さん、このカップはいくらですか？",
        audioUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/p1-xPunka6dPfhMIZJerEQhCfL3RR7aCl.mp3",
      },
      {
        id: "p2",
        ko: "하나에 만 원이에요.",
        ja: "1つ1万ウォンですよ。",
        audioUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/p2-7lmxg8BCtP23oBlUwA5SkOlnF8IF67.mp3",
      },
      {
        id: "p3",
        ko: "그럼 두 개 주세요.",
        ja: "では2つください。",
        audioUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/p3-k9SG1oe8z7tGQOdvBDN692vvRUAhjj.mp3",
      },
      {
        id: "p4",
        ko: "네, 감사합니다〜!",
        ja: "はい、ありがとうございます〜！",
        audioUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/p4-SB4G4MyTxTzpkJQFgFzqIQ3I6aaykR.mp3",
      },
    ],
  },
  {
    id: "hotel",
    title: "ホテルチェックイン編",
    videoUrl: "https://www.youtube-nocookie.com/embed/kscHCS7aqKI?rel=0&loop=1&playlist=kscHCS7aqKI",
    phrases: [
      {
        id: "p1",
        ko: "안녕하세요〜!",
        ja: "こんにちは〜！",
        audioUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/p1-20RKh9T2qwJBgAm0rbMcgk23oZzKfc.mp3",
      },
      {
        id: "p2",
        ko: "예약했어요, 카토 이름으로요.",
        ja: "加藤の名前で予約しています。",
        audioUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/p2-bBNsd3KFzHWSNR3tJV7vdJcnFisXgY.mp3",
      },
      {
        id: "p3",
        ko: "네, 확인해 드리겠습니다.",
        ja: "はい、確認いたします。",
        audioUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/p3-gQLkIalpqISRz4uwhlvHgnGomc4Axx.mp3",
      },
      {
        id: "p4",
        ko: "잠시만 기다려 주세요.",
        ja: "少々お待ちください。",
        audioUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/p4-tHu6xR9yyzENv1q5N3BFrWzMaaqkmb.mp3",
      },
    ],
  },
  {
    id: "directions",
    title: "道案内編",
    videoUrl: "",
    phrases: [],
  },
]
