import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin } from "lucide-react"
import Logo from "@/components/logo"

export default function Footer() {
  return (
    <footer className="bg-muted py-12 border-t">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <Logo size="small" className="mb-2" />
            <p className="text-sm text-muted-foreground">
              Art Coffee - Ku aroma takohet me artin. Ofrojmë kafe të cilësisë së lartë për dashamirësit e kafesë në
              Shqipëri.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-muted-foreground hover:text-warm-beige">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-warm-beige">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-warm-beige">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-bold mb-4">Produktet</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/menu" className="text-sm text-muted-foreground hover:text-warm-beige">
                  Espresso
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-sm text-muted-foreground hover:text-warm-beige">
                  Kafe Turke
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-sm text-muted-foreground hover:text-warm-beige">
                  Bustine
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-sm text-muted-foreground hover:text-warm-beige">
                  Kapsula
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Lidhje të Shpejta</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-muted-foreground hover:text-warm-beige">
                  Kryefaqja
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-muted-foreground hover:text-warm-beige">
                  Rreth Nesh
                </Link>
              </li>
              <li>
                <Link href="/menu" className="text-sm text-muted-foreground hover:text-warm-beige">
                  Menuja
                </Link>
              </li>
              <li>
                <Link href="/order" className="text-sm text-muted-foreground hover:text-warm-beige">
                  Porosit Kafe
                </Link>
              </li>
              <li>
                <Link href="/delivery" className="text-sm text-muted-foreground hover:text-warm-beige">
                  Dorëzimi
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4">Kontakt</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-warm-beige" />
                <span className="text-sm text-muted-foreground">Rruga Myslym Shyri, Nr. 48, Tiranë</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-warm-beige" />
                <span className="text-sm text-muted-foreground">+355 69 123 4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-warm-beige" />
                <span className="text-sm text-muted-foreground">info@artcoffee.al</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <div className="relative h-32 rounded-lg overflow-hidden">
            <Image
              src="/images/store-interior-1.jpeg"
              alt="Interior i dyqanit Art Coffee"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative h-32 rounded-lg overflow-hidden">
            <Image
              src="/images/store-interior-2.png"
              alt="Interior i dyqanit Art Coffee"
              fill
              className="object-cover"
            />
          </div>
        </div>

        <div className="border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Art Coffee. Të gjitha të drejtat e rezervuara.
          </p>
        </div>
      </div>
    </footer>
  )
}
