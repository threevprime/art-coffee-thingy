"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Home, Coffee, ShoppingCart, User, Award } from "lucide-react"

export default function MobileNavigation() {
  const pathname = usePathname()

  const routes = [
    { name: "Kryefaqja", path: "/", icon: Home },
    { name: "Menuja", path: "/menu", icon: Coffee },
    { name: "Beans", path: "/beans", icon: Award },
    { name: "Shporta", path: "/cart", icon: ShoppingCart },
    { name: "Profili", path: "/profile", icon: User },
  ]

  return (
    <div className="md:hidden fixed bottom-0 left-0 z-50 w-full h-16 bg-background border-t">
      <div className="grid h-full grid-cols-5">
        {routes.map((route) => {
          const Icon = route.icon
          return (
            <Link
              key={route.path}
              href={route.path}
              className={cn(
                "flex flex-col items-center justify-center",
                pathname === route.path ? "text-secondary" : "text-muted-foreground",
              )}
            >
              <Icon className="h-5 w-5" />
              <span className="text-xs mt-1">{route.name}</span>
            </Link>
          )
        })}
      </div>
    </div>
  )
}
