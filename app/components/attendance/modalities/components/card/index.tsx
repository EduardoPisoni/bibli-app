import type { Modality } from '../../data';

type Props = {
  modalityProp: Modality;
}

export default function Card({ modalityProp }: Props) {
  const { icon: Icon, ...modality } = modalityProp;

  return (
    <div className="flex flex-col rounded-2xl border border-primary-100 bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary-100 text-primary-700">
        <Icon size={28} />
      </div>

      <h3 className="mt-6 text-2xl font-bold">
        {modality.title}
      </h3>

      <p className="mt-3 leading-7 text-stone-600">
        {modality.text}
      </p>
    </div>
  );
};
