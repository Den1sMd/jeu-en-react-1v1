"use client"

import { useState, useEffect } from "react"


export default function win1() {
    const [redi, setRedi] = useState(false)

    function go() {
        window.location.href = "/"
    }

    return(
        <>
        <div className="flex w-screen h-screen justify-center items-center bg-[url(/final.jpg)]">
            <div className="bg-orange-500 flex justify-center border-amber-700 border-8 items-center flex-col h-50 w-200 rounded-3xl">
                <p className="text-3xl italic font-bold text-red-900">Player 1 A gagner !</p>

                <button 
                onClick={go}
                className="bg-orange-400 mt-5 rounded-2xl border-red-700 text-xl border-4 w-60 h-20 transition-all duration-200 hover:scale-105 hover:rotate-3 cursor-pointer hover:bg-orange-300">
                    Rejouer
                </button>
            </div>
        </div>
        </>
    )
}