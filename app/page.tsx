import { SceneCard } from "@/components/scene-card"
import { scenes } from "@/src/data/scenes"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100">
      <div className="container mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">韓国旅行フレーズ学習</h1>
          <p className="text-lg text-gray-600 max-w-md mx-auto leading-relaxed">
            シーンごとに動画と音声で
            <br />
            韓国語フレーズを学ぼう
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          {scenes.map((scene) => (
            <SceneCard key={scene.id} scene={scene} />
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-sm border border-orange-100">
            <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
            <p className="text-sm text-gray-600 font-medium">タップして音声を聞いてみましょう</p>
          </div>
        </div>
      </div>
    </div>
  )
}
