import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import BlogLayout from '@/components/ui/BlogLayout';
import Link from 'next/link';
import Card from '@/components/ui/Card';

export const metadata = {
  title: 'Blog | CRM Construction',
  description: 'Expert advice on excavation, demolition, dumpster rentals, and more from San Diegos trusted construction professionals.',
};

export default function BlogIndex() {
  const postsDirectory = path.join(process.cwd(), 'src', 'app', 'blog', 'posts');
  
  let posts: Array<{
    slug: string;
    title: string;
    date: string;
    excerpt?: string;
  }> = [];
  
  if (fs.existsSync(postsDirectory)) {
    const filenames = fs.readdirSync(postsDirectory);
    
    posts = filenames
      .filter(filename => filename.endsWith('.mdx'))
      .map(filename => {
        const filePath = path.join(postsDirectory, filename);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data, content } = matter(fileContents);
        
        // Generate excerpt from content
        const excerpt = content
          .replace(/^#+\s+.*$/gm, '') // Remove headers
          .replace(/\*\*(.*?)\*\*/g, '$1') // Remove bold
          .replace(/\n+/g, ' ') // Replace newlines with spaces
          .trim()
          .substring(0, 200) + '...';
        
        return {
          slug: filename.replace('.mdx', ''),
          title: data.title,
          date: data.date,
          excerpt: excerpt,
        };
      })
      .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }
  
  return (
    <BlogLayout>
      <div className="max-w-4xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Construction Insights & Tips
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Expert advice on excavation, demolition, dumpster rentals, and more from San Diego's trusted construction professionals.
          </p>
        </div>

        {/* Blog Posts Grid */}
        {posts.length === 0 ? (
          <Card padding="lg">
            <p className="text-center text-gray-600">
              No blog posts yet. Check back soon for expert construction insights!
            </p>
          </Card>
        ) : (
          <div className="grid gap-8">
            {posts.map((post) => (
              <Card key={post.slug} padding="lg">
                <article className="group">
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                        <time dateTime={post.date}>
                          {new Date(post.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </time>
                      </div>
                      
                      <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-red-600 transition-colors">
                        <Link href={`/blog/${post.slug}`}>
                          {post.title}
                        </Link>
                      </h2>
                      
                      <p className="text-gray-600 mb-6 leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      <Link 
                        href={`/blog/${post.slug}`}
                        className="inline-flex items-center text-red-600 font-semibold hover:text-red-700 transition-colors"
                      >
                        Read More
                        <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              </Card>
            ))}
          </div>
        )}
      </div>
    </BlogLayout>
  );
}