"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Plus, Search } from "lucide-react";
import Image from "next/image";
import { categories, products } from "@/utils/data/menu";
import { addToCart } from "@/utils/CartManagement";

export default function MenuPage() {
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
                                                    {product.price} Lekë
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
                                                    onClick={() =>
                                                        addToCart({
                                                            id: product.id,
                                                            name: product.name,
                                                            description:
                                                                product.description,
                                                            price: product.price,
                                                            quantity: 1,
                                                            image: product.image,
                                                            isCustom: false,
                                                        })
                                                    }
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
