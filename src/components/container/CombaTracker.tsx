'use client'

import Encounter from "../pure/Encounter"
import PartyList from "../pure/PartyList"

export default function CombaTracker() {
  return (
    <section className="w-full m-w-screen sm:px-12 pb-12 mt-[100px] text-amber-950 flex flex-col">
      <div className="flex flex-col sm:flex-row flex-wrap gap-3">
        <Encounter/>
        <PartyList className="sm:w-auto p-5 border border-amber-100/50 bg-amber-100/60 glass rounded-lg shadow-md"/>
        <div className="w-full h-20 p-6 border border-amber-100/50 bg-amber-100/60 glass rounded-lg shadow-md">
        </div>
      </div>
    </section>
  )
}
