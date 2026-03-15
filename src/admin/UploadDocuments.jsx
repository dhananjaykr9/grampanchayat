import { motion } from 'framer-motion';
import { 
  CloudUpload, 
  FileCheck, 
  FileText, 
  Plus, 
  Trash2, 
  X 
} from 'lucide-react';
import React, { useState } from 'react';

const UploadDocuments = () => {
  const [files, setFiles] = useState([
    { id: 1, title: 'नवीन नळ जोडणी अर्ज', category: 'forms', size: '४५० KB', date: '१० मार्च २०२४' },
    { id: 2, title: 'वार्षिक अहवाल २०२३', category: 'reports', size: '२.५ MB', date: '०५ मार्च २०२४' },
  ]);

  const [dragActive, setDragActive] = useState(false);

  const handleDelete = (id) => {
    if(window.confirm('हा दस्तऐवज कायमचा हटवायचा आहे का?')) {
      setFiles(files.filter(f => f.id !== id));
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8 font-sans pt-32">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-white shadow-xl">
                 <CloudUpload className="h-6 w-6" />
              </div>
              <h1 className="text-4xl font-black text-slate-900 italic tracking-tighter italic italic underline decoration-primary-500/30 underline-offset-12">दस्तऐवज अपलोड</h1>
            </div>
            <p className="text-slate-500 font-bold uppercase text-[10px] tracking-[0.2em] ml-16 italic mt-4">शासकीय नमुने आणि अहवाल सिस्टीममध्ये जोडा.</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
           {/* Upload Area */}
           <div className="lg:col-span-1">
              <div 
                className={`bg-white p-10 rounded-[3.5rem] shadow-2xl border-4 border-dashed transition-all cursor-pointer h-[500px] flex flex-col items-center justify-center text-center group ${dragActive ? 'border-primary-600 bg-primary-50' : 'border-slate-100 hover:border-primary-200'}`}
                onDragOver={(e) => { e.preventDefault(); setDragActive(true); }}
                onDragLeave={() => setDragActive(false)}
                onDrop={(e) => { e.preventDefault(); setDragActive(false); }}
              >
                 <div className="w-24 h-24 bg-primary-50 rounded-[2rem] flex items-center justify-center text-primary-600 mb-8 shadow-xl shadow-primary-200/50 group-hover:scale-110 transition-transform">
                    <CloudUpload className="h-10 w-10" />
                 </div>
                 <h3 className="text-2xl font-black text-slate-900 mb-4 italic italic">फाईल येथे ओढा</h3>
                 <p className="text-slate-400 font-medium italic mb-10 text-sm">किंवा क्लिक करून फाईल निवडा (PDF, Max 5MB)</p>
                 <button className="px-10 py-4 bg-slate-900 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-primary-600 transition-all shadow-xl">
                    फाईल निवडा
                 </button>
              </div>
           </div>

           {/* File List */}
           <div className="lg:col-span-2 space-y-8">
              <div className="bg-white rounded-[4rem] shadow-2xl border border-slate-50 overflow-hidden">
                 <div className="p-10 border-b border-slate-50 bg-slate-50/20">
                    <h3 className="text-xl font-black text-slate-900 italic tracking-tight italic">अपलोड केलेले दस्तऐवज ({files.length})</h3>
                 </div>
                 <div className="divide-y divide-slate-50">
                    {files.map((file, i) => (
                      <motion.div 
                        key={file.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: i * 0.05 }}
                        className="p-10 hover:bg-primary-50/30 transition-all group flex items-center justify-between"
                      >
                         <div className="flex items-center gap-6">
                            <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-300 group-hover:bg-white group-hover:text-primary-600 transition-all shadow-sm">
                               <FileText className="h-6 w-6" />
                            </div>
                            <div>
                               <h4 className="text-lg font-black text-slate-900 group-hover:text-primary-600 transition-colors italic tracking-tight italic">{file.title}</h4>
                               <div className="flex items-center gap-3 mt-1">
                                  <span className="text-[8px] font-black uppercase text-slate-400 bg-slate-100 px-2 py-0.5 rounded italic">{file.category}</span>
                                  <span className="text-[10px] text-slate-300 font-bold italic">{file.size} • {file.date}</span>
                               </div>
                            </div>
                         </div>
                         <button 
                           onClick={() => handleDelete(file.id)}
                           className="w-12 h-12 rounded-xl text-slate-200 hover:bg-red-50 hover:text-red-600 transition-all flex items-center justify-center"
                         >
                            <Trash2 className="h-5 w-5" />
                         </button>
                      </motion.div>
                    ))}
                 </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default UploadDocuments;
