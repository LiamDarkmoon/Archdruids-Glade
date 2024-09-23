import React from 'react'

export default function Encounter() {
  return (
    <div className="sm:w-[70%] flex flex-wrap items-start p-6 border border-amber-100/30 bg-amber-100/40 glass rounded-lg shadow-md">
        <div className="sm:w-1/2 flex flex-col p-3 border-e border-amber-950 text-sm">
            <h2 className="text-2xl font-bold mb-1">Cydrat, El Terror Rugiente</h2>
            <h3 className="text-sm font-bold italic mb-4">Dragon Colosal, Legal Malvado (30 pies x 60 pies)</h3>
            <div className="w-full flex flex-col gap-2 py-3 border-y border-amber-950">
                <p><span className="font-bold">Clase de Armadura:</span> 22(Armadura Natural)</p>
                <p><span className="font-bold">Puntos de Golpe:</span> 500(26d20 + 220)</p>
                <p><span className="font-bold">Velocidad:</span> 40 pies, Excabado 40 píes, Vuelo 80 pies</p>
            </div>
            <div className="w-full flex flex-col gap-3 py-3 border-b border-amber-950">
                <ul className="flex justify-center text-center font-semibold gap-2 pb-3 border-b border-amber-950">
                    <li>STR: <br/>30 (+10)</li>
                    <li>DEX: <br/>10 (+0)</li>
                    <li>CON: <br/>28 (+9)</li>
                    <li>INT: <br/>18 (+4)</li>
                    <li>WIS: <br/>18 (+4)</li>
                    <li>CHA: <br/>20 (+5)</li>
                </ul>
                <ul className="flex flex-col gap-2">
                    <li className=""><span className="font-bold">Salvaciones:</span> DEX +7, CON +16, WIS +11, CHA +12</li>
                    <li className=""><span className="font-bold">Habilidades:</span> Percepcion +18, Sigilo +7</li>
                    <li className=""><span className="font-bold">Inmunidades:</span> Rayo</li>
                    <li className=""><span className="font-bold">Sentidos:</span> Vista ciega 60 pies., Vision en la oscuridad 120 pies., Persepcion Pasiva 28</li>
                    <li className=""><span className="font-bold">Idiomas:</span> Comun, Draconico</li>
                    <li className=""><span className="font-bold">Mod de Competencia:</span> +7 </li>
                </ul>
            </div>
            <p className="py-3"><span className="font-bold">Resistencia Legendaria (3/dia):</span> Si Cyrdrat falla una tirada de salvacion puede elegir superarla.</p>
        </div>
        <div className="sm:w-1/2 flex flex-col gap-3 p-4 text-sm">
            <h4 className="text-2xl font-semibold pb-3 border-b border-amber-950">Acciones</h4>
            <p className='font-medium'><span className="font-bold">Ataque Multiple:</span> Cydrat puede usar su precensia atemorisante. Seguido realizar 3 ataques, uno con su mordida y dos con sus garras</p>
            <p className='font-medium'><span className="font-bold">Mordida:</span> <span className="italic">ataque cuerpo a cuerpo</span> +17, alcance 15 pies, 2d10 +10 daño penetrante mas 2d10 daño de rayo</p>
            <p className='font-medium'><span className="font-bold">Garra:</span> <span className="italic">ataque cuerpo a cuerpo</span> +17, alcance 10 pies, 2d6 +10 daño cortante</p>
            <p className='font-medium'><span className="font-bold">Coletazo:</span> <span className="italic">ataque cuerpo a cuerpo</span> +17, alcance 20 pies, 2d8 +10 daño contundente</p>
            <p><span className="font-bold">Presencia Atemorizante:</span> Las criaturas elegidas por Cydrat en un radio de 120 pies que puedan verlo deben realizar una salvacion de sabiduria CD 20 o quedar aterradas por 1 minuto. Una criatura puede repetir la tirada al final cada turno. Si la criatura supera la salvacion o el efecto termina, Esa criatura es inmune a la presencia del dragon por 24 horas. </p>
            <p><span className="font-bold">Aliento de Rayo (Recarga 5-6):</span> Cydrat exhala rayos en una linea de 120 pies y 10 pies de ancho. Las criaturas alcanzadas deben superar una salvacion de Destreza CD 23, recibiendo 16d10 daño de rayo si fallan o la mitad si la superan </p>
        </div>
        <div className="w-full flex flex-col gap-3 p-4 text-sm">
            <h4 className="text-2xl font-semibold pb-3 border-b border-amber-950">Acciones Legendarias</h4>
            <p className='font-medium italic pb-2'> Cydrat puede realizar tr pb-2es acciones legendarias, elegidas entre las opciones a continuacion. Solo una de estas puede ser usada a la vez y al final del turno de otra criatura. El dragon recupera estas acciones al principio de su turno</p>
            <p className='font-medium'><span className="font-bold">Detectar:</span> Cydrat realiza una tirada de Percepcion</p>
            <p className='font-medium'><span className="font-bold">Coletazo:</span> Cydrat ataca con su cola</p>
            <p><span className="font-bold">Ataque de Ala:</span> Cydrat bate sus alas con fuerza. cada criatura dentro de un radio de 15 pies del dragon debe superar una salvacion de Destreza o recibir 2d6 + 10 de daño contundente y caer al suelo. Luego el dragon se eleva en el aire la mitad de su velocidad</p>
        </div>
        <div className="w-full flex flex-col gap-3 p-4 text-sm">
            <h4 className="text-2xl font-semibold pb-3 border-b border-amber-950">Acciones de Dominio</h4>
            <p className='font-medium italic pb-2'>Como primer accion en orden de inisiativa Cydrat causa alguno de los siguiente efectos dentro de su dominio; el dragon no puede causar el mismo efecto dos rondas consecutivas</p>
            <p className='font-medium'><span className="font-bold">Derrumbar:</span> El techo colapsa sobre una criatura que el dragon pueda ver dentro de 120 pies. La criatura debe superar una salvacion de Destreza o sufrir 3d6 de daño contundente y caer al suelo siendo enterrada, la criatura queda atrapada incapacitada de respirar o levantarse, puede usar su accion para superar una salvacion de fuerza CD 10 para liberarce. </p>
            <p className='font-medium'><span className="font-bold">Tormenta de Arena:</span> Una nube de arena comienza a girar en una esfera de 20 pies de radio en un punto que el dragon pueda ver a 120 pies de el. La nube se propaga por las esquinas. Cada criatura en la nube debe superar una salvacion de Constitucion o quedar ensegecida durante 1 minuto. Una criatura puede repetir la salvacion al final de cada turno, Finalizando el efecto al superarla</p>
            <p><span className="font-bold">Rayos:</span> Rayos rebotan formando una linea de 5 pies de ancho entre dos superficies solidas del dominio que el dragon pueda ver dentro de 120 pies. Cada criatura dentro de esa linea debe superar una salvacion de Destreza o recibir 3d6 de daño de rayo</p>
        </div>
    </div>
  )
}
