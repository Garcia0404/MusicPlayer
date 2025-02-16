import { useAppContext } from "../../context/AppContext"
import {AudioVisualizer} from "../../components/ui/AudioVisualizer"
const TableHeader = () => {
  return (
    <header className="flex justify-between font-bold border-white9 text-white9 lg:px-9 pt-2 pb-4 gap-5 px-2 mobile:px-4 lg:gap-8 xl:px-16 border-b">
      <div className="w-6 text-center">#</div>
      <div className="flex-1">Title</div>
      <div className="max-mobileLg:hidden w-20 sm:w-32 xl:w-40 text-start">Artist</div>
      <div className="grid place-content-center w-8">
        <svg className="size-5" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"></path></svg>
      </div>
    </header>
  )
}
const TableBody = ({ items }) => {
  const { music,play } = useAppContext()
  return (
    <ul className="grid">
      {
        items.map((item, index) => (
          <li key={item.key} onClick={item.handleClick} className="flex justify-between items-center gap-5 lg:gap-8 hover:bg-grayMain cursor-pointer active:scale-[0.98] hover:scale-[1.015] transition-all px-2 mobile:px-4 lg:px-9 xl:px-16 py-2">
            <div className="text-white9 w-6 relative text-center">{(music.name==item.name)&&play?<AudioVisualizer/>:index + 1}</div>
            <div className="flex-1 text-white">{item.name}</div>
            <div className="max-mobileLg:hidden text-white9 w-20 sm:w-32 xl:w-40 whitespace-nowrap">{item.artist}</div>
            <div className="w-8 text-center text-white9">{item.duration}</div>
          </li>
        ))
      }
    </ul>
  )
}
export const Table = ({ items }) => {
  return (
    <section className='w-full h-full overflow-hidden'>
      <TableHeader />
      <TableBody items={items} />
    </section>
  )
}
