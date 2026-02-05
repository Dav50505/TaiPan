import FAQClient from './FAQClient';
import { pageMetadata } from '@/components/seo/Meta';

export const metadata = pageMetadata.faq();

export default function FAQPage() {
  return <FAQClient />;
}
