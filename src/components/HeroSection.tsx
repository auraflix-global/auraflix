import { motion } from "framer-motion";
import { IoIosArrowDown } from "react-icons/io";

export default function HeroSection() {
  return (
    <div className="grid text-[#E0E0E0] grid-cols-1 grid-rows-3 md:grid-rows-1 sm:grid-cols-2 w-full">
      {/* Download Side */}
      <div className="flex flex-col items-center justify-center">
        {/* Short Description */}
        <motion.h2 
          className="text-2xl capitalize text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Downlaod Auraflix APK and Watch your favorite movies, TV shows, and web series for free!
          Unlimited entertainment at your fingertips
        </motion.h2>
        
        <div className="mt-10">
          {/* Wrapper to control hover effect */}
          <div className="group relative w-fit">
            {/* Download Button */}
            <motion.div 
              className="flex bg-[#9C27B0] p-3 rounded-lg rounded-tr-4xl cursor-pointer rounded-bl-4xl font-bold gap-1 items-center shadow-lg"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl">Download Auraflix</h2>
              <IoIosArrowDown size={24} fontWeight={"bold"} />
            </motion.div>
            
            {/* Download Links (Initially Hidden) */}
            <motion.div 
              className="absolute left-0 top-full w-full bg-[#1E1B45] mt-2 rounded-lg flex flex-col overflow-hidden max-h-0 transition-all duration-300 group-hover:max-h-60"
              // initial={{ maxHeight: 0 }}
              // animate={{ maxHeight: "100px" }}
              transition={{ duration: 0.5 }}
            >
              <button
                onClick={() => {
                  location.href =
                    "https://drive.google.com/uc?export=download&id=1kth3v1etj7NiiE5qxTyxOMHexp_cmQ11";
                }}
                className="w-full text-left p-2 duration-300 cursor-pointer hover:bg-[#00E6FF] hover:text-black font-semibold"
              >
                Download Link 1
              </button>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Image Side */}
      <div className="w-full row-span-2 sm:row-span-1 flex justify-center items-center h-full">
        <motion.div 
          className="flex h-[80vh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          <motion.img
            className="h-full"
            src="/images/app-image/app-image1.png"
            alt=""
            initial={{ x: -50 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
          />
          <motion.img
            className="h-full -ml-20 mt-20"
            src="/images/app-image/app-image4.png"
            alt=""
            initial={{ x: 50 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
          />
        </motion.div>
      </div>
    </div>
  );
}
