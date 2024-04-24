import React from 'react'
import {
  MapPinIcon, EnvelopeOpenIcon, MegaphoneIcon, PaperAirplaneIcon
} from '@heroicons/react/24/outline';
import Inputs from '../../components/ComponentClient/Inputs';
function ContactUser() {
  return (
    <div className="  flex items-center justify-center py-10 ">
      <div className=" bg-gradient-to-l from-slate-400 dark:bg-slate-700 max-w-5xl xl:px-20 dark:border-slate-500 border-2 border-gray-800 rounded-3xl px-10 py-10 lg:py-10 mx-10">
        {/* Title */}
        <div className="max-w-3xl mb-10 lg:mb-14">
          <h2 className="text-black dark:text-white font-semibold text-2xl md:text-4xl md:leading-tight">Contactanos</h2>
          <p className="mt-1 text-neutral-400">Tu farmacia de confianza, siempre cerca de ti.</p>
        </div>
        {/* End Title */}

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16">
          {/* Col 1 */}
          <div className="md:order-2 border-b border-neutral-800 pb-10 mb-10 md:border-b-0 md:pb-0 md:mb-0">
            <form>
              <div className="space-y-4">
                {/* Input */}
                <div className="relative">
                  <Inputs type='text' place='Nombre'/>

                  
                </div>
                {/* End Input */}

                {/* Input */}
                <div className="relative">
                  <Inputs type='email' place='Correo electronico'/>
                  
                </div>
                {/* End Input */}

                {/* Input */}
                <div className="relative">
                  <Inputs type='number' place='Celular'/>
                  
                </div>
                {/* End Input */}

                {/* Textarea */}
                <div className="relative">
                  
                  <textarea id="hs-tac-message" className="peer p-4 block w-full dark:bg-slate-800 dark:border-slate-500 bg-gray-100 border-2 border-black rounded-lg text-sm text-black dark:text-white placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-black disabled:opacity-50 disabled:pointer-events-none
                  focus:pt-6
                  focus:pb-2
                  [&:not(:placeholder-shown)]:pt-6
                  [&:not(:placeholder-shown)]:pb-2
                  autofill:pt-6
                  autofill:pb-2" placeholder="This is a textarea placeholder"></textarea>
                  <label htmlFor="hs-tac-message" className="absolute top-0 start-0 p-4 h-full text-neutral-400  text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                    peer-focus:text-xs
                    peer-focus:-translate-y-1.5
                    peer-focus:text-neutral-400
                    peer-[:not(:placeholder-shown)]:text-xs
                    peer-[:not(:placeholder-shown)]:-translate-y-1.5
                    peer-[:not(:placeholder-shown)]:text-neutral-400">Escribe tu mensaje aquí.</label>
                </div>
                {/* End Textarea */}
              </div>

              <div className="mt-2">
                <p className="text-xs text-neutral-500">
                  Todos los campos son obligatorios. 
                </p>

                <p className="mt-5">
                  <a className="   dark:border-slate-500  border-2 border-black group inline-flex items-center gap-x-2 py-2 px-3 font-medium text-sm  rounded-full focus:outline-none text-white bg-blue-500 hover:bg-red-400" href="#">
                    Enviar
                    <PaperAirplaneIcon className=' w-7 h-7  flex-shrink-0 size-4 transition group-hover:translate-x-0.5 group-hover:translate-x-0 group-focus:translate-x-0.5 group-focus:translate-x-0 text-white' />
                  </a>
                </p>
              </div>
            </form>
          </div>
          {/* End Col 1 */}

          {/* Col 2 */}
          <div className="space-y-14">
            {/* Item 1 */}
            <div className="flex gap-x-5">
              < MapPinIcon className='w-7 h-7 text-neutral-400'/>
              <div className="grow">
                <h4 className="text-black dark:text-white font-semibold">Nuestra ubicación:</h4>

                <address className="mt-1 text-neutral-400 text-sm not-italic">
                  Escuela Militar de Ingeniería<br />
                  C. Lanza, Cochabamba
                </address>
              </div>
            </div>
            {/* End Item 1 */}

            {/* Item 2 */}
            <div className="flex gap-x-5">
              <EnvelopeOpenIcon className='w-7 h-7 text-neutral-400'/>
              <div className="grow">
                <h4 className=" text-black dark:text-white font-semibold">Nuestro correo electronico:</h4>

                <a className="mt-1 text-neutral-400 text-sm" href="#mailto:example@site.co" target="_blank">
                  farmayapa@farm.corp
                </a>
              </div>
            </div>
            {/* End Item 2 */}

            {/* Item 3 */}
            <div className="flex gap-x-5">
              <MegaphoneIcon className='w-7 h-7 text-neutral-500'/>
              <div className="grow">
                <h4 className="text-black dark:text-white font-semibold">Tenemos las mejores ofertas</h4>
                <p className="mt-1 text-neutral-400">En Farmacia FarmaYaPa, encontrarás todo lo que necesitas para tu salud.</p>
                
              </div>
            </div>
            {/* End Item 3 */}
          </div>
          {/* End Col 2 */}
        </div>
        {/* End Grid */}
      </div>
    </div>
  );
}

export default ContactUser