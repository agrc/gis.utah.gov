import Tooltip from '@components/react/Tooltip';

export default function ShelvedPill() {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded bg-amber-200 px-2 py-0.5 text-xs font-semibold text-amber-900 shadow-sm ring-1 ring-amber-300/30 dark:bg-amber-700 dark:text-amber-50`}
    >
      <a
        href="/documentation/policy/sgid/#dataset-deprecation-and-removal"
        className="custom-style rounded hover:underline focus:outline-none focus:ring-1 focus:ring-accent"
      >
        <Tooltip content="This dataset is an older dataset that we have removed from the SGID and 'shelved' in ArcGIS Online. There may (or may not) be a newer vintage of this dataset in the SGID.">
          Shelved
        </Tooltip>
      </a>
    </span>
  );
}
