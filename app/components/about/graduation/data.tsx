import { Award, Book, BookOpen, GraduationCap } from 'lucide-react';

import { HIERARCHY } from '@/app/_types/hierarchy';

import type { GraduationCardData } from './types';

export const graduationCards: GraduationCardData[] = [
  {
    variant: HIERARCHY.PRIMARY,
    icon: GraduationCap,
    subtitle: 'Graduação',
    title: 'Bacharel em Biblioteconomia',
    text: <>Universidade de Caxias do Sul/UCS • <strong>Com Laurea Acadêmica</strong></>,
  },
  {
    variant: HIERARCHY.SECONDARY,
    icon: Award,
    subtitle: 'Reconhecimento acadêmico',
    title: 'Pelo Conselho Regional de Biblioteconomia 10ª região',
  },
  {
    variant: HIERARCHY.TERTIARY,
    icon: BookOpen,
    subtitle: 'Pós-graduanda',
    title: 'Arquivologia',
    text: 'Faculdade Metropolitana de São Paulo',
  },
  {
    variant: HIERARCHY.TERTIARY,
    icon: BookOpen,
    subtitle: 'Especialização',
    title: 'Gestão de Bibliotecas Universitárias',
    text: 'Universidade de Caxias do Sul/UCS',
  },
  {
    variant: HIERARCHY.TERTIARY,
    icon: Book,
    subtitle: 'Coautora do e-book',
    title: 'Gestão e Inovação em Bibliotecas Universitárias',
    text: <>
      <b>Organizado pelo Prof. João Paulo Borges da Silveira</b>.
      <br />
      Contribuição com o capítulo &ldquo;Da impressão ao digital: a evolução dos meios de divulgação científica&rdquo;,
      que aborda as transformações dos canais de comunicação científica, desde as publicações impressas até as plataformas digitais contemporâneas.
    </>,
  },
];
