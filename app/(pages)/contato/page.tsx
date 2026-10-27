import type { Metadata } from 'next';
import { Mail, Phone } from 'lucide-react';
import PageHero from '../../components/shared/pageHero';
import TrackedLink from '@/app/components/shared/trackedLink';
import { CONTACT } from '@/app/_config/site';

export const metadata: Metadata = {
  title: 'Contato',
  description: 'Entre em contato para solicitar um orçamento ou tirar dúvidas sobre os serviços.',
  alternates: {
    canonical: '/contato',
  },
};

export default function Contact() {
  return (
    <>
      <PageHero
        title='Vamos conversar?'
        subtitle='Entre em contato para solicitar um orçamento ou tirar dúvidas sobre os serviços.'
      />

      <section className="bg-white py-24 text-stone-800">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold">
            Contatos
          </h2>

          <p className="mt-4 text-stone-600">
            Escolha o canal de atendimento que preferir. Será um prazer conversar com você.
          </p>

          <div className="mt-16 flex flex-wrap items-stretch justify-center gap-10">

            {/* WhatsApp */}
            <div className="flex w-full max-w-sm flex-col items-center rounded-2xl border border-[#6dbbb2] bg-white p-8 shadow-sm">
              <div className="mb-5 rounded-full bg-green-100 p-4">
                <Phone className="text-[#128C7E]" size={28} />
              </div>

              <h3 className="text-2xl font-semibold">
                WhatsApp
              </h3>

              <span className="mt-2 text-sm font-medium uppercase tracking-wide text-[#128C7E]">
                Atendimento rápido
              </span>

              <p className="mt-6 text-center leading-7 text-stone-600">
                Solicite um orçamento, esclareça dúvidas ou converse sobre o seu
                projeto. Estou à disposição para entender as necessidades do seu
                acervo.
              </p>

              <TrackedLink
                href={CONTACT.whatsapp}
                event="contato_whatsapp"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-[#128C7E] px-6 py-3 font-semibold text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-[#0f766e]"
              >
                <Phone size={18} />
                Conversar no WhatsApp
              </TrackedLink>
            </div>

            {/* Email */}
            <div className="flex w-full max-w-sm flex-col items-center rounded-2xl border border-primary-200 bg-white p-8 shadow-sm">
              <div className="mb-5 rounded-full bg-primary-100 p-4">
                <Mail className="text-primary-700" size={28} />
              </div>

              <h3 className="text-2xl font-semibold">
                E-mail
              </h3>

              <span className="mt-2 text-sm font-medium uppercase tracking-wide text-primary-700">
                Atendimento detalhado
              </span>

              <p className="mt-6 text-center leading-7 text-stone-600">
                Envie sua solicitação com todas as informações sobre sua biblioteca
                ou instituição. Responderei o mais breve possível com uma proposta
                personalizada.
              </p>

              <TrackedLink
                href={`mailto:${CONTACT.email}`}
                event="contato_email"
                className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl border border-primary-700 bg-white px-6 py-3 font-semibold text-primary-700 shadow-sm transition-all hover:-translate-y-1 hover:bg-primary-700 hover:text-white"
              >
                <Mail size={18} />
                Enviar e-mail
              </TrackedLink>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}