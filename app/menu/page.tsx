import Link from "next/link"
import Image from "next/image"
import { Coffee, Leaf, Utensils, ArrowLeft } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function MenuPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Coffee className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Badda ko Adda</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link href="/menu" className="text-sm font-medium transition-colors text-primary">
              Menu
            </Link>
            <Link href="/#about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </Link>
            <Link href="/#contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild variant="outline" size="sm" className="border-primary text-primary hover:bg-primary/10">
              <Link href="/">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 menu-pattern">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/20 px-3 py-1 text-sm text-primary font-medium mb-2">
                  Delicious Options
                </div>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-accent">Our Menu</h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl">
                  Explore our carefully curated selection of premium coffees, teas, and delicious food items.
                </p>
              </div>
            </div>

            <div className="mx-auto max-w-4xl py-12">
              <Tabs defaultValue="coffee" className="w-full">
                <TabsList className="grid w-full grid-cols-3 bg-muted/50">
                  <TabsTrigger
                    value="coffee"
                    className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                  >
                    <Coffee className="h-4 w-4" />
                    Coffee
                  </TabsTrigger>
                  <TabsTrigger
                    value="tea"
                    className="flex items-center gap-2 data-[state=active]:bg-secondary data-[state=active]:text-secondary-foreground"
                  >
                    <Leaf className="h-4 w-4" />
                    Tea
                  </TabsTrigger>
                  <TabsTrigger
                    value="food"
                    className="flex items-center gap-2 data-[state=active]:bg-accent data-[state=active]:text-accent-foreground"
                  >
                    <Utensils className="h-4 w-4" />
                    Food
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="coffee" className="mt-6">
                  <div className="grid gap-8 md:grid-cols-2">
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold text-primary">Espresso Drinks</h2>

                      {[
                        {
                          name: "Espresso",
                          description: "Pure, intense coffee flavor in a small cup.",
                          price: "रू 200",
                          image:
                            "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
                        },
                        {
                          name: "Americano",
                          description: "Espresso diluted with hot water.",
                          price: "रू 250",
                          image:
                            "https://images.unsplash.com/photo-1551030173-122aabc4489c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
                        },
                        {
                          name: "Cappuccino",
                          description: "Equal parts espresso, steamed milk, and milk foam.",
                          price: "रू 150",
                          image:
                            "https://images.unsplash.com/photo-1534778101976-62847782c213?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
                        },
                        {
                          name: "Latte",
                          description: "Espresso with steamed milk and a light layer of foam.",
                          price: "रू 250",
                          image:
                            "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?q=80&w=2075&auto=format&fit=crop&ixlib=rb-4.0.3",
                        },
                        {
                          name: "Mocha",
                          description: "Espresso with chocolate, steamed milk, and whipped cream.",
                          price: "रू 200",
                          image:
                            "https://images.unsplash.com/photo-1579888944880-d98341245702?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
                        },
                      ].map((item, index) => (
                        <div key={index} className="flex items-start gap-4 coffee-card p-3 rounded-lg">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            width={80}
                            height={80}
                            className="rounded-md object-cover h-20 w-20"
                          />
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h3 className="font-medium">{item.name}</h3>
                              <span className="font-medium text-primary">{item.price}</span>
                            </div>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold text-primary">Specialty Coffee</h2>

                      {[
                        {
                          name: "Signature Latte",
                          description: "Our house blend espresso with velvety steamed milk and a hint of vanilla.",
                          price: "रू 200",
                          image:
                            "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1937&auto=format&fit=crop&ixlib=rb-4.0.3",
                        },
                        {
                          name: "Caramel Macchiato",
                          description: "Espresso with vanilla syrup, steamed milk, and caramel drizzle.",
                          price: "रू 200",
                          image:
                            "https://images.unsplash.com/photo-1572442388796-11668a67e53d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
                        },
                        {
                          name: "Honey Lavender Latte",
                          description: "Espresso with local honey, lavender syrup, and steamed milk.",
                          price: "रू 200",
                          image:
                            "https://images.unsplash.com/photo-1517701604599-bb29b565090c?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3",
                        },
                        {
                          name: "Cold Brew",
                          description: "Smooth, low-acidity coffee brewed with cold water for 12+ hours.",
                          price: "रू 180",
                          image:
                            "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3",
                        },
                        {
                          name: "Nitro Cold Brew",
                          description: "Cold brew infused with nitrogen for a creamy, stout-like texture.",
                          price: "रू 170",
                          image:
                            "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
                        },
                      ].map((item, index) => (
                        <div key={index} className="flex items-start gap-4 coffee-card p-3 rounded-lg">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            width={80}
                            height={80}
                            className="rounded-md object-cover h-20 w-20"
                          />
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h3 className="font-medium">{item.name}</h3>
                              <span className="font-medium text-primary">{item.price}</span>
                            </div>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="tea" className="mt-6">
                  <div className="grid gap-8 md:grid-cols-2">
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold text-secondary">Loose Leaf Teas</h2>

                      {[
                        {
                          name: "Jasmine Pearl",
                          description: "Hand-rolled tea leaves with the sweet fragrance of jasmine blossoms.",
                          price: "रू 60",
                          image:
                            "https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
                        },
                        {
                          name: "Earl Grey",
                          description: "Black tea infused with oil of bergamot for a citrusy flavor.",
                          price: "रू 50",
                          image:
                            "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
                        },
                        {
                          name: "Milk Tea",
                          description: "Milk tea perfect for morning enjoyment.",
                          price: "रू 40",
                          image:
                            "https://images.unsplash.com/photo-1523920290228-4f321a939b4c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
                        },
                        
                        {
                          name: "Peppermint",
                          description: "Refreshing herbal tea that aids digestion.",
                          price: "रू 50",
                          image:
                            "https://images.unsplash.com/photo-1564890369478-c89ca6d9cde9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
                        },
                      ].map((item, index) => (
                        <div key={index} className="flex items-start gap-4 tea-card p-3 rounded-lg">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            width={80}
                            height={80}
                            className="rounded-md object-cover h-20 w-20"
                          />
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h3 className="font-medium">{item.name}</h3>
                              <span className="font-medium text-secondary">{item.price}</span>
                            </div>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold text-secondary">Specialty Tea Drinks</h2>

                      {[
                        
                        {
                          name: "Chai Latte",
                          description: "Spiced black tea concentrate with steamed milk.",
                          price: "रू 70",
                          image:
                            "https://images.unsplash.com/photo-1571658734974-e513dfb8b86b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
                        },
                        {
                          name: "London Fog",
                          description: "Earl Grey tea with vanilla syrup and steamed milk.",
                          price: "रू 70",
                          image:
                            "https://images.unsplash.com/photo-1544787219-7f47ccb76574?q=80&w=2121&auto=format&fit=crop&ixlib=rb-4.0.3",
                        },
                        
                        {
                          name: "Bubble Tea",
                          description: "Milk tea with tapioca pearls. Available in various flavors.",
                          price: "रू 80",
                          image:
                            "https://images.unsplash.com/photo-1558857563-b371033873b8?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
                        },
                        {
                          name: "Black Tea",
                          description: "Rich and bold black tea with a deep, malty flavor.",
                          price: "रू 30",
                          image:
                            "https://images.pexels.com/photos/2873373/pexels-photo-2873373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                        }
                        
                      ].map((item, index) => (
                        <div key={index} className="flex items-start gap-4 tea-card p-3 rounded-lg">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            width={80}
                            height={80}
                            className="rounded-md object-cover h-20 w-20"
                          />
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h3 className="font-medium">{item.name}</h3>
                              <span className="font-medium text-secondary">{item.price}</span>
                            </div>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>

                <TabsContent value="food" className="mt-6">
                  <div className="grid gap-8 md:grid-cols-2">
                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold text-accent">Breakfast & Pastries</h2>

                      {[
                        {
                          name: "Croissant",
                          description: "Buttery, flaky pastry. Available plain or filled with chocolate or almond.",
                          price: "रू 100",
                          image:
                            "https://images.unsplash.com/photo-1555507036-ab1f4038808a?q=80&w=2026&auto=format&fit=crop&ixlib=rb-4.0.3",
                        },
                        
                        {
                          name: "Breakfast Sandwich",
                          description: "Egg, cheese, and your choice of bacon or spinach on a toasted English muffin.",
                          price: "रू 230",
                          image:
                            "https://images.unsplash.com/photo-1550507992-eb63ffee0847?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
                        },
                        {
                          name: "Blueberry Muffin",
                          description: "Moist muffin packed with fresh blueberries and topped with streusel.",
                          price: "रू 100",
                          image:
                            "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
                        },
                        {
                          name: "Yogurt Parfait",
                          description: "Greek yogurt layered with granola and seasonal fruit.",
                          price: "रू 180",
                          image:
                            "https://images.unsplash.com/photo-1488477181946-6428a0291777?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
                        },
                      ].map((item, index) => (
                        <div key={index} className="flex items-start gap-4 food-card p-3 rounded-lg">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            width={80}
                            height={80}
                            className="rounded-md object-cover h-20 w-20"
                          />
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h3 className="font-medium">{item.name}</h3>
                              <span className="font-medium text-accent">{item.price}</span>
                            </div>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-6">
                      <h2 className="text-2xl font-bold text-accent">Lunch & Snacks</h2>

                      {[
                        {
                          name: "Caprese Panini",
                          description: "Fresh mozzarella, tomato, basil, and balsamic glaze on ciabatta bread.",
                          price: "रू 300",
                          image:
                            "https://images.unsplash.com/photo-1509722747041-616f39b57569?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
                        },
                        {
                          name: "Chicken Pesto Wrap",
                          description:
                            "Grilled chicken, pesto, roasted red peppers, and mixed greens in a spinach wrap.",
                          price: "रू 350",
                          image:
                            "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
                        },
                       
                        {
                          name: "Hummus Plate",
                          description: "House-made hummus with pita bread, cucumber, carrots, and olives.",
                          price: "रू 250",
                          image:
                            "https://images.unsplash.com/photo-1577805947697-89e18249d767?q=80&w=2098&auto=format&fit=crop&ixlib=rb-4.0.3",
                        },
                        {
                          name: "Soup of the Day",
                          description: "Freshly made soup served with a slice of artisan bread.",
                          price: "रू 190",
                          image:
                            "https://images.unsplash.com/photo-1547592166-23ac45744acd?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3",
                        },
                      ].map((item, index) => (
                        <div key={index} className="flex items-start gap-4 food-card p-3 rounded-lg">
                          <Image
                            src={item.image || "/placeholder.svg"}
                            alt={item.name}
                            width={80}
                            height={80}
                            className="rounded-md object-cover h-20 w-20"
                          />
                          <div className="flex-1">
                            <div className="flex items-center justify-between">
                              <h3 className="font-medium">{item.name}</h3>
                              <span className="font-medium text-accent">{item.price}</span>
                            </div>
                            <p className="text-sm text-muted-foreground">{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-2xl font-bold text-primary">Dietary Information</h2>
                <p className="max-w-[600px] text-muted-foreground">
                  We offer a variety of options for different dietary needs. Please ask our staff for recommendations.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-4 pt-4">
                <div className="flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm text-primary font-medium">
                  <span>Vegetarian Options</span>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-2 text-sm text-secondary font-medium">
                  <span>Vegan Options</span>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-accent/10 px-4 py-2 text-sm text-accent font-medium">
                  <span>Gluten-Free Options</span>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-muted px-4 py-2 text-sm font-medium">
                  <span>Dairy-Free Options</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background py-6">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="flex items-center gap-2">
              <Coffee className="h-5 w-5" />
              <span className="text-lg font-bold">Badda ko Adda</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Badda ko Adda. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
                Home
              </Link>
              <Link href="/menu" className="text-sm text-muted-foreground hover:text-foreground">
                Menu
              </Link>
              <Link href="/#about" className="text-sm text-muted-foreground hover:text-foreground">
                About
              </Link>
              <Link href="/#contact" className="text-sm text-muted-foreground hover:text-foreground">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

