import { useState, useEffect } from "react"


export default function Game() {
    
    return(
        <>
        
        <div className="flex justify-center items-center bg-[url(/arena2.jpg)] object-fill h-screen w-screen">


            <div className="flex justify-center items-center flex-row gap-40 mt-50">
                <div className="flex flex-col justify-center items-center">

                    <div className="flex flex-row gap-10 w-100 bg-black rounded-3xl">
                        <div className="border-8 w-100 text-green-600 rounded-3xl">

                        </div>
                    </div>

                    <img 
                className="object-cover mt-20 h-50 w-50"
                src="/perso2.png" alt="perso1" />

                <p className="text-4xl font-bold italic">Player 1</p>

                <div className="flex justify-center items-center flex-row gap-10">
                    <button className="mt-10 w-40 rounded-2xl h-10 hover:scale-105 text-white text-2xl transition-all duration-200 cursor-pointer bg-red-600">
                    Fight
                    </button>

                    <button className="mt-10 w-40 rounded-2xl h-10 hover:scale-105 text-white text-2xl transition-all duration-200 cursor-pointer bg-yellow-400">
                    Power
                    </button>
                </div>
                </div>


                <div className="flex flex-col justify-center items-center">
                    <div className="flex flex-row gap-10 w-100  bg-black rounded-3xl">
                        <div className="border-8 w-100 text-green-600 rounded-3xl">

                        </div>
                    </div>
                    <img 
                className="object-cover mt-17 h-50 w-50"
                src="/perso1.png" alt="perso2" />

                <p className="text-4xl font-bold italic mt-2">Player 2</p>

                <div className="flex justify-center items-center flex-row gap-10">
                    <button className="mt-10 w-40 rounded-2xl h-10 hover:scale-105 text-white text-2xl transition-all duration-200 cursor-pointer bg-red-600">
                    Fight
                    </button>

                    <button className="mt-10 w-40 rounded-2xl h-10 hover:scale-105 text-white text-2xl transition-all duration-200 cursor-pointer bg-yellow-400">
                    Power
                    </button>
                </div>
                </div>
            </div>

        </div>
        
        
        </>
    )
}