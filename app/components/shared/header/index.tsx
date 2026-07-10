import Link from 'next/link';

export default function Header() {
  return (
    <header className="sticky top-0 bg-white/90 backdrop-blur shadow-sm z-50 text-stone-800">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold tracking-wide">
          <Link href="/" className="text-xl font-bold tracking-wide">
            Mariana Bertuol
          </Link>
        </h1>
        

        <nav className="hidden md:flex gap-8 text-sm">
          {/* <Link href="/servicos" className="hover:text-violet-700">
            Serviços
          </Link>
          <Link href="/planos" className="hover:text-violet-700">
            Planos
          </Link>
          <Link href="/sobre" className="hover:text-violet-700">
            Sobre
          </Link> */}
          <Link href="/contato" className="hover:text-violet-700 font-semibold">
            Contato
          </Link>
        </nav>
      </div>
    </header>
  );
}