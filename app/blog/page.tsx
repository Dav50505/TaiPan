import BlogListingClient from './BlogListingClient';
import { getAllPosts } from '@/lib/blog';
import { buildPageMetadata } from '@/components/seo/Meta';

export const metadata = buildPageMetadata({
  title: 'Blog - Dim Sum Tips, Recipes & Sacramento Food News',
  description: 'Learn about authentic Cantonese dim sum, get insider tips for ordering like a pro, discover the history of dim sum, and stay updated on Sacramento food news.',
  path: '/blog',
  keywords: ['dim sum guide', 'how to order dim sum', 'cantonese food blog', 'sacramento restaurant blog'],
});

export default function BlogPage() {
  const posts = getAllPosts();

  return <BlogListingClient posts={posts} />;
}
