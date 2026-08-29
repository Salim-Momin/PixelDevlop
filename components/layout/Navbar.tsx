export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-white/10 bg-black/40 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <h1 className="text-2xl font-bold text-indigo-400">
          PixelDevlop
        </h1>

        <nav className="hidden gap-8 md:flex">
          <a href="#">Home</a>
          <a href="#services">Services</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#contact">Contact</a>
        </nav>

        <button className="rounded-lg bg-indigo-600 px-5 py-2 transition hover:bg-indigo-500">
          Let's Talk
        </button>
      </div>
    </header>
  );
}