'use client'

import Encounter from "../pure/Encounter"
import PartyList from "../pure/PartyList"

export default function CombaTracker() {
  return (
    <section className="h-[100vh] w-full px-12 mt-[100px] text-amber-950 flex flex-col text-center">
      <div className="flex flex-col sm:flex-row flex-wrap gap-5">
        <Encounter/>
        <PartyList className="sm:w-auto p-6 border border-amber-100/30 bg-amber-100/40 glass rounded-lg shadow-md"/>
        <form className="w-full h-14 p-6 border border-amber-100/30 bg-amber-100/40 glass rounded-lg shadow-md">
        </form>
      </div>
    </section>
  )
}
