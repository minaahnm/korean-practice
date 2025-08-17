import { YouTubePlayer } from "@/components/youtube-player"
import { PhraseBubble } from "@/components/phrase-bubble"
import { Button } from "@/components/ui/button"
import { scenes } from "@/src/data/scenes"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation"

interface ScenePageProps {
  params: {
    id: string
  }
}

export default function ScenePage({ params }: ScenePageProps) {
  const scene = scenes.find((s) => s.id === params.id)

  if (!scene) {
    notFound()
  }

  const izakayaDialogues = [
    {
      speaker: "女性客",
      korean: "사장님〜! 추천 메뉴가 뭐예요?",
      japanese: "店長さん〜！おすすめは何ですか？",
    },
    {
      speaker: "店員",
      korean: "저희 김치전이 정말 맛있어요!",
      japanese: "うちのキムチチヂミが本当に美味しいです！",
    },
    {
      speaker: "女性客",
      korean: "그럼 김치전 하나 주세요.",
      japanese: "じゃあキムチチヂミを1つください。",
    },
    {
      speaker: "店員",
      korean: "네, 잠시만 기다려 주세요.",
      japanese: "はい、少々お待ちください。",
    },
  ]

  if (scene.phrases.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4 py-8">
          <Link href="/">
            <Button variant="ghost" className="mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              戻る
            </Button>
          </Link>

          <div className="text-center">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">{scene.title}</h1>
            <p className="text-gray-600">このシーンは準備中です。しばらくお待ちください。</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <Link href="/">
          <Button variant="ghost" className="mb-6">
            <ArrowLeft className="h-4 w-4 mr-2" />
            戻る
          </Button>
        </Link>

        <div className="max-w-2xl mx-auto">
          <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">{scene.title}</h1>

          {scene.videoUrl && (
            <div className="mb-8">
              <YouTubePlayer videoUrl={scene.videoUrl} title={scene.title} />
            </div>
          )}

          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">フレーズ練習</h2>
            {scene.phrases.map((phrase) => (
              <PhraseBubble key={phrase.id} phrase={phrase} />
            ))}
          </div>

          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <p className="text-sm text-blue-800 text-center">💡 フレーズをタップすると韓国語の音声が再生されます</p>
          </div>
        </div>
      </div>
    </div>
  )
}
