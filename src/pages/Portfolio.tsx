import Header from "@/components/Header"
import { Link } from "react-router-dom"
import Footer from "@/components/Footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, MapPin, Clock, ExternalLink } from "lucide-react"
import portfolioImage from "@/assets/portfolio-showcase.jpg"

const Portfolio = () => {
  const freelancers = [
    {
      id: 1,
      name: "Kibriya Sabir",
      title: "Professional UI/UX Designer",
      // location: "San Francisco, CA",
      rating: 4.6,
      reviews: 356,
      hourlyRate: 130,
      avatar: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_original/v1/attachments/profile/photo/9a3c9ac6ea8c6cd5b2ee38a35b137803-1643048283748/cf43ed9d-23a7-444b-9e4a-3ac72a7f192f.jpg",
      skills: ["UI/UX Design", "Graphic Designing", "App Icons", "Brand Identity"],
      languages: ["English", "German", "Spanish", "French"],
      completedProjects: 120,
      // responseTime: "2 hours",
      // projects: [
      //   {
      //     title: "K Logo Design",
      //     // description: "Complete redesign of shopping app interface with 40% increase in conversion",
      //     image: "https://cdn.dribbble.com/userupload/18176060/file/original-722bba0f598ec9fb7bfcebe112a3fbbb.jpg?resize=1504x1128&vertical=center"
      //   },
      //   {
      //     title: "Dashboard UI",
      //     // description: "Modern analytics dashboard with intuitive data visualization",
      //     image: "https://cdn.dribbble.com/userupload/16558265/file/original-206ea21fabb401c256f8dcf887664eed.jpg?resize=1504x1129&vertical=center"
      //   }
      // ]
    },
    {
      id: 2,
      name: "Enegma Designs",
      title: "Professional Graphic Designer",
      // location: "Austin, TX",
      rating: 4.8,
      reviews: 87,
      hourlyRate: 60,
      avatar: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_original/v1/attachments/profile/photo/50e437aa2f6a91ab7af527d1fcbcfcff-1745061019243/8d25f563-3453-4b2e-842b-6213e08c3fb8.png",
      skills: ["Logo Designing", "Brand Identity Designing", "3D Mockup Artist", "Mockup Designing"],
      languages: ["English"],
      // completedProjects: 89,
      // responseTime: "1 hour",
      // projects: [
      //   {
      //     title: "Real Estate Platform",
      //     description: "Full-stack web application with advanced search and property management",
      //     image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300&fit=crop"
      //   },
      //   {
      //     title: "Task Management App",
      //     description: "Collaborative project management tool with real-time updates",
      //     image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=300&fit=crop"
      //   }
      // ]
    },
    {
      id: 3,
      name: '"Rgbdezins"',
      title: "Brand Logo Designer and Branding Expert",
      // location: "New York, NY",
      rating: 4.7,
      reviews: 40,
      hourlyRate: 65,
      avatar: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto,t_profile_original/v1/attachments/profile/photo/e44dadc6ecee289564b30e1b4b3cda59-1694488385634/3248e024-2a68-4755-8d39-76d59d4e3409.jpg",
      skills: ["Logo Designing"],
      languages: ["English", "French"],
      // completedProjects: 156,
      // responseTime: "3 hours",
      // projects: [
      //   {
      //     title: "Brand Content Strategy",
      //     description: "Complete content overhaul resulting in 200% increase in organic traffic",
      //     image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=400&h=300&fit=crop"
      //   },
      //   {
      //     title: "Product Launch Campaign",
      //     description: "Multi-channel content campaign generating $500K in pre-orders",
      //     image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop"
      //   }
      // ]
    },
    // {
    //   id: 4,
    //   name: "David Kim",
    //   title: "Digital Marketing Specialist",
    //   location: "Seattle, WA",
    //   rating: 4.9,
    //   reviews: 58,
    //   hourlyRate: 75,
    //   avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    //   skills: ["Google Ads", "Facebook Marketing", "Analytics", "Conversion Optimization"],
    //   languages: ["English", "Korean"],
    //   completedProjects: 143,
    //   responseTime: "4 hours",
    //   projects: [
    //     {
    //       title: "E-commerce Ad Campaign",
    //       description: "PPC campaign optimization achieving 300% ROI improvement",
    //       image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop"
    //     },
    //     {
    //       title: "Social Media Strategy",
    //       description: "Comprehensive social strategy growing followers by 500% in 6 months",
    //       image: "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=400&h=300&fit=crop"
    //     }
    //   ]
    // }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-secondary/50 to-primary/10">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Meet Our 
            <span className="bg-gradient-primary bg-clip-text text-transparent"> Exceptional </span>
            Freelancers
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
            Discover the talented professionals behind our outstanding results. Each freelancer has been 
            carefully vetted and proven their expertise through successful project deliveries.
          </p>
          <div className="relative max-w-4xl mx-auto">
            <img
              src={portfolioImage}
              alt="Portfolio showcase"
              className="w-full h-64 md:h-80 object-cover rounded-2xl shadow-elegant"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl"></div>
          </div>
        </div>
      </section>

      {/* Freelancer Profiles */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Top Designers
            </h2>
            <p className="text-lg text-muted-foreground">
              These freelancers represent the pinnacle of professional excellence in their respective fields.
            </p>
          </div>

          <div className="grid gap-8">
            {freelancers.map((freelancer) => (
              <Card key={freelancer.id} className="overflow-hidden">
                <div className="md:flex">
                  {/* Freelancer Info */}
                  <div className="md:w-1/3 p-6">
                    <div className="flex items-start space-x-4">
                      <img
                        src={freelancer.avatar}
                        alt={freelancer.name}
                        className="w-16 h-16 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground">{freelancer.name}</h3>
                        <p className="text-muted-foreground font-medium">{freelancer.title}</p>
                        <div className="flex items-center space-x-4 mt-2 text-sm text-muted-foreground">
                          {/* <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{freelancer.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{freelancer.responseTime}</span>
                          </div> */}
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 ${
                                  i < Math.floor(freelancer.rating)
                                    ? "text-yellow-500 fill-current"
                                    : "text-gray-300"
                                }`}
                              />
                            ))}
                          </div>
                          <span className="text-sm font-medium">{freelancer.rating}</span>
                          <span className="text-sm text-muted-foreground">({freelancer.reviews} reviews)</span>
                        </div>
                        <div className="text-right">
                          <div className="text-lg font-bold text-foreground">From ${freelancer.hourlyRate}/gig</div>
                          <div className="text-sm text-muted-foreground">{freelancer.completedProjects} projects</div>
                        </div>
                      </div>


                      <div className="flex flex-wrap gap-2">
                        {freelancer.skills.map((skill, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>

                      {/* Languages */}
                      {freelancer.languages && (
                        <div className="flex flex-wrap gap-2 mt-1">
                          {freelancer.languages.map((lang, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs border-primary text-primary">
                              {lang}
                            </Badge>
                          ))}
                        </div>
                      )}

                      <Link to="/#contact">
                        <Button variant="hero" className="w-full mt-6">
                          Hire {freelancer.name.split(' ')[0]}
                        </Button>
                      </Link>
                    </div>
                  </div>

                  {/* Project Examples */}
                  <div className="md:w-2/3 p-6 bg-secondary/30">
                    <h4 className="text-lg font-semibold text-foreground mb-4">Recent Projects</h4>
                    {freelancer.projects && freelancer.projects.length > 0 ? (
                      <div className="grid md:grid-cols-2 gap-4">
                        {freelancer.projects.map((project, index) => (
                          <div key={index} className="group cursor-pointer">
                            <div className="relative overflow-hidden rounded-lg mb-3">
                              <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-32 object-cover transition-transform duration-300 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <ExternalLink className="w-6 h-6 text-white" />
                              </div>
                            </div>
                            <h5 className="font-semibold text-foreground mb-1">{project.title}</h5>
                            <p className="text-sm text-muted-foreground">{project.description}</p>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="flex justify-center items-center py-12 h-64 w-full">
                        <span className="text-2xl font-semibold text-muted-foreground text-center">No Projects With Us Yet</span>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <Button variant="professional" size="lg">
              View All Freelancers
            </Button>
            <div className="mt-4 text-sm text-gray-400">Contact Us to Request full portfolio</div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default Portfolio