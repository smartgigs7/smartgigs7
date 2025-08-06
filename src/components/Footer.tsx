import { Link } from "react-router-dom"
import { Mail, Phone, MapPin, Twitter, Linkedin, Github } from "lucide-react"

const Footer = () => {
  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "Web Development", href: "#" },
        { name: "Graphic Design", href: "#" },
        { name: "Content Writing", href: "#" },
        { name: "Digital Marketing", href: "#" },
        { name: "Mobile Apps", href: "#" }
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Our Team", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Press", href: "#" },
        { name: "Contact", href: "/#contact" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "#" },
        { name: "Help Center", href: "#" },
        { name: "Guides", href: "#" },
        { name: "API Docs", href: "#" },
        { name: "Status", href: "#" }
      ]
    }
  ]

  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-12 grid md:grid-cols-4 gap-8">
          {/* Brand section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">SG</span>
              </div>
              <span className="text-xl font-bold">SmartGigs</span>
            </Link>
            <p className="text-sm text-background/70 leading-relaxed">
              Connecting exceptional freelancers with ambitious projects. 
              Experience the future of professional services.
            </p>
            <div className="flex space-x-4">
              <Twitter className="w-5 h-5 text-background/70 hover:text-background cursor-pointer transition-colors" />
              <Linkedin className="w-5 h-5 text-background/70 hover:text-background cursor-pointer transition-colors" />
              <Github className="w-5 h-5 text-background/70 hover:text-background cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Footer sections */}
          {footerSections.map((section, index) => (
            <div key={index} className="space-y-4">
              <h3 className="font-semibold text-lg">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-sm text-background/70 hover:text-background transition-colors"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact info */}
        <div className="py-6 border-t border-background/20">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row md:space-x-8 space-y-2 md:space-y-0">
              <div className="flex items-center space-x-2 text-sm text-background/70">
                <Mail className="w-4 h-4" />
                <span>hello@smartgigs.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-background/70">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-background/70">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>
            <div className="text-sm text-background/70">
              © 2024 SmartGigs. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer