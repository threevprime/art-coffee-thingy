"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, MapPin, Truck } from "lucide-react";

export default function DeliveryPage() {
    const [deliveryType, setDeliveryType] = useState("standard");
    const [recurring, setRecurring] = useState(false);

    return (
        <div className="container py-8">
            <h1 className="text-3xl font-bold mb-2">Porosit me Dorëzim</h1>
            <p className="text-muted-foreground mb-8">
                Zgjidhni opsionet e dorëzimit për porosinë tuaj
            </p>

            <div className="grid md:grid-cols-3 gap-8">
                <div className="md:col-span-2 space-y-8">
                    <Card>
                        <CardHeader>
                            <CardTitle>Adresa e Dorëzimit</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <Tabs defaultValue="existing">
                                <TabsList className="mb-6">
                                    <TabsTrigger value="existing">
                                        Adresat e Ruajtura
                                    </TabsTrigger>
                                    <TabsTrigger value="new">
                                        Adresë e Re
                                    </TabsTrigger>
                                </TabsList>
                                <TabsContent value="existing">
                                    <RadioGroup defaultValue="home">
                                        <div className="space-y-4">
                                            <div className="flex items-start space-x-3 border rounded-lg p-4">
                                                <RadioGroupItem
                                                    value="home"
                                                    id="home"
                                                    className="mt-1"
                                                />
                                                <div className="flex-1">
                                                    <Label
                                                        htmlFor="home"
                                                        className="font-medium"
                                                    >
                                                        Shtëpia
                                                    </Label>
                                                    <p className="text-sm text-muted-foreground">
                                                        Rruga Myslym Shyri,
                                                        Tiranë
                                                    </p>
                                                    <p className="text-sm text-muted-foreground">
                                                        +355 69 123 4567
                                                    </p>
                                                </div>
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                >
                                                    Ndrysho
                                                </Button>
                                            </div>
                                            <div className="flex items-start space-x-3 border rounded-lg p-4">
                                                <RadioGroupItem
                                                    value="office"
                                                    id="office"
                                                    className="mt-1"
                                                />
                                                <div className="flex-1">
                                                    <Label
                                                        htmlFor="office"
                                                        className="font-medium"
                                                    >
                                                        Zyra
                                                    </Label>
                                                    <p className="text-sm text-muted-foreground">
                                                        Bulevardi Dëshmorët e
                                                        Kombit, Tiranë
                                                    </p>
                                                    <p className="text-sm text-muted-foreground">
                                                        +355 69 765 4321
                                                    </p>
                                                </div>
                                                <Button
                                                    variant="outline"
                                                    size="sm"
                                                >
                                                    Ndrysho
                                                </Button>
                                            </div>
                                        </div>
                                    </RadioGroup>
                                </TabsContent>
                                <TabsContent value="new">
                                    <div className="space-y-4">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="first-name">
                                                    Emri
                                                </Label>
                                                <Input
                                                    id="first-name"
                                                    placeholder="Emri juaj"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="last-name">
                                                    Mbiemri
                                                </Label>
                                                <Input
                                                    id="last-name"
                                                    placeholder="Mbiemri juaj"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="address">
                                                Adresa
                                            </Label>
                                            <Input
                                                id="address"
                                                placeholder="Rruga, numri i shtëpisë/apartamentit"
                                            />
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div className="space-y-2">
                                                <Label htmlFor="city">
                                                    Qyteti
                                                </Label>
                                                <Input
                                                    id="city"
                                                    placeholder="Qyteti"
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="postal-code">
                                                    Kodi Postar
                                                </Label>
                                                <Input
                                                    id="postal-code"
                                                    placeholder="Kodi postar"
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="phone">
                                                Numri i Telefonit
                                            </Label>
                                            <Input
                                                id="phone"
                                                placeholder="+355 6X XXX XXXX"
                                            />
                                        </div>
                                        <div className="pt-2">
                                            <Button>Ruaj Adresën</Button>
                                        </div>
                                    </div>
                                </TabsContent>
                            </Tabs>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Zona e Dorëzimit</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="relative h-64 bg-muted rounded-lg mb-4 flex items-center justify-center">
                                <MapPin className="h-12 w-12 text-muted-foreground opacity-50" />
                                <p className="text-muted-foreground absolute">
                                    Harta e zonës së dorëzimit
                                </p>
                            </div>
                            <p className="text-sm text-muted-foreground mb-4">
                                Aktualisht ofrojmë dorëzim në Tiranë dhe
                                rrethinat e saj. Koha e dorëzimit varet nga
                                vendndodhja juaj dhe lloji i dorëzimit që
                                zgjidhni.
                            </p>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>Opsionet e Dorëzimit</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <RadioGroup
                                defaultValue="standard"
                                value={deliveryType}
                                onValueChange={setDeliveryType}
                                className="space-y-4"
                            >
                                <div className="flex items-start space-x-3 border rounded-lg p-4">
                                    <RadioGroupItem
                                        value="standard"
                                        id="standard"
                                        className="mt-1"
                                    />
                                    <div className="flex-1">
                                        <Label
                                            htmlFor="standard"
                                            className="font-medium"
                                        >
                                            Dorëzim Standard
                                        </Label>
                                        <p className="text-sm text-muted-foreground">
                                            Dorëzim brenda 30-45 minutash
                                        </p>
                                        <p className="text-sm font-medium">
                                            150 Lekë
                                        </p>
                                    </div>
                                    <div className="flex items-center">
                                        <Clock className="h-5 w-5 text-muted-foreground mr-2" />
                                        <span className="text-sm">
                                            30-45 min
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3 border rounded-lg p-4">
                                    <RadioGroupItem
                                        value="express"
                                        id="express"
                                        className="mt-1"
                                    />
                                    <div className="flex-1">
                                        <Label
                                            htmlFor="express"
                                            className="font-medium"
                                        >
                                            Dorëzim Express
                                        </Label>
                                        <p className="text-sm text-muted-foreground">
                                            Dorëzim prioritar brenda 15-25
                                            minutash
                                        </p>
                                        <p className="text-sm font-medium">
                                            250 Lekë
                                        </p>
                                    </div>
                                    <div className="flex items-center">
                                        <Clock className="h-5 w-5 text-muted-foreground mr-2" />
                                        <span className="text-sm">
                                            15-25 min
                                        </span>
                                    </div>
                                </div>
                                <div className="flex items-start space-x-3 border rounded-lg p-4">
                                    <RadioGroupItem
                                        value="pickup"
                                        id="pickup"
                                        className="mt-1"
                                    />
                                    <div className="flex-1">
                                        <Label
                                            htmlFor="pickup"
                                            className="font-medium"
                                        >
                                            Merr Vetë
                                        </Label>
                                        <p className="text-sm text-muted-foreground">
                                            Merrni porosinë tuaj nga dyqani ynë
                                        </p>
                                        <p className="text-sm font-medium">
                                            Falas
                                        </p>
                                    </div>
                                    <div className="flex items-center">
                                        <Clock className="h-5 w-5 text-muted-foreground mr-2" />
                                        <span className="text-sm">15 min</span>
                                    </div>
                                </div>
                            </RadioGroup>

                            <div className="mt-6 space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="delivery-notes">
                                        Komente për dorëzimin tuaj
                                    </Label>
                                    <Textarea
                                        id="delivery-notes"
                                        placeholder="Shtoni udhëzime të veçanta për dorëzimin tuaj"
                                        className="min-h-[100px]"
                                    />
                                </div>

                                <div className="flex items-center space-x-2">
                                    <Switch
                                        id="recurring"
                                        checked={recurring}
                                        onCheckedChange={setRecurring}
                                    />
                                    <Label htmlFor="recurring">
                                        Dërgo çdo javë
                                    </Label>
                                </div>

                                {recurring && (
                                    <div className="p-4 bg-muted rounded-lg">
                                        <p className="text-sm mb-2">
                                            Zgjidhni ditën e dorëzimit javor:
                                        </p>
                                        <RadioGroup
                                            defaultValue="monday"
                                            className="flex flex-wrap gap-2"
                                        >
                                            {[
                                                "E Hënë",
                                                "E Martë",
                                                "E Mërkurë",
                                                "E Enjte",
                                                "E Premte",
                                            ].map((day, index) => (
                                                <div
                                                    key={index}
                                                    className="flex items-center space-x-1"
                                                >
                                                    <RadioGroupItem
                                                        value={day.toLowerCase()}
                                                        id={day.toLowerCase()}
                                                    />
                                                    <Label
                                                        htmlFor={day.toLowerCase()}
                                                    >
                                                        {day}
                                                    </Label>
                                                </div>
                                            ))}
                                        </RadioGroup>
                                    </div>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                </div>

                <div>
                    <Card className="sticky top-24">
                        <CardHeader>
                            <CardTitle>Përmbledhje e Dorëzimit</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">
                                        Adresa:
                                    </span>
                                    <span className="text-right">
                                        Rruga Myslym Shyri, Tiranë
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">
                                        Lloji i dorëzimit:
                                    </span>
                                    <span>
                                        {deliveryType === "standard" &&
                                            "Dorëzim Standard"}
                                        {deliveryType === "express" &&
                                            "Dorëzim Express"}
                                        {deliveryType === "pickup" &&
                                            "Merr Vetë"}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">
                                        Koha e vlerësuar:
                                    </span>
                                    <span>
                                        {deliveryType === "standard" &&
                                            "30-45 minuta"}
                                        {deliveryType === "express" &&
                                            "15-25 minuta"}
                                        {deliveryType === "pickup" &&
                                            "15 minuta"}
                                    </span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="text-muted-foreground">
                                        Kosto e dorëzimit:
                                    </span>
                                    <span>
                                        {deliveryType === "standard" &&
                                            "150 Lekë"}
                                        {deliveryType === "express" &&
                                            "250 Lekë"}
                                        {deliveryType === "pickup" && "Falas"}
                                    </span>
                                </div>
                                {recurring && (
                                    <div className="flex justify-between">
                                        <span className="text-muted-foreground">
                                            Përsëritje:
                                        </span>
                                        <span>Çdo javë, E Hënë</span>
                                    </div>
                                )}
                            </div>

                            <div className="pt-4 flex justify-between items-center">
                                <div className="flex items-center text-muted-foreground">
                                    <Truck className="h-5 w-5 mr-2" />
                                    <span className="text-sm">
                                        Dorëzimi i sigurt
                                    </span>
                                </div>
                                <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
                                    Konfirmo
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
