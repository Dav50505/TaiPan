import AboutClient from './AboutClient';
import { pageMetadata } from '@/components/seo/Meta';

export const metadata = pageMetadata.about();

export default function AboutPage() {
  return <AboutClient />;
}
