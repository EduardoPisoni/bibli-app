import { MessageCircleMore } from 'lucide-react';
import CustomLink from '@/app/components/shared/link';

export default function ExtraCard() {
  return (
    <div className="rounded-2xl border-2 border-dashed border-primary-300 bg-primary-50 p-8 text-center flex flex-col justify-center">
      <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 text-primary-700">
        <MessageCircleMore size={32} />
      </div>

      <h3 className="text-xl font-semibold">
        Seu caso é diferente?
      </h3>

      <p className="mt-4 leading-7 text-stone-600">
        Cada projeto é único. Entre em contato para conversarmos sobre a sua
        necessidade e encontrarmos a melhor solução.
      </p>

      <CustomLink
        goTo="/contato"
        text="Entrar em contato"
        className="mt-8"
      />
    </div>
  );
};