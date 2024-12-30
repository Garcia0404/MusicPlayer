import useSWR from "swr"

const fetcher = (url: string) => fetch(url).then((res) => res.blob())
export const useCachedImage = (src: string) => {
  const { data, error } = useSWR(src, fetcher, {
    revalidateOnFocus: false,
    dedupingInterval: 60000
  })
  if (error) return { src: null, loading: false, error: true }
  if (!data) return { src: null, loading: true, error: false }
  const imageUrl = URL.createObjectURL(data)
  return { src: imageUrl, loading: false, error: false }
}
