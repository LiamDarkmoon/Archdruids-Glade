import { useState } from 'react'
import { Reorder } from "framer-motion"

export default function ActionsDeck() {
    const [order, setOrder] = useState([0, 1, 2, 3, 4]);
    const actions = [
        'Atacar',
        'Hechizo',
        'Correr',
        'Defender',
        'Retirarse'
    ]

  return (
    <Reorder.Group
    values={order}
    onReorder={setOrder}
    className="flex flex-col gap-2"
    >
        {
        order.map((item)=> 
            <Reorder.Item
            key={item}
            value={item}
            >
                <div className="flex items-center justify-center bg-amber-200/50 rounded-md p-3">
                { actions[item] }
                </div>
            </Reorder.Item>
        )}
    </Reorder.Group>
  )
}
