import ContactClient from './ContactClient';
import { pageMetadata } from '@/components/seo/Meta';

export const metadata = pageMetadata.contact();

export default function ContactPage() {
  return <ContactClient />;
}
