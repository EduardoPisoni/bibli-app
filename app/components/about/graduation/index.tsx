import Card from './components/card';
import { graduationCards } from './data';

export default function Graduation() {
  return (
    <section className="bg-stone-50 py-24 text-stone-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <span className="uppercase tracking-widest text-primary-700 font-semibold text-sm">
            Trajetória
          </span>

          <h2 className="mt-3 text-4xl font-bold">
            Formações e Conquistas
          </h2>

          <p className="mt-4 text-stone-600">
            Uma trajetória voltada ao estudo da organização da informação e da gestão de acervos.
          </p>
        </div>

        <div className="mt-16 space-y-8">
          {graduationCards.map(({ icon: Icon, ...card }) => (
            <Card
              key={card.title}
              {...card}
              icon={<Icon className="text-primary-700" />}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
