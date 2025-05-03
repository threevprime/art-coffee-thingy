import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Coffee, Leaf, Package, ShoppingCart, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

interface ProductPageProps {
  params: {
    id: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  // In a real application, you would fetch the product data based on the ID
  // For now, we'll use a mock product
  const product = {
    id: params.id,
    name: params.id.startsWith("ESP")
      ? "Ekspres Mishele"
      : params.id.startsWith("ZY")
        ? "Kapsule Covim"
        : params.id.startsWith("B")
          ? "Bustine Kafeje"
          : "Kafe Turke Art Coffee",
    description:
      "Kafe e përzgjedhur me kujdes nga fermat më të mira në botë. Me aromë të pasur dhe shije të balancuar, kjo kafe ofron një eksperiencë të paharrueshme për çdo dashamirës të kafesë.",
    longDescription:
      "Kafe e përzgjedhur me kujdes nga fermat më të mira në botë. Me aromë të pasur dhe shije të balancuar, kjo kafe ofron një eksperiencë të paharrueshme për çdo dashamirës të kafesë. E pjekur me kujdes për të ruajtur të gjitha aromat dhe shijet e saj natyrore, kjo kafe është ideale për të filluar ditën tuaj me energji ose për të shijuar një moment relaksi gjatë ditës.",
    price: "750 Lekë",
    originalPrice: "850 Lekë",
    image: params.id.startsWith("ZY")
      ? `/images/products/${params.id}.${params.id === "ZY09" || params.id === "ZY11" ? "png" : "jpg"}`
      : "/placeholder.svg?height=600&width=600",
    category: params.id.startsWith("ESP")
      ? "espresso"
      : params.id.startsWith("ZY")
        ? "capsules"
        : params.id.startsWith("B")
          ? "bustine"
          : "turkish",
    tags: ["premium", "e balancuar", "aromë e pasur"],
    weight: params.id.includes("100") ? "1000g" : "250g",
    origin: "Përzierje",
    roastLevel: "Mesatar",
    intensity: "4/5",
    acidity: "3/5",
    body: "4/5",
    relatedProducts: [
      {
        id: "ESP1",
        name: "Crema Bar Verdi",
        price: "850 Lekë",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        id: "ESP2",
        name: "Ekspres Supreme",
        price: "950 Lekë",
        image: "/placeholder.svg?height=300&width=300",
      },
      {
        id: "ESP3",
        name: "Ekspres Mishele ESP3",
        price: "780 Lekë",
        image: "/placeholder.svg?height=300&width=300",
      },
    ],
  }

  return (
    <div className="container py-8">
      <Link
        href="/menu"
        className="flex items-center text-muted-foreground mb-6 hover:text-foreground transition-colors"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Kthehu te Menuja
      </Link>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        <div className="relative aspect-square bg-muted rounded-lg overflow-hidden">
          <Image src={product.image || "/placeholder.svg"} alt={product.name} fill className="object-cover" />
          <Badge className="absolute top-4 left-4 bg-secondary text-secondary-foreground">{product.id}</Badge>
        </div>

        <div>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="outline">
              {product.category === "espresso"
                ? "Espresso"
                : product.category === "capsules"
                  ? "Kapsula"
                  : product.category === "bustine"
                    ? "Bustine"
                    : "Kafe Turke"}
            </Badge>
            <div className="flex items-center text-warm-beige">
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4 fill-current" />
              <Star className="h-4 w-4" />
              <span className="text-xs ml-1 text-muted-foreground">(24 vlerësime)</span>
            </div>
          </div>

          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <p className="text-muted-foreground mb-4">{product.description}</p>

          <div className="flex items-center gap-2 mb-6">
            <span className="text-2xl font-bold text-warm-beige">{product.price}</span>
            {product.originalPrice && (
              <span className="text-sm line-through text-muted-foreground">{product.originalPrice}</span>
            )}
            <Badge variant="secondary" className="ml-2">
              Kurseni {Number.parseInt(product.originalPrice) - Number.parseInt(product.price)} Lekë
            </Badge>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="flex items-center gap-2">
              <Coffee className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Pesha</p>
                <p className="text-sm text-muted-foreground">{product.weight}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Leaf className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Origjina</p>
                <p className="text-sm text-muted-foreground">{product.origin}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Coffee className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Niveli i Pjekjes</p>
                <p className="text-sm text-muted-foreground">{product.roastLevel}</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Package className="h-5 w-5 text-muted-foreground" />
              <div>
                <p className="text-sm font-medium">Intensiteti</p>
                <p className="text-sm text-muted-foreground">{product.intensity}</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 mb-6">
            <div className="flex items-center">
              <span className="w-24 text-sm text-muted-foreground">Aciditeti</span>
              <div className="flex-1 flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className={`h-2 flex-1 rounded-full ${
                      i <= Number.parseInt(product.acidity) ? "bg-warm-beige" : "bg-muted"
                    }`}
                  ></div>
                ))}
              </div>
            </div>
            <div className="flex items-center">
              <span className="w-24 text-sm text-muted-foreground">Trupi</span>
              <div className="flex-1 flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className={`h-2 flex-1 rounded-full ${i <= Number.parseInt(product.body) ? "bg-warm-beige" : "bg-muted"}`}
                  ></div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex gap-4 mb-8">
            <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              <ShoppingCart className="h-5 w-5 mr-2" /> Shto në Shportë
            </Button>
            <Button size="lg" variant="outline">
              Shto në Listën e Dëshirave
            </Button>
          </div>

          <div className="flex flex-wrap gap-2">
            {product.tags.map((tag, index) => (
              <Badge key={index} variant="outline">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      <Tabs defaultValue="description" className="w-full mb-12">
        <TabsList className="mb-6">
          <TabsTrigger value="description">Përshkrimi</TabsTrigger>
          <TabsTrigger value="details">Detajet</TabsTrigger>
          <TabsTrigger value="reviews">Vlerësimet</TabsTrigger>
        </TabsList>

        <TabsContent value="description" className="mt-0">
          <Card>
            <CardContent className="p-6">
              <p className="text-muted-foreground">{product.longDescription}</p>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="details" className="mt-0">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-medium">ID Produkti</span>
                    <span className="text-muted-foreground">{product.id}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-medium">Kategoria</span>
                    <span className="text-muted-foreground">
                      {product.category === "espresso"
                        ? "Espresso"
                        : product.category === "capsules"
                          ? "Kapsula"
                          : product.category === "bustine"
                            ? "Bustine"
                            : "Kafe Turke"}
                    </span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-medium">Pesha</span>
                    <span className="text-muted-foreground">{product.weight}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-medium">Origjina</span>
                    <span className="text-muted-foreground">{product.origin}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-medium">Niveli i Pjekjes</span>
                    <span className="text-muted-foreground">{product.roastLevel}</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="font-medium">Intensiteti</span>
                    <span className="text-muted-foreground">{product.intensity}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="reviews" className="mt-0">
          <Card>
            <CardContent className="p-6">
              <p className="text-center text-muted-foreground">Nuk ka ende vlerësime për këtë produkt.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div>
        <h2 className="text-2xl font-bold mb-6">Produkte të Ngjashme</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {product.relatedProducts.map((relatedProduct) => (
            <Link key={relatedProduct.id} href={`/products/${relatedProduct.id}`}>
              <Card className="overflow-hidden bg-card hover:shadow-md transition-shadow cursor-pointer">
                <div className="relative h-48">
                  <Image
                    src={relatedProduct.image || "/placeholder.svg"}
                    alt={relatedProduct.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <CardContent className="p-4">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold">{relatedProduct.name}</h3>
                    <span className="font-medium text-warm-beige">{relatedProduct.price}</span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
