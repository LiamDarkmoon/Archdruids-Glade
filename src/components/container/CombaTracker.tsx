'use client'

export default function CombaTracker() {
  return (
    <section className="h-[100vh] w-full px-12 mt-[100px] text-amber-50 flex flex-col text-center">
      <div className="flex flex-wrap gap-5">
        <div className="w-3/5 p-6 border border-amber-100/30 bg-amber-100/40 glass rounded-lg shadow-md">
          <h2 className="text-xl font-semibold border-b border-amber-700 pb-3 mb-2">Encuentro Actual</h2>
          <h3 className="text-lg font-medium mb-2">Centauro Zombie</h3>
          <div className="flex gap-2 justify-around mb-2">
            <p>CA: 16</p>
            <p>HP: 80</p>
          </div>
          <div className="flex flex-col gap-2 justify-around">
            <ul className="flex flex-wrap justify-center gap-2">
              <h4 className="w-full">Stats:</h4>
              <li>STR: 16</li>
              <li>DEX: 16</li>
              <li>CON: 16</li>
              <li>INT: 16</li>
              <li>WIS: 16</li>
              <li>CHA: 16</li>
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
        <div className="w-[30%] p-6 border border-amber-100/30 bg-amber-100/40 glass rounded-lg shadow-md">
          <h2 className="text-xl font-semibold border-b border-amber-700 pb-3 mb-2">Grupo</h2>
          <ul className="flex flex-col flex-wrap gap-2">
            <li className="flex gap-2">
              <p className="text-lg font-medium">Player 1</p>
              <p>HP: 100</p>
            </li>
            <li className="flex gap-2">
              <p className="text-lg font-medium">Player 2</p>
              <p>HP: 100</p>
            </li>
            <li className="flex gap-2">
              <p className="text-lg font-medium">Player 3</p>
              <p>HP: 100</p>
            </li>
            <li className="flex gap-2">
              <p className="text-lg font-medium">Player 4</p>
              <p>HP: 100</p>
            </li>
            <li className="flex gap-2">
              <p className="text-lg font-medium">Player 5</p>
              <p>HP: 100</p>
            </li>
          </ul>
        </div>
        <form className="p-6 border border-amber-100/30 bg-amber-100/40 glass rounded-lg shadow-md">
          <input className="border rounded-md p-2" type="text" placeholder="Kobold" />
        </form>
      </div>
    </section>
  )
}
