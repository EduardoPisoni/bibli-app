import type { Card } from '../../data';

type Props = {
  cardProp: Card;
}

export default function Card({ cardProp }: Props) {
  const {
    challange: {
      icon: ChalIcon,
      ...clallange
    },
    solution: {
      icon: SolIcon,
      ...solution
    }
  } = cardProp;

  return (
    <div className="rounded-3xl bg-white p-8 text-stone-800 shadow-xl transition hover:-translate-y-1">
      <div className="flex items-center gap-3 text-red-600">
        <ChalIcon size={26} />
        <span className="font-semibold uppercase tracking-wide text-sm">
          Desafio
        </span>
      </div>

      <h3 className="mt-4 text-2xl font-bold">
        {clallange.title}
      </h3>

      <p className="mt-4 leading-7 text-stone-600">
        {clallange.text}
      </p>

      <div className="flex items-center mt-8 gap-3 text-violet-700">
        <SolIcon size={26} />
        <span className="font-semibold uppercase tracking-wide text-sm">
          Solução
        </span>
      </div>

      <p className="mt-4 leading-7">
        {solution.text}
      </p>
    </div>
  );
};