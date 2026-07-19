"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname().split("/")[1];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isCurrentPage = (page?: string) => {
    return pathname === page ? "font-semibold text-primary-700" : "";
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={`
      sticky top-0 z-50  shadow-sm text-stone-800 transition-all
      ${
        isMenuOpen
          ? "bg-white"
          : "bg-white/90 backdrop-blur"
      }
    `}>

      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold tracking-wide"
          onClick={closeMenu}
        >
          <div className="leading-tight">
            <p className="font-bold text-lg">
              Mariana Bertuol
            </p>

            <p className="text-xs text-primary tracking-wide -mt-1">
              Bibliotecária
            </p>
          </div>
        </Link>

        {/* Desktop */}
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <Link
            href="/"
            className={`transition hover:text-primary-700 ${isCurrentPage("")}`}
          >
            Início
          </Link>

          <Link
            href="/servicos"
            className={`transition hover:text-primary-700 ${isCurrentPage("servicos")}`}
          >
            Serviços
          </Link>

          <Link
            href="/sobre"
            className={`transition hover:text-primary-700 ${isCurrentPage("sobre")}`}
          >
            Sobre
          </Link>

          <Link
            href="/contato"
            className={`transition hover:text-primary-700 ${isCurrentPage("contato")}`}
          >
            Contato
          </Link>

          <Link
            href="/contato"
            className="rounded-xl bg-primary-700 px-5 py-2 font-medium text-white transition hover:bg-primary-800"
          >
            Solicitar orçamento
          </Link>

        </nav>

        {/* Mobile Button */}
        <button
          className="md:hidden rounded-lg p-2 transition hover:bg-primary-100"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Abrir menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

      </div>

      {/* Mobile Menu */}
      <div
        className={`
          overflow-hidden
          transition-all
          duration-300
          lg:hidden
          ${
            isMenuOpen
              ? "max-h-96 border-t border-stone-200"
              : "max-h-0"
          }
        `}
      >
        <nav className="flex flex-col bg-white px-6 py-4">
          <Link
            href="/"
            className={`py-3 ${isCurrentPage("")}`}
            onClick={closeMenu}
          >
            Início
          </Link>

          <Link
            href="/servicos"
            className={`py-3 ${isCurrentPage("servicos")}`}
            onClick={closeMenu}
          >
            Serviços
          </Link>

          <Link
            href="/sobre"
            className={`py-3 ${isCurrentPage("sobre")}`}
            onClick={closeMenu}
          >
            Sobre
          </Link>

          <Link
            href="/contato"
            className={`py-3 ${isCurrentPage("contato")}`}
            onClick={closeMenu}
          >
            Contato
          </Link>

          <Link
            href="/contato"
            onClick={closeMenu}
            className="mt-4 rounded-xl bg-primary-700 px-5 py-3 text-center font-medium text-white transition hover:bg-primary-800"
          >
            Solicitar orçamento
          </Link>

        </nav>
      </div>

    </header>
  );
}