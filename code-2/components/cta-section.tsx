import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-primary py-20 text-primary-foreground md:py-28">
      <div className="absolute inset-0 bg-[url('/abstract-blue-pattern.png')] opacity-5" />
      <div className="container relative mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl">
            Ready to Start Trading Skills?
          </h2>
          <p className="mb-8 text-lg text-primary-foreground/90 text-pretty md:text-xl">
            Join thousands of learners who are growing their skills without spending money. Your next learning adventure
            is just one click away.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button size="lg" variant="secondary" className="gap-2 text-base" asChild>
              <Link href="/signup">
                Join Now
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary-foreground/20 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground text-base"
              asChild
            >
              <a href="#how-it-works">Watch Demo</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
