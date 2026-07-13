import PageHero from '../../components/shared/pageHero';
import AboutMe from '@/app/components/about/aboutMe';
import Graduation from '@/app/components/about/graduation';
import Services from '@/app/components/about/services';
import Diferentials from '@/app/components/about/diferentials';
import Method from '@/app/components/about/method';
import CTA from '@/app/components/about/cta';

export default function About() {
  return (
    <>
      <PageHero
        title='Mariana Bertuol'
        subtitle='Quem sou eu, minha formação acadêmica e mais'
      />

      <AboutMe />

      <Graduation />

      <Services />

      <Diferentials />

      <Method />

      <CTA />
    </>
  );
}
