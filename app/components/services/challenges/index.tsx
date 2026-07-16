import Card from './components/card';
import { cards } from './data';


export default function Challenges() {
  return (
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
          {cards.map((card, i) => (
            <Card 
              key={i}
              cardProp={card}
            />
          ))}
        </div>
      </div>
    </section>
  );
};