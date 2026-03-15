import { motion } from 'framer-motion';
import { 
  Bus, 
  CheckCircle2, 
  Plus, 
  Search, 
  Train, 
  Trash2, 
  X 
} from 'lucide-react';
import React, { useState } from 'react';

const ManageTransport = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [transportData, setTransportData] = useState([
    { id: 1, type: 'Train', route: 'Wardha → Ballarshah Passenger', time: '7:30 AM', description: 'Chikni Road Station Station' },
    { id: 2, type: 'Bus', route: 'Warora – Kharwad', time: 'Every 45 mins', description: 'Via Dongargaon Railway' },
  ]);

  const [formData, setFormData] = useState({
    type: 'Train',
    route: '',
    time: '',
    description: ''
  });

  const handleAdd = (e) => {
    e.preventDefault();
    setTransportData([...transportData, { ...formData, id: Date.now() }]);
    setShowAddModal(false);
    setFormData({ type: 'Train', route: '', time: '', description: '' });
  };

  const handleDelete = (id) => {
    if(window.confirm('हे वेळापत्रक हटवायचे आहे का?')) {
      setTransportData(transportData.filter(t => t.id !== id));
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
                 <Bus className="h-6 w-6" />
              </div>
              <h1 className="text-4xl font-black text-slate-900 italic tracking-normal underline decoration-primary-500/30 underline-offset-[12px]">वाहतूक व्यवस्थापन</h1>
            </div>
            <p className="text-slate-500 font-bold uppercase text-[10px] tracking-[0.2em] ml-16 italic mt-4">रेल्वे आणि बसच्या वेळापत्रकाचे व्यवस्थापन करा.</p>
          </motion.div>
          
          <button 
            onClick={() => setShowAddModal(true)}
            className="flex items-center px-10 py-5 bg-primary-600 text-white rounded-[1.5rem] font-black shadow-2xl shadow-primary-500/30 hover:bg-primary-700 transition-all group"
          >
            <Plus className="h-5 w-5 mr-3 group-hover:rotate-90 transition-transform" />
            नवीन वेळापत्रक जोडा
          </button>
        </div>

        <div className="bg-white rounded-[4rem] shadow-2xl border border-slate-50 overflow-hidden">
           <div className="p-10 md:p-14 border-b border-slate-50 bg-slate-50/20 flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="relative w-full md:w-[400px] group">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300 group-hover:text-primary-600 transition-colors" />
                <input 
                  type="text" 
                  placeholder="वाहतूक मार्ग शोधा..." 
                  className="w-full bg-white border border-slate-100 rounded-2xl py-5 pl-16 pr-8 outline-none focus:ring-4 focus:ring-primary-50 transition-all font-bold text-sm shadow-sm" 
                />
              </div>
           </div>

           <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                   <tr className="bg-slate-50/50 text-[10px] font-black uppercase tracking-widest text-slate-400 border-b border-slate-50">
                    <th className="px-12 py-8">प्रकार & मार्ग</th>
                    <th className="px-12 py-8">वेळ (Time)</th>
                    <th className="px-12 py-8">वर्णन (Description)</th>
                    <th className="px-12 py-8 text-right">कृती</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                   {transportData.map((item, i) => (
                     <motion.tr 
                      key={item.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: i * 0.05 }}
                      className="hover:bg-primary-50/30 transition-colors group"
                     >
                        <td className="px-12 py-10">
                           <div className="flex items-center gap-4">
                              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${item.type === 'Train' ? 'bg-amber-50 text-amber-600' : 'bg-blue-50 text-blue-600'}`}>
                                 {item.type === 'Train' ? <Train className="h-5 w-5" /> : <Bus className="h-5 w-5" />}
                              </div>
                              <div>
                                  <div className="font-black text-slate-900 text-lg italic tracking-normal group-hover:text-primary-600 transition-colors">{item.route}</div>
                                 <div className="inline-block text-[10px] text-slate-300 font-black uppercase tracking-widest mt-1 px-2 py-0.5 bg-slate-50 rounded italic">{item.type}</div>
                              </div>
                           </div>
                        </td>
                        <td className="px-12 py-10 text-sm font-black text-slate-500 italic italic">{item.time}</td>
                        <td className="px-12 py-10 text-xs text-slate-400 font-black italic max-w-xs">{item.description}</td>
                        <td className="px-12 py-10 text-right">
                           <div className="flex justify-end gap-3 opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0">
                              <button 
                                onClick={() => handleDelete(item.id)}
                                className="w-12 h-12 bg-white rounded-2xl text-slate-300 hover:bg-red-600 hover:text-white transition-all shadow-xl shadow-slate-200/50 flex items-center justify-center"
                              >
                                 <Trash2 className="h-5 w-5" />
                              </button>
                           </div>
                        </td>
                     </motion.tr>
                   ))}
                </tbody>
              </table>
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
                  <h2 className="text-3xl font-black italic tracking-normal">नवीन वेळापत्रक जोडा</h2>
                 <button onClick={() => setShowAddModal(false)} className="w-12 h-12 rounded-2xl hover:bg-white/10 flex items-center justify-center transition-colors">
                    <X className="h-6 w-6" />
                 </button>
              </div>
              <form onSubmit={handleAdd} className="p-10 md:p-14 space-y-8">
                 <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-3">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4 italic">प्रकार</label>
                        <select 
                          className="w-full bg-slate-50 border-none rounded-2xl p-6 text-lg font-bold outline-none focus:ring-4 focus:ring-primary-100 transition-all appearance-none"
                          value={formData.type}
                          onChange={(e) => setFormData({...formData, type: e.target.value})}
                        >
                           <option value="Train">रेल्वे (Train)</option>
                           <option value="Bus">बस (Bus)</option>
                        </select>
                    </div>
                    <div className="space-y-3">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4 italic">वेळ</label>
                        <input 
                          required
                          type="text" 
                          placeholder="उदा. 7:30 AM"
                          className="w-full bg-slate-50 border-none rounded-2xl p-6 text-lg font-bold outline-none focus:ring-4 focus:ring-primary-100 transition-all" 
                          value={formData.time}
                          onChange={(e) => setFormData({...formData, time: e.target.value})}
                        />
                    </div>
                 </div>
                 <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4 italic">वाहतूक मार्ग (Route)</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-slate-50 border-none rounded-2xl p-6 text-lg font-bold outline-none focus:ring-4 focus:ring-primary-100 transition-all" 
                      value={formData.route}
                      onChange={(e) => setFormData({...formData, route: e.target.value})}
                    />
                 </div>
                 <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4 italic">वर्णन (Description)</label>
                    <textarea 
                      required
                      rows="3" 
                      className="w-full bg-slate-50 border-none rounded-[2rem] p-8 text-lg font-bold outline-none focus:ring-4 focus:ring-primary-100 transition-all" 
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                    ></textarea>
                 </div>
                 <button type="submit" className="w-full py-8 bg-slate-900 text-white rounded-[2.5rem] font-black text-lg uppercase tracking-[0.2em] shadow-2xl hover:bg-primary-600 transition-all flex items-center justify-center group">
                    जतन करा (Save) <CheckCircle2 className="ml-4 h-6 w-6 group-hover:scale-110 transition-transform" />
                 </button>
              </form>
           </motion.div>
        </div>
      )}
    </div>
  );
};

export default ManageTransport;
