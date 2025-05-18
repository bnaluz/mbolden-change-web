import React from 'react';
import styles from './StatementBanner.module.css';
import type { StatementBanner as StatementBannerType } from '@/sanity/types';
import Headline from '../atoms/Headline';
import { LinkAtom } from '../atoms/Link';
import type { ReferenceType } from '../atoms/Link';

const StatementBanner = ({
  backgroundColor,
  body,
  cta,
  headline,
  textColor,
  title,
  _type,
}: StatementBannerType) => {
  return (
    <section
      className={styles.banner}
      style={{ backgroundColor: `${backgroundColor}` }}
    >
      <div
        className={styles['banner-content']}
        style={{ color: `${textColor}` }}
      >
        <Headline
          text={headline || ''}
          tag={'h3'}
          className={styles.headline}
        />
        <div>
          <p className={styles.body}>{body}</p>
          <button style={{ color: `${textColor}` }} className={styles.button}>
            {cta?.title}
          </button>
        </div>
      </div>
    </section>
  );
};

export default StatementBanner;
// TODO: LinkAtom has type errors for reference. Need to configure the internalExternal link to work with link atom correctly. Assign a button?
