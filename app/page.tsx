import Link from "next/link"
import Image from "next/image"
import { Coffee, Leaf, ChevronRight, Instagram, Facebook, Twitter } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between py-4">
          <div className="flex items-center gap-2">
            <Coffee className="h-6 w-6" />
            <span className="text-xl font-bold">Badda ko Adda</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link href="/menu" className="text-sm font-medium transition-colors hover:text-primary">
              Menu
            </Link>
            <Link href="#about" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </Link>
            <Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-2">
            <Button asChild variant="outline" size="sm" className="hidden md:flex">
              <Link href="/menu">View Menu</Link>
            </Button>
            <Button asChild size="sm">
              <Link href="#contact">Visit Us</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 hero-pattern">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-accent">
                    A Perfect Blend of <span className="text-primary">Comfort & Taste</span>
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Experience the finest selection of artisanal coffee and premium teas in a cozy atmosphere.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
                    <Link href="/menu">Explore Our Menu</Link>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    size="lg"
                    className="border-primary text-primary hover:bg-primary/10"
                  >
                    <Link href="#about">
                      Learn More About Us
                      <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&w=2047&auto=format&fit=crop&ixlib=rb-4.0.3"
                  width={550}
                  height={550}
                  alt="Cafe interior with people enjoying coffee"
                  className="rounded-lg object-cover shadow-xl border-4 border-white"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary/20 px-3 py-1 text-sm text-primary font-medium">
                  Featured Items
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-accent">Our Specialties</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Discover our most loved coffee and tea creations that keep our customers coming back.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
              {[
                {
                  title: "Signature Latte",
                  description: "Our house blend espresso with velvety steamed milk and a hint of vanilla.",
                  price: "रू 140",
                  image:
                    "https://images.unsplash.com/photo-1541167760496-1628856ab772?q=80&w=1937&auto=format&fit=crop&ixlib=rb-4.0.3",
                  type: "coffee",
                },
                {
                  title: "Jasmine Pearl Tea",
                  description: "Hand-rolled tea leaves with the sweet fragrance of jasmine blossoms.",
                  price: "रू 60",
                  image:
                    "https://images.unsplash.com/photo-1576092768241-dec231879fc3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3",
                  type: "tea",
                },
                {
                  title: "Artisan Pastries",
                  description: "Freshly baked pastries made with locally sourced ingredients.",
                  price: "रू 100",
                  image:
                    "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3",
                  type: "food",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-lg border ${item.type === "coffee" ? "coffee-card" : item.type === "tea" ? "tea-card" : "food-card"}`}
                >
                  <div className="aspect-square overflow-hidden">
                    <Image
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      width={400}
                      height={400}
                      className="object-cover transition-transform group-hover:scale-105 h-full w-full"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                    <div className="mt-2 flex items-center justify-between">
                      <span className="font-medium text-primary">{item.price}</span>
                      <Button variant="outline" size="sm" className="border-primary text-primary hover:bg-primary/10">
                        Order Now
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary/10">
                <Link href="/menu">View Full Menu</Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-muted to-muted/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-secondary/20 px-3 py-1 text-sm text-secondary font-medium mb-2">
                    Our Story
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-accent">
                    Brewing Memories Since 2024
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Established in 2024, Badda ko Adda is a new venture by Dangali Baddas, born from a love for exceptional coffee, tea, and community. What started as a passion project has quickly grown into a hub for quality beverages and locally inspired food.
                  </p>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    We source the finest beans and tea leaves from around the world, ensuring sustainability and ethical trade in every cup. Our skilled baristas and tea experts craft each drink with care, while our chefs create delicious, locally-sourced dishes to complete your experience.
                  </p>
                  <div className="pt-4">
                    <h3 className="text-xl font-semibold text-accent mb-2">Our Values</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <div className="rounded-full bg-secondary/20 p-1 mt-1">
                          <ChevronRight className="h-3 w-3 text-secondary" />
                        </div>
                        <span>
                          <strong>Quality:</strong> We never compromise on the quality of our ingredients.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="rounded-full bg-secondary/20 p-1 mt-1">
                          <ChevronRight className="h-3 w-3 text-secondary" />
                        </div>
                        <span>
                          <strong>Community:</strong> We&apos;re proud to be a gathering place for our neighborhood.
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="rounded-full bg-secondary/20 p-1 mt-1">
                          <ChevronRight className="h-3 w-3 text-secondary" />
                        </div>
                        <span>
                          <strong>Sustainability:</strong> We&apos;re committed to environmentally friendly practices.
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1 bg-primary/10 px-3 py-1 rounded-full">
                    <Coffee className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium text-primary">Premium Coffee</span>
                  </div>
                  <div className="flex items-center gap-1 bg-secondary/10 px-3 py-1 rounded-full">
                    <Leaf className="h-5 w-5 text-secondary" />
                    <span className="text-sm font-medium text-secondary">Organic Teas</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center gap-6">
                <Image
                  src="https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3"
                  width={600}
                  height={400}
                  alt="Cafe interior"
                  className="rounded-lg object-cover shadow-xl border-4 border-white"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 menu-pattern">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-accent/20 px-3 py-1 text-sm text-accent font-medium mb-2">
                  Get In Touch
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-accent">Visit Us Today</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  We&apos;d love to welcome you to our cafe. Come experience the perfect blend of comfort and taste.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
              <div className="rounded-lg border bg-card p-6 shadow-lg">
                <h3 className="text-xl font-bold text-primary">Hours & Location</h3>
                <div className="mt-4 space-y-2">
                  <p className="flex justify-between">
                    <span className="font-medium">Monday - Friday</span>
                    <span>7:00 AM - 8:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="font-medium">Saturday - Sunday</span>
                    <span>8:00 AM - 9:00 PM</span>
                  </p>
                  <div className="pt-4">
                    <p className="font-medium text-primary">Address:</p>
                    <p>Saddobato,Lalitpur</p>
                    <p>Talchikhel</p>
                  </div>
                  <div className="pt-4">
                    <p className="font-medium text-primary">Contact:</p>
                    <p>baddakoadda@gmail.com</p>
                    <p>9809517297</p>
                  </div>
                </div>
              </div>
              <div className="rounded-lg border bg-card p-6 shadow-lg">
                <h3 className="text-xl font-bold text-primary">Get in Touch</h3>
                <div className="mt-4 space-y-4">
                  <div className="grid grid-cols-1 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="name"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Name
                      </label>
                      <input
                        id="name"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      >
                        Message
                      </label>
                      <textarea
                        id="message"
                        className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Enter your message"
                      />
                    </div>
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90">Send Message</Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t bg-background py-6">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Coffee className="h-5 w-5" />
                <span className="text-lg font-bold">Badda ko Adda</span>
              </div>
              <p className="text-sm text-muted-foreground">A perfect blend of comfort & taste since 2024.</p>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Quick Links</h3>
              <ul className="space-y-1 text-sm">
                <li>
                  <Link href="/" className="text-muted-foreground hover:text-foreground">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/menu" className="text-muted-foreground hover:text-foreground">
                    Menu
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-muted-foreground hover:text-foreground">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-muted-foreground hover:text-foreground">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Legal</h3>
              <ul className="space-y-1 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h3 className="text-sm font-medium">Connect With Us</h3>
              <div className="flex space-x-3">
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-foreground">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </div>
              <p className="text-sm text-muted-foreground">
                Subscribe to our newsletter for updates and special offers.
              </p>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
                <Button size="sm">Subscribe</Button>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Badda ko Adda. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}