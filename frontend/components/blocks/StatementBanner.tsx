import Link from 'next/link';
import Headline from '../atoms/Headline';
import styles from './StatementBanner.module.css';
import type { StatementBanner as SB } from '@/sanity/types';

type PatchedStatementBanner = Omit<SB, 'cta'> & {
  cta?: SB['cta'] & {
    statement?: {
      slug?: string;
    };
  };
};

const StatementBanner = ({
  backgroundColor,
  body,
  cta,
  headline,
  textColor,
}: PatchedStatementBanner) => {
  const slug = cta?.statement?.slug;
  const label = cta?.label ?? 'Read more';

  return (
    <section
      className={styles.banner}
      style={{ backgroundColor, color: textColor }}
    >
      <div className={styles['banner-content']}>
        <Headline text={headline || ''} tag="h3" className={styles.headline} />
        {body && <p className={styles.body}>{body}</p>}
        {slug && (
          <Link
            href={`/statement/${slug}`}
            className={styles.cta}
            style={{ color: textColor }}
          >
            {label}
          </Link>
        )}
      </div>
    </section>
  );
};

export default StatementBanner;
