import type { ReactNode } from 'react';

interface Props {
  label?: string;
  children: ReactNode;
  className?: string;
}

export default function InfoPill({ label, children, className = '' }: Props) {
  return (
    <div
      className={`rounded border border-dashed border-secondary/10 px-1 py-0.5 text-sm dark:border-accent/30 ${className}`}
    >
      {label ? <span>{label}: </span> : null}
      <span className="font-semibold text-secondary dark:text-white">{children}</span>
    </div>
  );
}
