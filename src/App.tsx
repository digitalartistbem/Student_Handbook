import React, { useState, useMemo } from 'react';
import {
  BookOpen,
  Search,
  Award,
  ShieldAlert,
  Scale,
  GraduationCap,
  Info,
  Users,
  FileText,
  Heart,
  Briefcase,
  Menu,
  X,
  ChevronRight,
  ArrowRight,
  Clock,
  Sparkles,
  Calculator,
  Hammer,
  Home,
  CheckCircle2,
  AlertCircle
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import {
  handbookSections,
  handbookCategories,
  HandbookSection
} from './handbookData';
import GradeCalculator from './components/GradeCalculator';
import ScholarshipChecker from './components/ScholarshipChecker';
import OffenseDirectory from './components/OffenseDirectory';

export default function App() {
  const [activeTab, setActiveTab] = useState<'reader' | 'tools'>('reader');
  const [activeTool, setActiveTool] = useState<'grade' | 'scholarship' | 'offense'>('grade');
  const [activeCategory, setActiveCategory] = useState<string>('info');
  const [selectedSectionId, setSelectedSectionId] = useState<string>('foreword');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  // Icon Mapper to match Lucide components dynamically
  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Info': return <Info className="w-4 h-4 shrink-0" />;
      case 'BookOpen': return <BookOpen className="w-4 h-4 shrink-0" />;
      case 'FileText': return <FileText className="w-4 h-4 shrink-0" />;
      case 'Scale': return <Scale className="w-4 h-4 shrink-0" />;
      case 'GraduationCap': return <GraduationCap className="w-4 h-4 shrink-0" />;
      case 'Award': return <Award className="w-4 h-4 shrink-0" />;
      case 'ShieldAlert': return <ShieldAlert className="w-4 h-4 shrink-0" />;
      case 'Hammer': return <Hammer className="w-4 h-4 shrink-0" />;
      case 'Briefcase': return <Briefcase className="w-4 h-4 shrink-0" />;
      case 'Users': return <Users className="w-4 h-4 shrink-0" />;
      case 'Heart': return <Heart className="w-4 h-4 shrink-0" />;
      default: return <Info className="w-4 h-4 shrink-0" />;
    }
  };

  // Extract active section
  const activeSection = useMemo(() => {
    return handbookSections.find(s => s.id === selectedSectionId) || handbookSections[0];
  }, [selectedSectionId]);

  // Handle Search Engine Logic (looks through titles, subsections, and body text)
  const searchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    
    const query = searchQuery.toLowerCase();
    const results: { section: HandbookSection; snippet: string; matchedType: 'title' | 'body' | 'sub' }[] = [];

    handbookSections.forEach(section => {
      // 1. Check section title
      if (section.title.toLowerCase().includes(query)) {
        results.push({
          section,
          snippet: `Found in section title: "${section.title}"`,
          matchedType: 'title'
        });
        return;
      }

      // 2. Check subsections
      if (section.subsections) {
        for (const sub of section.subsections) {
          if (sub.title.toLowerCase().includes(query) || sub.content.toLowerCase().includes(query)) {
            const index = sub.content.toLowerCase().indexOf(query);
            const start = Math.max(0, index - 40);
            const end = Math.min(sub.content.length, index + 60);
            const snippet = `...${sub.content.slice(start, end)}...`;
            results.push({
              section,
              snippet: `[Subsection: ${sub.title}] ${snippet}`,
              matchedType: 'sub'
            });
            return;
          }
        }
      }

      // 3. Check general content
      if (section.content.toLowerCase().includes(query)) {
        const index = section.content.toLowerCase().indexOf(query);
        const start = Math.max(0, index - 40);
        const end = Math.min(section.content.length, index + 60);
        const snippet = `...${section.content.slice(start, end)}...`;
        results.push({
          section,
          snippet: snippet,
          matchedType: 'body'
        });
      }
    });

    return results;
  }, [searchQuery]);

  // Dynamic Text Highlighting engine
  const highlightText = (text: string, highlight: string) => {
    if (!highlight.trim()) return text;
    const regex = new RegExp(`(${highlight.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')})`, 'gi');
    const parts = text.split(regex);
    return (
      <>
        {parts.map((part, i) => 
          regex.test(part) ? (
            <mark key={i} className="bg-yellow-200/80 text-navy-900 font-semibold px-0.5 rounded-xs">
              {part}
            </mark>
          ) : (
            part
          )
        )}
      </>
    );
  };

  // Quick navigation link execution
  const navigateToSection = (sectionId: string, categoryId: string) => {
    setSearchQuery(''); // clear search
    setActiveTab('reader');
    setActiveCategory(categoryId);
    setSelectedSectionId(sectionId);
    setMobileMenuOpen(false);
    
    // Smooth scroll to reader area
    const element = document.getElementById('handbook-reader-view');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-800 antialiased selection:bg-navy-200 selection:text-navy-900">
      
      {/* Main App Navigation Header */}
      <header className="bg-white border-b border-slate-200 shadow-sm sticky top-0 z-30">
        <div className="max-w-7xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          
          {/* Logo / Title Area */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-navy-700 to-aclc-red p-1 rounded-xl shadow-sm flex items-center justify-center text-white font-bold shrink-0">
              <span className="text-sm tracking-tighter">ACLC</span>
            </div>
            <div>
              <h1 className="font-display font-extrabold text-navy-800 text-sm md:text-base tracking-tight leading-none">
                ACLC Student Handbook Portal
              </h1>
              <p className="text-[10px] md:text-xs text-slate-400 mt-0.5">
                Dynamic, Searchable Knowledge & Resource System
              </p>
            </div>
          </div>

          {/* Nav Links */}
          <div className="hidden md:flex items-center gap-2">
            <button
              onClick={() => { setActiveTab('reader'); setSearchQuery(''); }}
              className={`flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl transition-all ${activeTab === 'reader' ? 'bg-navy-700 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              <BookOpen className="w-4 h-4" />
              Browse Handbook
            </button>
            <button
              onClick={() => { setActiveTab('tools'); }}
              className={`flex items-center gap-1.5 px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-xl transition-all ${activeTab === 'tools' ? 'bg-navy-700 text-white shadow-sm' : 'text-slate-600 hover:bg-slate-50'}`}
            >
              <Calculator className="w-4 h-4" />
              Interactive Helpers
            </button>
          </div>

          {/* Search box right aligned */}
          <div className="hidden lg:block relative w-64">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search handbook text..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                if (e.target.value.trim() && activeTab !== 'reader') {
                  setActiveTab('reader');
                }
              }}
              className="w-full text-xs pl-9 pr-3 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-navy-500 focus:outline-none transition-all bg-slate-50/50"
            />
          </div>

          {/* Mobile menu trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-50 rounded-lg transition-all"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 shadow-md"
          >
            <div className="p-4 space-y-3">
              <div className="relative">
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search handbook text..."
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    if (e.target.value.trim() && activeTab !== 'reader') {
                      setActiveTab('reader');
                    }
                  }}
                  className="w-full text-xs pl-9 pr-3 py-2 border border-slate-200 rounded-lg focus:border-navy-500 focus:outline-none bg-slate-50"
                />
              </div>

              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => { setActiveTab('reader'); setMobileMenuOpen(false); setSearchQuery(''); }}
                  className={`flex items-center justify-center gap-1.5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl transition-all ${activeTab === 'reader' ? 'bg-navy-700 text-white shadow-sm' : 'text-slate-600 border border-slate-200 hover:bg-slate-50'}`}
                >
                  <BookOpen className="w-3.5 h-3.5" />
                  Reader
                </button>
                <button
                  onClick={() => { setActiveTab('tools'); setMobileMenuOpen(false); }}
                  className={`flex items-center justify-center gap-1.5 py-2.5 text-xs font-bold uppercase tracking-wider rounded-xl transition-all ${activeTab === 'tools' ? 'bg-navy-700 text-white shadow-sm' : 'text-slate-600 border border-slate-200 hover:bg-slate-50'}`}
                >
                  <Calculator className="w-3.5 h-3.5" />
                  Helpers
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Container Workspace */}
      <main className="max-w-7xl mx-auto px-4 md:px-6 py-8 flex-1 w-full flex flex-col">
        


        {/* Tab view implementations */}
        <div className="flex-1 flex flex-col">
          
          {activeTab === 'reader' ? (
            /* ================= BROWSE READER VIEW ================= */
            <div id="handbook-reader-view" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Category navigation left rail */}
              <div className="lg:col-span-4 space-y-4">
                <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-4 sticky top-20">
                  <h3 className="font-display font-semibold text-xs uppercase tracking-wider text-slate-400 mb-3 px-2">
                    Handbook Categories
                  </h3>
                  
                  <nav className="space-y-1">
                    {handbookCategories.map((cat) => {
                      const sectionCount = handbookSections.filter(s => s.category === cat.id).length;
                      const isActive = activeCategory === cat.id && !searchQuery.trim();
                      
                      return (
                        <button
                          key={cat.id}
                          onClick={() => {
                            setSearchQuery(''); // Clear search on category click
                            setActiveCategory(cat.id);
                            // Auto select the first section in this category
                            const firstSec = handbookSections.find(s => s.category === cat.id);
                            if (firstSec) setSelectedSectionId(firstSec.id);
                          }}
                          className={`w-full flex items-center justify-between p-3 rounded-xl text-left transition-all group cursor-pointer ${isActive ? 'bg-navy-50 text-navy-800 font-semibold border-l-4 border-navy-700 pl-2.5' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'}`}
                        >
                          <div className="flex items-center gap-2.5 text-xs">
                            <span className={isActive ? 'text-navy-700' : 'text-slate-400 group-hover:text-slate-600'}>
                              {getCategoryIcon(cat.icon)}
                            </span>
                            <span>{cat.name}</span>
                          </div>
                          <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${isActive ? 'bg-navy-200/50 text-navy-800' : 'bg-slate-100 text-slate-500'}`}>
                            {sectionCount}
                          </span>
                        </button>
                      );
                    })}
                  </nav>
                </div>
              </div>

              {/* Right content display card or search matches */}
              <div className="lg:col-span-8">
                {searchQuery.trim() ? (
                  /* ================= SEARCH RESULTS PANEL ================= */
                  <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 space-y-4">
                    <div className="flex items-center justify-between pb-3 border-b border-slate-200">
                      <div>
                        <h3 className="font-display font-semibold text-slate-800 text-base">
                          Search Matches ({searchResults.length})
                        </h3>
                        <p className="text-xs text-slate-500">
                          Results matching query <strong className="text-navy-800 font-semibold font-mono">"{searchQuery}"</strong>
                        </p>
                      </div>
                      <button
                        onClick={() => setSearchQuery('')}
                        className="text-xs text-slate-400 hover:text-slate-700 flex items-center gap-1 font-semibold uppercase tracking-wider"
                      >
                        Clear Search
                        <X className="w-4 h-4" />
                      </button>
                    </div>

                    {searchResults.length > 0 ? (
                      <div className="space-y-3">
                        {searchResults.map((res, i) => (
                          <div
                            key={i}
                            onClick={() => {
                              setActiveCategory(res.section.category);
                              setSelectedSectionId(res.section.id);
                              setActiveTab('reader');
                              setSearchQuery('');
                            }}
                            className="bg-slate-50/80 hover:bg-navy-50/40 p-4 rounded-xl border border-slate-200 hover:border-navy-200 transition-all cursor-pointer group"
                          >
                            <div className="flex items-center justify-between mb-2">
                              <h4 className="text-xs font-bold text-navy-800 flex items-center gap-1 group-hover:text-navy-950">
                                <BookOpen className="w-3.5 h-3.5 text-navy-500" />
                                {res.section.title}
                              </h4>
                              <span className="text-[10px] bg-slate-100 group-hover:bg-navy-100 px-2 py-0.5 rounded text-slate-500 text-navy-700 font-mono uppercase font-semibold">
                                {res.section.category}
                              </span>
                            </div>
                            <p className="text-xs text-slate-600 italic font-mono leading-relaxed line-clamp-2">
                              {highlightText(res.snippet, searchQuery)}
                            </p>
                            <div className="mt-2 text-[10px] text-navy-600 font-bold uppercase tracking-wider flex items-center gap-1">
                              Read Section
                              <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div className="text-center py-16">
                        <AlertCircle className="w-12 h-12 text-slate-300 mx-auto mb-3" />
                        <h4 className="font-display font-semibold text-slate-700 text-sm">No Search Matches Found</h4>
                        <p className="text-xs text-slate-400 mt-1 max-w-sm mx-auto">
                          Try searching for different terms like "residency", "GPA", "OJT", "refund", or "probation".
                        </p>
                      </div>
                    )}
                  </div>
                ) : (
                  /* ================= EDITORIAL CONTENT VIEWER ================= */
                  <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                    
                    {/* Section Internal Tab list (if Category has multiple sections) */}
                    <div className="bg-slate-50/80 border-b border-slate-200 px-6 py-3 flex gap-2 overflow-x-auto">
                      {handbookSections
                        .filter(s => s.category === activeCategory)
                        .map((sec) => (
                          <button
                            key={sec.id}
                            onClick={() => setSelectedSectionId(sec.id)}
                            className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all whitespace-nowrap cursor-pointer ${selectedSectionId === sec.id ? 'bg-white text-navy-800 shadow-sm border border-slate-200' : 'text-slate-500 hover:text-slate-800'}`}
                          >
                            {sec.title}
                          </button>
                        ))}
                    </div>

                    <div className="p-6 md:p-8 space-y-6">
                      
                      {/* Section Title */}
                      <div>
                        <h2 className="font-display font-extrabold text-navy-800 text-xl md:text-2xl tracking-tight">
                          {highlightText(activeSection.title, searchQuery)}
                        </h2>
                        <div className="w-12 h-1 bg-aclc-red rounded-full mt-2"></div>
                      </div>

                      {/* Main Paragraphs */}
                      <div className="text-xs md:text-sm text-slate-600 leading-relaxed space-y-4 font-normal whitespace-pre-line">
                        {highlightText(activeSection.content, searchQuery)}
                      </div>

                      {/* Interactive Tool Call-to-Actions */}
                      {activeSection.id === 'disciplinary-procedures' && (
                        <div className="bg-rose-50 border border-rose-100 p-5 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <div className="space-y-1.5">
                            <h4 className="text-xs font-bold text-rose-900 uppercase tracking-wider flex items-center gap-1.5">
                              <Hammer className="w-4 h-4 text-rose-600" />
                              Interactive Offense Directory
                            </h4>
                            <p className="text-xs text-rose-700 leading-relaxed">
                              Need to quickly search specific offenses, violation categories, and see their exact sanctions? Use our interactive directory.
                            </p>
                          </div>
                          <button
                            onClick={() => {
                              setActiveTab('tools');
                              setActiveTool('offense');
                            }}
                            className="bg-rose-600 hover:bg-rose-700 text-white font-bold text-xs py-2.5 px-5 rounded-xl shadow-xs hover:shadow-md transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 w-fit"
                          >
                            Open Offense Lookup
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      )}

                      {activeSection.id === 'grading-system' && (
                        <div className="bg-indigo-50 border border-indigo-100 p-5 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <div className="space-y-1.5">
                            <h4 className="text-xs font-bold text-indigo-900 uppercase tracking-wider flex items-center gap-1.5">
                              <Calculator className="w-4 h-4 text-indigo-600" />
                              Interactive Grade Estimator
                            </h4>
                            <p className="text-xs text-indigo-700 leading-relaxed">
                              Calculate and estimate your final trimester grade using raw component scores or quick percentage weight ranges.
                            </p>
                          </div>
                          <button
                            onClick={() => {
                              setActiveTab('tools');
                              setActiveTool('grade');
                            }}
                            className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs py-2.5 px-5 rounded-xl shadow-xs hover:shadow-md transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 w-fit"
                          >
                            Open Grade Estimator
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      )}

                      {activeSection.id === 'scholarship-list' && (
                        <div className="bg-emerald-50 border border-emerald-100 p-5 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                          <div className="space-y-1.5">
                            <h4 className="text-xs font-bold text-emerald-900 uppercase tracking-wider flex items-center gap-1.5">
                              <GraduationCap className="w-4 h-4 text-emerald-600" />
                              Scholarship Eligibility Checker
                            </h4>
                            <p className="text-xs text-emerald-700 leading-relaxed">
                              Review your grades and household parameters instantly to assess your eligible handbook scholarship brackets.
                            </p>
                          </div>
                          <button
                            onClick={() => {
                              setActiveTab('tools');
                              setActiveTool('scholarship');
                            }}
                            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs py-2.5 px-5 rounded-xl shadow-xs hover:shadow-md transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 w-fit"
                          >
                            Check My Eligibility
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        </div>
                      )}

                      {/* Subsections rendering */}
                      {activeSection.subsections && activeSection.subsections.length > 0 && (
                        <div className="space-y-4 pt-4 border-t border-slate-200">
                          {activeSection.subsections.map((sub, i) => (
                            <div key={i} className="bg-slate-50/50 p-4 rounded-xl border border-slate-200 space-y-2">
                              <h3 className="text-xs md:text-sm font-bold text-navy-800 font-display">
                                {highlightText(sub.title, searchQuery)}
                              </h3>
                              <p className="text-xs text-slate-600 leading-relaxed whitespace-pre-line font-normal">
                                {highlightText(sub.content, searchQuery)}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Optional table data rendering */}
                      {activeSection.tableData && (
                        <div className="pt-4 border-t border-slate-200 space-y-2">
                          {activeSection.tableData.caption && (
                            <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1">
                              {activeSection.tableData.caption}
                            </span>
                          )}
                          <div className="overflow-x-auto rounded-xl border border-slate-200 shadow-xs">
                            <table className="w-full text-xs text-left border-collapse">
                              <thead className="bg-navy-500 text-white font-display text-[10.5px] uppercase tracking-wider">
                                <tr>
                                  {activeSection.tableData.headers.map((h, i) => (
                                    <th key={i} className="p-3 bg-navy-700">{h}</th>
                                  ))}
                                </tr>
                              </thead>
                              <tbody className="divide-y divide-slate-200 bg-white font-mono">
                                {activeSection.tableData.rows.map((row, idx) => (
                                  <tr key={idx} className="hover:bg-slate-50/80 transition-all">
                                    {row.map((val, cellIdx) => (
                                      <td key={cellIdx} className="p-3 text-slate-600">
                                        {val}
                                      </td>
                                    ))}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        </div>
                      )}

                    </div>
                  </div>
                )}
              </div>

            </div>
          ) : (
            /* ================= INTERACTIVE TOOLS VIEW ================= */
            <div className="space-y-6">
              
              {/* Tool Navigation Menu */}
              <div className="flex justify-center">
                <div className="flex gap-1.5 p-1 bg-slate-200/50 rounded-2xl overflow-x-auto shadow-inner max-w-lg w-full">
                  <button
                    onClick={() => setActiveTool('grade')}
                    className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-4 rounded-xl text-[11px] font-bold uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${activeTool === 'grade' ? 'bg-white text-navy-800 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
                  >
                    <Calculator className="w-4 h-4 text-navy-600" />
                    Grade Estimator
                  </button>
                  <button
                    onClick={() => setActiveTool('scholarship')}
                    className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-4 rounded-xl text-[11px] font-bold uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${activeTool === 'scholarship' ? 'bg-white text-navy-800 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
                  >
                    <GraduationCap className="w-4 h-4 text-emerald-600" />
                    Scholarships Check
                  </button>
                  <button
                    onClick={() => setActiveTool('offense')}
                    className={`flex-1 flex items-center justify-center gap-1.5 py-2 px-4 rounded-xl text-[11px] font-bold uppercase tracking-wider whitespace-nowrap transition-all cursor-pointer ${activeTool === 'offense' ? 'bg-white text-navy-800 shadow-sm' : 'text-slate-600 hover:text-slate-900'}`}
                  >
                    <Hammer className="w-4 h-4 text-aclc-red" />
                    Offense Lookup
                  </button>
                </div>
              </div>

              {/* Display Active Tool */}
              <motion.div
                key={activeTool}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
                className="max-w-4xl mx-auto"
              >
                {activeTool === 'grade' && <GradeCalculator />}
                {activeTool === 'scholarship' && <ScholarshipChecker />}
                {activeTool === 'offense' && <OffenseDirectory />}
              </motion.div>

            </div>
          )}

        </div>

      </main>

      {/* Footer System */}
      <footer className="bg-white border-t border-slate-200 py-12 px-4 mt-12 shrink-0">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Brand details */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 bg-navy-700 rounded flex items-center justify-center text-white font-bold text-[10px]">A</div>
              <span className="font-display font-bold text-navy-800 text-xs uppercase tracking-wider">ACLC College</span>
            </div>
            <p className="text-xs text-slate-400 leading-relaxed max-w-xs">
              A member of the AMA Education System (AMAES). Designed to operate entirely in-browser, making it fully ready for static server hosting.
            </p>
          </div>

          {/* Quick Category links */}
          <div>
            <h4 className="font-display font-semibold text-[10px] uppercase tracking-wider text-slate-400 mb-3">
              Quick Resources
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs">
              <button onClick={() => navigateToSection('academic-programs', 'programs')} className="text-left text-slate-500 hover:text-navy-700 transition-all cursor-pointer">CHED Academic Programs</button>
              <button onClick={() => navigateToSection('admission-policy', 'programs')} className="text-left text-slate-500 hover:text-navy-700 transition-all cursor-pointer">Admission Policy</button>
              <button onClick={() => navigateToSection('grading-system', 'grading')} className="text-left text-slate-500 hover:text-navy-700 transition-all cursor-pointer">Trimestral Grading Scale</button>
              <button onClick={() => navigateToSection('scholastic-delinquency', 'grading')} className="text-left text-slate-500 hover:text-navy-700 transition-all cursor-pointer">Probation & Delinquency</button>
              <button onClick={() => navigateToSection('student-conduct', 'conduct')} className="text-left text-slate-500 hover:text-navy-700 transition-all cursor-pointer">Student Honesty Code</button>
              <button onClick={() => navigateToSection('services-facilities', 'services')} className="text-left text-slate-500 hover:text-navy-700 transition-all cursor-pointer">Library borrowing privileges</button>
            </div>
          </div>

          {/* Disclaimer section */}
          <div>
            <h4 className="font-display font-semibold text-[10px] uppercase tracking-wider text-slate-400 mb-3">
              Disclaimer & License
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              This digital companion is built directly based on the transcribed text of the <strong className="font-semibold text-slate-500">Revised 2015 Edition</strong> of the ACLC Student Handbook. All rights, logos, and trademarks reside with ACLC College and the AMA Education System.
            </p>
          </div>

        </div>

        {/* Copy footnote */}
        <div className="max-w-7xl mx-auto border-t border-slate-200 pt-6 mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[10px] text-slate-400">
          <span>© {new Date().getFullYear()} ACLC Student Handbook Portal. All Rights Reserved.</span>
          <div className="flex gap-4">
            <span className="flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              100% Static HTML/CSS Compile
            </span>
            <span className="flex items-center gap-1">
              <Sparkles className="w-3.5 h-3.5 text-yellow-500 animate-pulse" />
              Zero Server API Overhead
            </span>
          </div>
        </div>
      </footer>

    </div>
  );
}
