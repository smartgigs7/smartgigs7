import Header from "@/components/Header"
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
  ]

  const team = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      description: "Former tech executive with 15+ years experience building high-performing teams.",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b512?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      role: "Head of Talent",
      description: "Expert in freelancer vetting and matching, ensuring perfect project-talent alignment.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Emily Rodriguez",
      role: "Client Success Manager",
      description: "Dedicated to ensuring every client achieves their goals through exceptional support.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
    }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Connecting Exceptional Talent with 
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Visionary Projects</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            SmartGigs was founded on the belief that extraordinary work happens when the right talent 
            meets the right opportunity. We're revolutionizing how businesses access world-class freelancers.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Our Mission
              </h2>
              <p className="text-lg text-muted-foreground">
                We're on a mission to democratize access to exceptional talent. By carefully curating 
                our network of freelancers and providing unparalleled support, we ensure that every 
                project achieves its full potential.
              </p>
              <p className="text-lg text-muted-foreground">
                Through cutting-edge technology and human expertise, we match clients with freelancers 
                who don't just meet requirements—they exceed them, delivering results that drive real business impact.
              </p>
              <Button variant="hero" size="lg" className="group">
                Join Our Network
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop"
                alt="Team collaboration"
                className="w-full h-[400px] object-cover rounded-2xl shadow-glow"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do and shape how we build relationships with our community.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-2xl">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The passionate individuals behind SmartGigs, dedicated to your success.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center space-y-4 bg-background p-6 rounded-2xl shadow-card">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{member.name}</h3>
                  <p className="text-primary font-medium">{member.role}</p>
                </div>
                <p className="text-muted-foreground">{member.description}</p>
              </div>
            ))}
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
            <Button variant="hero" size="xl" className="group">
              Hire Freelancers
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="professional" size="xl">
              Become a Freelancer
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default About