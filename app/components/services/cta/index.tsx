import { BookOpen } from 'lucide-react';
import CustomLink from '../../shared/link';
import { HIERARCHY } from '@/app/_types/hierarchy';

export default function CTA() {
  return (
    <section className="bg-primary-800 text-white py-24">
      <div className="max-w-4xl mx-auto text-center px-6">
        <BookOpen
          className="mx-auto mb-6"
          size={48}
        />

        <h2 className="text-4xl font-bold">
          Pronto para dar o próximo passo?
        </h2>

        <CustomLink
          variant={HIERARCHY.SECONDARY}
          goTo="/contato"
          text='Solicitar orçamento'
          className="inline-flex items-center mt-10 px-8 py-4"
        />
      </div>
    </section>
  );
};