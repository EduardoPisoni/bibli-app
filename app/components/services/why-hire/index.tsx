import { cards } from './data';
import Card from './components/card';

export default function WhyHire() {
  return (
    <section className="bg-violet-950 py-24 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid gap-20 lg:grid-cols-2 items-center">
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {cards.map((card, i) => (
              <Card
                key={i}
                icon={card.icon}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>

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
  );
};