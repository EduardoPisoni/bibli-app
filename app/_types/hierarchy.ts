export const HIERARCHY = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  TERTIARY: 'tertiary',
} as const;

export type HierarchyVariant =
  (typeof HIERARCHY)[keyof typeof HIERARCHY];
