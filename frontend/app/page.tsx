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
        <p>We are working hard to bring you our new site. Stay tuned!</p>
      </div>
    </div>
  );
}
