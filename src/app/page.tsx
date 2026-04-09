import Link from 'next/link'
import { ArrowRight, BookOpen, Users, Lightbulb, Trophy } from 'lucide-react'

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative px-6 py-24 md:py-32 lg:py-40 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
        <div className="container max-w-5xl mx-auto text-center space-y-8">
          <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
            <span className="flex h-2 w-2 rounded-full bg-primary mr-2"></span>
            A New Era for Student Communities
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground">
            Student <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Conscious</span> Club
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed">
            An integrated digital ecosystem for student development, academic exploration, creative expression, and long-term archival intelligence.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/register"
              className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90"
            >
              Join the Club
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/about"
              className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium hover:bg-muted hover:text-foreground"
            >
              Explore Our Vision
            </Link>
          </div>
        </div>
      </section>

      {/* Features/Hubs Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight mb-4">Everything You Need to Excel</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our platform offers a diverse range of hubs and activities designed to nurture every aspect of a student&apos;s potential.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: "Academic Hubs", desc: "Access verified notes, research papers, and study materials.", icon: BookOpen },
              { title: "Creative Sections", desc: "Showcase your short films, poetry, and art to the world.", icon: Lightbulb },
              { title: "Club Events", desc: "Participate in workshops, guest sessions, and competitions.", icon: Users },
              { title: "Certifications", desc: "Earn verifiable digital certificates for your achievements.", icon: Trophy },
            ].map((feature, i) => (
              <div key={i} className="group relative p-6 bg-card rounded-2xl border transition-all hover:shadow-lg hover:border-primary/50">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:scale-110 transition-transform">
                  <feature.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
