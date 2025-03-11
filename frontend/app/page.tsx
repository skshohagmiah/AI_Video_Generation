import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  ArrowRight,
  BarChart3,
  FileText,
  Headphones,
  Layers,
  MessageSquare,
  PlayCircle,
  Upload,
  Video,
  Zap,
} from "lucide-react"
import { HeroBackground } from "@/components/hero-background"

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Zap className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">VideoGenAI</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#features"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="#pricing"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Pricing
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/dashboard">
              <Button variant="outline">Login</Button>
            </Link>
            <Link href="/dashboard">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 lg:py-40 overflow-hidden">
        <HeroBackground />
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600 leading-[1.1]">
                AI-Powered Video Creation
                <span className="block text-foreground mt-2">Made Simple</span>
              </h1>
              <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
                Automatically create, edit, and publish high-quality videos on YouTube & Facebook using AI. Generate
                revenue through AdSense, monetization, sponsorships, and affiliate marketing.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/dashboard">
                  <Button
                    size="lg"
                    className="text-lg px-8 py-6 rounded-full bg-primary hover:bg-primary/90 transition-colors"
                  >
                    Start Creating <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </Link>
                <Link href="#how-it-works">
                  <Button size="lg" variant="outline" className="text-lg px-8 py-6 rounded-full">
                    Learn More
                  </Button>
                </Link>
              </div>
              <div className="mt-8 flex items-center gap-4 text-sm text-muted-foreground justify-center lg:justify-start">
                <div className="flex items-center gap-1">
                  <Zap className="h-4 w-4 text-primary" />
                  <span>Fully Automated</span>
                </div>
                <div className="flex items-center gap-1">
                  <BarChart3 className="h-4 w-4 text-primary" />
                  <span>$300-$1,100 per video</span>
                </div>
              </div>
            </div>
            <div className="flex-1 w-full max-w-2xl">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-600/20 rounded-3xl blur-3xl"></div>
                <div className="relative bg-background rounded-3xl border shadow-2xl overflow-hidden">
                  <div className="aspect-video bg-black rounded-t-3xl flex items-center justify-center">
                    <PlayCircle className="h-20 w-20 text-primary opacity-80" />
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="h-4 w-3/4 bg-muted rounded-full"></div>
                    <div className="h-4 w-1/2 bg-muted rounded-full"></div>
                    <div className="flex justify-between items-center mt-4">
                      <div className="flex items-center gap-2">
                        <div className="h-10 w-10 rounded-full bg-muted"></div>
                        <div className="h-4 w-24 bg-muted rounded-full"></div>
                      </div>
                      <div className="h-8 w-20 bg-primary/20 rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 h-24 w-24 bg-primary/30 rounded-full blur-2xl"></div>
                <div className="absolute -top-6 -left-6 h-24 w-24 bg-purple-600/30 rounded-full blur-2xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            {[
              { value: "$3-11K", label: "Monthly Revenue" },
              { value: "$5-10", label: "Cost Per Video" },
              { value: "$300-1.1K", label: "Profit Per Video" },
              { value: "3-6", label: "Months to Break Even" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</h2>
                <p className="text-sm md:text-base text-muted-foreground mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Platform Features</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Our AI-powered platform automates the entire video creation process from script to publishing
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                icon: FileText,
                title: "AI Script Generation",
                description: "AI writes engaging scripts based on trending topics and keywords",
              },
              {
                icon: Headphones,
                title: "Text-to-Speech",
                description: "Natural-sounding AI voices narrate your scripts with perfect pronunciation",
              },
              {
                icon: Video,
                title: "Video Generation",
                description: "AI creates high-quality video clips from text-based prompts",
              },
              {
                icon: Layers,
                title: "Video Editing",
                description: "AI merges clips, adds voiceovers, music, and transitions automatically",
              },
              {
                icon: MessageSquare,
                title: "Subtitle Generation",
                description: "AI auto-generates and embeds subtitles for better engagement",
              },
              {
                icon: Upload,
                title: "Auto-Upload",
                description: "AI posts videos to YouTube & Facebook with optimized metadata",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center space-y-4 p-6 bg-muted/30 rounded-2xl transition-all hover:bg-muted/50 hover:shadow-lg"
              >
                <div className="p-3 bg-primary/10 rounded-full">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* How It Works Section */}
