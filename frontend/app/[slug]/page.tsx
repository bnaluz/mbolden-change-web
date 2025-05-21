import { PageBuilder } from '@/components/PageBuilder';
import { getPage } from '@/lib/getPage';

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const page = await getPage((await params).slug);

  if (!page) {
    return <div>Page not found</div>;
  }

  return <div>{page.content && <PageBuilder content={page.content} />}</div>;
}
