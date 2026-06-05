import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export function BlogPostPage({ slug }) {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/blog/${slug}`);
        if (!response.ok) {
          throw new Error("Post not found");
        }
        const data = await response.json();
        
        const formattedData = {
          ...data,
          id: data.slug,
          image: data.coverImage || "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
          excerpt: data.content ? data.content.replace(/<[^>]+>/g, '').substring(0, 150) + "..." : "",
          readTime: `${Math.max(1, Math.ceil((data.content || "").split(' ').length / 200))} min read`,
          date: new Date(data.createdAt).toLocaleDateString('en-US', {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
          })
        };
        
        setPost(formattedData);
      } catch (error) {
        console.error("Error fetching post:", error);
      } finally {
        setLoading(false);
      }
    };
    
    if (slug) {
      fetchPost();
    }
  }, [slug]);

  if (loading) {
    return (
      <main className="min-h-screen pt-32 pb-20 px-5 flex items-center justify-center text-white">
        <div className="w-16 h-16 border-4 border-bitOrange border-t-transparent rounded-full animate-spin"></div>
      </main>
    );
  }

  if (!post) {
    return (
      <main className="min-h-screen pt-32 pb-20 px-5 text-center text-white">
        <h1 className="text-4xl font-black mb-4">Post Not Found</h1>
        <p className="text-slate-400 mb-8">The blog post you're looking for doesn't exist.</p>
        <a href="/blog" className="text-bitOrange hover:underline">← Back to Blog</a>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#050710] pb-24 overflow-hidden text-white relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-electric via-aqua to-transparent blur-[120px] rounded-full mix-blend-screen" />
      </div>

      <div className="max-w-[800px] mx-auto px-5 sm:px-6 lg:px-8 relative z-10 pt-32">
        <a href="/blog" className="inline-flex items-center text-slate-400 hover:text-white mb-8 transition-colors text-sm font-semibold">
          <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Blog
        </a>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags.map(tag => (
            <span key={tag} className="px-3 py-1 rounded-full bg-white/10 text-white text-xs font-bold border border-white/10">
              {tag}
            </span>
          ))}
        </div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-8"
        >
          {post.title}
        </motion.h1>

        <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400 border-y border-white/10 py-6 mb-12">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-bitOrange to-purple-600 p-[2px]">
              <div className="w-full h-full rounded-full bg-[#09111c] flex items-center justify-center font-bold text-white">
                {post.author.charAt(0)}
              </div>
            </div>
            <span className="font-semibold text-slate-200">{post.author}</span>
          </div>
          <div className="flex items-center gap-6">
            <span>{post.date}</span>
            <span className="w-1 h-1 rounded-full bg-slate-600" />
            <span>{post.readTime}</span>
          </div>
        </div>

        {post.image && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="w-full aspect-video rounded-3xl overflow-hidden mb-16 border border-white/10 shadow-2xl"
          >
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </motion.div>
        )}

        <div className="prose prose-invert prose-lg max-w-none text-slate-300 leading-relaxed">
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </div>
    </main>
  );
}
