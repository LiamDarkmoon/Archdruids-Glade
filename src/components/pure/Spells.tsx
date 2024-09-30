import useTurn from "@/lib/hooks/useTurn";
import ActionsDeck from "./Actions";

export default function Attacks() {
    const { player, handleSpell } = useTurn();
    
  return (
    <ul
    className="md:w-[320px] w-full flex flex-col gap-2"
    >
        {
            player &&
            player.actions.action.taken ?
            <ActionsDeck/> :
            <>
            {
                player.spells && player.spells.map((spell, i) =>
                <li
                key={i}
                >
                    <div 
                    className="flex flex-col items-center justify-center bg-amber-200/50 rounded-md p-2 gap-1 hover:bg-amber-200/80 hover:scale-1.2 hover:cursor-pointer transition-all duration-200"
                    onClick={() => handleSpell(spell)}
                    >
                        <h2 className="w-full text-center font-semibold pb-2 border-b border-amber-950">
                            {spell.name} { spell.bonus ? spell.bonus : null}
                        </h2>
                        <p className="p-3 italic text-sm text-wrap">
                            { spell.description }
                        </p>
                        <p className="font-bold">Daño: { spell.damage ? spell.damage : '-'}</p>
                        <div className="flex items-center justify-around w-full">
                            <p className="font-semibold">Tipo: { spell.type }</p>
                            <p className="font-semibold">Rango: { spell.range }</p>
                        </div>
                    </div>
                </li>
            )}
            </>
        }
    </ul>
  )
}