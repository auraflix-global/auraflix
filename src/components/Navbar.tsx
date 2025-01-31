
export default function Navbar() {
  return (
    <div className='h-10 w-full px-10 flex justify-between text-[#E0E0E0] bg-[#1E1B45]'>
      <div className='flex gap-2 items-center h-full w-full'>
        <a href="https://telegra.ph/Auraflix-Privacy-Policy-01-24" className='cusor-pointer hover:underline'>Privacy Policy</a>
      </div>
      <div className='flex gap-1 cursor-pointer items-center font-bold'>
        <img className='h-8' src="/images/auraflix.png" alt="" />
        <div className='text-xl'>
            <span className='text-[#00E6FF]'>Aura</span>
            <span className='text-[#9C27B0]'>flix</span>
        </div>
      </div>
    </div>
  )
}
