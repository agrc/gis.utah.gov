import type { Props as SectionProps } from '@components/pages/Section.astro';

export const stripeSections = (sections: SectionProps[]) => {
  return sections.map((section, index: number) => {
    return {
      ...section,
      stripe: index % 2 === 0,
    };
  });
}

export const createIdFromTitle = (title: string) => {
  let kebab = title.toLowerCase().replace(/ /g, '-');
  kebab = kebab.replace(/[^a-zA-Z0-9-]/g, '');

  return kebab;
}
