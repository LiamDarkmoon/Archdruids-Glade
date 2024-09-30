import useTurn from "@/lib/hooks/useTurn";
import Actions from "./Actions";
import BonusActions from "./BonusActions";
import Button from "./Btn";

export default function ActionsDeck() {
    const { actionState, dispatch, actions,taken, handleNextTurn, handleRound } = useTurn();
    const notTaken = `flex flex-col items-center justify-center rounded-md p-2 bg-amber-200/50 hover:bg-amber-200/80 hover:scale-1.2 hover:cursor-pointer transition-all duration-200`
    const yetTaken = `flex flex-col items-center justify-center rounded-md p-2 bg-amber-400/50`
    
  return (
    <>
    {
        actionState === 'next' ?
        <Button
        click={() => handleNextTurn()}
        >
            Proximo Jugador
        </Button> 
        :
        actionState === 'next round' ? 
        <Button
        click={handleRound}
        >
            Proxima Ronda
        </Button>
        :
        actionState === '' ?
        <ul
        className="flex flex-col gap-2"
        > 
            {
                actions.map((action, i)=> 
                    <li
                key={i}
                className={ taken[i] ? yetTaken : notTaken }
                onClick={() => {dispatch(taken[i] ? '' : action),console.log(actionState) }}
                >
                    { taken[i] ? '¡Hecho!' : action }
                </li>
            )}
        </ul>
        :
        actionState === 'action' && !taken[0] ? <Actions/> : 
        actionState === 'bonus action' && !taken[1] ? <BonusActions/> 
        :
        <p className="w-full text-center text-2xl p-3">¡UPS!</p>
    }
    </>
  )
}
