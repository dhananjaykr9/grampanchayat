import { motion } from 'framer-motion';
import { 
  Network, 
  Settings, 
  ShieldCheck, 
  Zap 
} from 'lucide-react';
import React, { useEffect, useState } from 'react';

const LowInternetMode = () => {
  const [isLowData, setIsLowData] = useState(() => {
    return localStorage.getItem('lowDataMode') === 'true';
  });

  useEffect(() => {
    localStorage.setItem('lowDataMode', isLowData);
    if(isLowData) {
      document.body.classList.add('low-data-mode');
    } else {
      document.body.classList.remove('low-data-mode');
    }
  }, [isLowData]);

  return (
    <div className="bg-slate-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8 font-sans pt-32">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-slate-900 rounded-[4rem] p-12 md:p-20 text-white shadow-2xl relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-10 opacity-5 group-hover:scale-110 transition-transform duration-700">
             <Network className="h-64 w-64" />
          </div>
          
          <div className="relative z-10">
             <div className="flex items-center space-x-3 bg-white/10 px-4 py-2 rounded-full w-fit mb-8 backdrop-blur-md border border-white/10">
                <Zap className="h-4 w-4 text-primary-400" />
                <span className="text-[10px] font-black uppercase tracking-widest text-primary-200">अॅक्सेसिबिलिटी पर्याय</span>
             </div>
             
             <h1 className="text-5xl font-black italic tracking-tighter italic mb-8 italic italic">कमी इंटरनेट <br/><span className="text-primary-500 underline decoration-white/20 underline-offset-8">मोड (Low Data)</span></h1>
             
             <p className="text-lg font-bold text-slate-400 max-w-xl italic leading-relaxed mb-12">
               जर तुमचे इंटरनेट संथ असेल किंवा तुम्हाला डेटा वाचवायचा असेल, तर तुम्ही हा मोड सुरू करू शकता. यामुळे अनावश्यक अ‍ॅनिमेशन आणि मोठ्या इमेजेस लोड होणे थांबेल.
             </p>

             <div className="flex flex-col sm:flex-row items-center gap-8">
                <button 
                  onClick={() => setIsLowData(!isLowData)}
                  className={`w-full sm:w-80 py-8 rounded-[2.5rem] font-black text-xl uppercase tracking-[0.2em] transition-all shadow-2xl flex items-center justify-center group ${isLowData ? 'bg-primary-600 text-white' : 'bg-white text-slate-900 hover:bg-slate-100'}`}
                >
                   {isLowData ? 'चालू आहे (OFF करायला दाबा)' : 'सुरू करा (Turn ON)'}
                   <ShieldCheck className={`ml-4 h-6 w-6 transition-transform ${isLowData ? 'scale-125' : 'group-hover:scale-110'}`} />
                </button>
                <div className="flex items-center space-x-4">
                   <div className={`w-3 h-3 rounded-full animate-pulse ${isLowData ? 'bg-emerald-500' : 'bg-slate-700'}`}></div>
                   <span className="text-xs font-black uppercase tracking-widest text-slate-500 italic">स्टेटस: {isLowData ? 'सक्रीय' : 'निष्क्रिय'}</span>
                </div>
             </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
           {[
             { title: 'वेगवान लोडिंग', desc: 'पृष्ठे ३ पट वेगाने उघडतील.', icon: Zap },
             { title: 'डेटा बचत', desc: '८०% पर्यंत डेटा वाचवता येईल.', icon: Settings },
             { title: 'सोपा इंटरफेस', desc: 'केवळ महत्वाची माहितीच दिसेल.', icon: ShieldCheck }
           ].map((item, i) => (
             <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + (i * 0.1) }}
              className="bg-white p-10 rounded-[3rem] shadow-xl border border-slate-50"
             >
                <item.icon className="h-8 w-8 text-primary-600 mb-6" />
                <h4 className="text-xl font-black text-slate-900 mb-2 italic tracking-tight italic italic">{item.title}</h4>
                <p className="text-xs text-slate-400 font-bold italic leading-relaxed">{item.desc}</p>
             </motion.div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default LowInternetMode;
