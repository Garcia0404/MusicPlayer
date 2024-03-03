import { useContext } from "react"
import { Card } from "."
import { albums } from "../../../helper/music/albums"
import { contexto } from "../../../context/AppContext"
import { GeneralCard } from "./GeneralCard"
export const Main = () => {
  const { recent, setRecent } = useContext(contexto)

  function recents(){
  if(recent.length!==0){
    return(
    <section className='p-6 text-white grid gap-2 grid-cols-mainH'>
      <h2 className="text-xl font-semibold col-start-1 col-end-[-1]">Heard Recently</h2>
      {
        recent.map((song,index)=>(
          <GeneralCard key={index} {...song}/>
        ))
      }
    </section>
    )
  }}
  return (
    <main className='max-w-[700px] lg:max-w-full w-full mobile:mx-auto lg:mx-0 col-start-3 col-end-8 bg-secondary overflow-auto mobileLg:rounded-md'>
      <section className='bg-gradient-to-b from-[#545455] to-secondary to-80% text-white pt-10 px-4 pb-4 flex flex-col gap-3'>
        <h1 className='font-bold text-3xl'>Welcome !</h1>
        <main className="grid grid-cols-mainH gap-3">
          <Card song={albums[5].canciones[5]} listen={false}/>
          <Card song={albums[0].canciones[4]} listen={false} />
          <Card song={albums[1].canciones[2]} listen={false} />
          <Card song={albums[2].canciones[1]} listen={false} />
          <Card song={albums[4].canciones[3]} listen={false} />
          <Card song={albums[3].canciones[9]} listen={false} />
        </main>
      </section>
      {recents()}
    </main>
  )
}
