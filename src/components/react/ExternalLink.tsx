import clsx from 'clsx';

interface Props {
  href: string;
  type?: string;
  children: React.ReactNode;
}

export default function ExternalLink({ href, type, children }: Props) {
  return (
    <a
      href={href}
      className={clsx(['inline-flex flex-wrap items-center gap-x-1', type === 'custom' ? 'custom-style' : null])}
      rel="nofollow"
    >
      <span>{children}</span>
      <span aria-hidden="true">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-4"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
          ></path>
        </svg>
      </span>
      <span className="sr-only">, opens in a new tab</span>
    </a>
  );
}
