import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Scene } from "@/src/data/scenes"
import Link from "next/link"

interface SceneCardProps {
  scene: Scene
}

export function SceneCard({ scene }: SceneCardProps) {
  const isComingSoon = scene.phrases.length === 0

  return (
    <Link href={isComingSoon ? "#" : `/scene/${scene.id}`}>
      <Card
        className={`transition-all duration-200 ${
          isComingSoon ? "opacity-60 cursor-not-allowed" : "hover:shadow-lg hover:scale-105 cursor-pointer"
        }`}
      >
        <CardHeader className="pb-3">
          <CardTitle className="text-lg font-semibold text-center">{scene.title}</CardTitle>
        </CardHeader>
        <CardContent className="pt-0">
          <div className="flex items-center justify-center h-20 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
            {isComingSoon ? (
              <span className="text-sm text-muted-foreground">Coming Soon</span>
            ) : (
              <div className="text-center">
                <div className="text-2xl mb-1">🎬</div>
                <span className="text-sm text-muted-foreground">{scene.phrases.length}フレーズ</span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
