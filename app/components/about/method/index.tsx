import Step from './components/step';
import { ArrowRight } from 'lucide-react';
import { steps } from './data';

export default function Method() {
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <span className="uppercase tracking-widest text-violet-700 font-semibold text-sm">
          Método de trabalho
        </span>

        <h2 className="mt-3 text-4xl font-bold">
          Como desenvolvo cada projeto
        </h2>

        <div className="mt-20 flex flex-wrap justify-center items-center gap-x-4 gap-y-4 lg:gap-y-6">
          {steps.map((step) => (
            <div key={step.title} className='flex justify-center items-center gap-x-4 gap-y-4 lg:gap-y-6'>
              <Step key={step.title} title={step.title}>
                {step.text}
              </Step>

              {step.hasArrow && (
                <ArrowRight className="hidden lg:block text-violet-300" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};