import type { ReactNode } from 'react';

type ServiceCardProps = {
  icon: ReactNode;
  title: string;
};

export default function ServiceCard({ icon, title }: ServiceCardProps) {
  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-8 text-center transition hover:-translate-y-1 hover:shadow-lg">
      <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 text-primary-700">
        {icon}
      </div>

      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
  );
}
