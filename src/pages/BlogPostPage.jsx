import { motion } from "framer-motion";

export function BlogPostPage({ post }) {
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
          <p className="text-xl text-slate-200 font-medium mb-8">
            {post.excerpt}
          </p>
          <p className="mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <h2 className="text-2xl font-bold text-white mt-12 mb-6">The Current Landscape</h2>
          <p className="mb-6">
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
          </p>
          <blockquote className="border-l-4 border-bitOrange pl-6 py-2 my-8 text-xl italic text-slate-200 bg-white/5 rounded-r-lg">
            "Innovation distinguishes between a leader and a follower. The web is evolving faster than ever before."
          </blockquote>
          <p className="mb-6">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
          </p>
          <h2 className="text-2xl font-bold text-white mt-12 mb-6">Looking Forward</h2>
          <p className="mb-6">
            Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur.
          </p>
        </div>
      </div>
    </main>
  );
}
