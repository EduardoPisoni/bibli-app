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
    <div className="rounded-2xl border border-primary-800 bg-primary-900/40 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-secondary hover:bg-primary-900/60">
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary-100 text-primary-700">
        <Icon size={28} />
      </div>

      <h3 className="text-xl font-semibold">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-primary-200">
        {description}
      </p>
    </div>
  );
}