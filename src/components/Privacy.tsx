import { motion } from "framer-motion";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-[#1E1B45] text-[#E0E0E0] px-6 py-12">
      {/* Heading Section */}
      <motion.h1
        className="text-4xl font-bold text-center mb-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Privacy Policy
      </motion.h1>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Introduction Text */}
        <motion.p
          className="text-lg leading-relaxed"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          Welcome to AuraFlix! We value your privacy and are committed to
          protecting your personal information. This Privacy Policy outlines
          how we collect, use, and safeguard your data while using our services.
        </motion.p>

        {/* Sections */}
        <motion.div
          className="space-y-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <section>
            <motion.h2
              className="text-2xl font-semibold mb-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              Information We Collect
            </motion.h2>
            <motion.p
              className="text-lg leading-relaxed"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              We collect personal data such as name, email address, and usage
              information through your interactions with our platform. This
              information helps us provide a personalized and seamless experience.
            </motion.p>
          </section>

          <section>
            <motion.h2
              className="text-2xl font-semibold mb-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              How We Use Your Data
            </motion.h2>
            <motion.p
              className="text-lg leading-relaxed"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              Your information is used to improve our services, provide content
              recommendations, and enhance your overall experience. We do not
              share your personal data with third parties without your consent.
            </motion.p>
          </section>

          <section>
            <motion.h2
              className="text-2xl font-semibold mb-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              Data Security
            </motion.h2>
            <motion.p
              className="text-lg leading-relaxed"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
            >
              We employ industry-standard security measures to protect your
              data. However, no method of transmission over the internet or
              electronic storage is 100% secure, so we cannot guarantee absolute
              security.
            </motion.p>
          </section>

          <section>
            <motion.h2
              className="text-2xl font-semibold mb-4"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              Your Rights
            </motion.h2>
            <motion.p
              className="text-lg leading-relaxed"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              You have the right to access, correct, or delete your personal
              data. If you wish to exercise any of these rights, please contact
              us.
            </motion.p>
          </section>

          {/* Conclusion */}
          <motion.p
            className="text-lg leading-relaxed"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.4 }}
          >
            Thank you for trusting AuraFlix with your personal information. We
            are committed to keeping your data secure and will continue to
            update this Privacy Policy as necessary.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}
