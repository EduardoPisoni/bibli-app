import {
  BookOpen,
  Library,
  FolderOpen,
  ClipboardCheck,
} from "lucide-react";
import Card from '../../shared/card';

export default function Services() {
  return (
    <section
      id="servicos"
      className="max-w-6xl mx-auto px-6 py-24"
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
          icon={<BookOpen />}
          title="Processamento Técnico"
          text="Organização, catalogação e classificação do acervo."
        />

        <Card
          icon={<FolderOpen />}
          title="Organização"
          text="Reestruturação física e lógica dos materiais."
        />

        <Card
          icon={<Library />}
          title="Implantação"
          text="Criação de bibliotecas e organização inicial."
        />

        <Card
          icon={<ClipboardCheck />}
          title="Consultoria"
          text="Planejamento e acompanhamento técnico."
        />
      </div>
    </section>
  );
};