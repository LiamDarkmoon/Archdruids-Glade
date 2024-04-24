'use client'
import { useState, useContext } from "react";
import { charactersContext, characterContextProps } from "@/lib/contexts/chractersContext";
import Button  from '../pure/Btn';
import { character } from "@/lib/Types";
import CardText from '../common/CardText';

const CharacterSheet = () => {
    const [showModal, setShowModal] = useState(false);
    const { char, show, setShow } = useContext(charactersContext) as characterContextProps;
    
    return (
        <>  
          {show ? (
            <>
              <div
                className="mx-auto justify-center items-center sm:w-2/3 w-screen h-screen flex fixed top-0 inset-0 z-50 outline-none focus:outline-none text-rose-950"
              >
                <div className="w-full my-6">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-amber-100 outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex text-center p-5 border-b border-solid border-rose-950 rounded-t">
                      <h3 className="text-3xl font-semibold">
                        { char.name }
                      </h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-rose-950 opacity-30 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShow(false)}
                        >
                        <span className="bg-transpare h-6 w-6 text-4xl block outline-none focus:outline-none">
                        ×
                        </span>
                     </button>
                    </div>
                    {/*body*/}
                    <div className="p-6 flex flex-col justify-center items-center gap-2">
                      <CardText className='font-semibold text-lg italic'>{ `Class: ${char.clas}` }</CardText>
                      <CardText className='font-semibold text-lg italic'>{ `Race: ${char.race}` }</CardText>
                      <CardText className='font-semibold text-lg italic'>{ `Background: ${char.background}` }</CardText>
                      <CardText className='font-semibold text-lg italic'>{ `Alignment: ${char.alignment}` }</CardText>
                      <CardText className='font-semibold text-lg italic'>{ `Stats: ${char.str} | ${char.dex} | ${char.con} | ${char.int} | ${char.wis} | ${char.cha}` }</CardText>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-30 fixed  w-screen h-screen top-0 left-0 inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </>
      );
}
export default CharacterSheet;