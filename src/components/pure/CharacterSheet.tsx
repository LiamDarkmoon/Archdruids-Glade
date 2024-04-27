'use client'
import { useContext } from "react";
import { charactersContext, characterContextProps } from "@/lib/contexts/chractersContext";
import CSheetViewer from "./PDFViewer";

const CharacterSheet = () => {
    const { char, show, setShow } = useContext(charactersContext) as characterContextProps;
    
    return (
        <>  
          {show ? (
            <>
              <div
                className="mx-auto justify-center items-center sm:w-1/2 w-screen h-full overflow-auto no-scrollbar flex fixed top-0 bottom-0 inset-0 z-50 outline-none focus:outline-none text-rose-50"
              >
                <div className="w-full">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col items-center pt-32 pb-2 outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex text-center p-5 border-b border-solid border-rose-950 rounded-t">
                      <h3 className="text-3xl font-semibold">
                        { char.name }
                      </h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 opacity-30 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShow(false)}
                        >
                        <span className="bg-transpare h-6 w-6 text-4xl block outline-none focus:outline-none">
                        ×
                        </span>
                     </button>
                    </div>
                    {/*body*/}
                    <CSheetViewer character={ char }/>
                  </div>
                </div>
              </div>
              <div 
                className="opacity-40 fixed  w-screen h-screen top-0 left-0 inset-0 z-40 bg-black"
                onClick={() => setShow(false)}
              ></div>
            </>
          ) : null}
        </>
      );
}
export default CharacterSheet;