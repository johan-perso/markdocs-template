import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/app/layout.config';
import { source } from '@/lib/source';

export default function Layout({ children }) {
  return (
    <DocsLayout tree={source.pageTree} sidebar={{ enabled: true }} {...baseOptions}>
      {children}
    </DocsLayout>
  );
}
