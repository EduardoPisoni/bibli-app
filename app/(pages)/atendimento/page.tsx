import PageHero from '../../components/shared/pageHero';
import Modalities from '@/app/components/attendance/modalities';
import Locations from '@/app/components/attendance/locations';
import CTA from '@/app/components/attendance/cta';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Atendimento presencial, híbrido e remoto',
  description: 'Atendimento presencial e híbrido em Porto Alegre, Novo Hamburgo, Região Metropolitana e Caxias do Sul, e remoto para instituições de todo o Brasil.',
  alternates: {
    canonical: '/atendimento',
  },
};

export default function Attendance() {
  return (
    <>
      <PageHero
        title='Atendimento'
        subtitle='Presencial, híbrido ou remoto: a modalidade ideal para cada projeto'
      />

      <Modalities />

      <Locations />

      <CTA />
    </>
  );
}
