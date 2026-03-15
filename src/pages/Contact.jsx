import { motion } from 'framer-motion';
import { 
  Building2, 
  Clock, 
  Mail, 
  MapPin, 
  Phone, 
  Send 
} from 'lucide-react';
import React from 'react';

const Contact = () => {
  return (
    <div className="bg-slate-50 min-h-screen pb-24 text-slate-900 font-sans">
      {/* Header */}
      <div className="bg-slate-900 pt-48 pb-32 px-4 relative overflow-hidden">
         <div className="section-container relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight italic italic underline decoration-primary-500/30 underline-offset-12">आमच्याशी संपर्क साधा (Contact)</h1>
              <p className="text-xl text-primary-300 font-medium">आपल्या शंका आणि मार्गदर्शनासाठी ग्रामपंचायत कार्यालय सदैव तत्पर आहे.</p>
            </motion.div>
         </div>
      </div>

      <div className="section-container -mt-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
           
           {/* Contact Form */}
           <motion.div 
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="bg-white p-12 md:p-20 rounded-[4rem] shadow-2xl border border-slate-50 relative overflow-hidden group"
           >
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-50 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none group-hover:bg-primary-100 transition-colors"></div>
              
              <div className="relative z-10">
                 <h2 className="text-3xl font-black italic tracking-tighter italic mb-12">संदेश पाठवा</h2>
                 
                 <form className="space-y-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                       <div className="space-y-4">
                          <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-4 italic">तुमचे पूर्ण नाव</label>
                          <input type="text" placeholder="उदा: राहुल पाटील" className="w-full bg-slate-50 border-none rounded-[2rem] p-8 text-lg font-bold outline-none focus:ring-4 focus:ring-primary-100 transition-all" />
                       </div>
                       <div className="space-y-4">
                          <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-4 italic">ईमेल आयडी</label>
                          <input type="email" placeholder="तुमचा@ईमेल.कॉम" className="w-full bg-slate-50 border-none rounded-[2rem] p-8 text-lg font-bold outline-none focus:ring-4 focus:ring-primary-100 transition-all" />
                       </div>
                    </div>
                    
                    <div className="space-y-4">
                       <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-4 italic">विषय (Subject)</label>
                       <input type="text" placeholder="आपल्या संदेशाचा विषय" className="w-full bg-slate-50 border-none rounded-[2rem] p-8 text-lg font-bold outline-none focus:ring-4 focus:ring-primary-100 transition-all" />
                    </div>

                    <div className="space-y-4">
                       <label className="text-xs font-black text-slate-400 uppercase tracking-widest ml-4 italic">संदेश (Message)</label>
                       <textarea rows="6" placeholder="तुमचा संदेश येथे लिहा..." className="w-full bg-slate-50 border-none rounded-[3rem] p-10 text-lg font-bold outline-none focus:ring-4 focus:ring-primary-100 transition-all"></textarea>
                    </div>

                    <button type="submit" className="w-full py-8 bg-slate-900 text-white rounded-[2.5rem] font-black text-lg uppercase tracking-[0.2em] shadow-2xl hover:bg-primary-600 hover:shadow-primary-600/30 transition-all flex items-center justify-center group">
                      पाठवा <Send className="ml-4 h-6 w-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                 </form>
              </div>
           </motion.div>

           {/* Contact Sidebar */}
           <div className="space-y-10">
              <div className="bg-white p-12 rounded-[4rem] shadow-2xl border border-slate-50">
                 <h3 className="text-2xl font-black italic tracking-tighter italic mb-12">संपर्क तपशील</h3>
                 
                 <div className="space-y-12">
                    <div className="flex items-start">
                       <div className="w-16 h-16 bg-primary-50 rounded-[1.5rem] flex items-center justify-center mr-8 shrink-0 text-primary-600">
                          <Phone className="h-8 w-8" />
                       </div>
                       <div>
                          <div className="text-[10px] font-black text-slate-300 uppercase tracking-widest leading-none mb-2">फोन नंबर</div>
                          <div className="text-2xl font-black text-slate-900 italic tracking-tighter italic">+९१ ९१४६२४५३८९</div>
                       </div>
                    </div>

                    <div className="flex items-start">
                       <div className="w-16 h-16 bg-primary-50 rounded-[1.5rem] flex items-center justify-center mr-8 shrink-0 text-primary-600">
                          <Mail className="h-8 w-8" />
                       </div>
                       <div>
                          <div className="text-[10px] font-black text-slate-300 uppercase tracking-widest leading-none mb-2">ईमेल आयडी</div>
                          <div className="text-2xl font-black text-slate-900 border-none break-all italic tracking-tighter italic">gpdongargaon95@gmail.com</div>
                       </div>
                    </div>

                    <div className="flex items-start">
                       <div className="w-16 h-16 bg-primary-50 rounded-[1.5rem] flex items-center justify-center mr-8 shrink-0 text-primary-600">
                          <MapPin className="h-8 w-8" />
                       </div>
                       <div>
                          <div className="text-[10px] font-black text-slate-300 uppercase tracking-widest leading-none mb-2">पत्ता</div>
                          <p className="text-slate-500 font-bold italic leading-relaxed text-lg italic">ग्रामपंचायत कार्यालय, पो. डोंगरगाव (रेल्वे), ता. वरोरा, जिल्हा चंद्रपूर, महाराष्ट्र.</p>
                       </div>
                    </div>
                 </div>
              </div>

              <div className="bg-slate-900 p-12 rounded-[4rem] text-white shadow-2xl relative overflow-hidden group">
                 <div className="absolute inset-0 bg-primary-600/5 blur-3xl rounded-full translate-x-1/2 pointer-events-none"></div>
                 <div className="relative z-10 flex items-center gap-6 mb-8">
                    <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-primary-400">
                       <Clock className="h-7 w-7" />
                    </div>
                    <h4 className="text-xl font-black italic tracking-tight italic uppercase tracking-widest">कार्यालयीन वेळ</h4>
                 </div>
                 <p className="text-slate-400 font-medium italic mb-2">सोमवार ते शनिवार: सकाळी १०:०० ते ६:००</p>
                 <p className="text-primary-400/50 font-black italic text-xs uppercase tracking-widest">रविवार बंद</p>
              </div>

              <div className="bg-primary-600 p-12 rounded-[4rem] text-white shadow-2xl relative overflow-hidden group text-center">
                 <Building2 className="h-10 w-10 mx-auto mb-6 text-white opacity-40" />
                 <h4 className="text-lg font-black mb-2 italic">डिजिटल साक्षरता</h4>
                 <p className="text-primary-100 font-medium italic opacity-80">गावाचा विकास, डिजिटल पाऊल!</p>
              </div>
           </div>

        </div>
      </div>
    </div>
  );
};

export default Contact;
