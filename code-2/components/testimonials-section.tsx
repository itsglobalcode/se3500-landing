import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Graphic Designer",
    content:
      "SkillTrade completely changed how I learn. I taught web design and learned photography in return. The community is incredibly supportive!",
    avatar: "SC",
    rating: 5,
  },
  {
    name: "Marcus Johnson",
    role: "Software Developer",
    content:
      "I've traded programming lessons for guitar classes. It's amazing how much you can learn without spending money. Highly recommend!",
    avatar: "MJ",
    rating: 5,
  },
  {
    name: "Elena Rodriguez",
    role: "Language Teacher",
    content:
      "This platform connected me with amazing people worldwide. I've learned cooking, yoga, and video editing by sharing my language skills.",
    avatar: "ER",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-balance sm:text-4xl md:text-5xl">
            What Our Community Says
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-pretty">
            Join thousands of learners who have discovered the power of skill trading.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6">
              <div className="space-y-4">
                <div className="flex gap-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{`"${testimonial.content}"`}</p>
                <div className="flex items-center gap-3 pt-2">
                  <Avatar>
                    <AvatarFallback className="bg-primary text-primary-foreground">{testimonial.avatar}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="text-sm font-semibold">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
