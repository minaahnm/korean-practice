import { Card, CardContent } from "@/components/ui/card"
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
        className={`transition-all duration-300 border-0 shadow-lg rounded-3xl overflow-hidden ${
          isComingSoon
            ? "opacity-60 cursor-not-allowed bg-gray-50"
            : "hover:shadow-xl hover:scale-[1.02] cursor-pointer bg-white"
        }`}
      >
        <CardContent className="p-0">
          <div className="relative h-40 overflow-hidden">
            <Image
              src={getSceneImage(scene.id) || "/placeholder.svg"}
              alt={`${scene.title}のイメージ`}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h3 className="text-xl font-bold text-white mb-1">{scene.title}</h3>
            </div>

            {isComingSoon && (
              <div className="absolute top-4 right-4">
                <span className="text-xs text-gray-600 font-semibold bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full border border-gray-200">
                  Coming Soon
                </span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  )
}
