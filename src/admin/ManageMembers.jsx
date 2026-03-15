import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  Plus, 
  Search, 
  Trash2, 
  UserPlus, 
  Users, 
  X 
} from 'lucide-react';
import React, { useState } from 'react';

const ManageMembers = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [members, setMembers] = useState([
    { id: 1, name: 'इंदुबाई राजू खिरटकर', position: 'सरपंच (Sarpanch)', contact: '९८७६५४३२१०', photo: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=2000&auto=format&fit=crop' },
    { id: 2, name: 'राजेंद्र गायकवाड', position: 'उपसरपंच', contact: '९०१२३४५६७८', photo: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2000&auto=format&fit=crop' },
  ]);

  const [formData, setFormData] = useState({
    name: '',
    position: '',
    contact: ''
  });

  const handleAdd = (e) => {
    e.preventDefault();
    setMembers([...members, { 
      ...formData, 
      id: Date.now(), 
      photo: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=2000&auto=format&fit=crop' 
    }]);
    setShowAddModal(false);
    setFormData({ name: '', position: '', contact: '' });
  };

  const handleDelete = (id) => {
    if(window.confirm('हा सदस्य हटवायचा आहे का?')) {
      setMembers(members.filter(m => m.id !== id));
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
                 <Users className="h-6 w-6" />
              </div>
              <h1 className="text-4xl font-black text-slate-900 italic tracking-tighter italic italic underline decoration-primary-500/30 underline-offset-12">सदस्य व्यवस्थापन</h1>
            </div>
            <p className="text-slate-500 font-bold uppercase text-[10px] tracking-[0.2em] ml-16 italic mt-4">पंचायत समिती आणि सदस्यांची माहिती अद्ययावत करा.</p>
          </motion.div>
          
          <button 
            onClick={() => setShowAddModal(true)}
            className="flex items-center px-10 py-5 bg-primary-600 text-white rounded-[1.5rem] font-black shadow-2xl shadow-primary-500/30 hover:bg-primary-700 transition-all group"
          >
            <UserPlus className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform" />
            नवीन सदस्य जोडा
          </button>
        </div>

        <div className="bg-white rounded-[4rem] shadow-2xl border border-slate-50 overflow-hidden">
           <div className="p-10 md:p-14 border-b border-slate-50 bg-slate-50/20 flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="relative w-full md:w-[400px] group">
                <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300 group-hover:text-primary-600 transition-colors" />
                <input 
                  type="text" 
                  placeholder="सदस्याचे नाव शोधा..." 
                  className="w-full bg-white border border-slate-100 rounded-2xl py-5 pl-16 pr-8 outline-none focus:ring-4 focus:ring-primary-50 transition-all font-bold text-sm shadow-sm" 
                />
              </div>
           </div>

           <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50/50 text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 border-b border-slate-50">
                    <th className="px-12 py-8">फोटो & नाव</th>
                    <th className="px-12 py-8">पद (Position)</th>
                    <th className="px-12 py-8">संपर्क (Contact)</th>
                    <th className="px-12 py-8 text-right">कृती</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                   {members.map((member, i) => (
                     <motion.tr 
                      key={member.id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: i * 0.05 }}
                      className="hover:bg-primary-50/30 transition-colors group"
                     >
                        <td className="px-12 py-10">
                           <div className="flex items-center gap-6">
                              <img src={member.photo} alt={member.name} className="w-14 h-14 rounded-2xl object-cover shadow-lg border-2 border-white group-hover:scale-110 transition-transform" />
                              <div className="font-black text-slate-900 text-lg italic tracking-tight italic group-hover:text-primary-600 transition-colors italic">{member.name}</div>
                           </div>
                        </td>
                        <td className="px-12 py-10 text-sm font-black text-slate-500 italic italic">{member.position}</td>
                        <td className="px-12 py-10 text-xs text-slate-400 font-black italic">{member.contact}</td>
                        <td className="px-12 py-10 text-right">
                           <div className="flex justify-end gap-3 opacity-0 group-hover:opacity-100 transition-all transform translate-x-4 group-hover:translate-x-0">
                              <button 
                                onClick={() => handleDelete(member.id)}
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
                 <h2 className="text-3xl font-black italic tracking-tighter italic">नवीन सदस्य जोडा</h2>
                 <button onClick={() => setShowAddModal(false)} className="w-12 h-12 rounded-2xl hover:bg-white/10 flex items-center justify-center transition-colors">
                    <X className="h-6 w-6" />
                 </button>
              </div>
              <form onSubmit={handleAdd} className="p-10 md:p-14 space-y-8">
                 <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4 italic">सदस्याचे नाव</label>
                    <input 
                      required
                      type="text" 
                      className="w-full bg-slate-50 border-none rounded-2xl p-6 text-lg font-bold outline-none focus:ring-4 focus:ring-primary-100 transition-all" 
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                 </div>
                 <div className="grid grid-cols-2 gap-8">
                    <div className="space-y-3">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4 italic">पद (Position)</label>
                        <input 
                          required
                          type="text" 
                          className="w-full bg-slate-50 border-none rounded-2xl p-6 text-lg font-bold outline-none focus:ring-4 focus:ring-primary-100 transition-all" 
                          value={formData.position}
                          onChange={(e) => setFormData({...formData, position: e.target.value})}
                        />
                    </div>
                    <div className="space-y-3">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4 italic">संपर्क</label>
                        <input 
                          required
                          type="text" 
                          className="w-full bg-slate-50 border-none rounded-2xl p-6 text-lg font-bold outline-none focus:ring-4 focus:ring-primary-100 transition-all" 
                          value={formData.contact}
                          onChange={(e) => setFormData({...formData, contact: e.target.value})}
                        />
                    </div>
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

export default ManageMembers;
