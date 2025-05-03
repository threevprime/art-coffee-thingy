import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { Minus, Plus, Trash2, X, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function CartPage() {
    const cartItems = [
        {
            id: 1,
            name: "Cappuccino",
            description: "Mesatar, Qumësht i zakonshëm",
            price: 220,
            quantity: 1,
            image: "/placeholder.svg?height=200&width=200",
        },
        {
            id: 2,
            name: "Croissant me Çokollatë",
            description: "I freskët",
            price: 200,
            quantity: 2,
            image: "/placeholder.svg?height=200&width=200",
        },
    ];

    const subtotal = cartItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0,
    );
    const delivery = 150;
    const total = subtotal + delivery;

    return (
        <div className="container py-8">
            <h1 className="text-3xl font-bold mb-8">Shporta Juaj</h1>

            <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                    {cartItems.length > 0 ? (
                        <div className="space-y-4">
                            {cartItems.map((item) => (
                                <Card key={item.id} className="overflow-hidden">
                                    <div className="flex flex-col sm:flex-row">
                                        <div className="relative h-32 sm:h-auto sm:w-32 flex-shrink-0">
                                            <Image
                                                src={
                                                    item.image ||
                                                    "/placeholder.svg"
                                                }
                                                alt={item.name}
                                                fill
                                                className="object-cover"
                                            />
                                        </div>
                                        <div className="p-4 flex-1">
                                            <div className="flex justify-between">
                                                <h3 className="font-bold">
                                                    {item.name}
                                                </h3>
                                                <Button
                                                    variant="ghost"
                                                    size="icon"
                                                    className="h-8 w-8 text-muted-foreground"
                                                >
                                                    <X className="h-4 w-4" />
                                                </Button>
                                            </div>
                                            <p className="text-sm text-muted-foreground mb-3">
                                                {item.description}
                                            </p>
                                            <div className="flex justify-between items-center">
                                                <div className="flex items-center border rounded-md">
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        className="h-8 w-8 rounded-none"
                                                    >
                                                        <Minus className="h-4 w-4" />
                                                    </Button>
                                                    <span className="w-8 text-center">
                                                        {item.quantity}
                                                    </span>
                                                    <Button
                                                        variant="ghost"
                                                        size="icon"
                                                        className="h-8 w-8 rounded-none"
                                                    >
                                                        <Plus className="h-4 w-4" />
                                                    </Button>
                                                </div>
                                                <span className="font-medium">
                                                    {item.price * item.quantity}{" "}
                                                    Lekë
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </Card>
                            ))}
                            <Button
                                variant="outline"
                                className="w-full sm:w-auto"
                            >
                                <Trash2 className="h-4 w-4 mr-2" /> Pastro
                                Shportën
                            </Button>
                        </div>
                    ) : (
                        <Card>
                            <CardContent className="flex flex-col items-center justify-center py-12">
                                <div className="rounded-full bg-muted p-6 mb-4">
                                    <ShoppingCart className="h-10 w-10 text-muted-foreground" />
                                </div>
                                <h3 className="text-xl font-medium mb-2">
                                    Shporta juaj është bosh
                                </h3>
                                <p className="text-muted-foreground mb-6">
                                    Shtoni disa produkte në shportën tuaj
                                </p>
                                <Button
                                    asChild
                                    className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
                                >
                                    <Link href="/menu">Shiko Menunë</Link>
                                </Button>
                            </CardContent>
                        </Card>
                    )}
                </div>

                <div>
                    <Card>
                        <CardHeader>
                            <CardTitle>Përmbledhje e Porosisë</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">
                                    Nëntotali
                                </span>
                                <span>{subtotal} Lekë</span>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-muted-foreground">
                                    Dorëzimi
                                </span>
                                <span>{delivery} Lekë</span>
                            </div>
                            <Separator />
                            <div className="flex justify-between font-bold">
                                <span>Totali</span>
                                <span>{total} Lekë</span>
                            </div>
                            <div className="pt-4">
                                <div className="flex gap-2 mb-4">
                                    <Input placeholder="Kodi i kuponit" />
                                    <Button variant="outline">Apliko</Button>
                                </div>
                                <Button className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90">
                                    Shko te Pagesa
                                </Button>
                            </div>
                        </CardContent>
                        <CardFooter className="text-xs text-muted-foreground text-center">
                            Të gjitha çmimet përfshijnë TVSH. Dorëzimi mund të
                            ndryshojë bazuar në vendndodhjen tuaj.
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </div>
    );
}
