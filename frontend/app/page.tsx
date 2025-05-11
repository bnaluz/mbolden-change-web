import styles from './page.module.css';

export default function Page() {
  return (
    <div className={styles['hero-container']}>
      <div className={styles['hero-top-text']}>
        m<span style={{ fontWeight: 'bold' }}>BOLD</span>en CHANGE
      </div>
      <video className={styles['hero-video']} autoPlay loop muted playsInline>
        <source src="/coming-soon.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className={styles['hero-text']}>
        <h1>Coming soon</h1>
      </div>
      {/* <div className={styles.statementBanner}>
        <a href="/statement" target="_blank" rel="noopener noreferrer">
          <span className={styles.bannerText}>
            For a preview of the bold ideas and vision that drive us,{' '}
            <strong>read our stand on equality and opportunity</strong>
          </span>
        </a>
      </div> */}
    </div>
  );
}
