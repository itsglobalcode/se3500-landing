import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32 lg:py-40">
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 animate-gradient" />

      <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="flex flex-col items-center text-center">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary border border-primary/20">
              <Sparkles className="h-4 w-4" />
              <span>Join 10,000+ skill traders worldwide</span>
            </div>

            <h1 className="text-4xl font-bold tracking-tighter text-balance sm:text-5xl md:text-6xl lg:text-7xl bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
              Learn and Teach New Skills for Free
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty md:text-xl leading-relaxed">
              Join a community where knowledge flows freely. Trade your skills with others and unlock unlimited learning
              opportunities without spending a dime.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
              <Button
                size="lg"
                className="gap-2 text-base bg-gradient-to-r from-primary to-secondary hover:opacity-90 shadow-lg hover:shadow-xl transition-all"
                asChild
              >
                <Link href="/signup">
                  Get Started
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="text-base bg-transparent hover:bg-muted" asChild>
                <a href="#how-it-works">Learn More</a>
              </Button>
            </div>
          </div>

          <div className="mt-12 w-full max-w-5xl">
            <div className="relative aspect-video overflow-hidden rounded-2xl border border-border/50 glass-effect shadow-2xl hover:shadow-primary/20 transition-shadow duration-500">
              <img
                src="/people-learning-teaching-skills-collaboration-comm.jpg"
                alt="People learning and teaching skills together"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
