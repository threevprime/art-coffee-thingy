"use client"

import { useState, useRef, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronLeft, ChevronRight, Droplet, Flame } from "lucide-react"
import Image from "next/image"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, PerspectiveCamera, Environment } from "@react-three/drei"
import * as THREE from "three"

// 3D Coffee Glass Component
function CoffeeGlass({ base, milk, flavor, temperature }) {
  const glassRef = useRef()
  const liquidRef = useRef()

  // Define colors for different options
  const baseColors = {
    espresso: "#3A2618",
    americano: "#5C3A21",
    filter: "#6B4226",
  }

  const milkColors = {
    regular: "#E0D3C1",
    oat: "#D8C9B4",
    almond: "#E5D9C3",
    none: "transparent",
  }

  const flavorColors = {
    vanilla: "#E8DCCA",
    caramel: "#C17F45",
    chocolate: "#4A2C1E",
    none: "transparent",
  }

  // Calculate liquid fill level based on temperature (0-100)
  const fillLevel = 0.6 + (temperature / 100) * 0.3

  // Calculate liquid color based on selections
  useEffect(() => {
    if (!liquidRef.current) return

    // Start with base color
    const color = new THREE.Color(baseColors[base] || "#3A2618")

    // Mix with milk if selected
    if (milk !== "none") {
      const milkColor = new THREE.Color(milkColors[milk] || "#E0D3C1")
      color.lerp(milkColor, 0.4)
    }

    // Add flavor tint if selected
    if (flavor !== "none") {
      const flavorColor = new THREE.Color(flavorColors[flavor] || "transparent")
      color.lerp(flavorColor, 0.2)
    }

    liquidRef.current.material.color = color
  }, [base, milk, flavor])

  return (
    <group position={[0, -1, 0]}>
      {/* Glass */}
      <mesh ref={glassRef} castShadow receiveShadow>
        <cylinderGeometry args={[1, 0.8, 2.5, 32]} />
        <meshPhysicalMaterial transparent opacity={0.2} roughness={0} transmission={0.9} thickness={0.5} />
      </mesh>

      {/* Liquid */}
      <mesh ref={liquidRef} position={[0, -1 + fillLevel, 0]}>
        <cylinderGeometry args={[0.95, 0.75, 2.5 * fillLevel, 32]} />
        <meshStandardMaterial color={baseColors[base]} roughness={0.2} metalness={0.1} />
      </mesh>

      {/* Steam effect for hot drinks */}
      {temperature > 50 && (
        <group position={[0, 1.3, 0]}>
          <mesh>
            <sphereGeometry args={[0.1, 16, 16]} />
            <meshStandardMaterial color="white" transparent opacity={0.2} />
          </mesh>
          <mesh position={[0.2, 0.3, 0]}>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshStandardMaterial color="white" transparent opacity={0.15} />
          </mesh>
          <mesh position={[-0.15, 0.5, 0]}>
            <sphereGeometry args={[0.06, 16, 16]} />
            <meshStandardMaterial color="white" transparent opacity={0.1} />
          </mesh>
        </group>
      )}
    </group>
  )
}

