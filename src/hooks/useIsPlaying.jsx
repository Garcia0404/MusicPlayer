import { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";

export const useIsPlaying = (name) => {
  const { music,play } = useAppContext()
  const [isPlaying, setIsPlaying] = useState(false)
  useEffect(() => {
    if (name == music.name && play) setIsPlaying(true)
    else setIsPlaying(false)
  }, [music,play])
  return {
    isPlaying
  }
}
