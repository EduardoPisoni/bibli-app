import {
  BookOpen,
  Library,
  FolderOpen,
  ClipboardCheck,
  Users,
} from "lucide-react";
import Card from '../../shared/card';
import Link from 'next/link';

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
          icon={<BookOpen />}
          title="Processamento Técnico"
          text="Organização, catalogação e classificação do acervo."
        />

        <Card
          icon={<Library />}
          title="Organização"
          text="Reestruturação física e lógica dos materiais."
        />

        <Card
          icon={<ClipboardCheck />}
          title="Consultoria"
          text="Planejamento e acompanhamento técnico."
        />

        <Card
          icon={<Users />}
          title="Gestão Contínua"
          text="Suporte, adições de material e gestão do acervo."
        />
      </div>

      <Link
        href="/servicos"
        className="inline-flex items-center gap-2 mt-10 rounded-xl bg-violet-700 px-12 py-3 font-semibold text-white transition hover:scale-105"
      >
        Saiba mais
      </Link>
    </section>
  );
};