<section id="how-it-works" className="py-20 bg-gradient-to-b from-muted/10 to-muted/30">
  <div className="container px-4 md:px-6">
    <div className="text-center space-y-4 mb-12">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How It Works</h2>
      <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
        Our platform automates the entire video creation process in just a few simple steps
      </p>
    </div>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 relative">
      {/* Timeline connector */}
      <div className="absolute top-1/2 left-0 right-0 h-1 bg-primary/20 hidden lg:block"></div>
      
      {[
        {
          step: 1,
          title: "Choose Your Topic",
          description: "Select a niche and topic for your video or let our AI suggest trending topics.",
          icon: FileText,
        },
        {
          step: 2,
          title: "Generate Script & Voice",
          description: "AI writes a complete script and converts it to natural-sounding speech.",
          icon: Headphones,
        },
        {
          step: 3,
          title: "Create & Edit Video",
          description: "AI generates video clips and edits them together with the voiceover.",
          icon: Video,
        },
        {
          step: 4,
          title: "Publish & Monetize",
          description: "AI uploads to platforms and optimizes for maximum revenue generation.",
          icon: Upload,
        },
      ].map((item, index) => (
        <div key={index} className="flex flex-col items-center text-center relative">
          {/* Step card */}
          <div className="bg-background rounded-lg p-6 shadow-lg border border-border hover:border-primary/50 transition-all duration-300 h-full w-full flex flex-col items-center">
            {/* Icon circle */}
            <div className="relative mb-6">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary mb-2">
                <item.icon className="h-10 w-10" />
              </div>
              {/* Step number */}
              <span className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold shadow-md">
                {item.step}
              </span>
            </div>
            
            <h3 className="text-xl font-bold mb-3">{item.title}</h3>
            <p className="text-muted-foreground">{item.description}</p>
          </div>
          
          {/* Connector dots for large screens */}
          {index < 3 && (
            <div className="absolute top-1/2 -right-4 w-8 h-8 rounded-full bg-primary/20 hidden lg:flex items-center justify-center z-10">
              <div className="w-2 h-2 rounded-full bg-primary"></div>
            </div>
          )}
        </div>
      ))}
    </div>
    
    {/* CTA Button */}
    <div className="flex justify-center mt-16">
      <button className="px-8 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">
        Get Started For Free
      </button>
    </div>
  </div>
</section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Pricing Plans</h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Choose the perfect plan for your video creation needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Starter",
                price: "$49",
                description: "Perfect for beginners",
                features: [
                  "5 videos per month",
                  "720p video quality",
                  "Basic AI voice options",
                  "YouTube uploads",
                  "Basic analytics",
                ],
                popular: false,
              },
              {
                name: "Professional",
                price: "$99",
                description: "Most popular choice",
                features: [
                  "15 videos per month",
                  "1080p video quality",
                  "Premium AI voice options",
                  "YouTube & Facebook uploads",
                  "Advanced analytics",
                  "Priority rendering",
                ],
                popular: true,
              },
              {
                name: "Enterprise",
                price: "$199",
                description: "For serious creators",
                features: [
                  "Unlimited videos",
                  "4K video quality",
                  "All AI voice options",
                  "All platform uploads",
                  "Comprehensive analytics",
                  "Priority support",
                  "Custom branding",
                ],
                popular: false,
              },
            ].map((plan, index) => (
              <div
                key={index}
                className={`flex flex-col p-8 bg-muted/30 rounded-3xl transition-all hover:shadow-xl relative ${
                  plan.popular ? "border-2 border-primary shadow-lg scale-105" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="bg-primary text-primary-foreground text-sm font-medium px-3 py-1 rounded-full shadow-md">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold">{plan.name}</h3>
                  <div className="mt-2 flex items-baseline justify-center">
                    <span className="text-4xl font-extrabold">{plan.price}</span>
                    <span className="text-muted-foreground ml-1">/month</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5 text-primary mr-2"
                      >
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/dashboard" className="mt-auto">
                  <Button className="w-full text-lg py-6" variant={plan.popular ? "default" : "outline"}>
                    Get Started
                  </Button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-8">
            <h2 className="text-3xl font-extrabold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Ready to Start Creating?
            </h2>
            <p className="mx-auto max-w-[800px] md:text-xl lg:text-2xl">
              Join thousands of creators who are already using our platform to generate revenue with AI-created videos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Link href="/dashboard">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-6 rounded-full">
                  Start Free Trial
                </Button>
              </Link>
              <Link href="#how-it-works">
                <Button
                  size="lg"
                  variant="outline"
                  className="text-lg px-8 py-6 rounded-full bg-primary-foreground/10 border-primary-foreground/20 hover:bg-primary-foreground/20 text-primary-foreground"
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 md:py-16 bg-background">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Zap className="h-6 w-6 text-primary" />
                <span className="text-xl font-bold">VideoGenAI</span>
              </div>
              <p className="text-sm text-muted-foreground">
                AI-powered video generation platform for creators and businesses.
              </p>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-semibold">Product</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Testimonials
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-semibold">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Tutorials
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-sm font-semibold">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t text-center text-sm text-muted-foreground">
            <p>© 2025 VideoGenAI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

