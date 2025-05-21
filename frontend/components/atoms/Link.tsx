import Link from 'next/link';
import { InternalOrExternalLink as InternalOrExternalLinkType } from '@/sanity/types';

type LinkAtomProps = Omit<InternalOrExternalLinkType, 'reference' | '_type'> & {
  className?: string;
  ariaLabel?: string;
  reference?: ReferenceType;
  children?: React.ReactNode;
};

export type ReferenceType = {
  _type: string;
  slug: {
    current: string;
  };
};

export const LinkAtom = ({
  isExternalLink,
  reference,
  target,
  url,
  title,
  className,
  ariaLabel,
}: LinkAtomProps) => {
  const linkContent = <span className={className}>{title}</span>;

  if (isExternalLink && url) {
    return (
      <a
        href={url}
        target={target}
        rel="noopener noreferrer"
        aria-label={ariaLabel}
      >
        {linkContent}
      </a>
    );
  }

  return (
    <Link href={reference?.slug.current!} aria-label={ariaLabel}>
      {linkContent}
    </Link>
  );
};
