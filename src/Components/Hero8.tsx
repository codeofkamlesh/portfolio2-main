import React from 'react'

const Hero2 = () => {
  return (
    <div className="bg-white flex flex-co lg:flex-row justify-between">
      <div className="py-12 px-8 md:py-20 md:px-16 lg:py-28 lg:px-32">
        <h1 className="text-black font-extrabold text-3xl md:text-4xl lg:text-5xl font-sans">Project</h1>
        <h1 className="text-black font-extrabold text-3xl md:text-4xl lg:text-5xl font-sans">Management</h1>
        <p className="text-black mt-4 md:mt-5">
        Image, Videos , PDFs and audio filed are Supported. Create math expressions and 
        diagrams from the app. Take photos with the mobile and save them to a note.  
        </p>
        <button className="bg-[#d72307] flex items-center justify-center py-2 px-4 rounded-lg mt-6 shadow-black">Get Started</button>
      </div>

      <div className="py-8 px-8 md:py-16 md:px-20 lg:py-20 lg:px-28">
      <img
          src="img2.png"
          alt=""
          className="w-[800px] md:w-[250px] lg:w-[700px]"
        />
      </div>
    </div>
  )
}

export default Hero2
