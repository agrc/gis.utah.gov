import SgidIndexSearchCard from '@components/react/SgidIndexSearchCard';
import { ChevronRightIcon } from '@heroicons/react/24/solid';
import { SgidCategory, type StewardshipRecord } from '@models/products/sgid/types';
import clsx from 'clsx';
import Fuse from 'fuse.js';
import startCase from 'lodash.startcase';
import { useEffect, useRef, useState } from 'react';

interface Props {
  records: StewardshipRecord[];
  astroSite: URL | undefined;
}

const limit = 15;

export default function SgidIndexSearch({ records, astroSite }: Props) {
  const [searchTerms, setSearchTerms] = useState('');
  const [categories, setCategories] = useState([] as string[]);
  const fuse = useRef<Fuse<unknown> | null>(null);

  useEffect(() => {
    if (records) {
      fuse.current = new Fuse(records, {
        minMatchCharLength: 2,
        threshold: 0.4,
        keys: [
          {
            name: 'displayName',
            weight: 3,
          },
          {
            name: 'tableName',
            weight: 2,
          },
          'category',
          'source',
          'description',
        ],
      });
    }
  }, [records, fuse.current]);

  let results = fuse.current && searchTerms.length ? fuse.current.search(searchTerms) : [];
  results = results.filter((result) => {
    const record = result.item as StewardshipRecord;

    if (categories.length === 0 || record.category === null) return true;

    return categories.includes(record.category);
  });

  const toggleCategory = (category: string) => {
    if (categories.includes(category)) {
      setCategories(categories.filter((c) => c !== category));
    } else {
      setCategories([...categories, category]);
    }
  };

  return (
    <div className="p-5">
      <input
        type="search"
        className="focus:border-primary-500 h-10 w-full rounded-md border border-zinc-300 px-2 py-1 text-zinc-700 shadow-sm transition-all duration-200 ease-in-out placeholder:text-zinc-400 focus:outline-none focus:ring focus:ring-primary/80 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:opacity-50 sm:text-sm"
        onChange={(e) => setSearchTerms(e.target.value)}
        onFocus={(e) => {
          window.scrollTo({ top: e.target.offsetTop - 30, behavior: 'smooth' });
        }}
        placeholder="dataset name, category, source, or description..."
      />

      <div className="relative mt-5 flex items-center gap-2">
        <div className="absolute left-0 z-10 h-full w-5 bg-gradient-to-r from-zinc-100 to-transparent dark:from-zinc-900"></div>
        <div className="absolute right-6 z-10 h-full w-5 bg-gradient-to-l from-zinc-100 to-transparent dark:from-zinc-900"></div>
        <div className="flex w-full gap-2 overflow-x-auto [-ms-overflow-style:-ms-autohiding-scrollbar] [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {Object.keys(SgidCategory).map((category) => {
            const loweredCategory = category.toLowerCase();
            const selected = categories.includes(loweredCategory);

            return (
              <button
                key={category}
                className={clsx(
                  'relative shrink-0 rounded-md border border-black/30 px-2 py-1 text-sm shadow-sm first:ml-2 last:mr-1 dark:border-white/20',
                  selected
                    ? 'bg-primary text-slate-50 dark:bg-accent dark:text-slate-800'
                    : 'bg-white  dark:bg-primary',
                )}
                onClick={() => toggleCategory(loweredCategory)}
              >
                {startCase(category.toLowerCase().replaceAll('_', ' '))}
              </button>
            );
          })}
        </div>
        <ChevronRightIcon className="size-6" />
      </div>

      <hr className="my-6 h-px border-0 bg-primary/30 dark:bg-gray-700" />

      <div className="space-y-6 overflow-x-hidden">
        {results.slice(0, limit).map((result) => (
          <SgidIndexSearchCard
            astroSite={astroSite}
            record={result.item as StewardshipRecord}
            resultIndex={result.refIndex}
            key={result.refIndex}
          />
        ))}
      </div>
      {results.length > limit && (
        <div className="mt-24 flex flex-col items-center">
          <div className="text-lg">
            Showing only <span className="font-bold text-primary dark:text-accent">{limit}</span> of{' '}
            <span className="font-bold text-primary dark:text-accent">{results.length}</span> results.
          </div>
          <div className="text-sm">Be more specific with your search terms to narrow the results.</div>
        </div>
      )}
    </div>
  );
}
