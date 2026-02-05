import MenuPreview from '@/components/MenuPreview';
import { pageMetadata } from '@/components/seo/Meta';
import Breadcrumbs from '@/components/seo/Breadcrumbs';

export const metadata = pageMetadata.menu();

export default function MenuPage() {
  return (
    <main className="pt-20">
      <section className="bg-gradient-to-b from-red-600 to-red-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Breadcrumbs className="mb-4 text-red-100" />
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-4">Our Menu</h1>
            <p className="text-xl text-red-100 max-w-2xl mx-auto">
              Authentic dim sum, bakery items, and beverages made fresh daily
            </p>
          </div>
        </div>
      </section>
      <MenuPreview />
    </main>
  );
}
