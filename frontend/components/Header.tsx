'use client'; // lets us use state in the component

import React, { useState } from 'react';
import Link from 'next/link';
import Grid from './Grid';
import GridItem from './GridItem';
import SanityNextImage from './SanityNextImage';
import { Header as HeaderType } from '@/sanity/types';
import { LinkAtom, ReferenceType } from './atoms/Link';
import styles from './Header.module.css';

type HeaderProps = { headerData: HeaderType };

export default function Header({ headerData }: HeaderProps) {
  const [open, setOpen] = useState(false); /* NEW */

  return (
    <header className={styles.header}>
      <Grid>
        <GridItem desktopSpan={12} mobileSpan={12}>
          <nav
            role="navigation"
            aria-label="main-navigation"
            className={styles.nav}
          >
            {/* --- logo -------------------------------------------------- */}
            <Link href="/" className={styles.logo} aria-label="Home">
              {headerData.logo && (
                <div className={styles.logoWrapper}>
                  <SanityNextImage
                    image={{ ...headerData.logo, asset: headerData.logo.asset }}
                  />
                </div>
              )}
            </Link>

            {/* --- hamburger button  (only shown on ≤767 px) ------------- */}
            <button
              className={styles.hamburger}
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen(!open)}
            >
              <span className={styles.bar} />
              <span className={styles.bar} />
              <span className={styles.bar} />
            </button>

            {/* --- link list  ------------------------------------------- */}
            <ul className={`${styles.linkList} ${open ? styles.open : ''}`}>
              {headerData.navigationLinks?.map((link, i) => (
                <li key={i}>
                  <LinkAtom
                    isExternalLink={link.isExternalLink}
                    reference={
                      link.reference && 'slug' in link.reference
                        ? (link.reference as ReferenceType)
                        : undefined
                    }
                    target={link.target}
                    url={link.url}
                    title={link.title}
                    ariaLabel={link.title}
                    className={styles.headerLink}
                  />
                </li>
              ))}

              {/* donate CTA keeps its angled styling */}
              {headerData.donateCTA && (
                <li>
                  <LinkAtom
                    isExternalLink={
                      headerData.donateCTA.buttonLink?.isExternalLink
                    }
                    reference={
                      headerData.donateCTA.buttonLink?.reference &&
                      'slug' in headerData.donateCTA.buttonLink.reference
                        ? (headerData.donateCTA.buttonLink
                            .reference as ReferenceType)
                        : undefined
                    }
                    target={headerData.donateCTA.buttonLink?.target}
                    url={headerData.donateCTA.buttonLink?.url}
                    title={headerData.donateCTA.text}
                    ariaLabel={headerData.donateCTA.buttonLink?.title}
                    className={styles.donateButton}
                  />
                </li>
              )}
            </ul>
          </nav>
        </GridItem>
      </Grid>
    </header>
  );
}
