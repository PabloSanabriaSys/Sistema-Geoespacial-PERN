import React from 'react'

function Inputs({ type, place }) {
    return (
        <>
            <input type={type} 
                className="peer p-4 block w-full dark:bg-slate-800 dark:border-slate-500 bg-gray-100 border-2 border-black rounded-lg text-sm text-black dark:text-white placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-black disabled:opacity-50 disabled:pointer-events-none
                  focus:pt-6
                  focus:pb-2
                  [&:not(:placeholder-shown)]:pt-6
                  [&:not(:placeholder-shown)]:pb-2
                  autofill:pt-6
                  autofill:pb-2" placeholder={place} />
            <label  className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
                  peer-focus:text-xs
                  peer-focus:-translate-y-1.5
                  peer-focus:text-neutral-400
                  peer-[:not(:placeholder-shown)]:text-xs
                  peer-[:not(:placeholder-shown)]:-translate-y-1.5
                  peer-[:not(:placeholder-shown)]:text-neutral-400">{place}</label>
        </>

    )
}

export default Inputs