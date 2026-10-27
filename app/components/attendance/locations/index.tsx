import { CheckCircle, Globe, MapPin } from 'lucide-react';
import { regions, remoteServices } from './data';

export default function Locations() {
  return (
    <section className="bg-stone-100 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <span className="uppercase tracking-widest text-primary-700 text-sm font-semibold">
            Abrangência
          </span>

          <h2 className="mt-3 text-4xl font-bold">
            Onde atendo
          </h2>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <div className="flex items-center gap-3 text-primary-700">
              <MapPin size={26} />
              <span className="font-semibold uppercase tracking-wide text-sm">
                Presencial e híbrido
              </span>
            </div>

            <p className="mt-6 leading-8 text-stone-600">
              Atendimento com acompanhamento técnico <b>diretamente na instituição</b>,
              desde a organização do acervo até a implantação de novos projetos.
            </p>

            <ul className="mt-8 space-y-4">
              {regions.map((region) => (
                <li
                  key={region}
                  className="flex items-center gap-3 rounded-xl border border-primary-100 bg-primary-50 px-5 py-4 font-medium"
                >
                  <MapPin size={18} className="shrink-0 text-primary-700" />
                  {region}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-sm">
            <div className="flex items-center gap-3 text-primary-700">
              <Globe size={26} />
              <span className="font-semibold uppercase tracking-wide text-sm">
                Remoto para todo o Brasil
              </span>
            </div>

            <p className="mt-6 leading-8 text-stone-600">
              Serviços que <b>não exigem a manipulação física dos materiais</b> podem
              ser realizados remotamente para instituições de todo o país.
            </p>

            <ul className="mt-8 space-y-4">
              {remoteServices.map((service) => (
                <li
                  key={service}
                  className="flex items-center gap-3"
                >
                  <CheckCircle size={20} className="shrink-0 text-secondary" />
                  {service}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
