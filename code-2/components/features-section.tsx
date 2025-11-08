import { Card } from "@/components/ui/card"
import { Zap, Shield, MessageSquare, Star, Globe, Heart } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Easy to Use",
    description: "Intuitive interface designed for seamless skill trading. Start learning in minutes.",
  },
  {
    icon: Shield,
    title: "Trustworthy",
    description: "Verified profiles and community reviews ensure safe and reliable exchanges.",
  },
  {
    icon: MessageSquare,
    title: "Built-in Chat",
    description: "Connect instantly with integrated messaging. Schedule sessions and share resources easily.",
  },
  {
    icon: Star,
    title: "Rating System",
    description: "Transparent feedback system helps you find the best learning partners.",
  },
  {
    icon: Globe,
    title: "Global Community",
    description: "Learn from people around the world and discover diverse perspectives.",
  },
  {
    icon: Heart,
    title: "Supportive Network",
    description: "Join a community that values collaboration, growth, and lifelong learning.",
  },
]

export function FeaturesSection() {
  return (
    <section className="bg-muted/30 py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl">
            Why Choose SkillTrade?
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
            Everything you need to start trading skills and building meaningful learning relationships.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 transition-all hover:shadow-md">
              <div className="space-y-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                  <feature.icon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
