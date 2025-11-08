import { Card } from "@/components/ui/card"
import { Search, Users, GraduationCap } from "lucide-react"

const steps = [
  {
    icon: Search,
    title: "Find a Skill",
    description:
      "Browse through hundreds of skills offered by our community members or search for exactly what you want to learn.",
  },
  {
    icon: Users,
    title: "Connect with Others",
    description:
      "Match with skilled teachers who want to learn what you have to offer. Build meaningful connections through skill exchange.",
  },
  {
    icon: GraduationCap,
    title: "Trade and Learn",
    description:
      "Exchange knowledge through video calls, chat, or in-person meetings. Grow together without spending money.",
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-20 md:py-28" id="how-it-works">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl">How It Works</h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
            Getting started with SkillTrade is simple. Follow these three steps to begin your learning journey.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <Card key={index} className="relative overflow-hidden border-2 p-8 transition-all hover:shadow-lg">
              <div className="absolute -right-6 -top-6 text-8xl font-bold text-muted/20">{index + 1}</div>
              <div className="relative space-y-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                  <step.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
