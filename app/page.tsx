"use client"

import Image from "next/image";
import { useState, useEffect } from "react";
import Game from "@/components/forGame";
import { User, Heart } from "@nsmr/pixelart-react";

interface Players {
  nom: string
  degats: number
  vie: number
  nomPouvoir: string
  degatsPouvoir: number
}

  const Player1: Players = {
  nom: "Player1",
  degats: Math.floor(Math.random() * 20 + 5),
  vie: 100,
  nomPouvoir: "Feu",
  degatsPouvoir: 30,
}

const Player2: Players = {
  nom: "Player2",
  degats: Math.floor(Math.random() * 20 + 5),
  vie: 100,
  nomPouvoir: "Eau",
  degatsPouvoir: 50,
}

export default function Home() {

  const [calc1, setCalc1] = useState(0);
  const [calc2, setCalc2] = useState(0);
  const [result, setRes] = useState(0);


  const [life1, setLife1] = useState(Player1.vie)
  const [life2, setLife2] = useState(Player2.vie)
  const [finish, setFinish] = useState(false)

  const [win1, setWin1] = useState(false)
  const [win2, setWin2] = useState(false)

  const [isgame, setIsgame] = useState(false)

  const [anim, setAnim] = useState(false)

  useEffect(() => {
      setCalc1(() => Math.floor(Math.random() * 10))
      setCalc2(() => Math.floor(Math.random() * 10))
  }, [])

  useEffect(() => {
    if (life1 <= 0) {
      setWin2(() => true)
      window.location.href = "/win2"
    }
  }, [life1])

   useEffect(() => {
    if (life2 <= 0) {
      setWin2(() => true)
      window.location.href = "/win1"
    }
  }, [life2])


 function handleCalc() {
  setIsgame(() => true)
 }

 function fight1() {
  setLife1((prevLife) => prevLife - Player2.degats)
 }

 function fight2() {
  setLife2((prevLife) => prevLife - Player1.degats)
 }

 function power1() {
  setLife1((prevLife) => prevLife - Player2.degatsPouvoir)
 }

 function power2() {
  setLife2((prevLife) => prevLife - Player1.degatsPouvoir)
 }

  if (isgame) {
            return(
              <>
              <div className="flex justify-center items-center bg-[url(/arena2.jpg)] object-fill h-screen w-screen">


            <div className="flex justify-center items-center flex-row gap-40 mt-50">
                <div className="flex flex-col justify-center items-center">

                    <div className="flex justify-center items-center flex-row">

                      <img 
                      className="w-14 mb-5 mr-2"
                      src="/heart.png" alt="heart" />
                      <p className="text-white text-2xl mb-5">{life1}</p>
                    </div>

                    <div className="flex flex-row gap-10 w-64 bg-black rounded-3xl">
                        
                        <div 
                        style={{ width: `${(life1 / Player1.vie) * 100}%`}}
                        className={`border-8 text-green-600 rounded-3xl transform transition-all duration-200`}>

                        </div>
                    </div>

                    <img 
                className="object-cover mt-10 h-50 w-50"
                src="/perso2.png" alt="perso1" />

                <p className="text-4xl font-bold italic">{Player1.nom}</p>

                <div className="flex justify-center items-center flex-row gap-10">
                    <button 
                    onClick={fight2}
                    className="mt-10 w-40 rounded-2xl h-10 hover:scale-105 text-white text-2xl transition-all duration-200 cursor-pointer bg-red-600">
                    Fight
                    </button>

                    <button
                    onClick={power2}
                    className="mt-10 w-40 rounded-2xl h-10 hover:scale-105 text-white text-2xl transition-all duration-200 cursor-pointer bg-yellow-400">
                    Power
                    </button>
                </div>
                </div>


                <div className="flex flex-col justify-center items-center">
                    
                    <div className="flex justify-center items-center flex-row">

                      <img 
                      className="w-14 mb-5 mr-2"
                      src="/heart.png" alt="heart" />
                      <p className="text-white text-2xl mb-5">{life2}</p>
                    </div>

                    <div className="flex flex-row gap-10 w-64 bg-black rounded-3xl">
                        
                        <div 
                        style={{ width: `${life2}%`}}
                        className={`border-8 text-green-600 rounded-3xl transition-all duration-200`}>

                        </div>
                    </div>
                    <img 
                className="object-cover mt-7 h-50 w-50"
                src="/perso1.png" alt="perso2" />

                <p className="text-4xl font-bold italic mt-2">{Player2.nom}</p>

                <div className="flex justify-center items-center flex-row gap-10">
                    <button
                    onClick={fight1}
                    className="mt-10 w-40 rounded-2xl h-10 hover:scale-105 text-white text-2xl transition-all duration-200 cursor-pointer bg-red-600">
                    Fight
                    </button>

                    <button 
                    onClick={power1}
                    className="mt-10 w-40 rounded-2xl h-10 hover:scale-105 text-white text-2xl transition-all duration-200 cursor-pointer bg-yellow-400">
                    Power
                    </button>
                </div>
                </div>
            </div>

        </div>
              
              </>
            )
          }


  return (
    <>
    <div className="flex justify-center items-center">

    <div className="bg-gray-800 flex items-center justify-center w-screen h-screen">

      <div className="flex flex-col gap-10 justify-center items-center">
        <h1 className="text-white text-4xl hover:rotate-3 transition-all duration-200 hover:text-gray-400 border-b-2">Hey</h1>

          <p className="text-white text-2xl">Commence le jeu !</p>

          <div className="flex transition-all duration-200 hover:rotate-3 hover:scale-105">
            <button 
            onClick={handleCalc}
            className="cursor-pointer bg-white w-60 h-10 rounded-2xl text-xl">
            Commencer
          </button>
          </div>


      </div>
    </div>

    </div>
    
    </>
  );
}
