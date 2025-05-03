"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ShoppingCart, User } from "lucide-react"
import Logo from "@/components/logo"

export default function Navigation() {
  const pathname = usePathname()

  const routes = [
    { name: "Kryefaqja", path: "/" },
    { name: "Menuja", path: "/menu" },
    { name: "Porosit Kafe", path: "/order" },
    { name: "Krijo Kafenë", path: "/create" },
    { name: "Beans", path: "/beans" },
    { name: "Rreth Nesh", path: "/about" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-6 flex items-center">
          <Logo size="small" />
        </div>
        <nav className="hidden md:flex flex-1 items-center justify-center">
          <ul className="flex space-x-6">
            {routes.map((route) => (
              <li key={route.path}>
                <Link
                  href={route.path}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-secondary",
                    pathname === route.path ? "text-secondary" : "text-muted-foreground",
                  )}
                >
                  {route.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center space-x-4">
          <Link href="/profile">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <User className="h-5 w-5" />
              <span className="sr-only">Profili</span>
            </Button>
          </Link>
          <Link href="/cart">
            <Button variant="ghost" size="icon" className="hidden md:flex relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-secondary text-secondary-foreground text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
              <span className="sr-only">Shporta</span>
            </Button>
          </Link>
          <Link href="/order" className="hidden md:block">
            <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">Porosit Tani</Button>
          </Link>
        </div>
      </div>
    </header>
  )
}
