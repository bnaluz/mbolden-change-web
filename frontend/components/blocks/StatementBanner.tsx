import React from 'react';
import styles from './StatementBanner.module.css';
import type { StatementBanner as StatementBannerType } from '@/sanity/types';

type Props = {
  bannerData: StatementBannerType;
};

const StatementBanner = () => {
  return <section className={styles.banner}></section>;
};

export default StatementBanner;
