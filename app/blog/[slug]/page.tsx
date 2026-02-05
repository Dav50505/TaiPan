import { getPostBySlug, getAllPostSlugs } from '@/lib/blog';
import BlogPostClient from './BlogPostClient';
import { buildPageMetadata } from '@/components/seo/Meta';
import { notFound } from 'next/navigation';
import { serialize } from 'next-mdx-remote/serialize';

export async function generateStaticParams() {
  const slugs = getAllPostSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  
  if (!post) {
    return {};
  }

  return buildPageMetadata({
    title: post.title,
    description: post.description,
    path: `/blog/${post.slug}`,
    keywords: post.keywords || [],
    image: post.image || '/bg-img/hero-img.webp',
    type: 'article',
    publishedTime: post.date,
  });
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  // Serialize MDX content on the server
  const mdxSource = await serialize(post.content);

  return <BlogPostClient post={post} mdxSource={mdxSource} />;
}
