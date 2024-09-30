'use client'
import usePlayer from "@/lib/hooks/usePlayer"
import Button from './Btn'
import { useState } from "react"

export default function InitiativeCount({ setShow, i }: { setShow: (show: boolean) => void, i: number }) {
  const { handleInit, handleInitiativeCount } = usePlayer()
  const [done, setDone] = useState(false)
  
  
  return (
    <form 
    className='w-full flex items-center justify-center gap-2'
    onSubmit={(e) => {handleInitiativeCount(e, i), setShow(false)}}
    >
      <label htmlFor="initiative" className='font-semibold text-medium'>Nueva Iniciativa</label>
      <input
       type="number" 
       id="initiative" 
       name="initiative" 
       min= { 0 } 
       max= { 35 }
       className='rounded-sm border border-amber-950 text-center focus:border-amber-950 focus:outline-none focus:ring-1 focus:ring-rose-950'
       autoFocus
       onChange={(e) => handleInit(e, i)}
      />
      <Button>
        Hecho
      </Button>
    </form>
  )
}
