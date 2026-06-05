import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeUp, staggerContainer } from "../lib/motion";

const API_BASE_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export function BlogPage() {
  const [blogPosts, setBlogPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("All Tags");

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/blog`);
        const data = await response.json();
        
        const formattedData = data.map(post => ({
          ...post,
          id: post.slug,
          image: post.coverImage || "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
          excerpt: post.content ? post.content.replace(/<[^>]+>/g, '').substring(0, 150) + "..." : "",
          readTime: `${Math.max(1, Math.ceil((post.content || "").split(' ').length / 200))} min read`,
          date: new Date(post.createdAt).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
          })
        }));
        
        setBlogPosts(formattedData);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchBlogs();
  }, []);

  // Get unique tags from all posts
  const allTags = useMemo(() => ["All Tags", ...new Set(blogPosts.flatMap((post) => post.tags))], [blogPosts]);

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
  }, [searchTerm, selectedTag, blogPosts]);

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
        <div className="sticky top-24 z-40 flex flex-col sm:flex-row gap-3 mb-16 p-2 rounded-2xl sm:rounded-full border border-white/10 bg-[#0c1322]/60 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.5)] max-w-3xl mx-auto transition-all duration-300">
          <div className="flex-1 relative flex items-center">
            <svg className="absolute left-4 w-5 h-5 text-slate-400 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input 
              type="text" 
              placeholder="Search articles..." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-transparent pl-12 pr-4 py-3 text-sm text-white placeholder-slate-500 focus:outline-none rounded-xl sm:rounded-full transition-all"
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
        {loading ? (
          <div className="relative z-20 w-full animate-pulse">
            <div className="w-full h-[500px] md:h-[600px] bg-white/5 rounded-3xl mb-16" />
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map(i => (
                <div key={i} className="rounded-3xl bg-white/5 border border-white/5 h-[450px]" />
              ))}
            </div>
          </div>
        ) : filteredPosts.length === 0 ? (
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
            className="relative z-20"
          >
            {/* Featured Post (Full Width Cinematic) */}
            {displayFeatured && (
              <motion.article 
                key={`featured-${displayFeatured.id}`}
                variants={fadeUp}
                className="group relative w-full rounded-3xl overflow-hidden hover:shadow-[0_0_80px_rgba(255,106,42,0.15)] transition-all duration-700 h-[500px] md:h-[600px] mb-16 border border-white/10 bg-[#09111c]"
              >
                <div className="absolute inset-0">
                  <img 
                    src={displayFeatured.image} 
                    alt={displayFeatured.title} 
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050710] via-[#050710]/80 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#050710]/90 via-[#050710]/40 to-transparent" />
                </div>
                
                <div className="absolute inset-0 p-6 md:p-12 lg:p-16 flex flex-col justify-end z-20">
                  <div className="flex gap-2 flex-wrap mb-6">
                    {displayFeatured.tags.map(tag => (
                      <button 
                        key={tag} 
                        onClick={(e) => handleTagClick(tag, e)}
                        className="px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-xl text-white text-xs font-bold tracking-wider uppercase border border-white/20 hover:bg-bitOrange hover:border-bitOrange transition-all"
                      >
                        {tag}
                      </button>
                    ))}
                  </div>

                  <h2 className="text-4xl md:text-5xl lg:text-7xl font-black leading-tight mb-6 max-w-4xl text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all duration-500">
                    <a href={`/blog/${displayFeatured.id}`}>
                      <span className="absolute inset-0" />
                      {displayFeatured.title}
                    </a>
                  </h2>
                  
                  <p className="text-slate-300 text-lg md:text-xl leading-relaxed mb-8 max-w-3xl line-clamp-2 md:line-clamp-3">
                    {displayFeatured.excerpt}
                  </p>
                  
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-bitOrange to-purple-600 p-[2px] shadow-lg shadow-bitOrange/20">
                        <div className="w-full h-full rounded-full bg-[#09111c] flex items-center justify-center font-bold text-lg text-white">
                          {displayFeatured.author.charAt(0)}
                        </div>
                      </div>
                      <div>
                        <p className="text-sm font-bold text-white">{displayFeatured.author}</p>
                        <div className="flex items-center gap-2 text-xs font-semibold text-slate-400 mt-1">
                          <span>{displayFeatured.date}</span>
                          <span className="w-1 h-1 rounded-full bg-slate-600" />
                          <span>{displayFeatured.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            )}

            {/* Standard Posts Grid */}
            {displayStandard.length > 0 && (
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {displayStandard.map((post) => (
                  <motion.article 
                    key={`standard-${post.id}`}
                    variants={fadeUp}
                    className="group relative flex flex-col rounded-3xl bg-white/[0.02] border border-white/5 overflow-hidden hover:bg-white/[0.04] hover:-translate-y-2 hover:shadow-2xl hover:shadow-bitOrange/10 transition-all duration-500"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden m-3 rounded-2xl">
                      <img 
                        src={post.image} 
                        alt={post.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                      <div className="absolute bottom-4 left-4 flex flex-wrap gap-2 z-20">
                        {post.tags.slice(0, 2).map(tag => (
                          <button 
                            key={tag} 
                            onClick={(e) => handleTagClick(tag, e)}
                            className="px-3 py-1 rounded-full bg-white/20 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider hover:bg-bitOrange transition-colors shadow-lg"
                          >
                            {tag}
                          </button>
                        ))}
                      </div>
                    </div>
                    
                    <div className="p-6 flex flex-col flex-1 relative z-10">
                      <div className="flex items-center gap-3 text-xs text-bitOrange font-semibold mb-4">
                        <span>{post.date}</span>
                        <span className="w-1 h-1 rounded-full bg-bitOrange/50" />
                        <span>{post.readTime}</span>
                      </div>
                      
                      <h3 className="text-2xl font-bold leading-snug mb-3 text-white group-hover:text-blue-400 transition-colors">
                        <a href={`/blog/${post.id}`}>
                          <span className="absolute inset-0" />
                          {post.title}
                        </a>
                      </h3>
                      
                      <p className="text-sm leading-relaxed text-slate-400 mb-8 flex-1 line-clamp-3">
                        {post.excerpt}
                      </p>
                      
                      <div className="flex items-center justify-between mt-auto">
                        <div className="flex items-center gap-2">
                           <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 p-[1.5px]">
                             <div className="w-full h-full rounded-full bg-[#050710] flex items-center justify-center font-bold text-xs text-white">
                               {post.author.charAt(0)}
                             </div>
                           </div>
                           <span className="text-sm font-medium text-slate-300">{post.author}</span>
                        </div>
                        <a href={`/blog/${post.id}`} className="flex items-center justify-center w-10 h-10 rounded-full bg-white/5 text-white group-hover:bg-bitOrange group-hover:text-white transition-all duration-300 relative z-30">
                          <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
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
