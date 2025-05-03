import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Plus } from "lucide-react"

interface ProductCardProps {
  id: string
  name: string
  description: string
  price: string
  image: string
  tags: string[]
  showId?: boolean
}

export default function ProductCard({ id, name, description, price, image, tags, showId = true }: ProductCardProps) {
  return (
    <Card className="overflow-hidden bg-card hover:shadow-md transition-shadow">
      <div className="relative h-48">
        <Image src={image || "/placeholder.svg"} alt={name} fill className="object-cover" />
        {showId && (
          <div className="absolute top-2 left-2">
            <Badge variant="secondary" className="bg-secondary/80 backdrop-blur-sm">
              {id}
            </Badge>
          </div>
        )}
      </div>
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-bold text-lg">{name}</h3>
          <span className="font-medium text-warm-beige">{price}</span>
        </div>
        <p className="text-sm text-muted-foreground mb-3">{description}</p>
        <div className="flex justify-between items-center">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          <Button size="sm" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
            <Plus className="h-4 w-4 mr-1" /> Shto
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
