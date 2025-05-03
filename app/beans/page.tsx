"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Coffee, Gift, Award, CreditCard, Ticket, ShoppingBag } from "lucide-react"

export default function BeansPage() {
  const [points, setPoints] = useState(350)
  const [selectedReward, setSelectedReward] = useState<string | null>(null)
  //test
  const rewards = [
    {
      id: "free-coffee",
      name: "Kafe Falas",
      description: "Një kafe e zgjedhur nga ju, falas në dyqanin tonë",
      points: 200,
      image: "/placeholder.svg?height=200&width=200",
      icon: <Coffee className="h-8 w-8" />,
    },
    {
      id: "discount",
      name: "10% Zbritje",
      description: "10% zbritje në blerjen tuaj të ardhshme",
      points: 300,
      image: "/placeholder.svg?height=200&width=200",
      icon: <ShoppingBag className="h-8 w-8" />,
    },
    {
      id: "gift-card",
      name: "Kartë Dhuratë",
      description: "Kartë dhuratë me vlerë 1000 Lekë",
      points: 500,
      image: "/placeholder.svg?height=200&width=200",
      icon: <Gift className="h-8 w-8" />,
    },
    {
      id: "premium-coffee",
      name: "Paketë Kafeje Premium",
      description: "Një paketë kafeje premium nga koleksioni ynë",
      points: 750,
      image: "/placeholder.svg?height=200&width=200",
      icon: <Award className="h-8 w-8" />,
    },
    {
      id: "coffee-tasting",
      name: "Seancë Degustimi",
      description: "Një seancë degustimi kafeje për ju dhe një mik",
      points: 1000,
      image: "/placeholder.svg?height=200&width=200",
      icon: <CreditCard className="h-8 w-8" />,
    },
    {
      id: "coffee-workshop",
      name: "Workshop Kafeje",
      description: "Një workshop për përgatitjen e kafesë perfekte",
      points: 1500,
      image: "/placeholder.svg?height=200&width=200",
      icon: <Ticket className="h-8 w-8" />,
    },
  ]

  const history = [
    {
      id: 1,
      date: "15 Prill, 2023",
      action: "Blerje",
      points: "+50",
      description: "Blerje në dyqan: Espresso Mishele ESP3",
    },
    {
      id: 2,
      date: "10 Prill, 2023",
      action: "Regjistrim",
      points: "+100",
      description: "Bonus regjistrimi në programin Beans",
    },
    {
      id: 3,
      date: "5 Prill, 2023",
      action: "Blerje",
      points: "+75",
      description: "Blerje online: Set Kapsula Covim Opera",
    },
    {
      id: 4,
      date: "1 Prill, 2023",
      action: "Shpërblim",
      points: "-200",
      description: "Këmbim pikësh për një kafe falas",
    },
    {
      id: 5,
      date: "25 Mars, 2023",
      action: "Blerje",
      points: "+125",
      description: "Blerje në dyqan: Kafe Turke Art Coffee dhe Bustine Mishele",
    },
  ]

  const handleSelectReward = (id: string) => {
    setSelectedReward(id === selectedReward ? null : id)
  }

  const handleRedeemPoints = () => {
    if (!selectedReward) return

    const reward = rewards.find((r) => r.id === selectedReward)
    if (!reward || points < reward.points) return

    setPoints(points - reward.points)
    setSelectedReward(null)
    // In a real app, you would call an API to redeem the points
    alert(`Urime! Keni këmbyer ${reward.points} pikë për "${reward.name}"`)
  }

  return (
    <div className="container py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold mb-2">Programi i Besnikërisë Beans</h1>
          <p className="text-muted-foreground text-lg">
            Fitoni pikë për çdo blerje dhe këmbejini ato për shpërblime të veçanta
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Pikët Tuaja</CardTitle>
              <CardDescription>Pikët aktuale dhe progresi juaj</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="bg-secondary/20 p-3 rounded-full mr-4">
                    <Coffee className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Pikët Aktuale</p>
                    <p className="text-2xl font-bold">{points} Beans</p>
                  </div>
                </div>
                <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">Fito më shumë</Button>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1 text-sm">
                    <span>Niveli aktual: Bronze</span>
                    <span>500 pikë për Silver</span>
                  </div>
                  <Progress value={(points / 500) * 100} className="h-2" />
                </div>

                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="bg-card p-3 rounded-lg">
                    <p className="text-xs text-muted-foreground">Bronze</p>
                    <p className="font-medium">0-499</p>
                  </div>
                  <div className="bg-card p-3 rounded-lg">
                    <p className="text-xs text-muted-foreground">Silver</p>
                    <p className="font-medium">500-999</p>
                  </div>
                  <div className="bg-card p-3 rounded-lg">
                    <p className="text-xs text-muted-foreground">Gold</p>
                    <p className="font-medium">1000+</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Si Funksionon</CardTitle>
              <CardDescription>Programi i besnikërisë Beans</CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-secondary/20 p-2 rounded-full mr-3 mt-0.5">
                    <span className="text-xs font-bold text-secondary">1</span>
                  </div>
                  <p className="text-sm">Fitoni 1 pikë Beans për çdo 10 Lekë të shpenzuara</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-secondary/20 p-2 rounded-full mr-3 mt-0.5">
                    <span className="text-xs font-bold text-secondary">2</span>
                  </div>
                  <p className="text-sm">Fitoni pikë shtesë për aktivitete të veçanta dhe promocione</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-secondary/20 p-2 rounded-full mr-3 mt-0.5">
                    <span className="text-xs font-bold text-secondary">3</span>
                  </div>
                  <p className="text-sm">Këmbeni pikët tuaja për shpërblime të ndryshme</p>
                </li>
                <li className="flex items-start">
                  <div className="bg-secondary/20 p-2 rounded-full mr-3 mt-0.5">
                    <span className="text-xs font-bold text-secondary">4</span>
                  </div>
                  <p className="text-sm">Ngjituni në nivele më të larta për përfitime ekskluzive</p>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="rewards" className="mb-12">
          <TabsList className="mb-6">
            <TabsTrigger value="rewards">Shpërblimet</TabsTrigger>
            <TabsTrigger value="history">Historia e Pikëve</TabsTrigger>
          </TabsList>

          <TabsContent value="rewards">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {rewards.map((reward) => (
                <Card
                  key={reward.id}
                  className={`cursor-pointer transition-all ${
                    selectedReward === reward.id ? "ring-2 ring-secondary" : ""
                  } ${points < reward.points ? "opacity-60" : ""}`}
                  onClick={() => handleSelectReward(reward.id)}
                >
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <div className="bg-secondary/20 p-3 rounded-full">{reward.icon}</div>
                      <Badge variant={points >= reward.points ? "secondary" : "outline"}>{reward.points} Beans</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h3 className="font-bold mb-1">{reward.name}</h3>
                    <p className="text-sm text-muted-foreground">{reward.description}</p>
                  </CardContent>
                  <CardFooter>
                    <Button
                      className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
                      disabled={points < reward.points || selectedReward !== reward.id}
                      onClick={handleRedeemPoints}
                    >
                      Këmbe Pikët
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="history">
            <Card>
              <CardHeader>
                <CardTitle>Historia e Pikëve</CardTitle>
                <CardDescription>Aktiviteti juaj i fundit në programin Beans</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {history.map((item) => (
                    <div key={item.id} className="flex justify-between items-center border-b pb-3">
                      <div>
                        <p className="font-medium">{item.action}</p>
                        <p className="text-sm text-muted-foreground">{item.description}</p>
                        <p className="text-xs text-muted-foreground">{item.date}</p>
                      </div>
                      <Badge
                        variant={item.points.startsWith("+") ? "secondary" : "outline"}
                        className={item.points.startsWith("+") ? "" : "text-destructive"}
                      >
                        {item.points} Beans
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="bg-card rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4">Pyetje të Shpeshta</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium mb-1">Si mund të fitoj pikë Beans?</h3>
              <p className="text-sm text-muted-foreground">
                Ju fitoni 1 pikë Beans për çdo 10 Lekë të shpenzuara në dyqanet tona ose në blerjet online. Gjithashtu,
                mund të fitoni pikë shtesë duke marrë pjesë në promocione të veçanta dhe aktivitete.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-1">Sa kohë janë të vlefshme pikët?</h3>
              <p className="text-sm text-muted-foreground">
                Pikët Beans janë të vlefshme për 12 muaj nga data e fitimit. Pas kësaj periudhe, pikët e papërdorura do
                të skadojnë.
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-1">Si mund t'i përdor pikët e mia?</h3>
              <p className="text-sm text-muted-foreground">
                Ju mund t'i këmbeni pikët tuaja për shpërblime të ndryshme, duke përfshirë kafe falas, zbritje, karta
                dhuratë dhe më shumë. Thjesht zgjidhni shpërblimin që dëshironi dhe klikoni "Këmbe Pikët".
              </p>
            </div>
            <div>
              <h3 className="font-medium mb-1">A mund t'i transferoj pikët e mia te dikush tjetër?</h3>
              <p className="text-sm text-muted-foreground">
                Aktualisht, pikët Beans nuk mund të transferohen te përdorues të tjerë. Ato janë të lidhura me llogarinë
                tuaj personale.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
