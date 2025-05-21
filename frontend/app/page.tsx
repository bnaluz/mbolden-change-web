import { getPage } from '@/lib/getPage';
import styles from './page.module.css';
import { PageBuilder } from '@/components/PageBuilder';

export default async function Page() {
  const page = await getPage('/');

  if (!page) {
    return <div>Page not found</div>;
  }

  return (
    <div className={styles['page']}>
      {page.content && <PageBuilder content={page.content} />}
    </div>
  );
}
