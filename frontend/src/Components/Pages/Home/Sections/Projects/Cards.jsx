import React from 'react'

export default function Cards({ img, title, pro }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-2">
      <div className="relative h-80 overflow-hidden">
        <img 
          src={img} 
          alt={title} 
          className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white space-y-4">
        <span className="inline-block px-4 py-1 bg-red-500 text-sm font-semibold rounded-full">
          {pro}
        </span>
        <h2 className="text-3xl font-bold leading-tight">
          {title}
          <span className="block text-5xl mt-1 opacity-70">{pro}</span>
        </h2>
        <div className="opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
          <button className="flex items-center gap-2 px-6 py-2 bg-white text-black rounded-full hover:bg-red-500 hover:text-white transition-colors">
            <span>View Project</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-white/0 via-white/30 to-white/0 transform -skew-x-12" />
      </div>
    </div>
  )
}