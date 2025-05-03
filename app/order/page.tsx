import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Check, Coffee, CupSoda, Heart, Info } from "lucide-react"
import Image from "next/image"

export default function OrderPage() {
  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-6">Porosit Kafe</h1>

      <Tabs defaultValue="ready-made" className="w-full">
        <TabsList className="mb-6">
          <TabsTrigger value="ready-made">Kafet e Gatshme</TabsTrigger>
          <TabsTrigger value="drinks">Pijet</TabsTrigger>
        </TabsList>

        <TabsContent value="ready-made">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {["Espresso", "Lungo", "Cappuccino", "Macchiato"].map((drink) => (
              <Card key={drink} className="overflow-hidden bg-card hover:shadow-md transition-shadow">
                <div className="relative h-48">
                  <Image src={`/placeholder.svg?height=300&width=300`} alt={drink} fill className="object-cover" />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 bg-background/50 backdrop-blur-sm rounded-full"
                  >
                    <Heart className="h-5 w-5" />
                  </Button>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg mb-2">{drink}</h3>
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-sm text-muted-foreground">Nga 150 Lekë</span>
                    <div className="flex items-center gap-1">
                      <span className="text-xs bg-secondary/20 text-secondary-foreground px-2 py-0.5 rounded-full">
                        Popullar
                      </span>
                    </div>
                  </div>
                  <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                    Zgjidh
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="bg-card rounded-lg p-6 mb-8">
            <h2 className="text-xl font-bold mb-4">Personalizimi</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-medium mb-3">Madhësia</h3>
                <RadioGroup defaultValue="medium" className="flex gap-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="small" id="small" />
                    <Label htmlFor="small">E vogël</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="medium" id="medium" />
                    <Label htmlFor="medium">Mesatare</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="large" id="large" />
                    <Label htmlFor="large">E madhe</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-3">Qumështi</h3>
                <RadioGroup defaultValue="regular" className="flex flex-wrap gap-4">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="regular" id="regular" />
                    <Label htmlFor="regular">I zakonshëm</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="oat" id="oat" />
                    <Label htmlFor="oat">Tërshërë</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="almond" id="almond" />
                    <Label htmlFor="almond">Bajame</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="none" id="none" />
                    <Label htmlFor="none">Pa qumësht</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-3">Shtesa</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {["Vanilje", "Karamel", "Çokollatë", "Kanellë"].map((extra) => (
                    <Button key={extra} variant="outline" className="justify-start">
                      <Check className="h-4 w-4 mr-2 opacity-0" />
                      {extra}
                    </Button>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-3">Fortësia e Kafesë</h3>
                <Slider defaultValue={[50]} max={100} step={10} className="mb-2" />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>E butë</span>
                  <span>Mesatare</span>
                  <span>E fortë</span>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-between items-center">
              <div>
                <p className="text-lg font-bold">220 Lekë</p>
                <p className="text-sm text-muted-foreground">Përfshirë TVSH</p>
              </div>
              <Button size="lg" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                Shto në Shportë
              </Button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="drinks">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { name: "Me Kafeinë", icon: Coffee },
              { name: "Pa Kafeinë", icon: Coffee },
              { name: "E Ftohtë", icon: CupSoda },
              { name: "Klasike", icon: Coffee },
            ].map((category) => {
              const Icon = category.icon
              return (
                <Card key={category.name} className="bg-card hover:bg-card/80 transition-colors cursor-pointer">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <Icon className="h-8 w-8 mb-3 text-warm-beige" />
                    <h3 className="font-medium">{category.name}</h3>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Espresso Klasike", "Cold Brew", "Latte", "Americano", "Mocha", "Affogato"].map((drink) => (
              <Card key={drink} className="overflow-hidden bg-card hover:shadow-md transition-shadow">
                <div className="relative h-48">
                  <Image src={`/placeholder.svg?height=300&width=300`} alt={drink} fill className="object-cover" />
                  <div className="absolute top-0 left-0 w-full p-3 flex justify-between">
                    <Button variant="secondary" size="sm" className="h-8 px-2">
                      <Heart className="h-4 w-4 mr-1" /> Pëlqimet
                    </Button>
                    <Button variant="secondary" size="icon" className="h-8 w-8">
                      <Info className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-lg mb-2">{drink}</h3>
                  <p className="text-sm text-muted-foreground mb-4">Një përshkrim i shkurtër për këtë pije.</p>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">180 Lekë</span>
                    <Button size="sm" className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                      Shto
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
