import { source } from '@/lib/source';
import {
  DocsPage,
  DocsBody,
  DocsDescription,
  DocsTitle,
} from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';
import defaultMdxComponents from 'fumadocs-ui/mdx';

const PROJECT_NAME = ''

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full} breadcrumb={{ enabled: true, full: false, includeRoot: false, includeSeparator: true }} tableOfContent={{ style: 'clerk' }} tableOfContentPopover={{ style: 'clerk' }}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX components={{ ...defaultMdxComponents }} />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

function generateDescriptionFromBody(structuredData: { contents?: { content?: string }[] }) {
  const desc = structuredData?.contents?.[0]?.content || structuredData?.contents?.[1]?.content 
  if (desc && desc.length > 30) return desc
  else return null
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: `${page.data.title} | ${PROJECT_NAME}`,
    description: page.data.description,
    openGraph: {
      title: page.data.title,
      description: page.data.description || generateDescriptionFromBody(page.data.structuredData) || undefined,
    }
  };
}
