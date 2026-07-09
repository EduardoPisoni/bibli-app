import Plan from '../../shared/plan';

export default function Plans() {
  return (
    <section
      id="planos"
      className="bg-stone-100 py-24"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold">
            Planos de acompanhamento
          </h2>

          <p className="text-stone-600 mt-4">
            Após a organização inicial, continue contando com suporte
            especializado.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <Plan
            title="Essencial"
            items={[
              "Catalogação de novos livros",
              "Atualização do catálogo",
              "Suporte remoto",
            ]}
          />

          <Plan
            title="Profissional"
            featured
            items={[
              "Tudo do Essencial",
              "Organização periódica",
              "Consultoria técnica",
              "Inventário",
            ]}
          />

          <Plan
            title="Institucional"
            items={[
              "Visitas presenciais",
              "Planejamento anual",
              "Treinamento da equipe",
            ]}
          />
        </div>
      </div>
    </section>
  );
};