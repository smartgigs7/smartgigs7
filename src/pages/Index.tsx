import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Features from "@/components/Features"
import CTA from "@/components/CTA"
import Footer from "@/components/Footer"
import { Mail, Phone, MapPin } from "lucide-react"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Features />
      <CTA />
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-primary">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Get in Touch
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Ready to start your next project? We're here to help you find the perfect freelancer 
            or answer any questions you might have.
          </p>
          <div className="grid md:grid-cols-1 gap-8 text-center">
            <div className="space-y-3">
              <a href="mailto:smartgigs7@gmail.com?subject=Inquiry%20from%20SmartGigs%20Website" className="group block">
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto transition-transform group-hover:scale-110">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold text-white mt-2 group-hover:underline">Email Us</h3>
                <p className="text-white/90">smartgigs7@gmail.com</p>
              </a>
            </div>
            {/* <div className="space-y-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-foreground">Call Us</h3>
              <p className="text-muted-foreground">+1 (555) 123-4567</p>
            </div>
            <div className="space-y-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center mx-auto">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-foreground">Visit Us</h3>
              <p className="text-muted-foreground">San Francisco, CA</p>
            </div> */}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Index;
