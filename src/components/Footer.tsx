
export default function Footer() {
  return (
    <footer className="bg-[#1E1B45] text-[#E0E0E0] py-6 text-center">
      <div className="max-w-5xl mx-auto px-6">
        <p className="text-lg">&copy; {new Date().getFullYear()} Auraflix. All rights reserved.</p>
        <p className="mt-2">
          <a href="mailto:auraflix.manage@gmail.com" className="text-[#00E6FF] hover:underline">
            auraflix.manage@gmail.com
          </a>
        </p>
      </div>
    </footer>
  );
}
