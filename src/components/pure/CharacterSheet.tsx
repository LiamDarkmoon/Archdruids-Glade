import { useState } from "react";
import Button  from '../pure/Btn';
import { character } from "@/lib/Types";


const CharacterSheet = ({ character } : { character: character}) => {
    const [showModal, setShowModal] = useState(false);
    
    return (
        <>
           <Button 
                click={ () => setShowModal(true) }
                className="align-self-center mt-6"
            >
                View More
            </Button>
            
          {showModal ? (
            <>
              <div
                className="justify-center items-center w-screen h-screen flex fixed -top-full inset-0 z-50 outline-none focus:outline-none"
              >
                <div className="w-full my-6">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-amber-100 outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-rose-950 rounded-t">
                      <h3 className="text-3xl font-semibold">
                        { character.name }
                      </h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-rose-950 opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                        >
                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                        ×
                        </span>
                     </button>
                    </div>
                    {/*body*/}
                    <div className="p-6 flex-auto">
                      <p className="my-4 text-blueGray-500 text-lg leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut commodi facere voluptates omnis, voluptatum eaque, mollitia rerum unde magnam ipsa fuga odit harum nobis? Mollitia illo iste sint laudantium molestias.loremlorem.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed  w-screen h-screen top-0 left-0 inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </>
      );
}
export default CharacterSheet;