import {
  GraduationCap,
  BookOpen,
  FolderKanban,
  Library,
  BadgeCheck,
  Users,
  ClipboardList,
  HeartHandshake,
  ArrowRight,
  CheckCircle,
  FolderOpen,
  ClipboardCheck,
  LibraryBig,
  Search,
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

export default function About() {
  return (
    <>
      <PageHero
        title='Serviços'
        subtitle='Listagem e descrição dos serviços prestados'
      />

      {/* Processamento */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <div className="w-20 h-20 rounded-2xl bg-violet-100 flex items-center justify-center">
                <BookOpen className="text-violet-700" size={38} />
              </div>

              <h2 className="mt-8 text-4xl font-bold">
                Processamento Técnico
              </h2>

              <p className="mt-6 text-stone-600 leading-8">
                Organize seu acervo seguindo padrões técnicos para facilitar a
                identificação, localização e recuperação das informações.
              </p>
            </div>

            <div className="flex-1 space-y-8">
              <div>
                <h3 className="text-2xl font-semibold">
                  O que é?
                </h3>

                <p className="mt-3 leading-8 text-stone-600">
                  A <b>catalogação</b> consiste na descrição técnica de cada material do
                  acervo, permitindo que ele seja identificado e localizado de forma
                  padronizada.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold">
                  Como funciona?
                </h3>

                <p className="mt-3 leading-8 text-stone-600">
                  Cada obra é analisada individualmente para receber classificação,
                  indexação, identificação e demais informações necessárias para sua
                  organização no acervo.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold">
                  Benefícios
                </h3>

                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className='flex gap-2'>
                    <CheckCircle className="text-violet-700 w-5" />
                    Organização padronizada.
                  </div>
                  <div className='flex gap-2'>
                    <CheckCircle className="text-violet-700 w-5" />
                    Identificação de todos os materiais.
                  </div>
                  <div className='flex gap-2'>
                    <CheckCircle className="text-violet-700 w-5" />
                    Melhor controle do acervo.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Organização */}
      <section className="py-24 bg-stone-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <div className="w-20 h-20 rounded-2xl bg-violet-100 flex items-center justify-center">
                <Library className="text-violet-700" size={38} />
              </div>

              <h2 className="mt-8 text-4xl font-bold">
                Organização de Acervos
              </h2>

              <p className="mt-6 text-stone-600 leading-8">
                Reorganização física do seu acervo utilizando identificação, etiquetas e disposição nas estantes.
              </p>
            </div>

            <div className="flex-1 space-y-8">
              <div>
                <h3 className="text-2xl font-semibold">
                  O que é?
                </h3>

                <p className="mt-3 leading-8 text-stone-600">
                  Organize seu acervo de forma prática e padronizada, facilitando a localização dos materiais
                  e proporcionando uma melhor experiência para usuários e equipe.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold">
                  Como funciona?
                </h3>

                <p className="mt-3 leading-8 text-stone-600">
                  Cada acervo é analisado individualmente, considerando o espaço disponível,
                  a disposição das estantes, a organização existente e as necessidades da instituição.
                  A partir dessa análise, é desenvolvido um planejamento para reorganizar o acervo de
                  forma eficiente e funcional.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold">
                  Benefícios
                </h3>

                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className='flex gap-2'>
                    <CheckCircle className="text-violet-700 w-5" />
                    Distribuição planejada.
                  </div>
                  <div className='flex gap-2'>
                    <CheckCircle className="text-violet-700 w-5" />
                    Localização rápida dos materiais.
                  </div>
                  <div className='flex gap-2'>
                    <CheckCircle className="text-violet-700 w-5" />
                    Facilidade para usuários e equipe.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultoria */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <div className="w-20 h-20 rounded-2xl bg-violet-100 flex items-center justify-center">
                <ClipboardCheck className="text-violet-700" size={38} />
              </div>

              <h2 className="mt-8 text-4xl font-bold">
                Consultoria
              </h2>

              <p className="mt-6 text-stone-600 leading-8">
                Diagnóstico, planejamento e orientação técnica para melhorar a organização, o uso
                e o desenvolvimento do acervo.
              </p>

              <p className="mt-6 text-stone-600 leading-8">
                A consultoria ajuda a tomar decisões com mais segurança, garantindo que o desenvolvimento
                do acervo aconteça de forma planejada e alinhada às necessidades da instituição.
              </p>
            </div>

            <div className="flex-1 space-y-8">
              <div>
                <h3 className="text-2xl font-semibold">
                  O que é?
                </h3>

                <p className="mt-3 leading-8 text-stone-600">
                  A consultoria é um serviço de análise e orientação voltado para instituições que desejam
                  melhorar a organização, o uso e o desenvolvimento de seus acervos.
                  A partir de um diagnóstico da situação atual, são identificadas oportunidades de melhoria
                  e elaborado um plano de ação personalizado.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold">
                  Como funciona?
                </h3>

                <p className="mt-3 leading-8 text-stone-600">
                  O trabalho inicia com uma análise da realidade da instituição, considerando a organização
                  atual do acervo, sua utilização e as necessidades dos usuários. Com base nesse levantamento,
                  são elaborados relatórios, orientações técnicas e recomendações para aprimorar a gestão e
                  apoiar o crescimento da coleção.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold">
                  Benefícios
                </h3>

                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className='flex gap-2'>
                    <CheckCircle className="text-violet-700 w-5" />
                    Identificação de oportunidades de melhoria.
                  </div>
                  <div className='flex gap-2'>
                    <CheckCircle className="text-violet-700 w-5" />
                    Planejamento para expansão do acervo.
                  </div>
                  <div className='flex gap-2'>
                    <CheckCircle className="text-violet-700 w-5" />
                    Apoio na tomada de decisões.
                  </div>
                  <div className='flex gap-2'>
                    <CheckCircle className="text-violet-700 w-5" />
                    Melhor aproveitamento dos recursos disponíveis.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gestão */}
      <section className="py-24 bg-stone-100">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16">
            <div className="lg:w-1/3">
              <div className="w-20 h-20 rounded-2xl bg-violet-100 flex items-center justify-center">
                <Users className="text-violet-700" size={38} />
              </div>

              <h2 className="mt-8 text-4xl font-bold">
                Gestão Contínua
              </h2>

              <p className="mt-6 text-stone-600 leading-8">
                Após a organização inicial, continuo acompanhando o desenvolvimento do acervo para garantir
                que ele permaneça organizado, atualizado e alinhado às necessidades da instituição.
              </p>

              <p className="mt-3 leading-8 text-stone-600">
                <b>Uma biblioteca é um ambiente vivo. </b>
                Novos materiais chegam, outros deixam de fazer sentido e as necessidades mudam com o tempo.
                A gestão contínua garante que o acervo acompanhe essa evolução.
              </p>
            </div>

            <div className="flex-1 space-y-8">
              <div>
                <h3 className="text-2xl font-semibold">
                  O que é?
                </h3>

                <p className="mt-3 leading-8 text-stone-600">
                  A gestão contínua é um serviço de acompanhamento periódico que garante a manutenção da
                  organização do acervo, a inclusão de novos materiais e o suporte técnico sempre que
                  necessário.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold">
                  Como funciona?
                </h3>

                <p className="mt-3 leading-8 text-stone-600">
                  Após a conclusão do projeto inicial, é definido um plano de acompanhamento conforme as
                  necessidades da instituição. As visitas ou atendimentos podem ocorrer periodicamente para
                  inclusão de novos materiais, reorganização do acervo e suporte técnico.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold">
                  Benefícios
                </h3>

                <div className="grid md:grid-cols-2 gap-4 mt-6">
                  <div className='flex gap-2'>
                    <CheckCircle className="text-violet-700 w-5" />
                    Acervo sempre atualizado.
                  </div>
                  <div className='flex gap-2'>
                    <CheckCircle className="text-violet-700 w-5" />
                    Organização mantida ao longo do tempo.
                  </div>
                  <div className='flex gap-2'>
                    <CheckCircle className="text-violet-700 w-5" />
                    Inclusão de novos materiais sem perder o padrão.
                  </div>
                  <div className='flex gap-2'>
                    <CheckCircle className="text-violet-700 w-5" />
                    Suporte técnico sempre que necessário.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      {/* Desafios */}
      <section className="bg-violet-950 py-24 text-white">
        <div className="max-w-6xl mx-auto px-6">

          <div className="text-center max-w-3xl mx-auto">
            <span className="uppercase tracking-widest text-violet-300 text-sm font-semibold">
              Desafios
            </span>

            <h2 className="mt-4 text-4xl font-bold">
              Problemas que posso ajudar a resolver
            </h2>

            <p className="mt-6 text-violet-200 leading-8">
              Cada biblioteca possui desafios diferentes. Conheça algumas situações
              em que meu trabalho pode contribuir para tornar o acervo mais organizado,
              eficiente e acessível.
            </p>
          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2">

            {/* Card */}
            <div className="rounded-3xl bg-white p-8 text-stone-800 shadow-xl transition hover:-translate-y-1">
              <div className="flex items-center gap-3 text-red-600">
                <Search size={26} />
                <span className="font-semibold uppercase tracking-wide text-sm">
                  Desafio
                </span>
              </div>

              <h3 className="mt-4 text-2xl font-bold">
                Dificuldade para localizar materiais
              </h3>

              <p className="mt-4 leading-7 text-stone-600">
                Livros e documentos acabam sendo perdidos ou demoram para ser
                encontrados, prejudicando a rotina da instituição.
              </p>

              <div className="flex items-center mt-8 gap-3 text-violet-700">
                <BookOpen size={26} />
                <span className="font-semibold uppercase tracking-wide text-sm">
                  Solução
                </span>
              </div>

              <p className="mt-4 leading-7">
                Catalogação técnica e organização física para facilitar a localização
                rápida e precisa dos materiais.
              </p>
            </div>

            {/* Card */}
            <div className="rounded-3xl bg-white p-8 text-stone-800 shadow-xl transition hover:-translate-y-1">
              <div className="flex items-center gap-3 text-red-600">
                <LibraryBig size={26} />
                <span className="font-semibold uppercase tracking-wide text-sm">
                  Desafio
                </span>
              </div>

              <h3 className="mt-4 text-2xl font-bold">
                Acervo desorganizado
              </h3>

              <p className="mt-4 leading-7 text-stone-600">
                O crescimento do acervo aconteceu sem um planejamento, tornando a
                organização cada vez mais difícil.
              </p>

              <div className="flex items-center mt-8 gap-3 text-violet-700">
                <FolderKanban size={26} />
                <span className="font-semibold uppercase tracking-wide text-sm">
                  Solução
                </span>
              </div>

              <p className="mt-4 leading-7">
                Planejamento e reorganização completa do acervo conforme a realidade
                e as necessidades da instituição.
              </p>
            </div>

            {/* Card */}
            <div className="rounded-3xl bg-white p-8 text-stone-800 shadow-xl transition hover:-translate-y-1">
              <div className="flex items-center gap-3 text-red-600">
                <BookOpen size={26} />
                <span className="font-semibold uppercase tracking-wide text-sm">
                  Desafio
                </span>
              </div>

              <h3 className="mt-4 text-2xl font-bold">
                Crescimento sem planejamento
              </h3>

              <p className="mt-4 leading-7 text-stone-600">
                Novos materiais chegam constantemente, mas não existe um processo para
                manter o acervo organizado.
              </p>

              <div className="flex items-center mt-8 gap-3 text-violet-700">
                <FolderKanban size={26} />
                <span className="font-semibold uppercase tracking-wide text-sm">
                  Solução
                </span>
              </div>

              <p className="mt-4 leading-7">
                Consultoria e gestão contínua para acompanhar a evolução do acervo e
                manter sua organização ao longo do tempo.
              </p>
            </div>

            {/* Card */}
            <div className="rounded-3xl bg-white p-8 text-stone-800 shadow-xl transition hover:-translate-y-1">
              <div className="flex items-center gap-3 text-red-600">
                <LibraryBig size={26} />
                <span className="font-semibold uppercase tracking-wide text-sm">
                  Desafio
                </span>
              </div>

              <h3 className="mt-4 text-2xl font-bold">
                Implantação de uma nova biblioteca
              </h3>

              <p className="mt-4 leading-7 text-stone-600">
                Criar um novo acervo exige planejamento, padronização e organização
                desde o primeiro dia.
              </p>

              <div className="flex items-center mt-8 gap-3 text-violet-700">
                <FolderKanban size={26} />
                <span className="font-semibold uppercase tracking-wide text-sm">
                  Solução
                </span>
              </div>

              <p className="mt-4 leading-7">
                Planejamento da estrutura do acervo, organização física e definição
                dos processos necessários para iniciar a biblioteca corretamente.
              </p>
            </div>

          </div>

        </div>
      </section>


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