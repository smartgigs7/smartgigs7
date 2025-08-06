import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { ArrowRight, Star, Users, Clock } from "lucide-react"
import heroImage from "@/assets/hero-image.jpg"

const Hero = () => {
  return (
    <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-secondary/50 to-primary/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Connect with 
                <span className="bg-gradient-primary bg-clip-text text-transparent"> Exceptional </span>
                Freelancers
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                SmartGigs bridges the gap between ambitious clients and world-class freelancers. 
                Experience the power of expertly curated talent delivering outstanding results, fast.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 md:gap-8">
              <div className="flex items-center space-x-2">
                {/* <div className="flex items-center text-yellow-500">
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                  <Star className="w-5 h-5 fill-current" />
                </div> */}
                {/* <span className="text-sm font-medium text-muted-foreground">4.9/5 rating</span> */}
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-muted-foreground">48hr average response rate</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/portfolio">
                <Button variant="hero" size="xl" className="group">
                  Browse Freelancers
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              {/* <Button variant="professional" size="xl">
                View Portfolio
              </Button> */}
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative lg:h-[600px] animate-float">
            <img
              src={heroImage}
              alt="Professional freelancers at work"
              className="w-full h-full object-cover rounded-2xl shadow-glow"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero