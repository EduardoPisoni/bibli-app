import { isEven } from '@/app/_utils/numbers';
import Section from './components/section';
import { sections } from './data';

export default function Sections() {
  return (
    <>
      {sections.map((section, i) => (
        <Section 
          key={i}
          variant={isEven(i) ? 'white' : 'stone'}
          sectionProp={section}
        />
      ))}
    </>
  );
};