import React from 'react'

export default function Encounter() {
  return (
    <div className="sm:w-3/5 flex flex-col flex-wrap p-6 border border-amber-100/30 bg-amber-100/40 glass rounded-lg shadow-md">
        <h2 className="text-xl font-semibold border-b border-amber-950 pb-3 mb-2">Encuentro</h2>
        <h3 className="text-lg font-medium mb-2">Ciudadano comun</h3>
        <div className="w-1/2 flex gap-2 mb-2">
            <p>CA: 10</p>
            <p>HP: 8</p>
        </div>
        <div className="flex flex-col gap-2 justify-around">
            <ul className="w-1/2 flex flex-wrap gap-2">
              <h4 className="w-full">Stats:</h4>
              <li>STR: 10</li>
              <li>DEX: 10</li>
              <li>CON: 10</li>
              <li>INT: 10</li>
              <li>WIS: 10</li>
              <li>CHA: 10</li>
            </ul>
            <ul className="flex flex-wrap justify-center gap-2">
            <h4 className="w-full">Saves:</h4>
              <li>STR: 10</li>
              <li>DEX: 12</li>
              <li>CON: 12</li>
              <li>INT: 12</li>
              <li>WIS: 12</li>
              <li>CHA: 12</li>
            </ul>
        </div>
    </div>
  )
}
