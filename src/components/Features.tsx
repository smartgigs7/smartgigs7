import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Zap, Heart, Award, Users, Clock } from "lucide-react"

const Features = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8 text-primary" />,
      title: "Vetted Professionals",
      description: "Every freelancer undergoes rigorous screening to ensure you work with only the most qualified talent."
    },
    {
      icon: <Zap className="w-8 h-8 text-primary" />,
      title: "Lightning Fast Delivery",
      description: "Get your projects completed in record time with our network of dedicated, fast-working professionals."
    },
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Client-First Approach",
      description: "Your satisfaction is our priority. We go above and beyond to ensure every project exceeds expectations."
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Premium Quality",
      description: "Experience exceptional results from freelancers who are masters of their craft and passionate about excellence."
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Diverse Expertise",
      description: "Access specialists across 50+ categories, from design and development to marketing and content creation."
    },
    {
      icon: <Clock className="w-8 h-8 text-primary" />,
      title: "24/7 Support",
      description: "Round-the-clock assistance ensures your projects stay on track and any questions are answered promptly."
    }
  ]

  return (
    <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Why Choose SmartGigs?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We've reimagined freelancing by focusing on what matters most: connecting exceptional talent 
            with ambitious projects to create remarkable results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center hover:scale-105 transition-transform duration-300">
              <CardHeader className="pb-4">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-lg w-fit">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features