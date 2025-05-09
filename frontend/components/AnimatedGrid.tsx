"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"
import styles from "./AnimationGrid.module.css"

type AnimatedGridProps<T> = {
  items: T[]
  renderItem: (item: T) => ReactNode
}

export function AnimatedGrid<T>({ items, renderItem }: AnimatedGridProps<T>) {
  const containerVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  }

  return (
    <motion.section
      className={styles.gridContainer}
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <motion.div className={styles.grid} variants={containerVariants}>
        {items.map((item, index) => (
          <motion.div key={index} variants={cardVariants}>
            {renderItem(item)}
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}
