import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Clock, ArrowRight, User } from "lucide-react"
import Link from "next/link"

const blogPosts = [
  {
    id: 1,
    title: "Welcome to SkillTrade: A New Way to Learn",
    excerpt:
      "Discover how SkillTrade is revolutionizing the way people share and learn new skills without any monetary exchange. Join our growing community today!",
    author: "Sarah Johnson",
    date: "March 15, 2024",
    readTime: "5 min read",
    category: "Announcement",
    image: "/people-learning-together-community.jpg",
  },
  {
    id: 2,
    title: "5 Tips for Successful Skill Trading",
    excerpt:
      "Learn the best practices for trading skills effectively. From choosing the right partner to setting clear expectations, we've got you covered.",
    author: "Michael Chen",
    date: "March 10, 2024",
    readTime: "7 min read",
    category: "Tips & Tricks",
    image: "/collaboration-teaching-learning.jpg",
  },
  {
    id: 3,
    title: "Community Spotlight: Amazing Success Stories",
    excerpt:
      "Read inspiring stories from our community members who have transformed their lives through skill trading.",
    author: "Emma Rodriguez",
    date: "March 5, 2024",
    readTime: "6 min read",
    category: "Community",
    image: "/success-celebration-people.jpg",
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 md:py-24 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent">
                SkillTrade Blog
              </h1>
              <p className="text-lg text-muted-foreground leading-relaxed md:text-xl">
                Insights, tips, and stories from the SkillTrade community. Learn how to make the most of skill trading.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">Featured Post</h2>
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full" />
            </div>

            <Card className="overflow-hidden border-2 hover:border-primary/50 transition-colors">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-64 md:h-auto">
                  <img
                    src={blogPosts[0].image || "/placeholder.svg"}
                    alt={blogPosts[0].title}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardHeader className="flex flex-col justify-center p-8">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-medium">
                      {blogPosts[0].category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{blogPosts[0].date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{blogPosts[0].readTime}</span>
                    </div>
                  </div>
                  <CardTitle className="text-3xl mb-4 text-balance">{blogPosts[0].title}</CardTitle>
                  <CardDescription className="text-base mb-6 leading-relaxed">{blogPosts[0].excerpt}</CardDescription>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm">
                      <User className="h-4 w-4 text-muted-foreground" />
                      <span className="font-medium">{blogPosts[0].author}</span>
                    </div>
                    <Button className="gap-2" asChild>
                      <Link href={`/blog/${blogPosts[0].id}`}>
                        Read More
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </CardHeader>
              </div>
            </Card>
          </div>
        </section>

        {/* All Posts */}
        <section className="py-12 md:py-16 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">Latest Posts</h2>
              <div className="h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full" />
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.slice(1).map((post) => (
                <Card key={post.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-3">
                      <span className="px-2 py-1 rounded-full bg-primary/10 text-primary font-medium">
                        {post.category}
                      </span>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="leading-relaxed">{post.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <User className="h-4 w-4" />
                        <span>{post.author}</span>
                      </div>
                      <Button variant="ghost" size="sm" className="gap-1" asChild>
                        <Link href={`/blog/${post.id}`}>
                          Read
                          <ArrowRight className="h-3 w-3" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
