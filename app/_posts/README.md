# Blog Posts Directory

This directory contains MDX blog posts for the Tai Pan Dim Sum & Bakery blog.

## How to Add a New Blog Post

1. Create a new `.mdx` file in this directory with a URL-friendly filename (e.g., `dim-sum-guide-sacramento.mdx`)

2. Add front matter at the top of the file with the following format:

```mdx
---
title: "Your Blog Post Title"
description: "A brief description of your post (150-160 characters for SEO)"
date: "2024-02-04"
author: "Author Name"
image: "/path/to/image.jpg"
keywords: ["keyword1", "keyword2", "keyword3"]
---

# Your Blog Post Title

Your blog post content goes here. You can use:

- Markdown formatting
- Images: ![Alt text](/path/to/image.jpg)
- Links: [Link text](https://example.com)
- Internal links: [Menu Page](/menu)
- Lists, code blocks, and more

## Headings

Use H2 (##) and H3 (###) for sections within your post.
```

3. Save the file and rebuild the site. The blog post will automatically:
   - Appear on the `/blog` page
   - Be accessible at `/blog/your-filename`
   - Be added to the sitemap
   - Include proper schema markup

## Example Blog Post Topics

- Guide to ordering dim sum
- History of Cantonese cuisine
- Spotlight on specific menu items
- Sacramento food scene news
- Dim sum preparation techniques
- Seasonal specials announcements

## Front Matter Fields

- **title** (required): The blog post title
- **description** (required): SEO description (aim for 150-160 characters)
- **date** (required): Publication date in YYYY-MM-DD format
- **author** (required): Author name
- **image** (optional): Featured image path (recommended for SEO)
- **keywords** (optional): Array of SEO keywords
