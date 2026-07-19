'use client'

import {
  Phone,
  Mail,
  BookOpen,
} from "lucide-react";

import { HIERARCHY } from '@/app/_types/hierarchy';
import { sendGAEvent } from '@next/third-parties/google';
import CustomLink from '../../shared/link';

export default function CTA() {
  return (
    <section
      id="contato"
      className="bg-primary-800 text-white py-24"
    >
      <div className="max-w-3xl mx-auto text-center px-6">
        <BookOpen
          className="mx-auto mb-6"
          size={48}
        />

        <h2 className="text-4xl font-bold">
          Vamos conversar?
        </h2>

        <p className="mt-6 text-lg text-primary-100">
          Solicite um orçamento ou tire dúvidas sobre os serviços.
        </p>

        <div className="flex justify-center gap-6 mt-12 flex-wrap">
          <CustomLink
            variant={HIERARCHY.SECONDARY}
            goTo="/contato"
            text={'Entrar em contato'}              
          />
        </div>
      </div>
    </section>
  );
};
