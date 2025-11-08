import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, User, ArrowLeft } from "lucide-react"
import Link from "next/link"

const blogPost = {
  id: 1,
  title: "Welcome to SkillTrade: A New Way to Learn",
  content: `
    <p>We're excited to introduce SkillTrade, a revolutionary platform that's changing the way people learn and share knowledge. In a world where education can be expensive and inaccessible, we believe that everyone has something valuable to teach and something they want to learn.</p>
    
    <h2>The Problem with Traditional Learning</h2>
    <p>Traditional education systems often come with high costs, rigid schedules, and limited access. Whether it's formal education, online courses, or private tutoring, learning new skills usually requires significant financial investment. This creates barriers for many people who want to grow and develop new abilities.</p>
    
    <h2>Our Solution: Skill Trading</h2>
    <p>SkillTrade removes the financial barrier entirely. Instead of paying with money, you pay with your own knowledge and expertise. Want to learn guitar? Teach someone web design. Need help with Spanish? Offer your photography skills. The possibilities are endless!</p>
    
    <h2>How It Works</h2>
    <p>Getting started is simple:</p>
    <ul>
      <li><strong>Create your profile:</strong> List the skills you want to learn and the skills you can teach.</li>
      <li><strong>Connect with others:</strong> Browse our community and find the perfect skill trading partner.</li>
      <li><strong>Start trading:</strong> Use our built-in chat and video call features to coordinate your learning sessions.</li>
      <li><strong>Rate and review:</strong> Build your reputation by being a great teacher and learner.</li>
    </ul>
    
    <h2>Join Our Growing Community</h2>
    <p>We've already helped thousands of people learn new skills, from programming and design to cooking and languages. Our community is built on trust, respect, and the joy of learning together.</p>
    
    <p>Ready to start your skill trading journey? Join SkillTrade today and discover a world of possibilities!</p>
  `,
  author: "Sarah Johnson",
  date: "March 15, 2024",
  readTime: "5 min read",
  category: "Announcement",
  image: "/people-learning-together-community-workspace.jpg",
}

export default function BlogPostPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <article className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <Button variant="ghost" className="mb-8 gap-2" asChild>
                <Link href="/blog">
                  <ArrowLeft className="h-4 w-4" />
                  Back to Blog
                </Link>
              </Button>

              <div className="mb-8">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
                  {blogPost.category}
                </span>
                <h1 className="text-4xl font-bold tracking-tight mb-6 text-balance md:text-5xl lg:text-6xl">
                  {blogPost.title}
                </h1>

                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8">
                  <div className="flex items-center gap-2">
                    <User className="h-4 w-4" />
                    <span className="font-medium">{blogPost.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{blogPost.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{blogPost.readTime}</span>
                  </div>
                </div>
              </div>

              <div className="relative aspect-video overflow-hidden rounded-2xl mb-12 border border-border shadow-lg">
                <img
                  src={blogPost.image || "/placeholder.svg"}
                  alt={blogPost.title}
                  className="h-full w-full object-cover"
                />
              </div>

              <div
                className="prose prose-lg max-w-none prose-headings:font-bold prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-4 prose-p:leading-relaxed prose-p:mb-6 prose-ul:my-6 prose-li:mb-2"
                dangerouslySetInnerHTML={{ __html: blogPost.content }}
              />

              <div className="mt-16 pt-8 border-t border-border">
                <div className="flex items-center gap-4">
                  <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl font-bold text-primary-foreground">
                    {blogPost.author
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <div>
                    <p className="font-semibold text-lg">{blogPost.author}</p>
                    <p className="text-sm text-muted-foreground">Community Manager at SkillTrade</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}
