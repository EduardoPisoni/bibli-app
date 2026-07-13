import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';

import type { HierarchyVariant } from '@/app/_types/hierarchy';

export type GraduationCardData = {
  variant: HierarchyVariant;
  icon: LucideIcon;
  subtitle: string;
  title: string;
  text?: ReactNode;
};
