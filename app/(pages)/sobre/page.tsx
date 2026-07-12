import {
  GraduationCap,
  BookOpen,
  Library,
  BadgeCheck,
  Users,
  HeartHandshake,
  ArrowRight,
  ClipboardCheck,
  Award,
} from "lucide-react";

import PageHero from '../../components/shared/pageHero';
import Link from 'next/link';
import Image from 'next/image'

export default function About() {
  return (
    <>
      <PageHero
        title='Mariana Bertuol'
        subtitle='Quem sou eu, minha formação acadêmica e mais'
      />

      {/* Sobre mim */}
      <section className="bg-white py-24 text-stone-800">
        <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
          <Image
            src="/images/mariana-md.png"
            alt="Bibliotecária"
            className="w-80 rounded-3xl shadow-xl"
            width={340}
            height={340}
          />

          <div>
            <span className="uppercase tracking-widest text-violet-700 text-sm font-semibold">
              Sobre mim
            </span>

            <h2 className="mt-3 text-4xl font-bold">
              Cuidar da informação é cuidar do conhecimento.
            </h2>

            <p className="mt-8 leading-8 text-stone-600">
              Sou bibliotecária e atuo na organização,
              catalogação e gestão de acervos para instituições,
              escolas, empresas e coleções particulares.

              Meu objetivo é desenvolver soluções que tornem o
              acesso à informação mais eficiente, organizado e
              acessível para todos os usuários.
            </p>
          </div>
        </div>
      </section>

      {/* Formação */}
      <section className="bg-stone-50 py-24 text-stone-800">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <span className="uppercase tracking-widest text-violet-700 font-semibold text-sm">
              Formação
            </span>

            <h2 className="mt-3 text-4xl font-bold">
              Histórico acadêmico
            </h2>

            <p className="mt-4 text-stone-600">
              Uma trajetória voltada ao estudo da organização da informação e da gestão de acervos.
            </p>
          </div>

          <div className="mt-16 space-y-8 ">
            <div className="flex flex-col sm:flex-row gap-6 rounded-2xl bg-violet-800 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-violet-100">
                <GraduationCap className="text-violet-700" />
              </div>

              <div>
                <span className="text-sm text-violet-100 font-semibold">
                  Graduação
                </span>

                <h3 className="text-2xl font-semibold mt-1 text-white">
                  Bacharel em Biblioteconomia
                </h3>

                <p className="mt-3 text-white leading-7">
                  Universidade de Caxias do Sul/UCS • <b>Com Laurea Acadêmica</b>
                </p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 rounded-2xl border-2 border-violet-300 bg-violet-50 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-violet-100">
                <Award className="text-violet-700" />
              </div>

              <div className='flex flex-col justify-center'>
                <span className="text-sm text-violet-700 font-semibold">
                  Reconhecimento academico
                </span>
                <h3 className="text-2xl font-semibold mt-1 text-stone-800">
                  Pelo Conselho Regional de Biblioteconomia 10ª região
                </h3>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 rounded-2xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-violet-100">
                <BookOpen className="text-violet-700" />
              </div>

              <div>
                <span className="text-sm text-violet-700 font-semibold">
                  Pós-graduanda
                </span>

                <h3 className="text-2xl font-semibold mt-1">
                  Arquivologia
                </h3>

                <p className="mt-3 text-stone-600 leading-7">
                  Faculdade Metropolitana de São Paulo
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 rounded-2xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-violet-100">
                <BookOpen className="text-violet-700" />
              </div>

              <div>
                <span className="text-sm text-violet-700 font-semibold">
                  Especialização
                </span>

                <h3 className="text-2xl font-semibold mt-1">
                  Gestão de Bibliotecas Universitárias
                </h3>

                <p className="mt-3 text-stone-600 leading-7">
                  Universidade de Caxias do Sul/UCS
                </p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Áreas */}
      <section className="bg-white py-24">
        <div className="flex flex-col items-center max-w-6xl mx-auto px-6">
          <div className="text-center">
            <span className="uppercase tracking-widest text-violet-700 font-semibold text-sm">
              Especialidades
            </span>

            <h2 className="mt-3 text-4xl font-bold">
              Áreas de atuação
            </h2>
          </div>

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AreaCard
              icon={<BookOpen />}
              title="Processamento Técnico"
            />
            <AreaCard
              icon={<Library />}
              title="Organização Física do Acervo"
            />
            <AreaCard
              icon={<ClipboardCheck />}
              title="Consultoria e Diagnósticos"
            />
            <AreaCard
              icon={<Users />}
              title="Gestão Contínua após entrega"
            />
          </div>

          <Link
            href="/servicos"
            className="inline-flex items-center gap-2 mt-10 rounded-xl bg-violet-700 px-12 py-3 font-semibold text-white transition hover:scale-105"
          >
            Saiba mais
          </Link>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="bg-stone-50 py-24">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center">
            <span className="uppercase tracking-widest text-violet-700 font-semibold text-sm">
              Diferenciais
            </span>

            <h2 className="mt-3 text-4xl font-bold">
              O que você pode esperar
            </h2>
          </div>

          <div className="mt-16 grid md:grid-cols-2 gap-6">

            <Item text="Atendimento personalizado para cada instituição." />

            <Item text="Projetos desenvolvidos conforme a realidade do cliente." />

            <Item text="Organização seguindo normas biblioteconômicas." />

            <Item text="Compromisso com qualidade e organização." />

            <Item text="Planejamento antes da execução." />

            <Item text="Acompanhamento durante todas as etapas do projeto." />

          </div>

        </div>
      </section>

      {/* Método */}
      <section className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <span className="uppercase tracking-widest text-violet-700 font-semibold text-sm">
            Método de trabalho
          </span>

          <h2 className="mt-3 text-4xl font-bold">
            Como desenvolvo cada projeto
          </h2>

          <div className="mt-20 flex flex-wrap justify-center items-center gap-x-4 gap-y-4 lg:gap-y-6">
            <Step title="Entender">
              Converso com o cliente para compreender suas necessidades.
            </Step>

            <ArrowRight className="hidden lg:block text-violet-300" />

            <Step title="Planejar">
              Elaboro uma proposta personalizada.
            </Step>

            <ArrowRight className="hidden lg:block text-violet-300" />

            <Step title="Executar">
              Organizo e desenvolvo todas as atividades contratadas.
            </Step>

            <Step title="Acompanhar">
              Permaneço disponível para suporte e gestão contínua.
            </Step>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-violet-950 text-white py-24">
        <div className="max-w-4xl mx-auto text-center px-6">
          <HeartHandshake
            className="mx-auto mb-6"
            size={48}
          />

          <h2 className="text-4xl font-bold">
            Vamos conversar sobre o seu projeto?
          </h2>

          <p className="mt-6 text-violet-200 leading-8">
            Será um prazer conhecer seu contexto, entender suas necessidades e
            desenvolver uma solução personalizada para o seu acervo.
          </p>

          <Link
            href="/contato"
            className="inline-flex items-center gap-2 mt-10 rounded-xl bg-white px-8 py-4 font-semibold text-violet-900 transition hover:scale-105"
          >
            Entrar em contato
          </Link>
        </div>
      </section>
    </>
  );
}

function AreaCard({
  icon,
  title,
}: {
  icon: React.ReactNode;
  title: string;
}) {
  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-8 text-center transition hover:-translate-y-1 hover:shadow-lg">
      <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-violet-100 text-violet-700">
        {icon}
      </div>

      <h3 className="font-semibold text-lg">{title}</h3>
    </div>
  );
}

function Item({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-4 rounded-xl bg-white p-6 shadow-sm hover:shadow-md transition">
      <BadgeCheck className="mt-1 text-violet-700 shrink-0" />
      <p className="leading-7 text-stone-600">{text}</p>
    </div>
  );
}

function Step({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="w-64 rounded-2xl border border-violet-100 bg-violet-50 p-4">
      <h3 className="font-bold text-violet-700">{title}</h3>

      <p className="mt-2 text-sm leading-7 text-stone-600">
        {children}
      </p>
    </div>
  );
}