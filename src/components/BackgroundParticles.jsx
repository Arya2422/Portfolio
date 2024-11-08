import { motion } from "framer-motion";

const particles = Array.from({ length: 30 }).map((_, index) => ({
  id: index,
  x: Math.random() * window.innerWidth,
  y: Math.random() * window.innerHeight,
}));

const particleAnimation = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 4,
      ease: "easeInOut",
    },
  },
};

const BackgroundParticles = () => (
  <>
    {particles.map((particle) => (
      <motion.div
        key={particle.id}
        className="absolute rounded-full bg-white"
        style={{
          width: "10px",
          height: "10px",
          top: `${particle.y}px`,
          left: `${particle.x}px`,
        }}
        initial="hidden"
        animate="visible"
        variants={particleAnimation}
      />
    ))}
  </>
);

export default BackgroundParticles;
