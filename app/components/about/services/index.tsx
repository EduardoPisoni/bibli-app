import { HIERARCHY } from '@/app/_types/hierarchy';
import CustomLink from '../../shared/link';
import ServiceCard from './components/card';
import { services } from './data';

export default function Services() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto flex max-w-6xl flex-col items-center px-6">
        <div className="text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-primary-700">
            Especialidades
          </span>

          <h2 className="mt-3 text-4xl font-bold">
            Áreas de atuação
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title }) => (
            <ServiceCard
              key={title}
              icon={<Icon />}
              title={title}
            />
          ))}
        </div>

        <CustomLink
          variant={HIERARCHY.PRIMARY}
          className="mt-10 px-12 py-3"
          goTo="/servicos"
          text="Saiba mais"
        />
      </div>
    </section>
  );
}
