import { motion } from "framer-motion"
export const LoadingHomepage = () => {
  return (
    <div className="overflow-hidden grid place-content-center w-full h-screen">
      <div className="flex gap-2">
        <motion.div
          transition={{ duration: 0.9, repeat: Infinity, delay: 0.1, ease: "easeInOut" }}
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
          className="size-5 bg-white rounded-full"></motion.div>
        <motion.div
          transition={{ duration: 0.9, repeat: Infinity, delay: 0.2, ease: "easeInOut" }}
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
          className="size-5 bg-white rounded-full"></motion.div>
        <motion.div
          transition={{ duration: 0.9, repeat: Infinity, delay: 0.3, ease: "easeInOut" }}
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
          className="size-5 bg-white rounded-full"></motion.div>
        <motion.div
          transition={{ duration: 0.9, repeat: Infinity, delay: 0.4, ease: "easeInOut" }}
          animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
          className="size-5 bg-white rounded-full"></motion.div>
      </div>
    </div>
  )
}
