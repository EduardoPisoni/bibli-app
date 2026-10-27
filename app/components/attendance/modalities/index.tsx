import Card from './components/card';
import { modalities } from './data';

export default function Modalities() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <span className="uppercase tracking-widest text-primary-700 text-sm font-semibold">
            Modalidades
          </span>

          <h2 className="mt-3 text-4xl font-bold">
            Formas de atendimento
          </h2>

          <p className="mt-6 leading-8 text-stone-600">
            Os serviços são prestados de acordo com as necessidades de cada
            projeto, podendo ser realizados de forma presencial, híbrida ou
            remota.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {modalities.map((modality) => (
            <Card
              key={modality.title}
              modalityProp={modality}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
