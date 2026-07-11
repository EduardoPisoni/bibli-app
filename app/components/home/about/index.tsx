import {
  BookOpen,
  CheckCircle,
} from "lucide-react";

export default function About() {
  return (
    <section
      id="sobre"
      className="max-w-5xl mx-auto px-6 py-24 text-center"
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
            className="bg-white rounded-xl shadow p-6"
          >
            <CheckCircle className="mx-auto text-violet-700" />
            <p className="mt-4 font-medium">{item}</p>
          </div>
        ))}
      </div>
    </section>
  );
};