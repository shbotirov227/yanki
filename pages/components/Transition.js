import { motion, AnimatePresence } from 'framer-motion';

const variants = {
    in: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        delay: 0.5
      }
    }
  };

const Transition = ({ children }) => {
  return (
		<div className="effect-1">
			<AnimatePresence
	      initial={false}
	      exitBeforeEnter
	    >
	      <motion.div
            variants={variants}
            animate="in"
            initial="out"
            exit="out"
          >
	        {children}
	      </motion.div>
	    </AnimatePresence>
		</div>
	);
};

export default Transition;