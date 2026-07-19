import Link from 'next/link';

import { HIERARCHY } from '@/app/_types/hierarchy';
import type { HierarchyVariant } from '@/app/_types/hierarchy';

type Props = {
  variant?: HierarchyVariant;
  goTo: string;
  text: string;
  className?: string;
};

const classesByVariant: Record<HierarchyVariant, string> = {
  [HIERARCHY.PRIMARY]: 'bg-primary-700 text-white',
  [HIERARCHY.SECONDARY]: 'bg-white text-primary-800',
  [HIERARCHY.TERTIARY]: 'border border-white hover:bg-white hover:text-primary-900',
};

export default function CustomLink({
  variant = HIERARCHY.PRIMARY,
  goTo,
  text,
  className,
} : Props) {
  return (
    <Link 
      href={goTo}
      className={`text-center rounded-xl px-7 py-3 font-semibold transition hover:scale-105 cursor-pointer ${classesByVariant[variant]} ${className}`}>
      {text}
    </Link>
  );
};
