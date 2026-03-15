import { AnimatePresence, motion } from 'framer-motion';
import { 
  CheckCircle2, 
  MessageSquare, 
  Send, 
  Star, 
  UserCircle2, 
  X 
} from 'lucide-react';
import React, { useState } from 'react';

const Feedback = () => {
  const [showModal, setShowModal] = useState(false);
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const feedbackList = [
    {
       id: 1,
       user: 'रविंद्र ढेंगळे',
       date: '१२ मार्च २०२४',
       rating: 5,
       category: 'रस्ते प्रकल्प',
       comment: 'नवीन सिमेंट रस्त्याचे काम खूप चांगले झाले आहे. यामुळे पावसाळ्यात खूप सोय होईल.'
    },
    {
       id: 2,
       user: 'कल्पना गायकवाड',
       date: '१० मार्च २०२४',
       rating: 4,
       category: 'शिक्षण सेवा',
       comment: 'शाळेतील नवीन सुविधांचे स्वागत आहे. शिक्षणाचा दर्जा सुधारत आहे.'
    }
  ];

  const stats = [
    { label: 'एकूण फीडबॅक', value: '१२८', color: 'text-primary-600' },
    { label: 'सरासरी रेटिंग', value: '४.८', color: 'text-amber-500' },
    { label: 'समाधानी ग्रामस्थ', value: '९५%', color: 'text-emerald-500' }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8 font-sans pt-32">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-slate-900 rounded-2xl flex items-center justify-center text-white shadow-xl">
                 <MessageSquare className="h-6 w-6" />
              </div>
              <h1 className="text-4xl font-black text-slate-900 italic tracking-tighter italic">लोक <span className="text-primary-600">अभिप्राय</span></h1>
            </div>
            <p className="text-slate-500 font-bold uppercase text-[10px] tracking-[0.2em] ml-16 italic">तुमचे मत आमच्यासाठी महत्त्वाचे आहे.</p>
          </motion.div>
          
          <button 
            onClick={() => setShowModal(true)}
            className="flex items-center px-10 py-5 bg-primary-600 text-white rounded-[1.5rem] font-black shadow-2xl shadow-primary-500/30 hover:bg-primary-700 transition-all group"
          >
            तुमचा अभिप्राय द्या <Send className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
           {stats.map((s, idx) => (
             <motion.div
               key={idx}
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               transition={{ delay: idx * 0.1 }}
               className="bg-white p-12 rounded-[3.5rem] shadow-xl border border-slate-50 flex flex-col items-center text-center"
             >
                <div className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-4 italic">{s.label}</div>
                <div className={`text-5xl font-black ${s.color} italic tracking-tighter italic`}>{s.value}</div>
             </motion.div>
           ))}
        </div>

        {/* Feedback List */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
           {feedbackList.map((f, idx) => (
             <motion.div
               key={f.id}
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: idx * 0.1 }}
               className="bg-white p-12 rounded-[4rem] shadow-2xl border border-slate-50 relative group"
             >
                <div className="absolute top-12 right-12 flex space-x-1">
                   {[...Array(5)].map((_, i) => (
                     <Star key={i} className={`h-4 w-4 ${i < f.rating ? 'fill-amber-400 text-amber-400' : 'text-slate-100'}`} />
                   ))}
                </div>
                
                <div className="flex items-start space-x-6 mb-8">
                   <div className="p-4 bg-slate-50 rounded-2xl">
                      <UserCircle2 className="h-10 w-10 text-slate-300" />
                   </div>
                   <div>
                      <h4 className="text-xl font-black text-slate-900 italic tracking-tight italic">{f.user}</h4>
                      <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-1 italic">{f.date} • <span className="text-primary-600">{f.category}</span></div>
                   </div>
                </div>
                
                <p className="text-lg font-bold text-slate-600 italic leading-relaxed">
                   "{f.comment}"
                </p>
                
                <div className="mt-8 pt-8 border-t border-slate-50 flex items-center justify-between">
                   <div className="flex items-center space-x-2 bg-emerald-50 px-4 py-2 rounded-full">
                      <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                      <span className="text-[10px] font-black text-emerald-700 uppercase tracking-widest">प्रशासनाने पाहिले</span>
                   </div>
                </div>
             </motion.div>
           ))}
        </div>
      </div>

      {/* Feedback Modal */}
      <AnimatePresence>
        {showModal && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
             <motion.div 
               initial={{ opacity: 0 }}
               animate={{ opacity: 1 }}
               exit={{ opacity: 0 }}
               className="absolute inset-0 bg-slate-950/90 backdrop-blur-2xl"
               onClick={() => setShowModal(false)}
             ></motion.div>
             <motion.div
               initial={{ opacity: 0, scale: 0.9, y: 20 }}
               animate={{ opacity: 1, scale: 1, y: 0 }}
               exit={{ opacity: 0, scale: 0.9, y: 20 }}
               className="relative bg-white rounded-[4rem] w-full max-w-2xl overflow-hidden shadow-2xl"
             >
                <div className="p-10 md:p-14 bg-slate-950 text-white flex items-center justify-between">
                   <h2 className="text-3xl font-black italic tracking-tighter italic">तुमचा अभिप्राय द्या</h2>
                   <button onClick={() => setShowModal(false)} className="w-12 h-12 rounded-2xl hover:bg-white/10 flex items-center justify-center transition-colors">
                      <X className="h-6 w-6" />
                   </button>
                </div>
                
                <form className="p-10 md:p-14 space-y-10">
                   <div className="text-center">
                      <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">तुमची गुणवत्ता निवडा</div>
                      <div className="flex justify-center space-x-6">
                         {[1, 2, 3, 4, 5].map((star) => (
                           <button
                             type="button"
                             key={star}
                             onMouseEnter={() => setHover(star)}
                             onMouseLeave={() => setHover(0)}
                             onClick={() => setRating(star)}
                             className="transition-transform active:scale-95"
                           >
                             <Star 
                               className={`h-12 w-12 transition-colors ${ star <= (hover || rating) ? 'fill-amber-400 text-amber-400' : 'text-slate-100'}`} 
                             />
                           </button>
                         ))}
                      </div>
                   </div>

                   <div className="space-y-4">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-6">वर्गवारी (Category)</label>
                      <select className="w-full bg-slate-50 border-none rounded-[1.5rem] p-6 text-lg font-bold outline-none focus:ring-4 focus:ring-primary-100 appearance-none">
                         <option>रस्ते आणि पायाभूत सुविधा</option>
                         <option>पाणी आणि स्वच्छता</option>
                         <option>शिक्षण आणि आरोग्य</option>
                         <option>प्रशासकीय कार्यप्रणाली</option>
                      </select>
                   </div>

                   <div className="space-y-4">
                      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-6">तुमचा संदेश</label>
                      <textarea 
                        rows="4" 
                        placeholder="तुमचा अनुभव किंवा सूचना लिहा..."
                        className="w-full bg-slate-50 border-none rounded-[2.5rem] p-10 text-lg font-bold outline-none focus:ring-4 focus:ring-primary-100 italic"
                      ></textarea>
                   </div>

                   <button type="submit" className="w-full py-8 bg-slate-900 text-white rounded-[2.5rem] font-black text-lg uppercase tracking-[0.2em] shadow-2xl hover:bg-primary-600 transition-all">अभिप्राय नोंदवा (Submit)</button>
                </form>
             </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Feedback;
