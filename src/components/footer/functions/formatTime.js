export function formatTime(time) {
  const seconds = Math.floor(time % 60)
  const minutes = Math.floor(time / 60)
  const cero = (seconds < 10) ? 0 : ''
  const timeCorrect = minutes + ':' + cero + seconds
  return timeCorrect
}