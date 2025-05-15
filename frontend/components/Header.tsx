import React from 'react';
import { Header as HeaderType } from '@/sanity/types';
import styles from './Header.module.css';
import Grid from './Grid';
import GridItem from './GridItem';
import Link from 'next/link';
import SanityNextImage from './SanityNextImage';
import { LinkAtom } from './atoms/Link';
import { ReferenceType } from './atoms/Link';

type HeaderProps = {
  headerData: HeaderType;
};

const Header = ({ headerData }: HeaderProps) => {
  return (
    <header className={styles['header']}>
      <Grid>
        <GridItem desktopSpan={12} mobileSpan={12}>
          <nav role="navigation" aria-label="main-navigation">
            <Link href="/" className={styles.logo} aria-label="Home">
              {headerData.logo && (
                <div className={styles['logoWrapper']}>
                  <SanityNextImage
                    image={{
                      ...headerData.logo,
                      asset: headerData.logo.asset || undefined,
                    }}
                  />
                </div>
              )}
            </Link>
            {headerData.navigationLinks &&
              headerData.navigationLinks.map((link, i) => (
                <LinkAtom
                  key={i}
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
                  className={styles['header-link']}
                />
              ))}
            {headerData.donateCTA && (
              <LinkAtom
                isExternalLink={headerData.donateCTA.buttonLink?.isExternalLink}
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
                className={styles['donate-button']}
              />
            )}
          </nav>
        </GridItem>
      </Grid>
    </header>
  );
};

export default Header;
