import { motion } from "framer-motion";

function AboutMission() {
  return (
    <motion.div
      className="mt-24 max-w-3xl mx-auto text-center"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
      <p className="text-gray-300 leading-relaxed">
        We aim to revolutionize how people see what’s underground – whether it’s
        utility mapping, archaeological discovery, or construction planning.
      </p>
    </motion.div>
  );
}

export default AboutMission;
