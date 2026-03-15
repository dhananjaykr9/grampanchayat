import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle2, History, MessageSquare, Send } from 'lucide-react';
import React, { useState } from 'react';

const Complaints = () => {
  const [activeTab, setActiveTab] = useState('submit');
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    name: '',
    anonymous: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('तक्रार यशस्वीरीत्या सबमिट करण्यात आली आहे!');
    setFormData({ title: '', description: '', name: '', anonymous: false });
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-24 text-slate-900">
      {/* Header */}
      <div className="bg-slate-900 pt-48 pb-32 px-4 relative overflow-hidden text-center">
         <div className="section-container relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight italic">तक्रार निवारण (Grievance)</h1>
              <p className="text-xl text-primary-300 font-medium">तुमच्या तक्रारी आणि समस्या आमच्याकडे मांडण्यासाठी हे व्यासपीठ आहे.</p>
            </motion.div>
         </div>
      </div>

      <div className="section-container -mt-16 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Tabs */}
          <div className="flex p-3 bg-white/50 backdrop-blur-xl rounded-[2.5rem] border border-white/20 mb-12 shadow-2xl">
            <button 
              onClick={() => setActiveTab('submit')}
              className={`flex-1 py-5 rounded-[2rem] font-black text-sm uppercase tracking-widest transition-all flex items-center justify-center ${activeTab === 'submit' ? 'bg-primary-600 text-white shadow-xl shadow-primary-500/30' : 'text-slate-400 hover:text-primary-600 hover:bg-white/50'}`}
            >
              <MessageSquare className="h-5 w-5 mr-3" />
              नवीन तक्रार
            </button>
            <button 
              onClick={() => setActiveTab('track')}
              className={`flex-1 py-5 rounded-[2rem] font-black text-sm uppercase tracking-widest transition-all flex items-center justify-center ${activeTab === 'track' ? 'bg-primary-600 text-white shadow-xl shadow-primary-500/30' : 'text-slate-400 hover:text-primary-600 hover:bg-white/50'}`}
            >
              <History className="h-5 w-5 mr-3" />
              स्थिती तपासा
            </button>
          </div>

          <div className="bg-white rounded-[4rem] p-10 md:p-20 shadow-2xl border border-slate-50 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary-50 rounded-full -mr-32 -mt-32 blur-3xl pointer-events-none group-hover:bg-primary-100 transition-colors duration-700"></div>
            
            {activeTab === 'submit' ? (
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
              >
                <div className="flex items-center gap-4 mb-12">
                   <div className="w-16 h-16 bg-primary-600 rounded-3xl flex items-center justify-center text-white shadow-xl shadow-primary-500/40">
                      <Send className="h-8 w-8" />
                   </div>
                   <div>
                      <h2 className="text-3xl font-black italic tracking-tighter">तक्रार सबमिट करा</h2>
                      <p className="text-slate-400 font-bold uppercase text-[10px] tracking-[0.2em] mt-1">सर्व माहिती काळजीपूर्वक भरा</p>
                   </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-10">
                  <div className="space-y-4">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-4 italic">तक्रारीचा विषय (Subject)</label>
                    <input 
                      type="text" 
                      required
                      placeholder="उदा: रस्ते दुरुस्ती, कचरा व्यवस्थापन..."
                      className="w-full bg-slate-50 border-none rounded-[2rem] p-8 text-lg font-bold outline-none focus:ring-4 focus:ring-primary-100 transition-all placeholder:text-slate-300"
                      value={formData.title}
                      onChange={(e) => setFormData({...formData, title: e.target.value})}
                    />
                  </div>

                  <div className="space-y-4">
                    <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-4 italic">तक्रारीचे सविस्तर वर्णन (Description)</label>
                    <textarea 
                      required
                      rows="6"
                      placeholder="आपली समस्या येथे स्पष्ट करा..."
                      className="w-full bg-slate-50 border-none rounded-[3rem] p-10 text-lg font-bold outline-none focus:ring-4 focus:ring-primary-100 transition-all placeholder:text-slate-300"
                      value={formData.description}
                      onChange={(e) => setFormData({...formData, description: e.target.value})}
                    ></textarea>
                  </div>

                  <div className="flex flex-col md:flex-row gap-10">
                    <div className="flex-grow space-y-4">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-4 italic">तुमचे नाव (Name)</label>
                      <input 
                        type="text" 
                        disabled={formData.anonymous}
                        placeholder={formData.anonymous ? 'गोपनीय' : 'येथे नाव टाका'}
                        className={`w-full bg-slate-50 border-none rounded-[2rem] p-8 text-lg font-bold outline-none focus:ring-4 focus:ring-primary-100 transition-all placeholder:text-slate-300 ${formData.anonymous ? 'opacity-50 cursor-not-allowed' : ''}`}
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="md:w-64 flex items-center justify-center">
                       <label className="flex items-center cursor-pointer group select-none">
                         <input 
                           type="checkbox" 
                           className="hidden" 
                           checked={formData.anonymous}
                           onChange={(e) => setFormData({...formData, anonymous: e.target.checked})}
                         />
                         <div className={`w-10 h-10 rounded-xl border-2 flex items-center justify-center mr-4 transition-all ${formData.anonymous ? 'bg-primary-600 border-primary-600 shadow-lg shadow-primary-500/40 text-white' : 'border-slate-200 bg-slate-50 group-hover:bg-slate-100'}`}>
                            {formData.anonymous && <CheckCircle2 className="h-6 w-6" />}
                         </div>
                         <span className={`text-sm font-black uppercase tracking-widest ${formData.anonymous ? 'text-primary-600' : 'text-slate-400 group-hover:text-slate-600'}`}>नाव गुप्त ठेवा</span>
                       </label>
                    </div>
                  </div>

                  <button type="submit" className="w-full py-8 bg-slate-900 text-white rounded-[2.5rem] font-black text-lg uppercase tracking-[0.2em] shadow-2xl hover:bg-primary-600 hover:shadow-primary-600/30 transition-all flex items-center justify-center group">
                    सबमिट करा <Send className="ml-4 h-6 w-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </button>

                  <div className="relative py-4 flex items-center">
                    <div className="flex-grow border-t border-slate-100"></div>
                    <span className="flex-shrink mx-4 text-[10px] font-black text-slate-300 uppercase tracking-widest">किंवा (OR)</span>
                    <div className="flex-grow border-t border-slate-100"></div>
                  </div>

                  <a
                    href="https://wa.me/919876543210?text=मला तक्रार नोंदवायची आहे"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center py-8 bg-emerald-600 text-white rounded-[2.5rem] font-black text-lg uppercase tracking-[0.2em] shadow-xl hover:bg-emerald-700 transition-all group"
                  >
                    WhatsApp वर कळवा 
                    <MessageSquare className="ml-4 h-6 w-6 group-hover:scale-110 transition-transform" />
                  </a>
                </form>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-center py-20"
              >
                <div className="w-24 h-24 bg-slate-100 rounded-[2rem] flex items-center justify-center mx-auto mb-10 text-slate-300">
                   <AlertCircle className="h-12 w-12" />
                </div>
                <h3 className="text-3xl font-black text-slate-900 mb-6 italic">स्थिती तपासणी लवकरच!</h3>
                <p className="text-slate-500 font-medium max-w-sm mx-auto leading-relaxed mb-12">
                  तक्रार मागोवा घेण्याची सोय सध्या विकसित केली जात आहे. तोपर्यंत माहितीसाठी ग्रामपंचायत कार्यालयाशी संपर्क साधा.
                </p>
                <div className="p-8 bg-primary-50 rounded-[2rem] border border-primary-100 inline-block font-black text-primary-600 uppercase tracking-widest text-xs">
                  आपला तक्रार आयडी सुरक्षित ठेवा
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Complaints;
