import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';
import BlogLayout from '@/components/ui/BlogLayout';
import { remark } from 'remark';
import html from 'remark-html';

// Generate all blog post routes at build time
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

// Generate metadata for SEO
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const postsDirectory = path.join(process.cwd(), 'src', 'app', 'blog', 'posts');
  const filePath = path.join(postsDirectory, `${params.slug}.mdx`);
  
  if (!fs.existsSync(filePath)) {
    return {
      title: 'Blog Post Not Found | CRM Construction',
    };
  }
  
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data } = matter(fileContents);
  
  return {
    title: `${data.title} | CRM Construction`,
    description: `Read about ${data.title} from CRM Construction in San Diego`,
  };
}

export default async function BlogPost({ params }: { params: { slug: string } }) {
  const postsDirectory = path.join(process.cwd(), 'src', 'app', 'blog', 'posts');
  const filePath = path.join(postsDirectory, `${params.slug}.mdx`);
  
  if (!fs.existsSync(filePath)) {
    notFound();
  }
  
  const fileContents = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContents);
  
  // Convert MDX to HTML
  const processedContent = await remark()
    .use(html)
    .process(content);
  const contentHtml = processedContent.toString();
  
  const formattedDate = new Date(data.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
  
  return (
    <BlogLayout>
      <article className="max-w-4xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {data.title}
          </h1>
          <time dateTime={data.date} className="text-gray-600">
            {formattedDate}
          </time>
        </header>
        
        <div 
          className="prose prose-lg max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-strong:text-gray-900 prose-a:text-red-600 prose-a:no-underline hover:prose-a:underline"
          dangerouslySetInnerHTML={{ __html: contentHtml }} 
        />
      </article>
    </BlogLayout>
  );
}