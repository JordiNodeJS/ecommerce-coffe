"use client"
 
import * as React from "react"
import Link from "next/link"
 
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
 
const components: { title: string; href: string; description: string }[] = [
  {
    title: "Café grano",
    href: "/category/grano",
    description:
      "El café en grano es apreciado por los entusiastas del café porque permite controlar la frescura y el perfil de sabor de la bebida. Moler los granos justo antes de preparar el café garantiza una taza más aromática y sabrosa en comparación con el café molido previamente..",
  },
  {
    title: "Cafe molido",
    href: "/category/molido",
    description:
      "El café molido es el resultado de procesar y moler los granos de café tostados hasta obtener partículas finas. Este proceso facilita la preparación de la bebida, ya que el agua puede extraer los sabores y aceites esenciales del café de manera más eficiente. Aquí tienes una descripción detallada del proceso:.",
  },
  {
    title: "Café de capsula",
    href: "/category/capsula",
    description:
      "El café de cápsula es un método de preparación de café que utiliza pequeñas cápsulas preenvasadas y selladas herméticamente, que contienen café molido. Estas cápsulas están diseñadas para ser usadas en máquinas de café específicas que perforan la cápsula y forzan agua caliente a través del café molido, produciendo una taza de café rápidamente y con mínima limpieza. A continuación, se describen algunos aspectos clave del café de cápsula:.",
  }

]
 
const MenuList=()=> {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Sobre nosotros</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <a
                    className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                    href="/"
                  >
                    <div className="mb-2 mt-4 text-lg font-medium">
                      CafeDev
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground">
                        ¡Descubre el auténtico sabor del café en nuestra tienda online y transforma cada taza en una experiencia única! Compra ahora y disfruta de una frescura     incomparable y una selección exclusiva de los mejores granos. ¡Tu momento de café perfecto está a un clic de distancia!.
                    </p>
                  </a>
                </NavigationMenuLink>
              </li>
              <ListItem href="/shop" title="Tienda">
                Accede a toda tu información, tus pedidos y mucho más.
              </ListItem>
              <ListItem href="/offers/" title="Ofertas">
                Sección dedicada a promociones y descuentos especiales.
              </ListItem>
              <ListItem href="/" title="Accesorios">
                Productos complementarios como tazas, molinillos, prensas, etc.
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Cafés</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/accesorios" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Accesorios
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  )
}
export default MenuList;
 
const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

