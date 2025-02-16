import { useEffect, useState } from 'react'

const getWidth = (element) => {
  return element ? element.offsetWidth : 0
}

const getHeight = (element) => {
  return element ? element.offsetHeight : 0
}

export const useSizeById = (id) => {
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)

  useEffect(() => {
    const element = document.getElementById(id)
    if (!element) return

    const getSize = () => {
      setWidth(getWidth(element))
      setHeight(getHeight(element))
    }

    getSize()

    window.addEventListener('resize', getSize)
    return () => window.removeEventListener('resize', getSize)
  }, [id])

  return {
    width,
    height
  }
}