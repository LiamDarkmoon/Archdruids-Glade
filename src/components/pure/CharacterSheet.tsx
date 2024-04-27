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
                className="mx-auto  overflow-auto no-scrollbar flex fixed top-0 bottom-0 z-50 text-rose-50"
              >
                <CSheetViewer/>
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