import { useEffect } from "react"
import { useAppContext } from "../context/AppContext"
export const useAddToRecents = () => {
  const { music, recent, setRecent } = useAppContext()
  useEffect(() => {
    if (localStorage.getItem('recents')) {
      const updateRecent = JSON.parse(localStorage.getItem('recents'))
      setRecent(updateRecent)
    }
  }, [])
  useEffect(() => {
    if (music.name) {
      if (recent.length > 0) {
        const index = recent.findIndex((song) => song.name == music.name);
        if (index !== -1) {
          recent.splice(index, 1)
        }
      }
      const updatedRecent = [music, ...recent]
      if (recent.length < 20) {
        setRecent(updatedRecent)
        localStorage.setItem('recents', JSON.stringify(updatedRecent))
      } else if (recent.length === 20) {
        updatedRecent.pop()
        setRecent(updatedRecent)
        localStorage.setItem('recents', JSON.stringify(updatedRecent))
      }
    }
  }, [music])
}