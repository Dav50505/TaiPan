'use client';

import Image from 'next/image';
import Link from 'next/link';
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote';
import Breadcrumbs from '@/components/seo/Breadcrumbs';
import JsonLd, { buildArticleSchema } from '@/components/seo/JsonLd';
import { BlogPost } from '@/lib/blog';

interface BlogPostClientProps {
  post: BlogPost;
  mdxSource: MDXRemoteSerializeResult;
}

const components = {
  h1: (props: any) => <h1 className="text-4xl font-bold text-gray-900 mb-6 mt-8" {...props} />,
  h2: (props: any) => <h2 className="text-3xl font-bold text-gray-900 mb-4 mt-8" {...props} />,
  h3: (props: any) => <h3 className="text-2xl font-bold text-gray-900 mb-3 mt-6" {...props} />,
  p: (props: any) => <p className="text-gray-700 text-lg mb-6 leading-relaxed" {...props} />,
  a: (props: any) => <Link className="text-red-600 hover:text-red-700 font-medium underline" {...props} />,
  ul: (props: any) => <ul className="list-disc list-inside mb-6 space-y-2" {...props} />,
  ol: (props: any) => <ol className="list-decimal list-inside mb-6 space-y-2" {...props} />,
  li: (props: any) => <li className="text-gray-700 text-lg" {...props} />,
  blockquote: (props: any) => (
    <blockquote className="border-l-4 border-red-600 pl-6 py-2 my-6 italic text-gray-700" {...props} />
  ),
  code: (props: any) => (
    <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-red-600" {...props} />
  ),
};

export default function BlogPostClient({ post, mdxSource }: BlogPostClientProps) {
  return (
    <>
      <JsonLd
        data={buildArticleSchema({
          title: post.title,
          description: post.description,
          publishedDate: post.date,
          authorName: post.author,
          image: post.image,
        })}
      />
      <main className="pt-20">
        {/* Hero Section */}
        {post.image && (
          <section className="relative h-[400px] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-black/50" />
            </div>
            <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
              <Breadcrumbs
                items={[
                  { name: 'Blog', url: '/blog' },
                  { name: post.title, url: `/blog/${post.slug}` },
                ]}
                className="justify-center text-gray-300 mb-4"
              />
            </div>
          </section>
        )}

        {/* Article Content */}
        <article className="py-16 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {!post.image && (
              <Breadcrumbs
                items={[
                  { name: 'Blog', url: '/blog' },
                  { name: post.title, url: `/blog/${post.slug}` },
                ]}
                className="mb-8"
              />
            )}

            <header className="mb-12">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                {post.title}
              </h1>
              <div className="flex items-center text-gray-600">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                {post.author && (
                  <>
                    <span className="mx-2">•</span>
                    <span>By {post.author}</span>
                  </>
                )}
              </div>
            </header>

            <div className="prose prose-lg max-w-none">
              <MDXRemote {...mdxSource} components={components} />
            </div>

            {/* CTA */}
            <div className="mt-16 bg-red-50 border-2 border-red-600 rounded-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Experience Authentic Dim Sum?
              </h3>
              <p className="text-gray-700 mb-6">
                Visit Taipan Dim Sum & Bakery on Freeport Boulevard in Sacramento or order online for pickup or delivery.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/menu"
                  className="inline-block text-center bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition-colors"
                >
                  View Our Menu
                </Link>
                <a
                  href="https://www.doordash.com/store/taipan-dim-sum-&-bakery-sacramento-sacramento-37986657/86387556/?pickup=true"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-center border-2 border-red-600 text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-red-600 hover:text-white transition-colors"
                >
                  Order Online
                </a>
              </div>
            </div>
          </div>
        </article>

        {/* Back to Blog */}
        <section className="py-12 bg-gray-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Link
              href="/blog"
              className="inline-flex items-center text-red-600 hover:text-red-700 font-medium"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
