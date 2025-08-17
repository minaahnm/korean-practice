import { SceneCard } from "@/components/scene-card"
import { scenes } from "@/src/data/scenes"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/placeholder.svg?height=1080&width=1920')`,
          }}
        >
          <div className="absolute inset-0 bg-black/30"></div>
        </div>

        {/* Header */}
        <header className="absolute top-0 left-0 right-0 p-6 z-20">
          <div className="flex justify-between items-center">
            <h1 className="text-white text-xl font-light tracking-widest">KOREAN PHRASES</h1>
            <button className="text-white">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </header>

        {/* Main Content */}
        <div className="relative z-10 text-center text-white px-6">
          <h2 className="text-4xl md:text-6xl font-light mb-4 leading-tight">
            韓国旅行で使える
            <br />
            実践的なフレーズ
          </h2>
          <p className="text-lg md:text-xl font-light mb-8 opacity-90">シーンごとに動画と音声で学ぶ韓国語</p>

          {/* Navigation Arrows */}
          <div className="flex justify-center space-x-8 mt-12">
            <button className="w-12 h-12 rounded-full border border-white/50 flex items-center justify-center hover:bg-white/10 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button className="w-12 h-12 rounded-full border border-white/50 flex items-center justify-center hover:bg-white/10 transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white">
          <div className="flex flex-col items-center">
            <div className="w-px h-12 bg-white/50 mb-2"></div>
            <svg className="w-4 h-4 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </div>

      {/* Scenes Section */}
      <div className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-light text-gray-900 mb-4">学習シーン</h3>
            <div className="w-16 h-px bg-gray-300 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {scenes.map((scene, index) => (
              <div key={scene.id} className="group">
                <div className="relative overflow-hidden">
                  <SceneCard scene={scene} />
                </div>
                <div className="mt-4 text-center">
                  <h4 className="text-lg font-light text-gray-900">{scene.title}</h4>
                  <p className="text-sm text-gray-500 mt-1">0{index + 1}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-gray-100">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm text-gray-400 font-light">© 2024 Korean Phrases Learning App</p>
        </div>
      </footer>
    </div>
  )
}
