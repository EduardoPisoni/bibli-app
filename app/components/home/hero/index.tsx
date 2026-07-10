'use client';

import { scrollToSection } from '@/app/utils/scroll';

export default function Hero() {

  return (
    <section className="bg-gradient-to-br from-violet-900 to-violet-700 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 py-20 md:flex-row md:py-28">
        {/* Texto */}
        <div className="flex-1 text-center md:text-left">
          <div className="flex text-sm uppercase tracking-[4px] text-violet-200 w-full items-center justify-center md:justify-start">
            Consultoria  <div className='mx-3'>•</div>  Gestão de Acervos
          </div>

          <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
            Organização profissional para bibliotecas e acervos.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-violet-100 md:max-w-lg">
            Catalogação, organização e gestão contínua de acervos para escolas,
            empresas, instituições e coleções particulares.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
            <button className="rounded-xl bg-white px-7 py-3 font-semibold text-violet-900 transition hover:scale-105 cursor-pointer">
              Solicitar orçamento
            </button>

            <button
              onClick={() => scrollToSection('servicos')}
              className="rounded-xl border border-white px-7 py-3 transition hover:bg-white hover:text-violet-900 cursor-pointer">
              Conhecer serviços
            </button>
          </div>
        </div>

        {/* Imagem */}
        <div className="flex flex-1 justify-center">
          <img
            src="https://placehold.co/450x550"
            alt="Bibliotecária"
            className="w-full max-w-sm rounded-3xl border border-white/20 shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
}