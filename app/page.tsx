import {
  BookOpen,
  Library,
  FolderOpen,
  ClipboardCheck,
  CheckCircle,
  Phone,
  Mail,
} from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 text-stone-800">
      {/* Header */}
      <header className="sticky top-0 bg-white/90 backdrop-blur border-b z-50">
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

      {/* Hero */}
      <section className="bg-gradient-to-br from-violet-900 to-violet-700 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-12 px-6 py-20 md:flex-row md:py-28">
          {/* Texto */}
          <div className="flex-1 text-center md:text-left">
            <span className="text-sm uppercase tracking-[4px] text-violet-200">
              Biblioteconomia • Consultoria • Gestão de Acervos
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Organização profissional para bibliotecas e acervos.
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-violet-100 md:max-w-lg">
              Catalogação, organização e gestão contínua de acervos para escolas,
              empresas, instituições e coleções particulares.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
              <button className="rounded-xl bg-white px-7 py-3 font-semibold text-violet-900 transition hover:scale-105">
                Solicitar orçamento
              </button>

              <button className="rounded-xl border border-white px-7 py-3 transition hover:bg-white hover:text-violet-900">
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

      {/* Serviços */}
      <section
        id="servicos"
        className="max-w-6xl mx-auto px-6 py-24"
      >
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">
            Serviços especializados
          </h2>

          <p className="mt-4 text-stone-600">
            Soluções para organizar, estruturar e manter seu acervo sempre em
            dia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card
            icon={<BookOpen />}
            title="Catalogação"
            text="Organização técnica e classificação do acervo."
          />

          <Card
            icon={<FolderOpen />}
            title="Organização"
            text="Reestruturação física e lógica dos materiais."
          />

          <Card
            icon={<Library />}
            title="Implantação"
            text="Criação de bibliotecas e organização inicial."
          />

          <Card
            icon={<ClipboardCheck />}
            title="Consultoria"
            text="Planejamento e acompanhamento técnico."
          />
        </div>
      </section>

      {/* Processo */}
      <section className="bg-white py-24">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold">
            Como funciona
          </h2>

          <div className="grid md:grid-cols-4 gap-10 mt-16">
            {[
              "Diagnóstico",
              "Planejamento",
              "Execução",
              "Gestão Contínua",
            ].map((item, index) => (
              <div key={item}>
                <div className="w-16 h-16 rounded-full bg-violet-700 text-white flex items-center justify-center text-2xl font-bold mx-auto">
                  {index + 1}
                </div>

                <h3 className="font-semibold mt-5">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planos */}
      <section
        id="planos"
        className="bg-stone-100 py-24"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">
              Planos de acompanhamento
            </h2>

            <p className="text-stone-600 mt-4">
              Após a organização inicial, continue contando com suporte
              especializado.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Plan
              title="Essencial"
              items={[
                "Catalogação de novos livros",
                "Atualização do catálogo",
                "Suporte remoto",
              ]}
            />

            <Plan
              title="Profissional"
              featured
              items={[
                "Tudo do Essencial",
                "Organização periódica",
                "Consultoria técnica",
                "Inventário",
              ]}
            />

            <Plan
              title="Institucional"
              items={[
                "Visitas presenciais",
                "Planejamento anual",
                "Treinamento da equipe",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section
        id="sobre"
        className="max-w-5xl mx-auto px-6 py-24 text-center"
      >
        <h2 className="text-4xl font-bold">
          Sobre a profissional
        </h2>

        <p className="mt-8 leading-8 text-stone-600 text-lg">
          Bibliotecária especializada em organização, catalogação e gestão de
          acervos, atuando com soluções personalizadas para escolas,
          universidades, empresas e instituições culturais.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mt-14">
          {[
            "Organização profissional",
            "Atendimento personalizado",
            "Projetos sob medida",
          ].map((item) => (
            <div
              key={item}
              className="bg-white rounded-xl shadow p-6"
            >
              <CheckCircle className="mx-auto text-violet-700" />
              <p className="mt-4 font-medium">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        id="contato"
        className="bg-violet-800 text-white py-24"
      >
        <div className="max-w-3xl mx-auto text-center px-6">
          <h2 className="text-4xl font-bold">
            Vamos conversar?
          </h2>

          <p className="mt-6 text-lg text-violet-100">
            Entre em contato para solicitar um orçamento ou tirar dúvidas sobre
            os serviços.
          </p>

          <div className="flex justify-center gap-6 mt-12 flex-wrap">
            <button className="flex items-center gap-2 bg-white text-violet-900 px-6 py-3 rounded-xl">
              <Phone size={18} />
              WhatsApp
            </button>

            <button className="flex items-center gap-2 border border-white px-6 py-3 rounded-xl">
              <Mail size={18} />
              E-mail
            </button>
          </div>
        </div>
      </section>

      <footer className="bg-stone-900 text-stone-400 text-center py-8 text-sm">
        © 2026 Mariana Bertuol • Todos os direitos reservados.
      </footer>
    </div>
  );
}

function Card({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-8 hover:shadow-xl transition">
      <div className="text-violet-700 mb-6">{icon}</div>

      <h3 className="font-bold text-xl mb-3">{title}</h3>

      <p className="text-stone-600 leading-7">{text}</p>
    </div>
  );
}

function Plan({
  title,
  items,
  featured,
}: {
  title: string;
  items: string[];
  featured?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl p-8 ${
        featured
          ? "bg-violet-700 text-white scale-105 shadow-xl"
          : "bg-white"
      }`}
    >
      <h3 className="text-2xl font-bold mb-8">{title}</h3>

      <ul className="space-y-4">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-center gap-3"
          >
            <CheckCircle size={18} />
            {item}
          </li>
        ))}
      </ul>

      <button
        className={`mt-10 w-full py-3 rounded-xl font-semibold ${
          featured
            ? "bg-white text-violet-700"
            : "bg-violet-700 text-white"
        }`}
      >
        Solicitar proposta
      </button>
    </div>
  );
}