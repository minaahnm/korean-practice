import { SceneCard } from "@/components/scene-card"
import { scenes } from "@/src/data/scenes"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">韓国旅行フレーズ学習</h1>
          <p className="text-gray-600">シーンごとに動画と音声で韓国語フレーズを学ぼう</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {scenes.map((scene) => (
            <SceneCard key={scene.id} scene={scene} />
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-gray-500">タップして音声を聞いてみましょう 🎧</p>
        </div>
      </div>
    </div>
  )
}
