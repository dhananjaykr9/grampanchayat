import { motion } from 'framer-motion';
import { 
  Bell, 
  CheckCircle2, 
  FilePlus, 
  FileText, 
  Search, 
  Trash2, 
  X 
} from 'lucide-react';
import React, { useState } from 'react';

const ManageNotices = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [notices, setNotices] = useState([
    { id: 1, title: 'ग्रामसभा आयोजन - मार्च २०२४', date: '१२ मार्च २०२४', type: 'अत्यंत महत्वाचे' },
    { id: 2, title: 'पाणी पुरवठा वेळेत बदल', date: '०५ मार्च २०२४', type: 'आरोग्य' },
  ]);

  const [formData, setFormData] = useState({
    title: '',
    type: 'सर्वसाधारण',
    description: ''
  });

  const handleAdd = (e) => {
    e.preventDefault();
    setNotices([{ ...formData, id: Date.now(), date: new Date().toLocaleDateString('mr-IN') }, ...notices]);
    setShowAddModal(false);
    setFormData({ title: '', type: 'सर्वसाधारण', description: '' });
  };

  const handleDelete = (id) => {
    if(window.confirm('ही सूचना हटवायची आहे का?')) {
      setNotices(notices.filter(n => n.id !== id));
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
                 <Bell className="h-6 w-6" />
              </div>
              <h1 className="text-4xl font-black text-slate-900 italic tracking-tighter italic italic underline decoration-primary-500/30 underline-offset-12">सूचना व्यवस्थापन</h1>
            </div>
            <p className="text-slate-500 font-bold uppercase text-[10px] tracking-[0.2em] ml-16 italic mt-4">गावातील नागरिकांसाठी नवीन सूचना प्रकाशित करा.</p>
          </motion.div>
          
          <button 
            onClick={() => setShowAddModal(true)}
            className="flex items-center px-10 py-5 bg-primary-600 text-white rounded-[1.5rem] font-black shadow-2xl shadow-primary-500/30 hover:bg-primary-700 transition-all group"
          >
            <FilePlus className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform" />
            नवीन सूचना लिहा
          </button>
        </div>

        <div className="bg-white rounded-[4rem] shadow-2xl border border-slate-50 overflow-hidden">
           <div className="p-10 md:p-14 border-b border-slate-50 bg-slate-50/20 flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="relative w-full md:w-[400px] group">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300 group-hover:text-primary-600 transition-colors" />
                <input 
                  type="text" 
                  placeholder="सूचना शोधा..." 
                  className="w-full bg-white border border-slate-100 rounded-2xl py-5 pl-16 pr-8 outline-none focus:ring-4 focus:ring-primary-100 transition-all font-bold text-sm shadow-sm" 
                />
              </div>
           </div>

           <div className="divide-y divide-slate-50">
              {notices.map((notice, i) => (
                <motion.div 
                  key={notice.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.05 }}
                  className="p-10 hover:bg-primary-50/30 transition-all group flex flex-col md:flex-row md:items-center justify-between gap-8"
                >
                   <div className="flex items-center gap-8">
                      <div className="w-16 h-16 bg-slate-100 rounded-[1.5rem] flex items-center justify-center text-slate-300 group-hover:bg-primary-600 group-hover:text-white transition-all shadow-xl shadow-slate-200/50">
                         <FileText className="h-8 w-8" />
                      </div>
                      <div>
                         <div className="flex items-center gap-3 mb-2">
                            <span className="px-3 py-1 bg-slate-50 text-[8px] font-black uppercase tracking-widest text-slate-400 rounded border border-slate-100 italic">
                               {notice.type}
                            </span>
                            <span className="text-[10px] text-slate-300 font-bold italic">प्रसिद्ध: {notice.date}</span>
                         </div>
                         <h3 className="text-xl font-black text-slate-900 italic tracking-tight italic group-hover:text-primary-600 transition-colors">{notice.title}</h3>
                      </div>
                   </div>
                   
                   <div className="flex items-center gap-4 self-end md:self-center opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0">
                      <button 
                        onClick={() => handleDelete(notice.id)}
                        className="w-12 h-12 bg-white rounded-2xl text-slate-300 hover:bg-red-600 hover:text-white transition-all shadow-xl shadow-slate-200/50 flex items-center justify-center"
                      >
                         <Trash2 className="h-5 w-5" />
                      </button>
                   </div>
                </motion.div>
              ))}
           </div>
        </div>
      </div>

      {/* Add Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-[100] bg-slate-950/90 backdrop-blur-2xl flex items-center justify-center p-4">
           <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             className="bg-white rounded-[4rem] w-full max-w-2xl overflow-hidden shadow-2xl border border-white/20"
           >
              <div className="p-10 md:p-14 bg-slate-950 text-white flex items-center justify-between">
                 <h2 className="text-3xl font-black italic tracking-tighter italic">नवीन सूचना प्रकाशित करा</h2>
                 <button onClick={() => setShowAddModal(false)} className="w-12 h-12 rounded-2xl hover:bg-white/10 flex items-center justify-center transition-colors">
                    <X className="h-6 w-6" />
                 </button>
              </div>
              <form onSubmit={handleAdd} className="p-10 md:p-14 space-y-8">
                 <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4 italic">सूचनेचे शीर्षक (Title)</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-slate-50 border-none rounded-2xl p-6 text-lg font-bold outline-none focus:ring-4 focus:ring-primary-100 transition-all" 
                      value={formData.title}
                      onChange={(e) => setFormData({...formData, title: e.target.value})}
                    />
                 </div>
                 <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4 italic">सूचनेचा प्रकार</label>
                    <select 
                       className="w-full bg-slate-50 border-none rounded-2xl p-6 text-lg font-bold outline-none focus:ring-4 focus:ring-primary-100 transition-all appearance-none"
                       value={formData.type}
                       onChange={(e) => setFormData({...formData, type: e.target.value})}
                    >
                       <option value="सर्वसाधारण">सर्वसाधारण</option>
                       <option value="अत्यंत महत्वाचे">अत्यंत महत्वाचे</option>
                       <option value="आरोग्य">आरोग्य</option>
                       <option value="विकास योजना">विकास योजना</option>
                    </select>
                 </div>
                 <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4 italic">सविस्तर वर्णन (Description)</label>
                    <textarea 
                      required
                      rows="6" 
                      className="w-full bg-slate-50 border-none rounded-[3rem] p-10 text-lg font-bold outline-none focus:ring-4 focus:ring-primary-100 transition-all" 
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                    ></textarea>
                 </div>
                 <button type="submit" className="w-full py-8 bg-slate-900 text-white rounded-[2.5rem] font-black text-lg uppercase tracking-[0.2em] shadow-2xl hover:bg-primary-600 transition-all flex items-center justify-center group">
                    प्रकाशित करा (Publish) <CheckCircle2 className="ml-4 h-6 w-6 group-hover:scale-110 transition-transform" />
                 </button>
              </form>
           </motion.div>
        </div>
      )}
    </div>
  );
};

export default ManageNotices;
