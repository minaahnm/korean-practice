import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import type { Scene } from "@/src/data/scenes"
import Link from "next/link"
import Image from "next/image"

interface SceneCardProps {
  scene: Scene
}

function getSceneImage(sceneId: string): string {
  const imageMap: Record<string, string> = {
    izakaya: "/images/izakaya-scene.jpg",
    cafe: "/images/cafe-scene.jpg",
    shopping: "/images/shopping-pottery.jpg",
    hotel: "/images/hotel-checkin.jpg",
    directions: "/placeholder.svg?height=120&width=200",
  }
  return imageMap[sceneId] || "/placeholder.svg?height=120&width=200"
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
          <div className="relative h-24 rounded-lg overflow-hidden">
            <Image
              src={getSceneImage(scene.id) || "/placeholder.svg"}
              alt={`${scene.title}のイメージ`}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
              {isComingSoon && (
                <span className="text-sm text-white font-medium bg-black/50 px-3 py-1 rounded-full">Coming Soon</span>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
