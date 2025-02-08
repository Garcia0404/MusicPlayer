import { useEffect, useState } from 'react'
export const useResponsiveAction = (callback=()=>{}) => {
  const [width, setWidth] = useState(window.innerWidth)
  useEffect(() => {
    callback(width)
  },[width])
  useEffect(() => {
    const handleResponsive = () => {
      setWidth(window.innerWidth)
    }
    window.addEventListener('resize',handleResponsive)
    return () => window.removeEventListener('resize',handleResponsive)
  },[])
  return {
    width
  }
}
