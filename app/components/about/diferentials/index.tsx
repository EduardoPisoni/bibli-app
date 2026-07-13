import Item from './components/item';
import { items } from './data';

export default function Diferentials() {
  return (
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
          {items.map((item, i) => (
            <Item
              key={i}
              text={item}
            />
          ))}
        </div>
      </div>
    </section>
  );
};