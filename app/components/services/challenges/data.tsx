import { BookOpen, FolderKanban, LibraryBig, Search } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';

export type Card = {
  challange: {
    icon: LucideIcon;
    title: string;
    text: ReactNode;
  };
  solution: {
    icon: LucideIcon;
    text: ReactNode;
  };
}

export const cards = [
  {
    challange: {
      icon: Search,
      title: "Dificuldade para localizar materiais",
      text: <>
        Livros e documentos acabam sendo perdidos ou demoram para ser
        encontrados, prejudicando a rotina da instituição.
      </>
    },
    solution: {
      icon: BookOpen,
      text: <>
        Catalogação técnica e organização física para facilitar a localização
        rápida e precisa dos materiais.
      </>
    },
  },
  {
    challange: {
      icon: LibraryBig,
      title: "Acervo desorganizado",
      text: <>
        O crescimento do acervo aconteceu sem um planejamento, tornando a
        organização cada vez mais difícil.
      </>
    },
    solution: {
      icon: FolderKanban,
      text: <>
        Planejamento e reorganização completa do acervo conforme a realidade
        e as necessidades da instituição.
      </>
    },
  },
  {
    challange: {
      icon: BookOpen,
      title: "Crescimento sem planejamento",
      text: <>
        Novos materiais chegam constantemente, mas não existe um processo para
        manter o acervo organizado.
      </>
    },
    solution: {
      icon: FolderKanban,
      text: <>
        Consultoria e gestão contínua para acompanhar a evolução do acervo e
        manter sua organização ao longo do tempo.
      </>
    },
  },
  {
    challange: {
      icon: LibraryBig,
      title: "Implantação de uma nova biblioteca",
      text: <>
        Criar um novo acervo exige planejamento, padronização e organização
        desde o primeiro dia.
      </>
    },
    solution: {
      icon: FolderKanban,
      text: <>
        Planejamento da estrutura do acervo, organização física e definição
        dos processos necessários para iniciar a biblioteca corretamente.
      </>
    },
  },
];
