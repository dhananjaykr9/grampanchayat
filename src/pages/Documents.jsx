import { motion } from 'framer-motion';
import { 
  Bell, 
  Download, 
  ExternalLink, 
  FileDown, 
  FileText, 
  Search 
} from 'lucide-react';
import React, { useState } from 'react';

const Documents = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', name: 'सर्व (All)' },
    { id: 'forms', name: 'अर्ज (Forms)' },
    { id: 'reports', name: 'अहवाल (Reports)' },
    { id: 'resolutions', name: 'ठराव (Resolutions)' },
  ];

  const docs = [
    { title: 'नवीन नळ जोडणी अर्ज', category: 'forms', date: '१० मार्च २०२४', size: '४५० KB' },
    { title: 'वार्षिक लेखापरीक्षण अहवाल २०२३', category: 'reports', date: '०५ मार्च २०२४', size: '२.५ MB' },
    { title: 'ग्रामसभा ठराव - रस्ते विकास', category: 'resolutions', date: '२० फेब्रुवारी २०२४', size: '९०० KB' },
    { title: 'जन्म-मृत्यू नोंदणी विहित नमुना', category: 'forms', date: '१५ फेब्रुवारी २०२४', size: '३२० KB' },
  ];

  const filteredDocs = docs.filter(d => 
    (activeCategory === 'all' || d.category === activeCategory) &&
    d.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-slate-50 min-h-screen pb-24 text-slate-900">
      {/* Header */}
      <div className="bg-slate-900 pt-48 pb-32 px-4 relative overflow-hidden text-center">
         <div className="section-container relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight italic italic underline decoration-primary-500/30 underline-offset-12">दस्तऐवज (Documents)</h1>
              <p className="text-xl text-primary-300 font-medium">शासकीय नमुने, ठराव आणि अहवाल येथून डाउनलोड करा.</p>
            </motion.div>
         </div>
      </div>

      <div className="section-container -mt-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          
          {/* Sidebar / Filters */}
          <div className="lg:col-span-1 space-y-10">
            <div className="bg-white p-10 rounded-[3rem] shadow-2xl border border-slate-50">
               <div className="flex items-center gap-3 mb-10">
                  <div className="w-1.5 h-6 bg-primary-600 rounded-full"></div>
                  <h3 className="text-lg font-black uppercase tracking-widest italic leading-none">श्रेणी निवडा</h3>
               </div>
               <div className="space-y-4">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setActiveCategory(cat.id)}
                      className={`w-full px-6 py-4 rounded-2xl text-left font-bold text-sm transition-all flex items-center justify-between group ${activeCategory === cat.id ? 'bg-primary-600 text-white shadow-xl shadow-primary-500/30' : 'bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-slate-900'}`}
                    >
                      {cat.name}
                      <ChevronRight className={`h-4 w-4 opacity-50 group-hover:translate-x-1 transition-transform ${activeCategory === cat.id ? 'text-white' : ''}`} />
                    </button>
                  ))}
               </div>
            </div>

            <div className="bg-slate-900 p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
               <div className="absolute inset-0 bg-primary-600/10 blur-3xl pointer-events-none"></div>
               <div className="relative z-10">
                  <Bell className="h-10 w-10 text-primary-400 mb-6" />
                  <h4 className="text-xl font-black mb-4 italic tracking-tight italic">सूचना</h4>
                  <p className="text-slate-400 text-sm font-medium leading-relaxed italic">
                    कागदपत्रे उघडण्यासाठी आपल्याला PDF Reader ची आवश्यकता असेल.
                  </p>
               </div>
            </div>
          </div>

          {/* Document List */}
          <div className="lg:col-span-3 space-y-8">
            <div className="relative group">
               <Search className="absolute left-8 top-1/2 -translate-y-1/2 h-6 w-6 text-slate-400 group-hover:text-primary-600 transition-colors" />
               <input 
                 type="text" 
                 placeholder="दस्तऐवज शोधा..." 
                 value={searchTerm}
                 onChange={(e) => setSearchTerm(e.target.value)}
                 className="w-full bg-white border border-slate-100 rounded-[2.5rem] py-6 pl-20 pr-10 shadow-2xl outline-none focus:ring-4 focus:ring-primary-100 transition-all font-bold text-lg text-slate-900" 
               />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {filteredDocs.map((doc, idx) => (
                 <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white p-10 rounded-[3rem] shadow-xl border border-slate-50 hover:border-primary-200 hover:shadow-2xl transition-all duration-500 group flex flex-col h-full"
                 >
                    <div className="flex items-start justify-between mb-8">
                       <div className="w-16 h-16 bg-primary-50 rounded-[1.5rem] flex items-center justify-center text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-all duration-500">
                          <FileText className="h-8 w-8" />
                       </div>
                       <span className="px-5 py-2 bg-slate-50 text-[10px] font-black text-slate-400 uppercase tracking-widest rounded-full italic">
                          {doc.category}
                       </span>
                    </div>
                    
                    <h3 className="text-2xl font-black text-slate-900 mb-6 leading-tight italic group-hover:text-primary-600 transition-colors tracking-tighter italic">
                       {doc.title}
                    </h3>

                    <div className="mt-auto pt-8 border-t border-slate-50 flex items-center justify-between">
                       <div>
                          <div className="text-[10px] font-black uppercase text-slate-300 tracking-widest leading-none mb-1">फाईल साईज</div>
                          <div className="text-sm font-black text-slate-500">{doc.size}</div>
                       </div>
                       <button className="w-14 h-14 bg-slate-900 text-white rounded-2xl flex items-center justify-center hover:bg-primary-600 transition-all shadow-xl shadow-slate-900/10 group/btn">
                          <Download className="h-6 w-6 group-hover/btn:translate-y-1 transition-transform" />
                       </button>
                    </div>
                 </motion.div>
               ))}
            </div>
            
            {filteredDocs.length === 0 && (
              <div className="text-center py-40 bg-white rounded-[4rem] border-2 border-dashed border-slate-100">
                 <FileDown className="h-16 w-16 text-slate-100 mx-auto mb-6" />
                 <p className="text-xl font-black text-slate-300 italic italic">कोणतेही दस्तऐवज आढळले नाहीत.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Documents;

const ChevronRight = ({ className, ...props }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="3" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className} 
    {...props}
  >
    <path d="m9 18 6-6-6-6"/>
  </svg>
);
