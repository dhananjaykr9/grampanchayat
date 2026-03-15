import { motion } from 'framer-motion';
import { BookOpen, Calendar, Download, FileText, HelpCircle, Info, Mail, MapPin, Phone, ShieldCheck } from 'lucide-react';
import React from 'react';

const RTI = () => {
  return (
    <div className="bg-slate-50 min-h-screen pb-24 text-slate-900">
      {/* Header */}
      <div className="bg-slate-900 pt-48 pb-32 px-4 relative overflow-hidden text-center">
         <div className="section-container relative z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight italic italic underline decoration-primary-500/30 underline-offset-12">माहितीचा अधिकार (RTI)</h1>
              <p className="text-xl text-primary-300 font-medium text-center">पारदर्शकता आणि जबाबदारी: माहिती मिळवणे हा तुमचा घटनादत्त अधिकार आहे.</p>
            </motion.div>
         </div>
      </div>

      <div className="section-container -mt-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-12">
             <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="bg-white p-12 md:p-20 rounded-[4rem] shadow-2xl border border-slate-50 relative overflow-hidden group"
             >
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary-50 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none group-hover:bg-primary-100 transition-colors"></div>
                <div className="relative z-10">
                   <div className="flex items-center gap-4 mb-10">
                      <div className="w-16 h-16 bg-primary-600 rounded-[1.5rem] flex items-center justify-center text-white shadow-xl shadow-primary-500/30">
                         <ShieldCheck className="h-8 w-8" />
                      </div>
                      <h2 className="text-3xl font-black italic tracking-tighter italic">माहितीचा अधिकार: एक परिचय</h2>
                   </div>
                   
                   <div className="space-y-8 text-slate-600 text-lg leading-relaxed font-medium italic">
                      <p>महितीचा अधिकार अधिनियम, २००५ हा नागरिकांना सरकारी कामकाजाची माहिती मिळवण्यासाठी सक्षम करतो. हा कायदा प्रशासनात पारदर्शकता आणि उत्तरदायित्व वाढवण्याचे काम करतो.</p>
                      
                      <div className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100 space-y-6">
                         <h3 className="text-xl font-black text-slate-900 italic flex items-center">
                           <HelpCircle className="h-5 w-5 mr-3 text-primary-600" /> अर्ज कसा करावा?
                         </h3>
                         <ul className="space-y-4">
                            {[
                               'एक लेखी अर्ज किंवा ऑनलाइन ई-मेल द्वारे माहिती मागवता येते.',
                               'माहिती अधिकाराचा अर्ज हा जन माहिती अधिकाऱ्याच्या नावे असावा.',
                               'अर्जासोबत विहित शुल्क (रु. १०) भरणे आवश्यक आहे.',
                               'बी.पी.एल. (BPL) मधील नागरिकांसाठी शुल्क माफ आहे.'
                            ].map((step, sIdx) => (
                               <li key={sIdx} className="flex items-start">
                                  <div className="w-6 h-6 rounded-full bg-white border border-slate-200 flex items-center justify-center shrink-0 mr-4 text-[10px] font-black">{sIdx+1}</div>
                                  <span>{step}</span>
                               </li>
                            ))}
                         </ul>
                      </div>
                   </div>
                </div>
             </motion.div>
             
             <div className="bg-slate-900 p-12 md:p-20 rounded-[4rem] text-white shadow-2xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-primary-600/5 blur-3xl rounded-full translate-x-1/2 pointer-events-none"></div>
                <h3 className="text-2xl font-black mb-8 italic tracking-tight italic">निवडक दस्तऐवज (Templates)</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                   <button className="p-8 bg-white/5 border border-white/10 rounded-[2rem] hover:bg-white transition-all hover:text-slate-900 flex items-center justify-between group/link">
                      <div className="flex items-center font-black italic">
                         <FileText className="h-5 w-5 mr-4 text-primary-400 group-hover/link:text-primary-600" />
                         नमुना अर्ज (A)
                      </div>
                      <Download className="h-5 w-5 opacity-30 group-hover/link:opacity-100 group-hover/link:translate-y-1 transition-all" />
                   </button>
                   <button className="p-8 bg-white/5 border border-white/10 rounded-[2rem] hover:bg-white transition-all hover:text-slate-900 flex items-center justify-between group/link">
                      <div className="flex items-center font-black italic">
                         <FileText className="h-5 w-5 mr-4 text-primary-400 group-hover/link:text-primary-600" />
                         अपील अर्ज नमुना
                      </div>
                      <Download className="h-5 w-5 opacity-30 group-hover/link:opacity-100 group-hover/link:translate-y-1 transition-all" />
                   </button>
                </div>
             </div>
          </div>

          {/* Officer Sidebar */}
          <div className="lg:col-span-1 space-y-10">
             <div className="bg-white p-10 rounded-[3rem] shadow-2xl border border-slate-50">
                <div className="flex items-center gap-4 mb-10">
                   <div className="w-12 h-12 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 shadow-sm">
                      <BookOpen className="h-6 w-6" />
                   </div>
                   <h3 className="text-lg font-black uppercase tracking-widest italic leading-none">जन माहिती अधिकारी</h3>
                </div>

                <div className="space-y-10">
                   <div className="text-center pb-10 border-b border-slate-50 border-dotted">
                      <div className="w-24 h-24 bg-slate-100 rounded-[2.5rem] flex items-center justify-center mx-auto mb-6 text-slate-300">
                         <UserIcon className="h-12 w-12" />
                      </div>
                      <h4 className="text-xl font-black text-slate-900 italic mb-1">श्री. प्रितम कांबळे</h4>
                      <div className="text-[10px] font-black text-primary-600 uppercase tracking-widest bg-primary-50 inline-block px-4 py-1.5 rounded-full">ग्रामसेवक</div>
                   </div>

                   <ul className="space-y- base">
                      <li className="flex items-start">
                         <Phone className="h-4 w-4 text-slate-400 mr-4 shrink-0 mt-1" />
                         <div>
                            <div className="text-[10px] font-black text-slate-300 uppercase tracking-widest leading-none mb-1">संपर्क</div>
                            <div className="text-slate-600 font-bold">+९१ ९८७६५४३२१०</div>
                         </div>
                      </li>
                      <li className="flex items-start">
                         <Mail className="h-4 w-4 text-slate-400 mr-4 shrink-0 mt-1" />
                         <div>
                            <div className="text-[10px] font-black text-slate-300 uppercase tracking-widest leading-none mb-1">ईमेल</div>
                            <div className="text-slate-600 font-bold break-all">kamble@email.com</div>
                         </div>
                      </li>
                      <li className="flex items-start">
                         <Calendar className="h-4 w-4 text-slate-400 mr-4 shrink-0 mt-1" />
                         <div>
                            <div className="text-[10px] font-black text-slate-300 uppercase tracking-widest leading-none mb-1">कार्यालय वेळ</div>
                            <div className="text-slate-600 font-bold italic leading-relaxed text-sm">दुसरी शनिवार वगळता सर्व कामकाजाचे दिवस.</div>
                         </div>
                      </li>
                   </ul>
                </div>
             </div>

             <div className="bg-amber-600 p-10 rounded-[3rem] text-white shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-16 -mt-16 group-hover:scale-125 transition-transform duration-700"></div>
                <Info className="h-10 w-10 text-white mb-6" />
                <h4 className="text-xl font-black mb-4 italic tracking-tight italic">प्रथम अपील अधिकारी</h4>
                <div className="text-lg font-black mb-2 italic tracking-tighter italic">विस्तार अधिकारी (पंचायत)</div>
                <p className="text-amber-100 text-sm font-medium leading-relaxed italic opacity-80">
                  पंचायत समिती, वरोरा. जिल्हा परिषद, चंद्रपूर.
                </p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RTI;

const UserIcon = ({ className, ...props }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className} 
    {...props}
  >
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
);
