
export default function Header() {
  return (
    <header className="sticky top-0 bg-white/90 backdrop-blur shadow-sm z-50 text-stone-800">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold tracking-wide">
          Mariana Bertuol
        </h1>

        <nav className="hidden md:flex gap-8 text-sm">
          <a href="#servicos" className="hover:text-violet-700">
            Serviços
          </a>
          <a href="#planos" className="hover:text-violet-700">
            Planos
          </a>
          <a href="#sobre" className="hover:text-violet-700">
            Sobre
          </a>
          <a href="#contato" className="hover:text-violet-700">
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
}