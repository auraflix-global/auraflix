import { motion } from 'framer-motion';

export default function Section2() {
  return (
    <div className='text-[#E0E0E0] mt-10'>
      {/* headline */}
      <div className='capitalize px-10 grid grid-cols-1 md:grid-cols-3 items-center gap-4'>
        <div className='h-[2px] bg-[#9C27B0]'></div>
        <span className='text-center px-3 text-[#E0E0E0]'>get it on app store</span>
        <div className='h-[2px] bg-[#9C27B0]'></div>
      </div>
      {/* image */}
      <div className='flex gap-4 p-5 py-8 justify-center flex-wrap'>
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}  className='h-10 w-40 cursor-pointer rounded-lg bg-[#1E1B45] p-2 flex justify-center gap-1 items-center mb-4 md:mb-0'>
          <img className='h-full' src="/images/amazon-appstore-logo.png" alt="Amazon Appstore" />
          <span className='font-bold text-lg'>Amazon</span>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}  className='h-10 w-40 cursor-pointer rounded-lg bg-[#1E1B45] p-2 flex justify-center gap-1 items-center mb-4 md:mb-0'>
          <img className='h-full' src="/images/uptodown-logo.png" alt="UptoDown" />
          <span className='font-bold text-lg'>UptoDown</span>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}  className='h-10 w-40 cursor-pointer rounded-lg bg-[#1E1B45] p-2 flex justify-center gap-1 items-center mb-4 md:mb-0'>
          <img className='h-full' src="/images/aptoide-logo.png" alt="Aptoide" />
          <span className='font-bold text-lg'>Aptoide</span>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}  className='h-10 w-40 cursor-pointer rounded-lg bg-[#1E1B45] p-2 flex justify-center gap-1 items-center mb-4 md:mb-0'>
          <img className='h-full' src="/images/apkpure-logo.png" alt="Apkpure" />
          <span className='font-bold text-lg'>Apkpure</span>
        </motion.div>
      </div>
    </div>
  );
}
