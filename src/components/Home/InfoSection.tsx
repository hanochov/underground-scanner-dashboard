import { motion } from "framer-motion";

function InfoSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <motion.div
        className="max-w-3xl mx-auto text-center"
        initial={{ opacity: 0, y: 100, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.4 }}
      >
        <motion.h2
          className="text-3xl font-semibold text-gray-800 mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          Real-Time Underground Intelligence
        </motion.h2>
        <motion.p
          className="text-gray-600"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Our systems deliver live, geospatial data for smarter, safer decisions – without breaking ground.
        </motion.p>
      </motion.div>
    </section>
  );
}

export default InfoSection;
