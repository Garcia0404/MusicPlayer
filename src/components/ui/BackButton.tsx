import { useNavigate } from "react-router-dom"

export const BackButton = ({callback=()=>{}}:{callback:()=>void}) => {
  const navigate = useNavigate()
  const handleClick = () => {
    callback()
    navigate(-1)
  }
  return (
    <svg className="size-6 stroke-white absolute top-0 left-0 m-4 cursor-pointer z-20" onClick={handleClick} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
    </svg>
  )
}
