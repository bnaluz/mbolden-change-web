import React from 'react';
import classNames from 'classnames';
import type { Footer as FooterType } from '@/sanity/types';
import styles from './Footer.module.css';
import Grid from './Grid';
import GridItem from './GridItem';

type FooterProps = {
  footerData: FooterType;
};

const Footer = ({ footerData }: FooterProps) => {
  const yearString = new Date().getFullYear().toString();

  if (Array.isArray(footerData)) {
    return null;
  }

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>hi</div>
    </footer>
  );
};

export default Footer;
