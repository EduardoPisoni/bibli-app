import { BookOpen, ClipboardCheck, Library, Users } from 'lucide-react';

import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';

export type Section = {
  icon: LucideIcon;
  title: string;
  text: ReactNode;
  what: ReactNode;
  how: ReactNode;
  beneficts: ReactNode[];
}

export const sections: Section[] = [
  {
    icon: BookOpen,
    title: "Processamento Técnico",
    text: <>
      Organize seu acervo seguindo padrões técnicos para facilitar a
      identificação, localização e recuperação das informações.
    </>,
    what: <>
      A catalogação consiste na descrição física de cada material do
      acervo, permitindo que ele seja identificado e localizado de forma
      padronizada. A classificação, por sua vez, é a organização por assunto das coleções.
    </>,
    how: <>
      Cada obra é analisada individualmente para receber classificação,
      indexação, identificação e demais informações necessárias para sua
      organização no acervo.
    </>,
    beneficts: [
      "Organização padronizada.",
      "Identificação de todos os materiais.",
      "Melhor controle do acervo.",
    ]
  },
  {
    icon: Library,
    title: "Organização de Acervos",
    text: <>
      Reorganização física do seu acervo utilizando identificação, etiquetas e disposição nas estantes.
    </>,
    what: <>
      Organize seu acervo de forma prática e padronizada, facilitando a localização dos materiais
      e proporcionando uma melhor experiência para usuários e equipe.
    </>,
    how: <>
      Cada acervo é analisado individualmente, considerando o espaço disponível,
      a disposição das estantes, a organização existente e as necessidades da instituição.
      A partir dessa análise, é desenvolvido um planejamento para reorganizar o acervo de
      forma eficiente e funcional.
    </>,
    beneficts: [
      "Distribuição planejada.",
      "Localização rápida dos materiais.",
      "Facilidade para usuários e equipe.",
    ]
  },
  {
    icon: ClipboardCheck,
    title: "Consultoria",
    text: <>
      Diagnóstico, planejamento e orientação técnica para melhorar a organização, o uso
      e o desenvolvimento do acervo.
      <br />
      <br />
      A consultoria ajuda a tomar decisões com mais segurança, garantindo que o desenvolvimento
      do acervo aconteça de forma planejada e alinhada às necessidades da instituição.
    </>,
    what: <>
      A consultoria é um serviço de análise e orientação voltado para instituições que desejam
      melhorar a organização, o uso e o desenvolvimento de seus acervos.
      A partir de um diagnóstico da situação atual, são identificadas oportunidades de melhoria
      e elaborado um plano de ação personalizado.
    </>,
    how: <>
      O trabalho inicia com uma análise da realidade da instituição, considerando a organização
      atual do acervo, sua utilização e as necessidades dos usuários. Com base nesse levantamento,
      são elaborados relatórios, orientações técnicas e recomendações para aprimorar a gestão e
      apoiar o crescimento da coleção.
    </>,
    beneficts: [
      "Identificação de oportunidades de melhoria.",
      "Planejamento para expansão do acervo.",
      "Apoio na tomada de decisões.",
      "Melhor aproveitamento dos recursos disponíveis.",
    ]
  },
  {
    icon: Users,
    title: "Gestão Contínua",
    text: <>
      Após a organização inicial, continuo acompanhando o desenvolvimento do acervo para garantir
      que ele permaneça organizado, atualizado e alinhado às necessidades da instituição.
      <br />
      <br />
      <b>Uma biblioteca é um ambiente vivo. </b>
      Novos materiais chegam, outros deixam de fazer sentido e as necessidades mudam com o tempo.
      A gestão contínua garante que o acervo acompanhe essa evolução.
    </>,
    what: <>
      A gestão contínua é um serviço de acompanhamento periódico que garante a manutenção da
      organização do acervo, a inclusão de novos materiais e o suporte técnico sempre que
      necessário.
    </>,
    how: <>
      Após a conclusão do projeto inicial, é definido um plano de acompanhamento conforme as
      necessidades da instituição. As visitas ou atendimentos podem ocorrer periodicamente para
      inclusão de novos materiais, reorganização do acervo e suporte técnico.
    </>,
    beneficts: [
      "Acervo sempre atualizado.",
      "Organização mantida ao longo do tempo.",
      "Inclusão de novos materiais sem perder o padrão.",
      "Suporte técnico sempre que necessário.",
    ]
  },
]