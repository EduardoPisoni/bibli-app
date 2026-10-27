import PageHero from '../../components/shared/pageHero';
import Sections from '@/app/components/services/sections';
import Challenges from '@/app/components/services/challenges';
import Realities from '@/app/components/services/realities';
import WhyHire from '@/app/components/services/why-hire';
import CTA from '@/app/components/services/cta';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Serviços de biblioteconomia e gestão de acervos',
  description: 'Processamento técnico, catalogação, organização física do acervo, consultoria e gestão contínua de bibliotecas.',
  alternates: {
    canonical: '/servicos',
  },
};

export default function Services() {
  return (
    <>
      <PageHero
        title='Serviços'
        subtitle='Listagem e descrição dos serviços prestados'
      />

      <Sections />

      <Challenges />

      <Realities />

      <WhyHire />

      <CTA />
    </>
  );
}