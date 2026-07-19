import { HeartHandshake } from 'lucide-react';
import CustomLink from '../../shared/link';
import { HIERARCHY } from '@/app/_types/hierarchy';

export default function CTA() {
  return (
    <section className="bg-primary-800 text-white py-24">
      <div className="flex flex-col items-center max-w-4xl mx-auto text-center px-6">
        <HeartHandshake
          className="mx-auto mb-6"
          size={48}
        />

        <h2 className="text-4xl font-bold">
          Vamos conversar sobre o seu projeto?
        </h2>

        <p className="mt-6 text-primary-200 leading-8">
          Será um prazer conhecer seu contexto, entender suas necessidades e
          desenvolver uma solução personalizada para o seu acervo.
        </p>

        <CustomLink
          variant={HIERARCHY.SECONDARY}
          className="px-12 py-3 mt-10"
          goTo="/contato"
          text="Entrar em contato"
        />
      </div>
    </section>
  );
};