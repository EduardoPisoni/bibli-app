import { ArrowLeftRight, Building2, Laptop } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';

export type Modality = {
  icon: LucideIcon;
  title: string;
  text: ReactNode;
}

export const modalities: Modality[] = [
  {
    icon: Building2,
    title: "Presencial",
    text: <>
      Acompanhamento técnico <b>diretamente na instituição</b>, desde a
      organização do acervo até a implantação de novos projetos.
    </>,
  },
  {
    icon: ArrowLeftRight,
    title: "Híbrido",
    text: <>
      Combina <b>etapas presenciais</b> na instituição com <b>atividades
      técnicas realizadas a distância</b>, conforme a necessidade do projeto.
    </>,
  },
  {
    icon: Laptop,
    title: "Remoto",
    text: <>
      Para serviços que <b>não exigem a manipulação física</b> dos materiais,
      como catalogação, consultoria e gestão técnica de sistemas.
    </>,
  },
];