export default function CreatePage() {
  const [step, setStep] = useState(1)
  const [selectedBase, setSelectedBase] = useState("espresso")
  const [selectedMilk, setSelectedMilk] = useState("regular")
  const [selectedFlavor, setSelectedFlavor] = useState("none")
  const [temperature, setTemperature] = useState(70)
  const [userType, setUserType] = useState("personal")

  const bases = [
    { id: "espresso", name: "Espresso", image: "/placeholder.svg?height=300&width=300" },
    { id: "americano", name: "Americano", image: "/placeholder.svg?height=300&width=300" },
    { id: "filter", name: "Filter", image: "/placeholder.svg?height=300&width=300" },
  ]

  const milks = [
    { id: "regular", name: "I zakonshëm", image: "/placeholder.svg?height=300&width=300" },
    { id: "oat", name: "Tërshërë", image: "/placeholder.svg?height=300&width=300" },
    { id: "almond", name: "Bajame", image: "/placeholder.svg?height=300&width=300" },
    { id: "none", name: "Pa qumësht", image: "/placeholder.svg?height=300&width=300" },
  ]

  const flavors = [
    { id: "vanilla", name: "Vanilje", image: "/placeholder.svg?height=300&width=300" },
    { id: "caramel", name: "Karamel", image: "/placeholder.svg?height=300&width=300" },
    { id: "chocolate", name: "Çokollatë", image: "/placeholder.svg?height=300&width=300" },
    { id: "none", name: "Pa shije", image: "/placeholder.svg?height=300&width=300" },
  ]

  const nextStep = () => {
    if (step < 4) setStep(step + 1)
  }

  const prevStep = () => {
    if (step > 1) setStep(step - 1)
  }

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold mb-2">Krijo Kafenë Tënde</h1>
      <p className="text-muted-foreground mb-4">Personalizoni kafenë tuaj sipas preferencave</p>

      <Tabs value={userType} onValueChange={setUserType} className="mb-6">
        <TabsList>
          <TabsTrigger value="personal">Përdorim Personal</TabsTrigger>
          <TabsTrigger value="business">Përdorim Biznesi</TabsTrigger>
        </TabsList>
        <TabsContent value="personal" className="pt-4">
          <p className="text-muted-foreground mb-4">
            Krijoni kafenë tuaj të personalizuar për përdorim personal. Zgjidhni nga opsionet tona për të krijuar
            përzierjen perfekte për ju.
          </p>
        </TabsContent>
        <TabsContent value="business" className="pt-4">
          <p className="text-muted-foreground mb-4">
            Krijoni përzierje të personalizuara për biznesin tuaj. Ofrojmë çmime me shumicë dhe mundësi për të
            personalizuar paketimin me logon tuaj.
          </p>
        </TabsContent>
      </Tabs>

      <div className="flex justify-between items-center mb-8">
        <div className="flex items-center gap-2">
          <Badge
            variant={step >= 1 ? "secondary" : "outline"}
            className="h-8 w-8 rounded-full p-0 flex items-center justify-center"
          >
            1
          </Badge>
          <div className="h-0.5 w-8 bg-muted"></div>
          <Badge
            variant={step >= 2 ? "secondary" : "outline"}
            className="h-8 w-8 rounded-full p-0 flex items-center justify-center"
          >
            2
          </Badge>
          <div className="h-0.5 w-8 bg-muted"></div>
          <Badge
            variant={step >= 3 ? "secondary" : "outline"}
            className="h-8 w-8 rounded-full p-0 flex items-center justify-center"
          >
            3
          </Badge>
          <div className="h-0.5 w-8 bg-muted"></div>
          <Badge
            variant={step >= 4 ? "secondary" : "outline"}
            className="h-8 w-8 rounded-full p-0 flex items-center justify-center"
          >
            4
          </Badge>
        </div>
        <div className="text-sm text-muted-foreground">Hapi {step} nga 4</div>
      </div>

      <div className="grid md:grid-cols-5 gap-8">
        <div className="md:col-span-3">
          {step === 1 && (
            <div>
              <h2 className="text-xl font-bold mb-4">Zgjidhni Bazën</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {bases.map((base) => (
                  <Card
                    key={base.id}
                    className={`overflow-hidden cursor-pointer ${
                      selectedBase === base.id ? "ring-2 ring-secondary" : ""
                    }`}
                    onClick={() => setSelectedBase(base.id)}
                  >
                    <div className="relative h-40">
                      <Image src={base.image || "/placeholder.svg"} alt={base.name} fill className="object-cover" />
                    </div>
                    <CardContent className="p-4 text-center">
                      <h3 className="font-medium">{base.name}</h3>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 className="text-xl font-bold mb-4">Zgjidhni Qumështin</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {milks.map((milk) => (
                  <Card
                    key={milk.id}
                    className={`overflow-hidden cursor-pointer ${
                      selectedMilk === milk.id ? "ring-2 ring-secondary" : ""
                    }`}
                    onClick={() => setSelectedMilk(milk.id)}
                  >
                    <div className="relative h-40">
                      <Image src={milk.image || "/placeholder.svg"} alt={milk.name} fill className="object-cover" />
                    </div>
                    <CardContent className="p-4 text-center">
                      <h3 className="font-medium">{milk.name}</h3>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 className="text-xl font-bold mb-4">Zgjidhni Shijen</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {flavors.map((flavor) => (
                  <Card
                    key={flavor.id}
                    className={`overflow-hidden cursor-pointer ${
                      selectedFlavor === flavor.id ? "ring-2 ring-secondary" : ""
                    }`}
                    onClick={() => setSelectedFlavor(flavor.id)}
                  >
                    <div className="relative h-40">
                      <Image src={flavor.image || "/placeholder.svg"} alt={flavor.name} fill className="object-cover" />
                    </div>
                    <CardContent className="p-4 text-center">
                      <h3 className="font-medium">{flavor.name}</h3>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {step === 4 && (
            <div>
              <h2 className="text-xl font-bold mb-4">Dekorime dhe Opsione Shtesë</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-sm font-medium mb-3">Dekorime</h3>
                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" className="justify-start">
                      Shkumë
                    </Button>
                    <Button variant="outline" className="justify-start">
                      Pluhur Kakao
                    </Button>
                    <Button variant="outline" className="justify-start">
                      Kanellë
                    </Button>
                    <Button variant="outline" className="justify-start">
                      Pa dekorime
                    </Button>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-3">Temperatura</h3>
                  <Slider
                    defaultValue={[70]}
                    value={[temperature]}
                    onValueChange={(value) => setTemperature(value[0])}
                    max={100}
                    step={10}
                    className="mb-2"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground">
                    <span className="flex items-center">
                      <Droplet className="h-3 w-3 mr-1" /> E ftohtë
                    </span>
                    <span className="flex items-center">
                      <Flame className="h-3 w-3 mr-1" /> E nxehtë
                    </span>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-medium mb-3">Madhësia</h3>
                  <RadioGroup defaultValue="medium" className="flex gap-4">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="small" id="size-small" />
                      <Label htmlFor="size-small">E vogël</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="medium" id="size-medium" />
                      <Label htmlFor="size-medium">Mesatare</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="large" id="size-large" />
                      <Label htmlFor="size-large">E madhe</Label>
                    </div>
                  </RadioGroup>
                </div>
              </div>
            </div>
          )}

          <div className="flex justify-between mt-8">
            <Button variant="outline" onClick={prevStep} disabled={step === 1}>
              <ChevronLeft className="h-4 w-4 mr-2" /> Kthehu
            </Button>

            {step < 4 ? (
              <Button onClick={nextStep} className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                Vazhdo <ChevronRight className="h-4 w-4 ml-2" />
              </Button>
            ) : (
              <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">Shto në Shportë</Button>
            )}
          </div>
        </div>

        <div className="md:col-span-2">
          <Card className="sticky top-24">
            <CardContent className="p-6">
              <h2 className="text-xl font-bold mb-4">Kafeja Juaj</h2>

              <div className="relative h-64 mb-4 bg-muted rounded-lg flex items-center justify-center">
                <Canvas shadows>
                  <ambientLight intensity={0.5} />
                  <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
                  <PerspectiveCamera makeDefault position={[0, 0, 5]} fov={40} />
                  <CoffeeGlass
                    base={selectedBase}
                    milk={selectedMilk}
                    flavor={selectedFlavor}
                    temperature={temperature}
                  />
                  <OrbitControls enableZoom={false} enablePan={false} rotateSpeed={0.5} />
                  <Environment preset="studio" />
                </Canvas>
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Baza:</span>
                  <span className="font-medium">
                    {selectedBase ? bases.find((b) => b.id === selectedBase)?.name : "Nuk është zgjedhur"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Qumështi:</span>
                  <span className="font-medium">
                    {selectedMilk ? milks.find((m) => m.id === selectedMilk)?.name : "Nuk është zgjedhur"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Shija:</span>
                  <span className="font-medium">
                    {selectedFlavor ? flavors.find((f) => f.id === selectedFlavor)?.name : "Nuk është zgjedhur"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Temperatura:</span>
                  <span className="font-medium">{temperature}%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Madhësia:</span>
                  <span className="font-medium">Mesatare</span>
                </div>
              </div>

              <div className="pt-4 border-t">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium">Çmimi Total:</span>
                  <span className="text-lg font-bold">250 Lekë</span>
                </div>
                <p className="text-xs text-muted-foreground">Përfshirë TVSH</p>

                {userType === "business" && (
                  <div className="mt-4 p-3 bg-secondary/10 rounded-md">
                    <p className="text-sm font-medium mb-1">Çmimi me shumicë:</p>
                    <p className="text-sm text-muted-foreground">
                      Kontaktoni për çmime speciale për porosi mbi 50 njësi
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
