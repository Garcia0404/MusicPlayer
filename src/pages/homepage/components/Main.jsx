import { Card } from "."
import { albums } from "../../../helper/music/albums"
export const Main = () => {

  return (
    <main className='max-w-[700px] lg:max-w-full w-full mobile:mx-auto lg:mx-0 col-start-3 col-end-8 bg-secondary overflow-auto mobileLg:rounded-md'>
      <section className='bg-gradient-to-b from-[#545455] to-secondary to-80% text-white pt-10 px-4 pb-4 flex flex-col gap-3'>
        <h1 className='font-medium text-3xl'>Welcome !</h1>
        <main className="grid grid-cols-mainH gap-3">
          <Card {...albums[5].canciones[5]} />
          <Card {...albums[0].canciones[4]} />
          <Card {...albums[1].canciones[2]} />
          <Card {...albums[2].canciones[1]} />
          <Card {...albums[4].canciones[3]} />
          <Card {...albums[3].canciones[9]} />
        </main>
      </section>
      <section className='p-6 text-white'>
      </section>
    </main>
  )
}
