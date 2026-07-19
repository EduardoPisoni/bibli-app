import {
  BookOpen,
  CheckCircle,
} from "lucide-react";
import { HIERARCHY } from '@/app/_types/hierarchy';
import CustomLink from '../../shared/link';

export default function About() {
  return (
    <section
      id="sobre"
      className="flex flex-col items-center max-w-5xl mx-auto px-6 py-24 text-center"
    >
      <h2 className="text-4xl font-bold">
        Sobre a profissional
      </h2>

      <p className="mt-8 leading-8 text-stone-600 text-lg">
        Bibliotecária especializada em organização, catalogação e gestão de
        acervos, atuando com soluções personalizadas para escolas,
        universidades, empresas e instituições culturais.
      </p>

      <div className="grid md:grid-cols-3 gap-6 mt-14">
        {[
          "Organização profissional",
          "Atendimento personalizado",
          "Projetos sob medida",
        ].map((item) => (
          <div
            key={item}
            className="bg-white rounded-xl shadow p-6 transition hover:-translate-y-1 hover:shadow-lg"
          >
            <CheckCircle className="mx-auto text-secondary" />
            <p className="mt-4 font-medium">{item}</p>
          </div>
        ))}
      </div>

      <CustomLink 
        variant={HIERARCHY.PRIMARY}
        className="px-12 py-3 mt-10"
        goTo={"/sobre"}
        text={"Saiba mais"}
      />
    </section>
  );
};
