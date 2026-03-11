export default function Footer() {
  return (
    <footer className="border-t border-[#111] py-8 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-2">
        <p className="text-[#444] text-xs">Arnab Biswas &copy; 2025</p>
        <p className="text-[#333] text-xs">
          Built with{" "}
          <span className="text-[#555]">Next.js</span>
          {" · "}
          Deployed on{" "}
          <span className="text-[#555]">Vercel</span>
        </p>
      </div>
    </footer>
  );
}
