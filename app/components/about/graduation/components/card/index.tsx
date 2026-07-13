import type { ReactNode } from 'react';

import type { HierarchyVariant } from '@/app/_types/hierarchy';

type CardClasses = {
  container: string;
  subtitle: string;
  title: string;
  text: string;
};

const classesByVariant: Record<HierarchyVariant, CardClasses> = {
  primary: {
    container: 'bg-violet-800',
    subtitle: 'text-violet-100',
    title: 'text-white',
    text: 'text-white',
  },
  secondary: {
    container: 'border-2 border-violet-300 bg-violet-50',
    subtitle: 'text-violet-700',
    title: 'text-stone-800',
    text: 'text-stone-800',
  },
  tertiary: {
    container: 'bg-white',
    subtitle: 'text-violet-700',
    title: 'text-stone-800',
    text: 'text-stone-600',
  },
};

export default function Card({
  variant,
  icon,
  title,
  subtitle,
  text,
}: {
  variant: HierarchyVariant;
  icon: ReactNode;
  title: string;
  subtitle: string;
  text?: ReactNode;
}) {
  const classes = classesByVariant[variant];

  return (
    <div className={`flex flex-col sm:flex-row gap-6 rounded-2xl p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${classes.container}`}>
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-violet-100">
        {icon}
      </div>

      <div>
        <span className={`text-sm font-semibold ${classes.subtitle}`}>
          {subtitle}
        </span>

        <h3 className={`text-2xl font-semibold mt-1 ${classes.title}`}>
          {title}
        </h3>

        {text && (
          <p className={`mt-3 leading-7 ${classes.text}`}>
            {text}
          </p>
        )}
      </div>
    </div>
  );
}
