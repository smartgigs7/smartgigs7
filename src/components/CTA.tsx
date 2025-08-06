import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

const CTA = () => {
  const benefits = [
    "Access to pre-vetted, top-tier freelancers",
    "Projects completed 3x faster than industry average", 
    "100% satisfaction guarantee on all deliverables",
    "Dedicated project management and support"
  ]

  // return (
  //   <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-primary">
  //     <div className="max-w-4xl mx-auto text-center">
  //       <div className="space-y-8">
  //         <div className="space-y-4">
  //           <h2 className="text-3xl md:text-4xl font-bold text-white">
  //             Ready to Transform Your Business?
  //           </h2>
  //           <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
  //             Join thousands of successful businesses who trust SmartGigs to deliver 
  //             exceptional results. Start your first project today.
  //           </p>
  //         </div>

  //         {/* Benefits */}
  //         <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto text-left">
  //           {benefits.map((benefit, index) => (
  //             <div key={index} className="flex items-start space-x-3">
  //               <CheckCircle className="w-5 h-5 text-white/90 mt-0.5 flex-shrink-0" />
  //               <span className="text-white/90 text-sm">{benefit}</span>
  //             </div>
  //           ))}
  //         </div>

  //         {/* CTA Buttons */}
  //         <div className="flex flex-col sm:flex-row gap-4 justify-center">
  //           <Button 
  //             variant="secondary" 
  //             size="xl" 
  //             className="bg-white text-primary hover:bg-white/90 font-semibold group"
  //           >
  //             Start Your Project
  //             <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
  //           </Button>
  //           <Button 
  //             variant="outline" 
  //             size="xl" 
  //             className="border-white text-white hover:bg-white hover:text-primary font-semibold transition-all duration-300"
  //           >
  //             Schedule Consultation
  //           </Button>
  //         </div>

  //         <p className="text-sm text-white/80">
  //           No setup fees • Pay only for completed work • 30-day money-back guarantee
  //         </p>
  //       </div>
  //     </div>
  //   </section>
  // )
}

export default CTA