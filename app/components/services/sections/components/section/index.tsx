import { CheckCircle } from 'lucide-react';
import type { Section } from '../../data';

type Props = {
  sectionProp: Section;
  variant?: 'white' | 'stone';
}

export default function Section({ sectionProp, variant = 'white' }: Props) {
  const { icon: Icon, ...section } = sectionProp;

  const cssBg = variant === 'white' ? 'bg-white' : 'bg-stone-100';

  return (
    <section className={`py-24 ${cssBg}`}>
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <div className="w-20 h-20 rounded-2xl bg-primary-100 flex items-center justify-center">
              <Icon className="text-primary-700" size={38} />
            </div>

            <h2 className="mt-8 text-4xl font-bold">
              {section.title}
            </h2>

            <p className="mt-6 text-stone-600 leading-8">
              {section.text}
            </p>
          </div>

          <div className="flex-1 space-y-8">
            <div>
              <h3 className="text-2xl font-semibold">
                O que é?
              </h3>

              <p className="mt-3 leading-8 text-stone-600">
                {section.what}
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold">
                Como funciona?
              </h3>

              <p className="mt-3 leading-8 text-stone-600">
                {section.how}
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-semibold">
                Benefícios
              </h3>

              <div className="grid md:grid-cols-2 gap-4 mt-6">
                {section.beneficts.map((benefict, i) => (
                  <div className='flex gap-2' key={i}>
                    <CheckCircle className="text-secondary w-5" />
                    {benefict}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};