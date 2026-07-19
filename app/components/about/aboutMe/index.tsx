import Image from 'next/image';

export default function AboutMe() {
  return (
    <section className="bg-white py-24 text-stone-800">
      <div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16">
        <Image
          src="/images/Mariana.png"
          alt="Bibliotecária"
          className="w-80 rounded-3xl shadow-xl"
          width={340}
          height={340}
        />

        <div>
          <span className="uppercase tracking-widest text-primary-700 text-sm font-semibold">
            Sobre mim
          </span>

          <h2 className="mt-3 text-4xl font-bold">
            Cuidar da informação é cuidar do conhecimento.
          </h2>

          <p className="mt-8 leading-8 text-stone-600">
            Sou bibliotecária e atuo na organização,
            catalogação e gestão de acervos para instituições,
            escolas, empresas e coleções particulares.

            Meu objetivo é desenvolver soluções que tornem o
            acesso à informação mais eficiente, organizado e
            acessível para todos os usuários.
          </p>
        </div>
      </div>
    </section>
  );
};