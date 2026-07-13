import {
  GraduationCap,
  BookOpen,
  Users,
  ClipboardList,
  BookMarked,
  Landmark,
  MessageCircleMore,
  Building2,
  School,
  ShieldCheck,
  TrendingUp,
  Clock3,
} from "lucide-react";

import PageHero from '../../components/shared/pageHero';
import Link from 'next/link';
import Sections from '@/app/components/services/sections';
import Challenges from '@/app/components/services/challenges';

export default function About() {
  return (
    <>
      <PageHero
        title='Serviços'
        subtitle='Listagem e descrição dos serviços prestados'
      />

      <Sections />

      <Challenges />


      {/* Diferentes realidades */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">

          <div className="max-w-3xl mx-auto text-center">
            <span className="uppercase tracking-widest text-violet-700 text-sm font-semibold">
              Diferentes realidades
            </span>

            <h2 className="mt-4 text-4xl font-bold text-stone-800">
              Soluções para diferentes tipos de acervos
            </h2>

            <p className="mt-6 text-stone-600 leading-8">
              Cada instituição possui necessidades específicas. Os serviços podem ser
              adaptados conforme o tamanho do acervo, sua organização atual e os
              objetivos de cada projeto.
            </p>
          </div>

          <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            <AudienceCard
              icon={<School size={32} />}
              title="Escolas"
              description="Organização e manutenção de bibliotecas escolares para facilitar o acesso ao conhecimento."
            />

            <AudienceCard
              icon={<GraduationCap size={32} />}
              title="Universidades"
              description="Catalogação, organização e gestão de acervos acadêmicos e de pesquisa."
            />

            <AudienceCard
              icon={<Building2 size={32} />}
              title="Empresas"
              description="Centros de documentação, bibliotecas corporativas e acervos técnicos."
            />

            <AudienceCard
              icon={<Landmark size={32} />}
              title="Instituições"
              description="Museus, fundações, associações e demais organizações que preservam informação."
            />

            <AudienceCard
              icon={<BookMarked size={32} />}
              title="Coleções particulares"
              description="Organização de bibliotecas pessoais e coleções privadas."
            />

            <div className="rounded-2xl border-2 border-dashed border-violet-300 bg-violet-50 p-8 text-center flex flex-col justify-center">

              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-violet-100 text-violet-700">
                <MessageCircleMore size={32} />
              </div>

              <h3 className="text-xl font-semibold">
                Seu caso é diferente?
              </h3>

              <p className="mt-4 leading-7 text-stone-600">
                Cada projeto é único. Entre em contato para conversarmos sobre a sua
                necessidade e encontrarmos a melhor solução.
              </p>

              <Link
                href="/contato"
                className="mt-8 inline-flex items-center justify-center rounded-xl bg-violet-700 px-5 py-3 font-medium text-white transition hover:bg-violet-800"
              >
                Entrar em contato
              </Link>

            </div>

          </div>

        </div>
      </section>


      {/* Por que me contratar */}
      <section className="bg-violet-950 py-24 text-white">
        <div className="max-w-6xl mx-auto px-6">

          <div className="grid gap-20 lg:grid-cols-2 items-center">

            {/* Texto */}
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-300">
                Valor
              </span>

              <h2 className="mt-4 text-4xl md:text-5xl font-bold leading-tight">
                Por que investir na organização do seu acervo?
              </h2>

              <p className="mt-8 text-lg leading-8 text-violet-200">
                Um acervo organizado vai muito além da disposição dos materiais nas
                estantes. Ele facilita o acesso à informação, melhora a experiência
                dos usuários e proporciona uma gestão mais eficiente para a
                instituição.
              </p>

              <p className="mt-6 text-lg leading-8 text-violet-200">
                Investir na organização é investir na preservação do conhecimento e
                na construção de um ambiente preparado para crescer de forma
                estruturada e sustentável.
              </p>
            </div>

            {/* Benefícios */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

              <BenefitCard
                icon={<BookOpen size={28} />}
                title="Localização rápida"
                description="Encontre livros e documentos com facilidade."
              />

              <BenefitCard
                icon={<Clock3 size={28} />}
                title="Economia de tempo"
                description="Reduza o tempo gasto procurando materiais."
              />

              <BenefitCard
                icon={<Users size={28} />}
                title="Melhor experiência"
                description="Usuários e equipes encontram o que precisam com mais agilidade."
              />

              <BenefitCard
                icon={<TrendingUp size={28} />}
                title="Crescimento planejado"
                description="Expanda o acervo mantendo organização e padronização."
              />

              <BenefitCard
                icon={<ShieldCheck size={28} />}
                title="Preservação"
                description="Proteja o patrimônio informacional da instituição."
              />

              <BenefitCard
                icon={<ClipboardList size={28} />}
                title="Gestão eficiente"
                description="Tenha maior controle sobre o acervo e sua evolução."
              />

            </div>

          </div>

          {/* Frase de impacto */}
          <div className="mt-24 border-t border-violet-800 pt-16">

            <blockquote className="max-w-4xl mx-auto text-center">

              <p className="text-2xl md:text-3xl font-semibold leading-relaxed">
                Organizar um acervo não é apenas organizar livros.
                <span className="block mt-3 text-violet-300">
                  É facilitar o acesso ao conhecimento, preservar a informação e
                  preparar a instituição para o futuro.
                </span>
              </p>

            </blockquote>

          </div>

        </div>
      </section>


      {/* CTA */}
      <section className="bg-violet-950 text-white py-24">
        <div className="max-w-4xl mx-auto text-center px-6">
          <BookOpen
            className="mx-auto mb-6"
            size={48}
          />

          <h2 className="text-4xl font-bold">
            Pronto para dar o próximo passo?
          </h2>

          <Link
            href="/contato"
            className="inline-flex items-center gap-2 mt-10 rounded-xl bg-white px-8 py-4 font-semibold text-violet-900 transition hover:scale-105"
          >
            Solicitar orçamento
          </Link>
        </div>
      </section>
    </>
  );
}

function AudienceCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-violet-100 text-violet-700">
        {icon}
      </div>

      <h3 className="text-xl font-semibold text-stone-800">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-stone-600">
        {description}
      </p>
    </div>
  );
}

function BenefitCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-violet-800 bg-violet-900/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-600 hover:bg-violet-900/60">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-violet-100 text-violet-700">
        {icon}
      </div>

      <h3 className="text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-violet-200">
        {description}
      </p>
    </div>
  );
}