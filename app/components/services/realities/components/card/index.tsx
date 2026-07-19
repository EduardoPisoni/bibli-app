import { LucideIcon } from 'lucide-react';

export default function Card({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-8 transition-all hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-secondary-100 text-secondary">
        <Icon size={32} />
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