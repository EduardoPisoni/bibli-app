import Card from './components/card';
import ExtraCard from './components/extraCard';
import { cards } from './data';


export default function Realities() {
  return (
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
          {cards.map((card, i) => (
            <Card
              key={i}
              icon={card.icon}
              title={card.title}
              description={card.description}
            />
          ))}

          <ExtraCard />
        </div>
      </div>
    </section>
  );
};