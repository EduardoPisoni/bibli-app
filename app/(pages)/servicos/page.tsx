import PageHero from '../../components/shared/pageHero';
import Sections from '@/app/components/services/sections';
import Challenges from '@/app/components/services/challenges';
import Realities from '@/app/components/services/realities';
import WhyHire from '@/app/components/services/why-hire';
import CTA from '@/app/components/services/cta';

export default function About() {
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