const easing = [0.22, 1, 0.36, 1] as const

export const fadeInUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: {
    opacity: 1,
    y: 0,
    transition: { delay, duration: 0.7, ease: easing },
  },
  viewport: { once: true, amount: 0.2 },
})

export const fadeInFromRight = (delay = 0) => ({
  initial: { opacity: 0, x: 50 },
  whileInView: {
    opacity: 1,
    x: 0,
    transition: { delay, duration: 0.7, ease: easing },
  },
  viewport: { once: true, amount: 0.3 },
})

export const cardHover = {
  whileHover: { y: -6, scale: 1.01 },
  whileTap: { scale: 0.99 },
}

export const staggeredContainer = (delayChildren = 0.2, staggerChildren = 0.08) => ({
  initial: 'hidden',
  animate: 'visible',
  variants: {
    hidden: {},
    visible: {
      transition: { delayChildren, staggerChildren },
    },
  },
})
