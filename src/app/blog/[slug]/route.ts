import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
) {
  // This forces Next.js to recognize this as a route
  return NextResponse.redirect(new URL(`/blog/${params.slug}`, request.url));
}

// Force static generation
export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'src', 'app', 'blog', 'posts');
  
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  
  const filenames = fs.readdirSync(postsDirectory);
  
  return filenames
    .filter(filename => filename.endsWith('.mdx'))
    .map(filename => ({
      slug: filename.replace('.mdx', '')
    }));
}