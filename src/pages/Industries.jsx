import { motion } from 'framer-motion';
import { 
  Building2, 
  MapPin, 
  Navigation, 
  Search, 
  TrendingUp 
} from 'lucide-react';
import React from 'react';

const Industries = () => {
  const assets = [
    {
      name: 'कोळसा खाण (Coal Mine)',
      distance: '~५ किमी',
      desc: 'गावाच्या जवळच वेकोलिची मोठी कोळसा खाण असून येथे अनेक ग्रामस्थांना रोजगार उपलब्ध आहे.',
      color: 'bg-slate-950',
      iconColor: 'text-amber-500'
    },
    {
      name: 'फ्लोराईड दगड क्षेत्र (Stone Area)',
      distance: '~१ किमी',
      desc: 'येथील परिसरात फ्लोराईड दगडांचे साठे असून हे गावातील एक महत्वाचे खनिज स्त्रोत क्षेत्र आहे.',
      color: 'bg-primary-950',
      iconColor: 'text-primary-400'
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24 text-slate-900 font-sans">
      {/* Header */}
      <div className="bg-slate-900 pt-48 pb-32 px-4 relative overflow-hidden">
         <div className="section-container relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight italic italic underline decoration-primary-500/30 underline-offset-12">स्थानिक उद्योग आणि संसाधने (Industries)</h1>
              <p className="text-xl text-primary-300 font-medium">डोंगरगाव (रेल्वे) परिसरातील उद्योग, खाणी आणि रोजगाराची क्षेत्रीय माहिती.</p>
            </motion.div>
         </div>
      </div>

      <div className="section-container -mt-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {assets.map((asset, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-[4rem] shadow-2xl border border-slate-100 overflow-hidden flex flex-col group hover:border-primary-200 transition-all duration-500"
            >
               <div className={`h-64 ${asset.color} relative overflow-hidden`}>
                  <div className="absolute inset-0 opacity-20 pointer-events-none">
                     <img src="https://www.transparenttextures.com/patterns/carbon-fibre.png" alt="texture" className="w-full h-full object-repeat" />
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center">
                     <Building2 className={`h-24 w-24 ${asset.iconColor} opacity-50 group-hover:scale-110 transition-transform duration-700`} />
                  </div>
                  <div className="absolute bottom-10 left-10 flex items-center gap-3">
                     <div className="px-5 py-2 bg-white rounded-full text-[10px] font-black uppercase tracking-widest text-slate-900 shadow-xl italic">
                        Industrial Area
                     </div>
                  </div>
               </div>

               <div className="p-10 md:p-14 flex-grow space-y-8">
                  <div className="flex items-center justify-between">
                     <h3 className="text-3xl font-black text-slate-900 italic tracking-tighter italic">
                        {asset.name}
                     </h3>
                     <div className="flex flex-col items-end">
                        <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest leading-none mb-1">गावापासून अंतर</span>
                        <div className="text-xl font-black text-primary-600 italic tracking-tighter">{asset.distance}</div>
                     </div>
                  </div>

                  <p className="text-slate-500 font-medium leading-relaxed italic text-lg py-8 border-y border-slate-50 border-dotted group-hover:border-primary-100 transition-colors">
                     {asset.desc}
                  </p>

                  <div className="grid grid-cols-2 gap-6 pt-6">
                     <div className="flex items-center p-6 bg-slate-50 rounded-2xl group-hover:bg-primary-50 transition-colors">
                        <TrendingUp className="h-5 w-5 text-primary-600 mr-4" />
                        <span className="text-sm font-black text-slate-700 italic">रोजगार संधी</span>
                     </div>
                     <div className="flex items-center p-6 bg-slate-50 rounded-2xl group-hover:bg-primary-50 transition-colors">
                        <MapPin className="h-5 w-5 text-primary-600 mr-4" />
                        <span className="text-sm font-black text-slate-700 italic">स्थानिक विकास</span>
                     </div>
                  </div>
               </div>
               
               <div className="px-10 py-8 bg-slate-50 flex items-center justify-between group-hover:bg-primary-50 transition-colors">
                  <button className="text-primary-600 font-black text-xs uppercase tracking-widest underline decoration-primary-200 underline-offset-8">नकाशा पहा</button>
                  <Navigation className="h-5 w-5 text-slate-300 group-hover:text-primary-600 group-hover:translate-x-2 transition-all" />
               </div>
            </motion.div>
          ))}
        </div>

        {/* Economy summary */}
        <div className="mt-24 bg-slate-900 p-16 md:p-24 rounded-[5rem] text-white flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl relative overflow-hidden group">
           <div className="absolute inset-0 bg-primary-600/5 blur-3xl rounded-full translate-x-1/2 pointer-events-none group-hover:scale-110 transition-transform duration-700"></div>
           <div className="relative z-10 text-center md:text-left">
              <h4 className="text-3xl font-black mb-6 tracking-tight italic italic">गावाची आर्थिक स्थिती</h4>
              <p className="text-slate-400 font-medium max-w-2xl leading-relaxed text-lg italic opacity-80">
                डोंगरगाव (रेल्वे) परिसर नैसर्गिक साधनसंपत्तीने समृद्ध आहे. या उद्योगांमुळे गावाला प्रत्यक्ष आणि अप्रत्यक्ष रोजगाराच्या संधी उपलब्ध होतात, ज्यामुळे स्थानिक अर्थव्यवस्था मजबूत होण्यास मदत होते.
              </p>
           </div>
           <div className="relative z-10 p-10 bg-white/5 border border-white/10 rounded-[3rem] backdrop-blur-xl shrink-0 group-hover:bg-white/10 transition-colors">
              <div className="text-5xl font-black text-primary-400 mb-2 italic tracking-tighter">७५%</div>
              <div className="text-[10px] font-black uppercase text-slate-500 tracking-widest italic">स्थानिक रोजगार प्राधान्य</div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Industries;
