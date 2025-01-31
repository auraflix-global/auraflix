import { motion } from 'framer-motion';
import { FaPlayCircle, FaEnvelope, FaLock, FaUserFriends } from 'react-icons/fa';

const features = [
  { icon: <FaPlayCircle size={40} />, title: 'Seamless Streaming', description: 'Enjoy high-quality streaming with zero buffering.' },
  { icon: <FaEnvelope size={40} />, title: 'Request Any Movie', description: 'Send us a movie request by name and year, and we’ll add it for you!' },
  { icon: <FaLock size={40} />, title: 'Secure & Private', description: 'Your data is safe with our top-notch security protocols.' },
  { icon: <FaUserFriends size={40} />, title: 'User-Friendly UI', description: 'Experience an intuitive and easy-to-use interface.' }
];

export default function FeaturesSection() {
  return (
    <div className="bg-[#25274D] py-12 text-[#E0E0E0]">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-[#E0E0E0] mb-6">Key Features</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-[#1E1B45] p-6 rounded-2xl shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="text-[#00E6FF] mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-[#D1C4E9]">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
