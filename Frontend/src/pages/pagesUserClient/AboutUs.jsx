import React from 'react';
function AboutUs() {
  return (
    <div className=' flex justify-around py-10'>
        <div className=" bg-gradient-to-l from-slate-500 dark:bg-slate-800  max-w-5xl xl:px-20 dark:border-slate-500 border-2 border-gray-800 rounded-3xl px-10 py-10 lg:py-10 mx-10">
          {/* Title */}
          <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
            <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">NUESTRO EQUIPO </h2>
          </div>
          {/* End Title */}

          {/* Grid */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-8 md:gap-40 ">
            <div className="text-center">
              <img className="rounded-xl sm:size-48 lg:size-60 mx-auto" src='/imagenes/pablito.jpg' alt="Pablo Sanabria" />
              <div className="mt-2 sm:mt-4">
                <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-neutral-200">Pablo Sanabria</h3>
                <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-neutral-400">Developer / Backend</p>
              </div>
            </div>
            {/* End Col */}
            <div className="text-center">
              <img className="rounded-xl sm:size-48 lg:size-60 mx-auto" src="/imagenes/yara.jpg" alt="Yara Osnayo" />
              <div className="mt-2 sm:mt-4">
                <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-neutral-200">Yara Osnayo</h3>
                <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-neutral-400">Estudiante / Frontend</p>
              </div>
            </div>

            {/* Repeat similar structure for other team members */}
          </div>
          {/* End Grid */}
        </div>
    </div>
    
  )
}

export default AboutUs;