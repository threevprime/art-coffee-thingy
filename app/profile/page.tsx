"use client";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
    CreditCard,
    LogOut,
    MapPin,
    Settings,
    ShoppingBag,
} from "lucide-react";
import { getPoints } from "@/utils/PointsManagement";

export default function ProfilePage() {
    return (
        <div className="container py-8">
            <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                    <Card>
                        <CardHeader className="pb-4">
                            <div className="flex items-center gap-4">
                                <Avatar className="h-16 w-16">
                                    <AvatarImage
                                        src="/placeholder.svg?height=100&width=100"
                                        alt="Avatar"
                                    />
                                    <AvatarFallback className="bg-secondary text-secondary-foreground">
                                        JD
                                    </AvatarFallback>
                                </Avatar>
                                <div>
                                    <CardTitle>Jane Doe</CardTitle>
                                    <CardDescription>
                                        jane@example.com
                                    </CardDescription>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="flex items-center gap-3">
                                    <MapPin className="h-5 w-5 text-muted-foreground" />
                                    <div>
                                        <p className="text-sm font-medium">
                                            Adresa ime
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            Rruga Myslym Shyri, Tiranë
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <CreditCard className="h-5 w-5 text-muted-foreground" />
                                    <div>
                                        <p className="text-sm font-medium">
                                            Metodat e Pagesës
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            Visa •••• 4242
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3">
                                    <ShoppingBag className="h-5 w-5 text-muted-foreground" />
                                    <div>
                                        <p className="text-sm font-medium">
                                            Porositë Totale
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            12 porosi
                                        </p>
                                    </div>
                                </div>
                                <div className="pt-4">
                                    <p className="text-sm font-medium mb-2">
                                        Pikët e Besnikërisë
                                    </p>
                                    <div className="relative h-4 w-full bg-muted rounded-full overflow-hidden">
                                        <div
                                            className="absolute h-full bg-secondary"
                                            style={{
                                                width: `${(getPoints() / 100) * 100}%`,
                                            }}
                                        ></div>
                                    </div>
                                    <p className="text-sm text-muted-foreground mt-1">
                                        {getPoints()} / 100 pikë për një kafe
                                        falas
                                    </p>
                                </div>
                                <div className="pt-4">
                                    <Button
                                        variant="outline"
                                        className="w-full"
                                        size="sm"
                                    >
                                        <Settings className="h-4 w-4 mr-2" />{" "}
                                        Preferencat e Kafesë
                                    </Button>
                                </div>
                                <div className="pt-2">
                                    <Button
                                        variant="outline"
                                        className="w-full text-destructive hover:text-destructive"
                                        size="sm"
                                    >
                                        <LogOut className="h-4 w-4 mr-2" /> Dil
                                        nga llogaria
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
                <div className="md:w-2/3">
                    <Tabs defaultValue="historia">
                        <TabsList className="mb-6">
                            <TabsTrigger value="historia">
                                Historia e Porosive
                            </TabsTrigger>
                            <TabsTrigger value="preferencat">
                                Preferencat
                            </TabsTrigger>
                            <TabsTrigger value="adresat">Adresat</TabsTrigger>
                        </TabsList>
                        <TabsContent value="historia">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Historia e Porosive</CardTitle>
                                    <CardDescription>
                                        Shiko porositë e tua të mëparshme
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        {[1, 2, 3].map((order) => (
                                            <div
                                                key={order}
                                                className="border rounded-lg p-4"
                                            >
                                                <div className="flex justify-between items-start mb-2">
                                                    <div>
                                                        <p className="font-medium">
                                                            Porosi #{order}0123
                                                        </p>
                                                        <p className="text-sm text-muted-foreground">
                                                            15 Prill, 2023 -
                                                            14:30
                                                        </p>
                                                    </div>
                                                    <Badge
                                                        variant="outline"
                                                        className="bg-secondary/20"
                                                    >
                                                        E përfunduar
                                                    </Badge>
                                                </div>
                                                <div className="flex flex-wrap gap-2 mb-3">
                                                    <Badge
                                                        variant="secondary"
                                                        className="text-xs"
                                                    >
                                                        1× Cappuccino
                                                    </Badge>
                                                    <Badge
                                                        variant="secondary"
                                                        className="text-xs"
                                                    >
                                                        1× Croissant
                                                    </Badge>
                                                </div>
                                                <div className="flex justify-between items-center">
                                                    <p className="font-medium">
                                                        650 Lekë
                                                    </p>
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                    >
                                                        Porosit përsëri
                                                    </Button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value="preferencat">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Preferencat e Kafesë</CardTitle>
                                    <CardDescription>
                                        Personalizoni eksperiencën tuaj të
                                        kafesë
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground">
                                        Preferencat tuaja do të shfaqen këtu.
                                    </p>
                                </CardContent>
                            </Card>
                        </TabsContent>
                        <TabsContent value="adresat">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Adresat e Ruajtura</CardTitle>
                                    <CardDescription>
                                        Menaxhoni adresat tuaja të dorëzimit
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        <div className="border rounded-lg p-4">
                                            <div className="flex justify-between items-start mb-2">
                                                <div>
                                                    <p className="font-medium">
                                                        Shtëpia
                                                    </p>
                                                    <p className="text-sm text-muted-foreground">
                                                        Rruga Myslym Shyri,
                                                        Tiranë
                                                    </p>
                                                </div>
                                                <Badge>Kryesore</Badge>
                                            </div>
                                            <div className="flex gap-2 mt-3">
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                >
                                                    Ndrysho
                                                </Button>
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    className="text-destructive hover:text-destructive"
                                                >
                                                    Fshi
                                                </Button>
                                            </div>
                                        </div>
                                        <div className="border rounded-lg p-4">
                                            <div className="flex justify-between items-start mb-2">
                                                <div>
                                                    <p className="font-medium">
                                                        Zyra
                                                    </p>
                                                    <p className="text-sm text-muted-foreground">
                                                        Bulevardi Dëshmorët e
                                                        Kombit, Tiranë
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="flex gap-2 mt-3">
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                >
                                                    Ndrysho
                                                </Button>
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                    className="text-destructive hover:text-destructive"
                                                >
                                                    Fshi
                                                </Button>
                                            </div>
                                        </div>
                                        <Button className="w-full mt-4">
                                            Shto Adresë të Re
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </TabsContent>
                    </Tabs>
                </div>
            </div>
        </div>
    );
}
