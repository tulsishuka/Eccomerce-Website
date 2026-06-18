import React from 'react'

const TestimonialsSection = () => {
  return (
    <div className="w-full bg-white py-8 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex items-center gap-2 mb-6">
          <h2 className="text-xl md:text-2xl font-medium text-[#333333]">Original Brands</h2>
  
          <svg className="w-12 h-12 text-[#6B21A8]" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6.267 3.455a.75.75 0 00-.708.523.75.75 0 01-.514.514.75.75 0 00-.523.708v1.32a.75.75 0 01-.22.53l-.933.933a.75.75 0 000 1.06l.933.933a.75.75 0 01.22.53v1.32a.75.75 0 00.523.708.75.75 0 01.514.514.75.75 0 00.708.523h1.32a.75.75 0 01.53.22l.933.933a.75.75 0 001.06 0l.933-.933a.75.75 0 01.53-.22h1.32a.75.75 0 00.708-.523.75.75 0 01.514-.514.75.75 0 00.523-.708v-1.32a.75.75 0 01.22-.53l.933-.933a.75.75 0 000-1.06l-.933-.933a.75.75 0 01-.22-.53v-1.32a.75.75 0 00-.523-.708.75.75 0 01-.514-.514.75.75 0 00-.708-.523h-1.32a.75.75 0 01-.53-.22L11.06 2.22a.75.75 0 00-1.06 0L9.07 3.153a.75.75 0 01-.53.22h-1.32zm3.11 5.23a.75.75 0 10-1.06-1.06L7.02 8.91 6.28 8.17a.75.75 0 10-1.06 1.06l1.272 1.273a.75.75 0 001.06 0l2.836-2.83z" clipRule="evenodd" />
          </svg>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          <div className="w-full">
            <img 
              src="/footwear.webp" 
              alt="Personal Care" 
              className="w-full h-auto rounded-xl object-contain" 
            />
          </div>
          <div className="w-full">
            <img 
              src="/phones.webp" 
              alt="Electronics" 
              className="w-full h-auto rounded-xl object-contain" 
            />
          </div>
          <div className="w-full">
            <img 
              src="/lipstic.webp" 
              alt="Makeup" 
              className="w-full h-auto rounded-xl object-contain" 
            />
          </div>
          <div className="w-full">
            <img 
              src="/denver.webp" 
              alt="Smart Phones" 
              className="w-full h-auto rounded-xl object-contain" 
            />
          </div>
          <div className="w-full">
            <img 
              src="/Bags.webp" 
              alt="Bags" 
              className="w-full h-auto rounded-xl object-contain" 
            />
          </div>
        </div>

      </div>
    </div>
  )
}

export default TestimonialsSection