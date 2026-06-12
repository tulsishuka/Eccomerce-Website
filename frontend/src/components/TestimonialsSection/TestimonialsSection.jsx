import React from 'react'
import { Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    stars: 5,
    quote: "The attention to detail in the construction of my silk blazer was unparalleled. Aura Luxe doesn't just sell clothes; they offer architectural masterpieces for the body.",
    name: "Elena V.",
    location: "Milan, Italy",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: 2,
    stars: 5,
    quote: "Rarely do I find a brand that balances minimalist aesthetics with such wearable comfort. Their curated essentials have become the backbone of my wardrobe.",
    name: "Marcus T.",
    location: "New York City",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150"
  },
  {
    id: 3,
    stars: 5,
    quote: "Sustainability meets high fashion. I appreciate the transparency of their atelier process just as much as I love the final product. Truly world class.",
    name: "Sophia L.",
    location: "Paris, France",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150"
  }
]

const TestimonialsSection = () => {
  return (
    <section className="w-full bg-white text-stone-900 px-4 py-20 md:px-12 lg:px-20 font-sans selection:bg-stone-100">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Title with Accent Line Divider */}
        <div className="flex items-center gap-6 mb-16">
          <h2 className="text-3xl md:text-4xl font-serif tracking-tight font-normal text-stone-950 shrink-0">
            Client Perspectives
          </h2>
          <div className="h-[1px] bg-stone-200/80 w-full" />
        </div>

        {/* 3-Column Review Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14">
          {testimonials.map((item) => (
            <div key={item.id} className="flex flex-col items-start">
              
              {/* Star Ratings Row */}
              <div className="flex items-center gap-0.5 mb-5 text-amber-700">
                {[...Array(item.stars)].map((_, index) => (
                  <Star 
                    key={index} 
                    className="h-3.5 w-3.5 fill-amber-700 stroke-none" 
                  />
                ))}
              </div>

              {/* Review Quote Text */}
              <blockquote className="text-[13px] md:text-sm text-[#474746] italic font-medium leading-relaxed tracking-wide mb-6">
                "{item.quote}"
              </blockquote>

              {/* User Identity Profile Footer */}
              <div className="flex items-center gap-3 mt-auto">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-10 h-10 object-cover rounded-xl filter contrast-[1.05]"
                />
                <div className="flex flex-col">
                  <span className="text-xs font-semibold tracking-wider uppercase text-stone-950">
                    {item.name}
                  </span>
                  <span className="text-[10px] tracking-widest uppercase text-stone-400 font-medium">
                    {item.location}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default TestimonialsSection