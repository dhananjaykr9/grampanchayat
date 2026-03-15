import { motion } from 'framer-motion';
import { 
  Bell, 
  ChevronRight, 
  Download, 
  ExternalLink, 
  FileText, 
  Info, 
  Search 
} from 'lucide-react';
import React, { useState } from 'react';

const Notices = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const notices = [
    { 
      id: 1, 
      title: 'ग्रामसभा आयोजन - मार्च २०२४', 
      date: '१२ मार्च २०२४', 
      type: 'अत्यंत महत्वाचे', 
      desc: 'येत्या १० तारखेला वेळ दुपारी १ वाजता ग्रामपंचायत कार्यालयात ग्रामसभेचे आयोजन करण्यात आले आहे.',
      color: 'bg-red-50 text-red-600 border-red-100'
    },
    { 
      id: 2, 
      title: 'नवीन रस्ते विकास आराखडा प्रसिद्ध', 
      date: '१० मार्च २०२४', 
      type: 'विकास योजना', 
      desc: 'गावातील मुख्य रस्त्यांच्या डांबरीकरणाचा नवीन आराखडा मंजूर झाला असून त्याची माहिती उपलब्ध आहे.',
      color: 'bg-emerald-50 text-emerald-600 border-emerald-100'
    },
    { 
      id: 3, 
      title: 'पाणी पुरवठा वेळेत बदल', 
      date: '०५ मार्च २०२४', 
      type: 'आरोग्य', 
      desc: 'उन्हाळ्यामुळे पाणी पुरवठ्याच्या वेळेत बदल करण्यात आला असून नवीन वेळ सकाळी ६:०० ते ८:०० अशी राहील.',
      color: 'bg-blue-50 text-blue-600 border-blue-100'
    },
  ];

  const filteredNotices = notices.filter(n => n.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <div className="bg-slate-50 min-h-screen pb-24 text-slate-900">
      {/* Header */}
      <div className="bg-slate-900 pt-48 pb-32 px-4 relative overflow-hidden">
         <div className="section-container relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6 italic tracking-tight italic underline decoration-primary-500/30 underline-offset-12">सूचना आणि घोषणा (Notices)</h1>
              <p className="text-xl text-primary-300 font-medium">गावातील महत्वाच्या घडामोडी आणि सूचनांची अधिकृत माहिती.</p>
            </motion.div>
         </div>
      </div>

      <div className="section-container -mt-16 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Search bar */}
          <div className="mb-20 relative group">
             <Search className="absolute left-8 top-1/2 -translate-y-1/2 h-6 w-6 text-slate-400 group-hover:text-primary-600 transition-colors" />
             <input 
               type="text" 
               placeholder="सूचना शोधा..." 
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
               className="w-full bg-white border border-slate-100 rounded-[2.5rem] py-6 pl-20 pr-10 shadow-2xl outline-none focus:ring-4 focus:ring-primary-100 transition-all font-bold text-lg text-slate-900" 
             />
          </div>

          <div className="space-y-10">
            {filteredNotices.map((notice, idx) => (
              <motion.div
                key={notice.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-10 md:p-14 rounded-[3.5rem] shadow-xl border border-slate-50 hover:border-primary-200 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden"
              >
                 <div className="absolute top-0 right-0 w-32 h-32 bg-primary-50 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none group-hover:bg-primary-100 transition-colors duration-700"></div>
                 
                 <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 relative z-10">
                    <div className="flex-grow">
                       <div className="flex flex-wrap items-center gap-4 mb-6">
                          <span className={`px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border ${notice.color}`}>
                             {notice.type}
                          </span>
                          <span className="text-slate-400 font-bold text-sm italic">
                             प्रसिद्ध: {notice.date}
                          </span>
                       </div>
                       <h3 className="text-3xl font-black text-slate-900 mb-6 group-hover:text-primary-600 transition-colors leading-tight italic tracking-tighter">
                          {notice.title}
                       </h3>
                       <p className="text-slate-500 font-medium leading-relaxed max-w-2xl italic">
                          {notice.desc}
                       </p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row md:flex-col gap-4 shrink-0">
                       <button className="flex items-center justify-center px-8 py-4 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-primary-600 transition-all shadow-xl shadow-slate-900/10 active:scale-95">
                          <Download className="h-4 w-4 mr-2" /> PDF पहा
                       </button>
                       <button className="flex items-center justify-center px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-50 transition-all active:scale-95">
                          <ExternalLink className="h-4 w-4 mr-2" /> विस्तृत माहिती
                       </button>
                    </div>
                 </div>
              </motion.div>
            ))}
          </div>

          {filteredNotices.length === 0 && (
            <div className="text-center py-40">
               <div className="w-24 h-24 bg-primary-50 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl text-primary-200">
                  <Bell className="h-12 w-12" />
               </div>
               <p className="text-2xl font-black text-slate-300 italic">कोणतीही नवीन सूचना आढळली नाही.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Notices;
