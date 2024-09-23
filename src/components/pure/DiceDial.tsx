import { useContext } from 'react';
import { DiceContext, DiceContextType } from '@/lib/contexts/DiceContext';

export default function DiceDial() {
    const diceContext = useContext(DiceContext);

    if (!diceContext) {
        throw new Error('useDiceContext must be used within a DiceProvider');
    }

    // States
    const { hidden, setHidden } = diceContext as DiceContextType;

  return (
    <button 
        className="hidden sm:grid fixed right-5 bottom-8 h-12 w-12 place-items-center bg-amber-950 border border-amber-50 rounded-full"
        onClick={() => setHidden(!hidden)}
    >
      <svg width="32" height="32" viewBox="0 0 13.951 16"><path d="M13.93,8c0,1.247-.01,2.484,0,3.731a.448.448,0,0,1-.261.454q-3.233,1.854-6.446,3.73a.435.435,0,0,1-.522,0Q3.527,14.071.353,12.238A.638.638,0,0,1,0,11.61C.015,9.174.015,6.73,0,4.3a.5.5,0,0,1,.29-.5C2.459,2.555,4.6,1.318,6.749.072a.435.435,0,0,1,.493.009Q10.461,1.952,13.688,3.8a.469.469,0,0,1,.261.464C13.93,5.5,13.93,6.749,13.93,8ZM6.981,3.676C5.682,6.015,4.4,8.285,3.107,10.585h7.75ZM7.368,3.5,11.2,10.321c.764-2.068,1.488-4.039,2.242-6.059ZM.527,4.265c.743,2.03,1.478,4,2.232,6.059L6.585,3.511Zm10.224,6.8H3.2c1.276,1.488,2.523,2.937,3.769,4.406ZM7.194,3.048l5.325.666.029-.067L7.2.555ZM6.749.565,1.415,3.647l.039.067,5.3-.666ZM13.5,11.571V5.483l-.058-.009c-.642,1.739-1.29,3.478-1.941,5.247ZM.517,5.493l-.048.019v6.05l1.971-.851Zm7.576,9.335.039.048,5.1-2.957c-.619-.261-1.149-.483-1.671-.725a.349.349,0,0,0-.481.111l0,.005c-.444.542-.908,1.064-1.362,1.6-.532.647-1.073,1.285-1.624,1.923ZM5.8,14.876l.049-.048-3.074-3.6a.24.24,0,0,0-.2-.087c-.609.251-1.2.512-1.856.793Z" fill="white"/></svg>
    </button>
  )
}
