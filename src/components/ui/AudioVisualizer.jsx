import React from 'react'
import { motion } from 'framer-motion'
export const AudioVisualizer = () => {
  return (
    <div className='flex justify-center gap-0.5 w-full items-center absolute left-0 right-0 top-0 bottom-0'>
      <motion.div className="w-0.5 bg-greenMain rounded-sm" initial={{ height: 7 }} animate={{ height: [7, 14, 7] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0 }}></motion.div>
      <motion.div className="w-0.5 bg-greenMain rounded-sm" initial={{ height: 10 }} animate={{ height: [10, 20, 10] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0.3 }}></motion.div>
      <motion.div className="w-0.5 bg-greenMain rounded-sm" initial={{ height: 10 }} animate={{ height: [10, 20, 10] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0.3 }}></motion.div>
      <motion.div className="w-0.5 bg-greenMain rounded-sm" initial={{ height: 7 }} animate={{ height: [7, 14, 7] }} transition={{ repeat: Infinity, duration: 0.8, delay: 0 }}></motion.div>
    </div>
  )
}
