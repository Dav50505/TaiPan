/**
 * Breadcrumbs Component with Schema Markup
 * Displays navigation breadcrumbs and injects structured data
 */

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import JsonLd, { buildBreadcrumbSchema } from './JsonLd';

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbsProps {
  items?: BreadcrumbItem[];
  className?: string;
}

export default function Breadcrumbs({ items, className = '' }: BreadcrumbsProps) {
  const pathname = usePathname();

  // Auto-generate breadcrumbs from pathname if not provided
  const breadcrumbItems = items || generateBreadcrumbsFromPath(pathname);

  // Always include Home
  const fullBreadcrumbs: BreadcrumbItem[] = [
    { name: 'Home', url: '/' },
    ...breadcrumbItems,
  ];

  return (
    <>
      <JsonLd data={buildBreadcrumbSchema(fullBreadcrumbs)} />
      <nav aria-label="Breadcrumb" className={`text-sm ${className}`}>
        <ol className="flex items-center space-x-2 flex-wrap">
          {fullBreadcrumbs.map((item, index) => {
            const isLast = index === fullBreadcrumbs.length - 1;
            
            return (
              <li key={item.url} className="flex items-center">
                {index > 0 && (
                  <svg
                    className="w-4 h-4 mx-2 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
                {isLast ? (
                  <span className="text-white font-medium" aria-current="page">
                    {item.name}
                  </span>
                ) : (
                  <Link
                    href={item.url}
                    className="text-white hover:text-red-600 transition-colors"
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}

function generateBreadcrumbsFromPath(pathname: string): BreadcrumbItem[] {
  if (pathname === '/') return [];

  const segments = pathname.split('/').filter(Boolean);
  const breadcrumbs: BreadcrumbItem[] = [];

  let currentPath = '';
  for (const segment of segments) {
    currentPath += `/${segment}`;
    const name = formatSegmentName(segment);
    breadcrumbs.push({ name, url: currentPath });
  }

  return breadcrumbs;
}

function formatSegmentName(segment: string): string {
  return segment
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}
