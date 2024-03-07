import type { Props as SectionProps } from '@components/page/Section.astro';

export const stripeSections = (sections: SectionProps[]) => {
  return sections.map((section, index: number) => {
    return {
      ...section,
      stripe: index % 2 === 0,
    };
  });
};

export const createIdFromTitle = (title: string) => {
  let kebab = title.toLowerCase().replace(/ /g, '-');
  kebab = kebab.replace(/[^a-zA-Z0-9-]/g, '');

  return kebab;
};

export const getDateParts = (date: Date) => {
  const day = date.toLocaleDateString('en-us', {
    day: 'numeric',
  });
  const month = date.toLocaleDateString('en-us', {
    month: 'short',
  });
  const year = date.toLocaleDateString('en-us', {
    year: 'numeric',
  });

  return {
    day,
    month,
    year,
  };
};
