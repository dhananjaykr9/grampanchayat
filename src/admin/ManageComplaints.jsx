import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  ExternalLink, 
  Filter, 
  MessageSquare, 
  Search, 
  XCircle 
} from 'lucide-react';
import React, { useState } from 'react';

const ManageComplaints = () => {
  const [complaints] = useState([
    { id: 'CMP-101', title: 'पाणी पुरवठा समस्या', author: 'राहुल जाधव', date: '१४ मार्च', status: 'Pending', type: 'सार्वजनिक' },
    { id: 'CMP-102', title: 'रस्त्यावरील दिवे बंद', author: 'निनावी', date: '१३ मार्च', status: 'In Progress', type: 'विकास' },
    { id: 'CMP-103', title: 'कचरा उचलण्याबाबत', author: 'पुजा पाटील', date: '१२ मार्च', status: 'Resolved', type: 'स्वच्छता' },
    { id: 'CMP-104', title: 'नाल्यांची सफाई', author: 'संतोष गायकवाड', date: '१० मार्च', status: 'Pending', type: 'स्वच्छता' },
  ]);

  const getStatusColor = (status) => {
    switch(status) {
      case 'Pending': return 'bg-amber-50 text-amber-600 border-amber-100';
      case 'In Progress': return 'bg-blue-50 text-blue-600 border-blue-100';
      case 'Resolved': return 'bg-emerald-50 text-emerald-600 border-emerald-100';
      default: return 'bg-slate-50 text-slate-600 border-slate-100';
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
                 <MessageSquare className="h-6 w-6" />
              </div>
              <h1 className="text-4xl font-black text-slate-900 italic tracking-tighter italic italic underline decoration-primary-500/30 underline-offset-12">तक्रारी व्यवस्थापन</h1>
            </div>
            <p className="text-slate-500 font-bold uppercase text-[10px] tracking-[0.2em] ml-16 italic mt-4">नागरिकांनी नोंदवलेल्या तक्रारी पहा आणि त्यांची स्थिती अद्ययावत करा.</p>
          </motion.div>
        </div>

        <div className="bg-white rounded-[4rem] shadow-2xl border border-slate-50 overflow-hidden">
          <div className="p-10 md:p-14 border-b border-slate-50 flex flex-col md:flex-row justify-between items-center gap-8 bg-slate-50/20">
            <div className="relative w-full md:w-[400px] group">
              <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300 group-hover:text-primary-600 transition-colors" />
              <input 
                type="text" 
                placeholder="तक्रार आयडी किंवा शीर्षक शोधा..." 
                className="w-full bg-white border border-slate-100 rounded-2xl py-5 pl-16 pr-8 outline-none focus:ring-4 focus:ring-primary-50 transition-all font-bold text-sm shadow-sm" 
              />
            </div>
            <div className="flex gap-4 w-full md:w-auto">
              <button className="flex-1 md:flex-none flex items-center justify-center px-10 py-5 bg-white text-slate-600 rounded-2xl font-black text-xs uppercase tracking-widest border border-slate-100 shadow-sm hover:bg-slate-900 hover:text-white transition-all">
                <Filter className="h-4 w-4 mr-3" />
                फिल्टर (Filters)
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-slate-50/50 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 border-b border-slate-50">
                  <th className="px-12 py-8">तक्रार आयडी</th>
                  <th className="px-12 py-8">शीर्षक & श्रेणी</th>
                  <th className="px-12 py-8">अर्जदार</th>
                  <th className="px-12 py-8">दिनांक</th>
                  <th className="px-12 py-8 text-center">स्थिती</th>
                  <th className="px-12 py-8 text-right">कृती</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-50">
                {complaints.map((c, i) => (
                  <motion.tr 
                    key={c.id} 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                    className="hover:bg-primary-50/30 transition-colors group"
                  >
                    <td className="px-12 py-10 font-black text-xs text-primary-600 tracking-tighter italic">{c.id}</td>
                    <td className="px-12 py-10">
                      <div className="font-black text-slate-900 text-lg italic tracking-tight italic group-hover:text-primary-600 transition-colors italic">{c.title}</div>
                      <div className="inline-block text-[10px] text-slate-300 font-black uppercase tracking-widest mt-2 px-3 py-1 bg-slate-50 rounded-md">{c.type}</div>
                    </td>
                    <td className="px-12 py-10 text-sm font-black text-slate-500 italic italic">{c.author}</td>
                    <td className="px-12 py-10 text-xs text-slate-400 font-black italic">{c.date}</td>
                    <td className="px-12 py-10">
                      <div className="flex justify-center">
                        <span className={`px-6 py-2 rounded-full text-[10px] font-black uppercase border tracking-[0.2em] shadow-sm italic ${getStatusColor(c.status)}`}>
                          {c.status}
                        </span>
                      </div>
                    </td>
                    <td className="px-12 py-10 text-right">
                      <div className="flex justify-end gap-3 opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0">
                        <button className="w-12 h-12 bg-white rounded-2xl text-slate-300 hover:bg-primary-600 hover:text-white transition-all shadow-xl shadow-slate-200/50 flex items-center justify-center">
                          <ExternalLink className="h-5 w-5" />
                        </button>
                        <button className="w-12 h-12 bg-white rounded-2xl text-slate-300 hover:bg-emerald-600 hover:text-white transition-all shadow-xl shadow-slate-200/50 flex items-center justify-center">
                          <CheckCircle2 className="h-5 w-5" />
                        </button>
                        <button className="w-12 h-12 bg-white rounded-2xl text-slate-300 hover:bg-red-600 hover:text-white transition-all shadow-xl shadow-slate-200/50 flex items-center justify-center">
                          <XCircle className="h-5 w-5" />
                        </button>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="p-12 border-t border-slate-50 bg-slate-50/10 flex flex-col sm:flex-row justify-between items-center gap-8">
            <div className="text-[10px] font-black uppercase tracking-widest text-slate-300 italic">एकूण {complaints.length} तक्रारींची नोंद</div>
            <div className="flex gap-4">
              <button disabled className="px-8 py-3 bg-white border border-slate-100 rounded-xl opacity-30 cursor-not-allowed text-xs font-black uppercase italic tracking-widest">मागे (Prev)</button>
              <button className="px-8 py-3 bg-white border border-slate-100 rounded-xl hover:bg-slate-900 hover:text-white transition-all shadow-sm text-xs font-black uppercase italic tracking-widest">पुढे (Next)</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageComplaints;
