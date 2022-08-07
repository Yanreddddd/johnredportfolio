export const hoverVariants = {
    whileInView: { opacity: 1 },
    whileHover: {
      scale: 1.1,
      transition: {
        duration: 0.5,
        type: "tween",
      },
    },
  };
  
  export const scaleVariants = {
    whileInView: {
      scale: [0, 1],
      opacity: [0, 1],
      transition: {
        duration: 1,
        delay: 1,
        ease: "easeInOut",
      },
    },
  };
  
  export const profileVariants = {
    whileInView: {
      y: [300, 0],
      scale: [0, 1],
      opacity: [0, 1],
      transition: { 
        duration: 1, 
      },
    },
  };