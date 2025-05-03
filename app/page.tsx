"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
    Coffee,
    CupSoda,
    Leaf,
    ArrowRight,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";
import Logo from "@/components/logo";

export default function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    const storeImages = [
        {
            src: "/images/store-interior-1.jpeg",
            alt: "Art Coffee Interior View",
            caption: "Ambient i ngrohtë dhe elegant",
        },
        {
            src: "/images/store-interior-2.png",
            alt: "Art Coffee Counter",
            caption: "Dizajn modern me detaje të kujdesshme",
        },
        {
            src: "/images/coffee-beans-bg.jpeg",
            alt: "Coffee Beans",
            caption: "Kafet tona të përzgjedhura me kujdes",
        },
    ];

    useEffect(() => {
        // Auto-advance the slider every 5 seconds
        const interval = setInterval(() => {
            setCurrentSlide((prev) =>
                prev === storeImages.length - 1 ? 0 : prev + 1,
            );
        }, 5000);

        // Set visibility after component mounts for animations
        setIsVisible(true);

        return () => clearInterval(interval);
    }, [storeImages.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) =>
            prev === storeImages.length - 1 ? 0 : prev + 1,
        );
    };

    const prevSlide = () => {
        setCurrentSlide((prev) =>
            prev === 0 ? storeImages.length - 1 : prev - 1,
        );
    };

    const goToSlide = (index: number) => {
        setCurrentSlide(index);
    };

    return (
        <div className="flex flex-col min-h-screen">
            {/* Hero Section with Parallax Effect */}
            <section className="relative h-[90vh] overflow-hidden">
                <div className="absolute inset-0 bg-dark-green/80 z-10" />
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: "url('/images/coffee-beans-bg.jpeg')",
                        backgroundAttachment: "fixed",
                    }}
                />
                <div className="relative z-20 container h-full flex flex-col items-center justify-center text-center px-4">
                    <div
                        className={`mb-6 transition-opacity duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
                    >
                        <Logo size="large" />
                    </div>
                    <h1
                        className={`text-4xl md:text-6xl font-serif font-bold text-warm-beige mb-4 transition-all duration-700 ${
                            isVisible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-4"
                        }`}
                    >
                        Art Coffee
                    </h1>
                    <p
                        className={`text-xl md:text-2xl mb-8 text-soft-cream max-w-2xl transition-all duration-700 delay-100 ${
                            isVisible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-4"
                        }`}
                    >
                        Ku aroma takohet me artin. Një eksperiencë unike kafeje
                        në Shqipëri që nga viti 2006.
                    </p>
                    <div
                        className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-200 ${
                            isVisible
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-4"
                        }`}
                    >
                        <Button
                            asChild
                            size="lg"
                            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 min-w-[150px]"
                        >
                            <Link href="/order">Porosit Tani</Link>
                        </Button>
                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="border-warm-beige text-warm-beige hover:bg-warm-beige/10 min-w-[150px]"
                        >
                            <Link href="/menu">Shiko Menunë</Link>
                        </Button>
                        <Button
                            asChild
                            size="lg"
                            variant="ghost"
                            className="text-soft-cream hover:bg-soft-cream/10 min-w-[150px]"
                        >
                            <Link href="/beans">Programi Beans</Link>
                        </Button>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-background to-transparent z-10" />
            </section>

            {/* Interactive Store Gallery */}
            <section className="py-16 px-4">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">
                            Vizitoni Dyqanin Tonë
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Dyqani ynë është projektuar për të krijuar një
                            ambient të ngrohtë dhe elegant, ku mund të shijoni
                            kafen tuaj të preferuar në qetësi.
                        </p>
                    </div>

                    <div className="relative max-w-5xl mx-auto">
                        {/* Main Slider */}
                        <div className="relative h-[500px] overflow-hidden rounded-xl">
                            {storeImages.map((image, index) => (
                                <div
                                    key={index}
                                    className={`absolute inset-0 transition-opacity duration-1000 ${
                                        currentSlide === index
                                            ? "opacity-100"
                                            : "opacity-0 pointer-events-none"
                                    }`}
                                >
                                    <Image
                                        src={image.src || "/placeholder.svg"}
                                        alt={image.alt}
                                        fill
                                        className="object-cover"
                                        priority={index === 0}
                                        sizes="(max-width: 768px) 100vw, 1200px"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                                    <div className="absolute bottom-0 left-0 w-full p-6 text-center">
                                        <h3 className="text-2xl font-bold text-warm-beige mb-2">
                                            {image.caption}
                                        </h3>
                                    </div>
                                </div>
                            ))}

                            {/* Navigation Arrows */}
                            <button
                                onClick={prevSlide}
                                className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/30 hover:bg-background/50 text-white rounded-full p-2 backdrop-blur-sm z-10 transition-all"
                                aria-label="Previous slide"
                            >
                                <ChevronLeft className="h-6 w-6" />
                            </button>
                            <button
                                onClick={nextSlide}
                                className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/30 hover:bg-background/50 text-white rounded-full p-2 backdrop-blur-sm z-10 transition-all"
                                aria-label="Next slide"
                            >
                                <ChevronRight className="h-6 w-6" />
                            </button>

                            {/* Dots Indicator */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                                {storeImages.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => goToSlide(index)}
                                        className={`w-3 h-3 rounded-full transition-all ${
                                            currentSlide === index
                                                ? "bg-warm-beige w-6"
                                                : "bg-white/50 hover:bg-white/80"
                                        }`}
                                        aria-label={`Go to slide ${index + 1}`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Thumbnails */}
                        <div className="flex justify-center mt-4 gap-2">
                            {storeImages.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => goToSlide(index)}
                                    className={`relative w-24 h-16 rounded-md overflow-hidden transition-all ${
                                        currentSlide === index
                                            ? "ring-2 ring-warm-beige"
                                            : "opacity-70 hover:opacity-100"
                                    }`}
                                >
                                    <Image
                                        src={image.src || "/placeholder.svg"}
                                        alt={`Thumbnail ${index + 1}`}
                                        fill
                                        className="object-cover"
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="text-center mt-8">
                        <Button
                            asChild
                            className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
                        >
                            <Link href="/about" className="flex items-center">
                                Mëso më shumë{" "}
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* Products Section with Hover Effects */}
            <section className="py-16 px-4 bg-muted">
                <div className="container">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">
                            Produktet Tona
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Zbuloni koleksionin tonë të plotë të kafeve të
                            përzgjedhura me kujdes nga fermat më të mira në
                            botë.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            {
                                title: "Espresso",
                                icon: Coffee,
                                description:
                                    "Kafet tona espresso të përzgjedhura me kujdes nga fermat më të mira në botë.",
                                link: "/menu?category=espresso",
                            },
                            {
                                title: "Kafe Turke",
                                icon: CupSoda,
                                description:
                                    "Kafe turke tradicionale me shije autentike dhe aromë të pasur.",
                                link: "/menu?category=turkish",
                            },
                            {
                                title: "Bustine",
                                icon: Leaf,
                                description:
                                    "Bustina kafeje të përzgjedhura për përdorim të lehtë dhe të shpejtë.",
                                link: "/menu?category=bustine",
                            },
                            {
                                title: "Kapsula",
                                icon: Coffee,
                                description:
                                    "Kapsula kafeje premium për makina espresso moderne.",
                                link: "/menu?category=capsules",
                            },
                        ].map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <Card
                                    key={index}
                                    className="bg-card group hover:shadow-lg transition-all duration-300 overflow-hidden"
                                >
                                    <CardContent className="p-6 flex flex-col items-center text-center relative z-10">
                                        <div className="bg-warm-beige/10 p-4 rounded-full mb-4 group-hover:bg-warm-beige/20 transition-colors">
                                            <Icon className="h-10 w-10 text-warm-beige" />
                                        </div>
                                        <h3 className="text-xl font-bold mb-2 group-hover:text-warm-beige transition-colors">
                                            {item.title}
                                        </h3>
                                        <p className="text-muted-foreground mb-4">
                                            {item.description}
                                        </p>
                                        <Button
                                            asChild
                                            variant="outline"
                                            className="mt-auto group-hover:bg-warm-beige group-hover:text-dark-green group-hover:border-warm-beige transition-colors"
                                        >
                                            <Link href={item.link}>
                                                Shiko Produktet
                                            </Link>
                                        </Button>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Featured Products with Parallax */}
            <section className="relative py-24 overflow-hidden">
                <div
                    className="absolute inset-0 bg-cover bg-center opacity-20"
                    style={{
                        backgroundImage: "url('/images/coffee-beans-bg.jpeg')",
                        backgroundAttachment: "fixed",
                    }}
                />
                <div className="container relative z-10">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">
                            Produktet e Veçanta
                        </h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">
                            Zbuloni produktet tona më të dashura dhe më të
                            shitura.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                name: "Ekspres Mishele ESP3",
                                image: "/placeholder.svg?height=300&width=300",
                                price: "780 Lekë",
                                description:
                                    "Kafe espresso klasike nga Mishele me shije të pasur",
                                link: "/products/ESP3",
                            },
                            {
                                name: "Art Coffee Kuq",
                                image: "/placeholder.svg?height=300&width=300",
                                price: "450 Lekë",
                                description:
                                    "Kafe turke tradicionale Art Coffee me paketim të kuq",
                                link: "/products/KAFE%20TURKE",
                            },
                            {
                                name: "Kapsule Covim Opera",
                                image: "/images/products/ZY01.jpg",
                                price: "650 Lekë",
                                description:
                                    "Kapsule kafeje Covim Opera me shije të pasur",
                                link: "/products/ZY01",
                            },
                        ].map((product, index) => (
                            <Link
                                key={index}
                                href={product.link}
                                className="block group"
                            >
                                <Card className="overflow-hidden bg-card hover:shadow-xl transition-all duration-300 transform group-hover:-translate-y-2">
                                    <div className="relative h-64">
                                        <Image
                                            src={
                                                product.image ||
                                                "/placeholder.svg"
                                            }
                                            alt={product.name}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </div>
                                    <CardContent className="p-6">
                                        <h3 className="font-bold text-xl mb-2 group-hover:text-warm-beige transition-colors">
                                            {product.name}
                                        </h3>
                                        <p className="text-muted-foreground mb-3">
                                            {product.description}
                                        </p>
                                        <div className="flex justify-between items-center">
                                            <span className="font-medium text-warm-beige">
                                                {product.price}
                                            </span>
                                            <Button
                                                size="sm"
                                                className="bg-secondary text-secondary-foreground hover:bg-secondary/90 opacity-0 group-hover:opacity-100 transition-opacity"
                                            >
                                                Shiko Detajet
                                            </Button>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <Button
                            asChild
                            className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
                        >
                            <Link href="/menu">Shiko të Gjitha Produktet</Link>
                        </Button>
                    </div>
                </div>
            </section>

            {/* About Section with Store Image */}
            <section className="py-16 px-4">
                <div className="container">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                            <Image
                                src="/images/store-interior-2.png"
                                alt="Interior i dyqanit Art Coffee"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                            <div className="absolute bottom-0 left-0 w-full p-6">
                                <p className="text-warm-beige font-medium">
                                    Dyqani ynë në Tiranë
                                </p>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl font-bold mb-6">
                                Rreth Art Coffee
                            </h2>
                            <p className="text-lg mb-6">
                                Art Coffee filloi udhëtimin e saj në vitin 2006
                                si një markë kafeje me shumicë, duke furnizuar
                                bizneset më të mira në Shqipëri me kafe të
                                cilësisë së lartë. Me kalimin e viteve, pasioni
                                ynë për kafen u rrit, dhe ne vendosëm të hapim
                                dyert tona për publikun.
                            </p>
                            <p className="text-lg mb-6">
                                Sot, Art Coffee është një destinacion për
                                dashamirësit e kafesë që kërkojnë jo vetëm një
                                filxhan kafe të shkëlqyer, por edhe një
                                eksperiencë të plotë shqisore. Çdo detaj në
                                dyqanin tonë është projektuar me kujdes për të
                                krijuar një ambient të ngrohtë dhe elegant.
                            </p>
                            <Button
                                asChild
                                className="bg-secondary text-secondary-foreground hover:bg-secondary/90"
                            >
                                <Link
                                    href="/about"
                                    className="flex items-center"
                                >
                                    Mëso më shumë{" "}
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action */}
            <section className="py-16 px-4 bg-warm-beige text-dark-green">
                <div className="container text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        Bëhuni Pjesë e Komunitetit Tonë
                    </h2>
                    <p className="text-lg mb-8 max-w-2xl mx-auto">
                        Regjistrohuni në programin tonë të besnikërisë Beans dhe
                        përfitoni nga ofertat ekskluzive, pikët e besnikërisë
                        dhe më shumë.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            asChild
                            size="lg"
                            className="bg-dark-green text-warm-beige hover:bg-dark-green/90"
                        >
                            <Link href="/beans">Regjistrohu në Beans</Link>
                        </Button>
                        <Button
                            asChild
                            size="lg"
                            variant="outline"
                            className="border-dark-green text-dark-green hover:bg-dark-green/10"
                        >
                            <Link href="/create">Krijo Kafenë Tënde</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
