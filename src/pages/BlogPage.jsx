import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { blogPosts } from "../data/blogPosts";
import { fadeUp, staggerContainer } from "../lib/motion";

export function BlogPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("All Tags");

  // Get unique tags from all posts
  const allTags = useMemo(() => ["All Tags", ...new Set(blogPosts.flatMap((post) => post.tags))], []);

  // Filter posts
  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const search = searchTerm.toLowerCase().trim();
      const matchesSearch = search === "" || 
                            post.title.toLowerCase().includes(search) || 
                            post.excerpt.toLowerCase().includes(search);
      const matchesTag = selectedTag === "All Tags" || post.tags.includes(selectedTag);
      return matchesSearch && matchesTag;
    });
  }, [searchTerm, selectedTag]);

  const featuredPost = filteredPosts.find(post => post.featured);
  const standardPosts = filteredPosts.filter(post => post.id !== featuredPost?.id);
  
  // If no featured post is found in the filtered list but there are posts, just use the first as featured
  const displayFeatured = featuredPost || (filteredPosts.length > 0 ? filteredPosts[0] : null);
  const displayStandard = featuredPost ? standardPosts : standardPosts.slice(1);

  const handleTagClick = (tag, e) => {
    e.preventDefault();
    setSelectedTag(tag);
    setSearchTerm("");
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-[#050710] pb-24 overflow-hidden text-white relative">
      
      {/* Background glowing effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] opacity-20 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-electric via-aqua to-bitOrange blur-[120px] rounded-full mix-blend-screen" />
      </div>

      <div className="max-w-[1180px] mx-auto px-5 sm:px-6 lg:px-8 relative z-10 pt-32">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-black mb-6 tracking-tight"
          >
            Insights & <span className="text-transparent bg-clip-text bg-gradient-to-r from-bitOrange via-orange-400 to-yellow-500">Stories</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Explore our latest thoughts on technology, design, and building the future of the web.
          </motion.p>
        </div>

        {/* Floating Glassmorphic Search & Filter */}
        <div className="relative z-30 flex flex-col sm:flex-row gap-3 mb-16 p-2 rounded-2xl sm:rounded-full border border-white/10 bg-[#0c1322]/80 backdrop-blur-xl shadow-2xl max-w-3xl mx-auto">
          <div className="flex-1 relative flex items-center">
            <svg className="absolute left-4 w-5 h-5 text-slate-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input 
              type="text" 
              placeholder="Search articles..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-transparent pl-12 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-bitOrange/50 rounded-xl sm:rounded-full transition-all"
            />
          </div>
          <div className="h-px sm:h-8 w-full sm:w-px bg-white/10 my-auto hidden sm:block" />
          <div className="sm:w-48 relative">
            <select 
              value={selectedTag}
              onChange={(e) => setSelectedTag(e.target.value)}
              className="w-full bg-transparent pl-4 pr-10 py-3 text-sm text-white focus:outline-none focus:ring-2 focus:ring-bitOrange/50 appearance-none cursor-pointer font-medium rounded-xl sm:rounded-full transition-all"
              style={{ backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1.2em' }}
            >
              {allTags.map(tag => (
                <option key={tag} value={tag} className="bg-[#0b111c] text-white">
                  {tag}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Content Section */}
        {filteredPosts.length === 0 ? (
          <div className="py-32 text-center relative z-20">
            <div className="inline-flex h-20 w-20 items-center justify-center rounded-full bg-white/5 mb-6">
              <svg className="w-10 h-10 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold mb-2">No results found</h3>
            <p className="text-slate-400">We couldn't find any articles matching your search criteria.</p>
            <button 
              onClick={() => { setSearchTerm(''); setSelectedTag('All Tags'); }}
              className="mt-6 text-bitOrange hover:text-orange-400 font-semibold transition"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <motion.div 
            key={searchTerm + selectedTag}
            variants={staggerContainer}
            initial="hidden"
            animate="show"
            className="grid gap-8 relative z-20"
          >
            {/* Featured Post (Full Width) */}
            {displayFeatured && (
              <motion.article 
                key={`featured-${displayFeatured.id}`}
                variants={fadeUp}
                className="group relative flex flex-col lg:flex-row rounded-3xl border border-white/10 bg-[#09111c] overflow-hidden hover:border-bitOrange/30 hover:shadow-[0_0_50px_rgba(255,106,42,0.1)] transition-all duration-500"
              >
                <div className="lg:w-1/2 relative overflow-hidden aspect-video lg:aspect-auto">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#09111c] via-transparent to-transparent z-10 lg:hidden" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#09111c] via-transparent to-transparent z-10 hidden lg:block" />
                  <img 
                    src={displayFeatured.image} 
                    alt={displayFeatured.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-6 left-6 z-20 flex gap-2 flex-wrap">
                    {displayFeatured.tags.slice(0, 2).map(tag => (
                      <button 
                        key={tag} 
                        onClick={(e) => handleTagClick(tag, e)}
                        className="px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md text-white text-xs font-bold border border-white/10 shadow-xl hover:bg-bitOrange transition-colors"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center relative z-20">
                  <div className="flex items-center gap-4 text-xs font-semibold text-slate-400 mb-6">
                    <span className="flex items-center gap-1.5">
                      <svg className="w-4 h-4 text-bitOrange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      {displayFeatured.date}
                    </span>
                    <span className="w-1 h-1 rounded-full bg-slate-600" />
                    <span>{displayFeatured.readTime}</span>
                  </div>
                  
                  <h2 className="text-3xl lg:text-4xl font-black leading-tight mb-5 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all duration-300">
                    <a href={`/blog/${displayFeatured.id}`}>
                      <span className="absolute inset-0" />
                      {displayFeatured.title}
                    </a>
                  </h2>
                  
                  <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-xl">
                    {displayFeatured.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/5">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-bitOrange to-purple-600 p-[2px]">
                        <div className="w-full h-full rounded-full bg-[#09111c] flex items-center justify-center font-bold text-sm text-white">
                          {displayFeatured.author.charAt(0)}
                        </div>
                      </div>
                      <span className="text-sm font-semibold">{displayFeatured.author}</span>
                    </div>
                    <a href={`/blog/${displayFeatured.id}`} className="text-bitOrange font-bold text-sm group-hover:translate-x-2 transition-transform duration-300 flex items-center gap-1 relative z-30">
                      Read Article 
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.article>
            )}

            {/* Standard Posts Grid */}
            {displayStandard.length > 0 && (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-8">
                {displayStandard.map((post) => (
                  <motion.article 
                    key={`standard-${post.id}`}
                    variants={fadeUp}
                    className="group flex flex-col rounded-2xl border border-white/10 bg-[#07101c] overflow-hidden hover:border-white/20 hover:-translate-y-1 hover:shadow-2xl hover:shadow-electric/10 transition-all duration-300 relative"
                  >
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#07101c] via-transparent to-transparent opacity-80" />
                      <div className="absolute bottom-4 left-4 flex flex-wrap gap-2 z-20">
                        {post.tags.slice(0, 2).map(tag => (
                          <button 
                            key={tag} 
                            onClick={(e) => handleTagClick(tag, e)}
                            className="px-2.5 py-1 rounded-md bg-white/10 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider hover:bg-bitOrange transition-colors"
                          >
                            {tag}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <div className="p-6 flex flex-col flex-1 relative z-10">
                      <div className="flex items-center gap-3 text-xs text-slate-400 mb-4">
                        <span>{post.date}</span>
                        <span className="w-1 h-1 rounded-full bg-slate-600" />
                        <span>{post.readTime}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold leading-snug mb-3 group-hover:text-blue-400 transition-colors">
                        <a href={`/blog/${post.id}`}>
                          <span className="absolute inset-0" />
                          {post.title}
                        </a>
                      </h3>
                      
                      <p className="text-sm leading-relaxed text-slate-400 mb-6 flex-1 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between mt-auto pt-5 border-t border-white/5 relative z-20">
                        <span className="text-sm font-medium text-slate-300">{post.author}</span>
                        <a href={`/blog/${post.id}`} className="flex items-center gap-1 text-slate-500 group-hover:text-bitOrange transition-colors text-sm font-bold relative z-30">
                          Read <span className="hidden sm:inline">Article</span>
                          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </div>
    </main>
  );
}
