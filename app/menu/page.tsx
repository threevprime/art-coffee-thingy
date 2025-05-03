import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Plus, Search } from "lucide-react";
import Image from "next/image";

export default function MenuPage() {
    const categories = [
        { id: "espresso", name: "Espresso" },
        { id: "turkish", name: "Kafe Turke" },
        { id: "bustine", name: "Bustine" },
        { id: "capsules", name: "Kapsula" },
    ];

    const products = [
        // Espresso products
        {
            id: "ESP1",
            name: "Crema Bar Verdi",
            description: "Kafe espresso me aromë të pasur dhe kremë të butë",
            price: "850 Lekë",
            image: "/placeholder.svg?height=300&width=300",
            category: "espresso",
            tags: ["e fortë", "premium"],
        },
        {
            id: "ESP2",
            name: "Ekspres Supreme",
            description:
                "Përzierje premium me shije të thellë dhe të balancuar",
            price: "950 Lekë",
            image: "/placeholder.svg?height=300&width=300",
            category: "espresso",
            tags: ["premium", "e balancuar"],
        },
        {
            id: "ESP3",
            name: "Ekspres Mishele ESP3",
            description: "Kafe espresso klasike nga Mishele me shije të pasur",
            price: "780 Lekë",
            image: "/placeholder.svg?height=300&width=300",
            category: "espresso",
            tags: ["klasike", "Mishele"],
        },
        {
            id: "ESP4",
            name: "Ekspres Mishele ESP4",
            description: "Përzierje e veçantë Mishele me aromë intensive",
            price: "800 Lekë",
            image: "/placeholder.svg?height=300&width=300",
            category: "espresso",
            tags: ["e fortë", "Mishele"],
        },
        {
            id: "ESP5",
            name: "Ekspres Mishele ESP5",
            description: "Kafe espresso Mishele me shije të butë dhe të ëmbël",
            price: "820 Lekë",
            image: "/placeholder.svg?height=300&width=300",
            category: "espresso",
            tags: ["e butë", "Mishele"],
        },
        {
            id: "ESP6",
            name: "Ekspres Mishele ESP6",
            description: "Përzierje e ekuilibruar Mishele me aciditet të ulët",
            price: "830 Lekë",
            image: "/placeholder.svg?height=300&width=300",
            category: "espresso",
            tags: ["e balancuar", "Mishele"],
        },
        {
            id: "ESP7",
            name: "Ekspres Verta",
            description:
                "Kafe espresso me shije të veçantë dhe aromë të këndshme",
            price: "790 Lekë",
            image: "/placeholder.svg?height=300&width=300",
            category: "espresso",
            tags: ["e veçantë", "aromë"],
        },
        {
            id: "ESP8",
            name: "Ekspres Mishele ESP8",
            description: "Përzierje intensive Mishele me shije të plotë",
            price: "840 Lekë",
            image: "/placeholder.svg?height=300&width=300",
            category: "espresso",
            tags: ["intensive", "Mishele"],
        },
        {
            id: "ESP12",
            name: "Ekspres Mishele ESP12",
            description:
                "Kafe espresso Mishele me shije të thellë dhe të pasur",
            price: "860 Lekë",
            image: "/placeholder.svg?height=300&width=300",
            category: "espresso",
            tags: ["e thellë", "Mishele"],
        },
        {
            id: "ESP13",
            name: "Crema Bar ESP13",
            description: "Kafe espresso me kremë të pasur dhe shije të plotë",
            price: "870 Lekë",
            image: "/placeholder.svg?height=300&width=300",
            category: "espresso",
            tags: ["kremë", "e plotë"],
        },
        {
            id: "ESP14",
            name: "Ekspres Mishele ESP14",
            description: "Përzierje premium Mishele me shije të veçantë",
            price: "880 Lekë",
            image: "/placeholder.svg?height=300&width=300",
            category: "espresso",
            tags: ["premium", "Mishele"],
        },
        {
            id: "ESP15",
            name: "Ekspres Tartini",
            description:
                "Kafe espresso Tartini me shije të rafinuar dhe të balancuar",
            price: "900 Lekë",
            image: "/placeholder.svg?height=300&width=300",
            category: "espresso",
            tags: ["e rafinuar", "Tartini"],
        },
        {
            id: "ESP16",
            name: "Kafe e Pjekur-Hilla",
            description: "Kafe e pjekur me kujdes me shije të veçantë Hilla",
            price: "750 Lekë",
            image: "/placeholder.svg?height=300&width=300",
            category: "espresso",
            tags: ["e pjekur", "Hilla"],
        },
        {
            id: "ESP18",
            name: "Mishele Verdi-Mascagni",
            description: "Përzierje speciale Mishele Verdi me shije Mascagni",
            price: "920 Lekë",
            image: "/placeholder.svg?height=300&width=300",
            category: "espresso",
            tags: ["speciale", "Mishele Verdi"],
        },

        // Turkish coffee products
        {
            id: "KAFE TURKE",
            name: "Art Coffee Kuq",
            description: "Kafe turke tradicionale Art Coffee me paketim të kuq",
            price: "450 Lekë",
            image: "/placeholder.svg?height=300&width=300",
            category: "turkish",
            tags: ["tradicionale", "Art Coffee"],
        },
        {
            id: "KAFE TURKE 01",
            name: "Art Coffee Portokalli",
            description:
                "Kafe turke Art Coffee me paketim portokalli dhe aromë të veçantë",
            price: "450 Lekë",
            image: "/placeholder.svg?height=300&width=300",
            category: "turkish",
            tags: ["tradicionale", "Art Coffee"],
        },
        {
            id: "KAFE TURKE 02",
            name: "Art Coffee Aroma",
            description:
                "Kafe turke Art Coffee me aromë të pasur dhe të veçantë",
            price: "480 Lekë",
            image: "/placeholder.svg?height=300&width=300",
            category: "turkish",
            tags: ["aromë", "Art Coffee"],
        },
        {
            id: "KAFE TURKE 03",
            name: "Kafe Turke Gurabardhi",
            description: "Kafe turke tradicionale me shije të butë Gurabardhi",
            price: "420 Lekë",
            image: "/placeholder.svg?height=300&width=300",
            category: "turkish",
            tags: ["tradicionale", "e butë"],
        },
        {
            id: "KAFE TURKE 04",
            name: "Paketim Portokalli 90 gr",
            description: "Kafe turke në paketim portokalli, 90 gram",
            price: "350 Lekë",
            image: "/placeholder.svg?height=300&width=300",
            category: "turkish",
            tags: ["90 gr", "portokalli"],
        },
        {
            id: "KAFE TURKE 05",
            name: "Kafe Turke",
            description: "Kafe turke klasike me shije tradicionale",
            price: "400 Lekë",
            image: "/placeholder.svg?height=300&width=300",
            category: "turkish",
            tags: ["klasike", "tradicionale"],
        },

        // Bustine products
        {
            id: "100",
            name: "Set 100 Bustine Mishele",
            description: "Set me 100 bustina kafeje Mishele",
            price: "2500 Lekë",
            image: "/placeholder.svg?height=300&width=300",
            category: "bustine",
            tags: ["set", "Mishele", "100 copë"],
        },
        {
            id: "BD-18",
            name: "Bustine 18 Decaffinated",
            description: "Set me 18 bustina kafeje pa kafeinë",
            price: "650 Lekë",
            image: "/placeholder.svg?height=300&width=300",
            category: "bustine",
            tags: ["pa kafeinë", "18 copë"],
        },
        {
            id: "BDK",
            name: "Bustine Decaf Kuti",
            description: "Kuti me bustina kafeje pa kafeinë",
            price: "850 Lekë",
            image: "/placeholder.svg?height=300&width=300",
            category: "bustine",
            tags: ["pa kafeinë", "kuti"],
        },
        {
            id: "BDS",
            name: "Bustine Decaf",
            description: "Bustina kafeje pa kafeinë",
            price: "550 Lekë",
            image: "/placeholder.svg?height=300&width=300",
            category: "bustine",
            tags: ["pa kafeinë"],
        },
        {
            id: "BM",
            name: "Set Bustine Mishele",
            description: "Set me bustina kafeje Mishele",
            price: "750 Lekë",
            image: "/placeholder.svg?height=300&width=300",
            category: "bustine",
            tags: ["set", "Mishele"],
        },
        {
            id: "BMK",
            name: "Bustine Mishele",
            description: "Bustina kafeje Mishele",
            price: "450 Lekë",
            image: "/placeholder.svg?height=300&width=300",
            category: "bustine",
            tags: ["Mishele"],
        },
        {
            id: "BT",
            name: "Set Bustine Tartini",
            description: "Set me bustina kafeje Tartini",
            price: "780 Lekë",
            image: "/placeholder.svg?height=300&width=300",
            category: "bustine",
            tags: ["set", "Tartini"],
        },
        {
            id: "BTK",
            name: "Bustine Tartini",
            description: "Bustina kafeje Tartini",
            price: "480 Lekë",
            image: "/placeholder.svg?height=300&width=300",
            category: "bustine",
            tags: ["Tartini"],
        },
        {
            id: "SET 100",
            name: "Bustine Decaf 100",
            description: "Set me 100 bustina kafeje pa kafeinë",
            price: "2600 Lekë",
            image: "/placeholder.svg?height=300&width=300",
            category: "bustine",
            tags: ["pa kafeinë", "100 copë"],
        },

        // Capsules products
        {
            id: "ZY01",
            name: "Kapsule Covim Opera",
            description: "Kapsule kafeje Covim Opera me shije të pasur",
            price: "650 Lekë",
            image: "/images/products/ZY01.jpg",
            category: "capsules",
            tags: ["Covim", "Opera"],
        },
        {
            id: "ZY02",
            name: "Set Kapsula Covim Opera",
            description: "Set me kapsula kafeje Covim Opera",
            price: "1200 Lekë",
            image: "/images/products/ZY02.jpg",
            category: "capsules",
            tags: ["set", "Covim", "Opera"],
        },
        {
            id: "ZY03",
            name: "Kapsula Covim LP",
            description: "Kapsule kafeje Covim LP me shije të veçantë",
            price: "680 Lekë",
            image: "/placeholder.svg?height=300&width=300",
            category: "capsules",
            tags: ["Covim", "LP"],
        },
        {
            id: "ZY04",
            name: "Set Kapsula Covim LP",
            description: "Set me kapsula kafeje Covim LP",
            price: "1250 Lekë",
            image: "/placeholder.svg?height=300&width=300",
            category: "capsules",
            tags: ["set", "Covim", "LP"],
        },
        {
            id: "ZY05",
            name: "Kapsule Covim Decaf",
            description: "Kapsule kafeje Covim pa kafeinë",
            price: "700 Lekë",
            image: "/images/products/ZY05.jpg",
            category: "capsules",
            tags: ["Covim", "pa kafeinë"],
        },
        {
            id: "ZY06",
            name: "Set Kapsule Covim Decaf",
            description: "Set me kapsula kafeje Covim pa kafeinë",
            price: "1300 Lekë",
            image: "/images/products/ZY06.jpg",
            category: "capsules",
            tags: ["set", "Covim", "pa kafeinë"],
        },
        {
            id: "ZY07",
            name: "Covim Supperba Scirocco",
            description:
                "Kapsule kafeje Covim Superba Scirocco me shije intensive",
            price: "750 Lekë",
            image: "/images/products/ZY07.jpg",
            category: "capsules",
            tags: ["Covim", "Superba", "Scirocco"],
        },
        {
            id: "ZY08",
            name: "Set Covim Superba Scirocco",
            description: "Set me kapsula kafeje Covim Superba Scirocco",
            price: "1400 Lekë",
            image: "/images/products/ZY08.jpg",
            category: "capsules",
            tags: ["set", "Covim", "Superba", "Scirocco"],
        },
        {
            id: "ZY09",
            name: "Kapsule Covim Superba Maestrale",
            description:
                "Kapsule kafeje Covim Superba Maestrale me aromë të pasur",
            price: "750 Lekë",
            image: "/images/products/ZY09.png",
            category: "capsules",
            tags: ["Covim", "Superba", "Maestrale"],
        },
        {
            id: "ZY10",
            name: "Set Kapsule Covim Superba Maestrale",
            description: "Set me kapsula kafeje Covim Superba Maestrale",
            price: "1400 Lekë",
            image: "/images/products/ZY10.jpg",
            category: "capsules",
            tags: ["set", "Covim", "Superba", "Maestrale"],
        },
        {
            id: "ZY11",
            name: "Kapsule Covim Superba Levante",
            description:
                "Kapsule kafeje Covim Superba Levante me shije të balancuar",
            price: "750 Lekë",
            image: "/images/products/ZY11.png",
            category: "capsules",
            tags: ["Covim", "Superba", "Levante"],
        },
        {
            id: "ZY12",
            name: "Set Kapsule Covim Superba Levante",
            description: "Set me kapsula kafeje Covim Superba Levante",
            price: "1400 Lekë",
            image: "/images/products/ZY12.jpg",
            category: "capsules",
            tags: ["set", "Covim", "Superba", "Levante"],
        },
    ];

    return (
        <div className="container py-8">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
                <div>
                    <h1 className="text-3xl font-bold mb-2">Produktet Tona</h1>
                    <p className="text-muted-foreground">
                        Zbuloni koleksionin tonë të plotë të kafeve
                    </p>
                </div>
                <div className="mt-4 md:mt-0 flex gap-2 w-full md:w-auto">
                    <div className="relative w-full md:w-64">
                        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                        <Input
                            type="search"
                            placeholder="Kërko produkte..."
                            className="pl-8"
                        />
                    </div>
                    <Button variant="outline" size="sm">
                        Filtro
                    </Button>
                </div>
            </div>

            <Tabs defaultValue="espresso" className="w-full">
                <TabsList className="mb-8 flex flex-wrap h-auto">
                    {categories.map((category) => (
                        <TabsTrigger
                            key={category.id}
                            value={category.id}
                            className="px-4 py-2"
                        >
                            {category.name}
                        </TabsTrigger>
                    ))}
                </TabsList>

                {categories.map((category) => (
                    <TabsContent
                        key={category.id}
                        value={category.id}
                        className="mt-0"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {products
                                .filter(
                                    (product) =>
                                        product.category === category.id,
                                )
                                .map((product) => (
                                    <Card
                                        key={product.id}
                                        className="overflow-hidden bg-card hover:shadow-md transition-shadow"
                                    >
                                        <div className="relative h-48">
                                            <Image
                                                src={
                                                    product.image ||
                                                    "/placeholder.svg"
                                                }
                                                alt={product.name}
                                                fill
                                                className="object-cover"
                                            />
                                            <div className="absolute top-2 left-2">
                                                <Badge
                                                    variant="secondary"
                                                    className="bg-secondary/80 backdrop-blur-sm"
                                                >
                                                    {product.id}
                                                </Badge>
                                            </div>
                                        </div>
                                        <CardContent className="p-4">
                                            <div className="flex justify-between items-start mb-2">
                                                <h3 className="font-bold text-lg">
                                                    {product.name}
                                                </h3>
                                                <span className="font-medium text-warm-beige">
                                                    {product.price}
                                                </span>
                                            </div>
                                            <p className="text-sm text-muted-foreground mb-3">
                                                {product.description}
                                            </p>
                                            <div className="flex justify-between items-center">
                                                <div className="flex flex-wrap gap-2">
                                                    {product.tags.map(
                                                        (tag, index) => (
                                                            <Badge
                                                                key={index}
                                                                variant="outline"
                                                                className="text-xs"
                                                            >
                                                                {tag}
                                                            </Badge>
                                                        ),
                                                    )}
                                                </div>
                                                <Button
                                                    size="sm"
                                                    className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
                                                >
                                                    <Plus className="h-4 w-4 mr-1" />{" "}
                                                    Shto
                                                </Button>
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                        </div>
                    </TabsContent>
                ))}
            </Tabs>
        </div>
    );
}
