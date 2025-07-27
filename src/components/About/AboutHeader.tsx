import { motion } from "framer-motion";

function AboutHeader() {
  return (
    <motion.div
      className="max-w-4xl mx-auto text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <h1 className="text-4xl font-bold mb-6">About Underground Scanner</h1>
      <p className="text-lg text-gray-300">
        We're building the future of underground exploration — no digging, no guessing, just data-driven clarity.
      </p>
    </motion.div>
  );
}

export default AboutHeader;
