import Header from "@/components/Header"
import { Link } from "react-router-dom"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Target, Users, Award, Globe } from "lucide-react"

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence First",
      description: "We maintain the highest standards in everything we do, ensuring every project exceeds expectations."
    },
    {
      icon: Users,
      title: "Client-Centric",
      description: "Your success is our priority. We build lasting partnerships through trust and transparent communication."
    },
    {
      icon: Award,
      title: "Quality Assured",
      description: "Every freelancer in our network is carefully vetted and continuously evaluated for exceptional performance."
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Access top talent from around the world, bringing diverse perspectives to your projects."
    }
  ];
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-secondary/50 to-primary/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in-up">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  About SmartGigs
                </h1>
                <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                  SmartGigs is a curated platform connecting clients with top-tier freelancers across the globe. Our mission is to make hiring and working with freelancers seamless, transparent, and successful for everyone.
                </p>
              </div>
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                {values.map((value, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <value.icon className="w-8 h-8 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{value.title}</h3>
                      <p className="text-muted-foreground">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden lg:block">
              {/* <img src={aboutImage} alt="About SmartGigs" className="w-full rounded-2xl shadow-elegant" /> */}
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Work with Us?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Whether you're looking to hire exceptional talent or join our network of elite freelancers, 
            we're here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/#contact">
              <Button variant="hero" size="xl" className="group">
                Hire Freelancers
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
            <Link to="/#contact">
              <Button variant="professional" size="xl">
                Become a Freelancer
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default About