import LocationClient from './LocationClient';
import { pageMetadata } from '@/components/seo/Meta';

export const metadata = pageMetadata.location();

export default function SacramentoDimSumPage() {
  return <LocationClient />;
}
