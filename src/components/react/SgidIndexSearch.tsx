import SgidIndexSearchCard from '@components/react/SgidIndexSearchCard';
import { SgidCategory, type StewardshipRecord } from '@models/products/sgid/types';
import Fuse from 'fuse.js';
import startCase from 'lodash.startcase';
import { useEffect, useRef, useState } from 'react';

interface Props {
  records: StewardshipRecord[];
  astroSite: URL | undefined;
}
export default function SgidIndexSearch({ records, astroSite }: Props) {
  const [searchTerms, setSearchTerms] = useState('');
  const fuse = useRef<Fuse<unknown> | null>(null);

  useEffect(() => {
    if (records) {
      fuse.current = new Fuse(records, {
        minMatchCharLength: 2,
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

  const results = fuse.current && searchTerms.length ? fuse.current.search(searchTerms) : [];

  return (
    <div className="p-5">
      <input
        type="search"
        className="focus:border-primary-500 h-10 w-full rounded-md border border-zinc-300 px-2 py-1 text-zinc-700 shadow-sm transition-all duration-200 ease-in-out placeholder:text-zinc-400 focus:outline-none focus:ring focus:ring-primary/80 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:opacity-50 sm:text-sm"
        onChange={(e) => setSearchTerms(e.target.value)}
        onFocus={(e) => window.scrollTo(0, e.target.offsetTop - 30)}
      />

      <div className="mt-4 flex flex-wrap justify-center gap-2">
        {Object.keys(SgidCategory).map((category) => (
          <span
            key={category}
            className="rounded-md border border-primary bg-white px-2 py-1 text-sm shadow-sm dark:border-white/20 dark:bg-primary"
          >
            {startCase(category.toLowerCase().replaceAll('_', ' '))}
          </span>
        ))}
      </div>
      <hr className="my-8 h-px border-0 bg-primary/30 dark:bg-gray-700" />
      <div className="space-y-6 overflow-x-hidden">
        {results.slice(0, 15).map((result) => (
          <SgidIndexSearchCard
            astroSite={astroSite}
            record={result.item as StewardshipRecord}
            resultIndex={result.refIndex}
            key={result.refIndex}
          />
        ))}
      </div>
    </div>
  );
}
