import { useContext } from "react"
import { Card } from "."
import { contexto } from "../../../context/AppContext"
import { GeneralCard } from "."
export const Main = () => {
  const { recent, data } = useContext(contexto)
  const songs = [
    [5, 5],
    [0, 4],
    [1, 2],
    [2, 1],
    [4, 3],
    [3, 9]
  ]
  return (
    <main className='max-w-[700px] lg:max-w-full w-full mobile:mx-auto lg:mx-0 col-start-3 col-end-8 bg-secondary overflow-auto tablet:rounded-md'>
      <section className='bg-gradient-to-b from-[#545455] to-secondary to-80% text-white pt-10 px-4 pb-4 flex flex-col gap-3'>
        <h1 className='font-bold text-3xl mb-3'>Welcome !</h1>
        <main className="grid grid-cols-2 mobileLg:grid-cols-mainH gap-3">
          {
            songs.map((song, index) => (
              <Card song={data[song[0]].canciones[song[1]]} key={index} />
            ))
          }
        </main>
      </section>
      <section className='p-4 text-white grid gap-2'>
        <h2 className="text-xl font-semibold col-start-1 col-end-[-1]">Heard Recently</h2>
        <ul className="grid gap-2 grid-cols-1 mobileLg:grid-cols-mainH">
          {recent.length !== 0 && recent.map((song, index) => (
            <GeneralCard key={`song-${song.name}`} music={song} id="home"/>
          ))
          }
        </ul>
      </section>
    </main>
  )
}
