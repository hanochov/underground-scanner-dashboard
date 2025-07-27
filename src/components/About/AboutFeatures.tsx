import { motion } from "framer-motion";

const features = [
  {
    title: "Sensor Fusion",
    desc: "Combining multiple sensors for unmatched accuracy.",
  },
  {
    title: "3D Visualization",
    desc: "View underground data in stunning 3D clarity.",
  },
  {
    title: "Real-Time Updates",
    desc: "Get live scanning feedback as it happens.",
  },
];

function AboutFeatures() {
  return (
    <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      {features.map((item) => (
        <motion.div
          key={item.title}
          className="bg-blue-800/40 rounded-xl p-6 backdrop-blur-sm hover:scale-105 transition transform"
      
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
          <p className="text-gray-300">{item.desc}</p>
        </motion.div>
      ))}
    </div>
  );
}

export default AboutFeatures;
