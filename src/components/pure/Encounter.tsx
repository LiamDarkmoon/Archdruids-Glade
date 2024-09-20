import React from 'react'

export default function Encounter() {
  return (
    <div className="sm:w-3/5 flex flex-wrap items-start p-6 border border-amber-100/30 bg-amber-100/40 glass rounded-lg shadow-md">
        <h2 className="w-full text-2xl font-bold text-center border-b border-amber-950 pb-2">Encuentro</h2>
        <div className="sm:w-1/2 flex flex-col gap-3 p-4">
            <h3 className="text-xl font-semibold text-center mb-2">Ciudadano comun</h3>
            <div className="w-full flex justify-center gap-2">
                <p>CA: 10</p>
                <p>HP: 8</p>
                <p>Speed: 30ft</p>
            </div>
            <div className="w-full flex text-center gap-2 mt-4">
                <ul className="w-1/2 flex flex-wrap gap-2">
                <h4 className="w-full">Stats:</h4>
                <li className="w-[61px]">STR: 10</li>
                <li className="w-[61px]">DEX: 10</li>
                <li className="w-[61px]">CON: 10</li>
                <li className="w-[61px]">INT: 10</li>
                <li className="w-[61px]">WIS: 10</li>
                <li className="w-[61px]">CHA: 10</li>
                </ul>
                <ul className="w-1/2 flex flex-wrap  gap-2">
                <h4 className="w-full">Saves:</h4>
                <li className="w-[61px]">STR: 10</li>
                <li className="w-[61px]">DEX: 10</li>
                <li className="w-[61px]">CON: 10</li>
                <li className="w-[61px]">INT: 10</li>
                <li className="w-[61px]">WIS: 10</li>
                <li className="w-[61px]">CHA: 10</li>
                </ul>
            </div>
        </div>
        <div className="sm:w-1/2 flex flex-col gap-3 p-4">
            <h4 className="text-xl font-medium text-center mb-2">Ataques y Habilidades</h4>
            <p className='font-medium text-sm'>Pico +3 ataque cuerpo a cuerpo 1d4 daño cortante o perforante</p>
            <p className='font-medium text-sm'>Roca +3 ataque a distancia 1d4 daño contundente</p>
        </div>
    </div>
  )
}
