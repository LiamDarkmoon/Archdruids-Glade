
import useTurn from "@/lib/hooks/useTurn";
import ActionsDeck from "./Actions";

export default function Attacks() {
    const { player, handleAttack } = useTurn();
    
  return (
    <ul
    className="flex flex-col gap-2"
    >
        {
            player &&
            player.actions.action.taken ?
            <ActionsDeck/> :
            <>
            {
                player.attacks.map((attack, i) =>
                <li
                key={i}
                >
                    <div 
                    className="flex flex-col items-center justify-center bg-amber-200/50 rounded-md p-2 gap-1 hover:bg-amber-200/80 hover:scale-1.2 hover:cursor-pointer transition-all duration-200"
                    onClick={() => handleAttack(attack)}
                    >
                        <h2 className="w-full text-center font-semibold pb-2 border-b border-amber-950">
                            {attack.name} {attack.bonus}
                        </h2>
                        <p className=" p-3 italic text-sm">
                            { attack.description }
                        </p>
                        <p className="font-bold">Daño: { attack.damage }</p>
                        <div className="flex items-center justify-around w-full">
                            <p className="font-semibold">Tipo: { attack.type }</p>
                            <p className="font-semibold">Rango: { attack.range }</p>
                        </div>
                    </div>
                </li>
            )}
            </>
        }
    </ul>
  )
}
