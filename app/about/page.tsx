import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Clock, Phone, Mail, Instagram, Facebook } from "lucide-react"
import Logo from "@/components/logo"

export default function AboutPage() {
  return (
    <div className="container py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <Logo size="medium" />
          </div>
          <h1 className="text-3xl font-bold mb-4">Rreth Art Coffee</h1>
          <p className="text-muted-foreground text-lg">
            Ku aroma takohet me artin - Një eksperiencë unike kafeje në Shqipëri që nga viti 2006
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Historia Jonë</h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="mb-4">
                Art Coffee filloi udhëtimin e saj në vitin 2006 si një markë kafeje me shumicë, duke furnizuar bizneset
                më të mira në Shqipëri me kafe të cilësisë së lartë. Me kalimin e viteve, pasioni ynë për kafen u rrit,
                dhe ne vendosëm të hapim dyert tona për publikun.
              </p>
              <p className="mb-4">
                Për më shumë se 17 vjet, Art Coffee ka qenë sinonim i cilësisë dhe shijes së shkëlqyer. Sot, Art Coffee
                është një destinacion për dashamirësit e kafesë që kërkojnë jo vetëm një filxhan kafe të shkëlqyer, por
                edhe një eksperiencë të plotë shqisore. Çdo detaj në dyqanin tonë është projektuar me kujdes për të
                krijuar një ambient të ngrohtë dhe elegant.
              </p>
              <p>
                Ne besojmë se çdo filxhan kafe është një vepër arti, e krijuar me pasion dhe përkushtim. Kjo filozofi
                udhëheq çdo aspekt të biznesit tonë, nga përzgjedhja e kokrrave të kafesë deri te dizajni i dyqanit
                tonë.
              </p>
            </div>
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <Image
                src="/images/artcoffeelogo.png"
                alt="Art Coffee Logo"
                fill
                className="object-contain bg-dark-green/30 p-8"
              />
            </div>
          </div>
        </div>

        {/* Rest of the component remains the same */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Dyqani Ynë</h2>
          <p className="text-muted-foreground mb-8">
            Dyqani ynë është projektuar për të krijuar një ambient të ngrohtë dhe elegant, ku mund të shijoni kafen tuaj
            të preferuar në qetësi. Materialet natyrore, ndriçimi i butë dhe detajet e kujdesshme krijojnë një hapësirë
            që është njëkohësisht moderne dhe mikpritëse.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/store-interior-1.jpeg"
                alt="Interior i dyqanit Art Coffee"
                fill
                className="object-cover"
              />
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/store-interior-2.png"
                alt="Interior i dyqanit Art Coffee"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="bg-card rounded-lg p-6">
            <h3 className="text-xl font-bold mb-4">Karakteristikat e Dyqanit</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-warm-beige mr-2">•</span>
                <span>
                  Dizajn modern me elemente druri dhe ndriçim të ngrohtë që krijon një ambient të këndshëm dhe elegant
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-warm-beige mr-2">•</span>
                <span>Banak i gjatë prej mermeri të zi me panele druri dhe detaje prej ari</span>
              </li>
              <li className="flex items-start">
                <span className="text-warm-beige mr-2">•</span>
                <span>Rafte të ndriçuara për ekspozimin e produkteve tona të kafesë</span>
              </li>
              <li className="flex items-start">
                <span className="text-warm-beige mr-2">•</span>
                <span>Hapësirë e rehatshme për klientët për të shijuar kafen e tyre</span>
              </li>
              <li className="flex items-start">
                <span className="text-warm-beige mr-2">•</span>
                <span>Pajisje moderne për përgatitjen e kafesë së cilësisë së lartë</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Produktet Tona</h2>
          <p className="mb-4">
            Në Art Coffee, ne ofrojmë një gamë të gjerë produktesh kafeje të cilësisë së lartë, duke përfshirë:
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            <Card className="bg-card">
              <CardContent className="p-6 text-center">
                <h3 className="font-bold mb-2">Espresso</h3>
                <p className="text-sm text-muted-foreground">
                  Përzierje premium të kafeve espresso për një eksperiencë të pasur dhe të balancuar
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card">
              <CardContent className="p-6 text-center">
                <h3 className="font-bold mb-2">Kafe Turke</h3>
                <p className="text-sm text-muted-foreground">
                  Kafe turke tradicionale me shije autentike dhe aromë të pasur
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card">
              <CardContent className="p-6 text-center">
                <h3 className="font-bold mb-2">Bustine</h3>
                <p className="text-sm text-muted-foreground">
                  Bustina kafeje të përzgjedhura për përdorim të lehtë dhe të shpejtë
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card">
              <CardContent className="p-6 text-center">
                <h3 className="font-bold mb-2">Kapsula</h3>
                <p className="text-sm text-muted-foreground">Kapsula kafeje premium për makina espresso moderne</p>
              </CardContent>
            </Card>
          </div>
          <div className="flex justify-center">
            <Button asChild className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              <a href="/menu">Shiko të Gjitha Produktet</a>
            </Button>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-6">Na Vizitoni</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-warm-beige mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-bold mb-1">Adresa</h3>
                    <p className="text-muted-foreground">Rruga Myslym Shyri, Nr. 48, Tiranë, Shqipëri</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="h-5 w-5 text-warm-beige mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-bold mb-1">Orari</h3>
                    <p className="text-muted-foreground">E Hënë - E Premte: 08:00 - 20:00</p>
                    <p className="text-muted-foreground">E Shtunë: 09:00 - 20:00</p>
                    <p className="text-muted-foreground">E Diel: 10:00 - 18:00</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Phone className="h-5 w-5 text-warm-beige mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-bold mb-1">Telefon</h3>
                    <p className="text-muted-foreground">+355 69 123 4567</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Mail className="h-5 w-5 text-warm-beige mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-bold mb-1">Email</h3>
                    <p className="text-muted-foreground">info@artcoffee.al</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="flex space-x-2 text-warm-beige mr-3 mt-0.5">
                    <Instagram className="h-5 w-5" />
                    <Facebook className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">Rrjetet Sociale</h3>
                    <p className="text-muted-foreground">@artcoffee.al</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="relative h-[300px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2996.1294636561!2d19.8144!3d41.3275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDE5JzM5LjAiTiAxOcKwNDgnNTEuOCJF!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
