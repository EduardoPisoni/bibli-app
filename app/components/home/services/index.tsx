import {
  BookOpen,
  Library,
  ClipboardCheck,
  Users,
} from "lucide-react";

import { HIERARCHY } from '@/app/_types/hierarchy';
import Card from '../../shared/card';
import CustomLink from '../../shared/link';

export default function Services() {
  return (
    <section
      id="servicos"
      className="flex flex-col items-center max-w-6xl mx-auto px-6 py-24"
    >
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold">
          Serviços especializados
        </h2>

        <p className="mt-4 text-stone-600">
          Soluções para organizar, estruturar e manter seu acervo sempre em
          dia.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <Card
          icon={<BookOpen className="text-secondary" />}
          title="Processamento Técnico"
          text="Organização, catalogação e classificação do acervo."
        />

        <Card
          icon={<Library className="text-secondary" />}
          title="Organização"
          text="Reestruturação física e lógica dos materiais."
        />

        <Card
          icon={<ClipboardCheck className="text-secondary" />}
          title="Consultoria"
          text="Planejamento e acompanhamento técnico."
        />

        <Card
          icon={<Users className="text-secondary" />}
          title="Gestão Contínua"
          text="Suporte, adições de material e gestão do acervo."
        />
      </div>

      <CustomLink 
        variant={HIERARCHY.PRIMARY}
        className="px-12 py-3 mt-10"
        goTo={"/servicos"}
        text={"Veja os detalhes de cada serviço"}
      />
    </section>
  );
};
