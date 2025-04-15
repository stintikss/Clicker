export const HEADER_IN_ANIMATION = (index: number) => ({
    initial: { opacity: 0, y: -100}, 
    animate: { opacity: 1, y: 0},
    transition: { duration: 0, delay: index * 2 } //ЗАМЕНИТЬ НА 2
})

export const MODAL_BACKGROUND_ANIMATION = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.3 }
  };
  
export const MODAL_CONTENT_ANIMATION = {
initial: { opacity: 0, y: 20 },
animate: { opacity: 1, y: 0 },
exit: { opacity: 0, y: 20 },
transition: { 
    type: 'spring',
    stiffness: 300,
    damping: 20,
    duration: 0.3
}
};

export const ELEMENTS_MODAL_ANIMATION = (index: number) => ({
    initial: { opacity: 0, y: 100 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeOut", delay: index * 0.5 }
  })