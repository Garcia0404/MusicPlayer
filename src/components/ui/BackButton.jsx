import { useNavigate } from "react-router-dom"

export const BackButton = ({ callback = () => { },to=-1 }) => {
  const navigate = useNavigate()
  const handleClick = () => {
    callback()
    navigate(to)
  }
  return (
    <svg className="size-5 stroke-white absolute top-0 left-0 m-4 cursor-pointer z-20" onClick={handleClick} fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
    </svg>
  )
}
