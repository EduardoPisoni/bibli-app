export default function Process() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold">
          Como funciona
        </h2>

        <div className="grid md:grid-cols-4 gap-10 mt-16">
          {[
            "Diagnóstico",
            "Planejamento",
            "Execução",
            "Gestão Contínua",
          ].map((item, index) => (
            <div key={item}>
              <div className="w-16 h-16 rounded-full bg-violet-700 text-white flex items-center justify-center text-2xl font-bold mx-auto">
                {index + 1}
              </div>

              <h3 className="font-semibold mt-5">{item}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};