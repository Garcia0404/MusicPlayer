import { useContext, useEffect, useState } from "react"
import { Card } from "."
import { albums } from "../../../helper/music/albums"
import { contexto } from "../../../context/AppContext"
import { GeneralCard, CardLoading } from "."
export const Main = () => {
  const { recent } = useContext(contexto)
  const [allLoaded, setAllLoaded] = useState(false)
  const songs = [
    [5, 5],
    [0, 4],
    [1, 2],
    [2, 1],
    [4, 3],
    [3, 9]
  ]
  const [loaded, setLoaded] = useState(Array(songs.length).fill(false))
  const handleLoad = (index) => {
    setLoaded(prevLoad => {
      const newLoad = [...prevLoad]
      newLoad[index] = true
      return newLoad
    })
  }
  useEffect(() => {
    if (loaded.every((load) => load === true)) {
      setAllLoaded(true)
    }
  }, [loaded])
  return (
    <main className='max-w-[700px] lg:max-w-full w-full mobile:mx-auto lg:mx-0 col-start-3 col-end-8 bg-secondary overflow-auto tablet:rounded-md'>
      <section className='bg-gradient-to-b from-[#545455] to-secondary to-80% text-white pt-10 px-6 pb-4 flex flex-col gap-3'>
        <h1 className='font-bold text-3xl mb-3'>Welcome !</h1>
        <main className="grid grid-cols-2 mobileLg:grid-cols-mainH gap-3">
          {
            allLoaded ?
              songs.map((song, index) => (
                <Card song={albums[song[0]].canciones[song[1]]} key={index} listen={false} />
              )) :
              songs.map((song, index) => (
                <CardLoading loading={true} key={index}/>
              ))
          }
          <div className="hidden">
            {
              songs.map((song, index) => (
                <img onLoad={() => handleLoad(index)} key={index} src={albums[song[0]].image} alt={albums[song[0].nombre]} />
              ))
            }
          </div>
        </main>
      </section>
      <section className='p-6 text-white grid gap-2 mobileLg:grid-cols-mainH'>
        <h2 className="text-xl font-semibold col-start-1 col-end-[-1]">Heard Recently</h2>
        {recent.length !== 0 && recent.map((song, index) => (
          <GeneralCard key={index} music={song} />
        )) 
        }
      </section>
    </main>
  )
}
