import { motion } from 'framer-motion';
import { 
  ArrowUpRight, 
  CloudSun, 
  Leaf, 
  LineChart, 
  Sprout, 
  Sun, 
  Table 
} from 'lucide-react';
import React from 'react';

const Agriculture = () => {
  const mandiPrices = [
    { crop: 'सोयाबीन', price: '₹ ४,८००', change: '+₹ ५०', trend: 'up' },
    { crop: 'कापूस (Cotton)', price: '₹ ७,२००', change: '-₹ १००', trend: 'down' },
    { crop: 'तूर (Pigeon Pea)', price: '₹ ९,५००', change: '+₹ २००', trend: 'up' },
    { crop: 'गहू (Wheat)', price: '₹ २,६००', change: '०', trend: 'stable' }
  ];

  const govtSchemes = [
    { title: 'पीक विमा योजना २०२४', description: 'नैसर्गिक आपत्तीमुळे होणाऱ्या नुकसानीसाठी संरक्षण.' },
    { title: 'नमो शेतकरी महासन्मान', description: 'महाराष्ट्र सरकारकडून वार्षिक ६००० रुपयांची मदत.' },
    { title: 'कुसुम सौर पंप योजना', description: 'शेतकऱ्यांना सवलतीच्या दरात सौर पंप उपलब्ध.' }
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
              <div className="w-12 h-12 bg-primary-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-primary-500/20">
                 <Leaf className="h-6 w-6" />
              </div>
              <h1 className="text-4xl font-black text-slate-900 italic tracking-normal italic">कृषी <span className="text-primary-600">नकाशा</span></h1>
            </div>
            <p className="text-slate-500 font-bold uppercase text-[10px] tracking-[0.2em] ml-16 italic">शेतकरी बांधवांसाठी बाजार भाव आणि सल्ला केंद्र.</p>
          </motion.div>

          <div className="bg-white p-6 rounded-3xl shadow-xl border border-slate-50 flex items-center space-x-8">
             <div className="flex items-center space-x-4">
                <div className="p-3 bg-amber-50 rounded-xl">
                   <CloudSun className="h-6 w-6 text-amber-500" />
                </div>
                <div>
                   <div className="text-[10px] font-black text-slate-300 uppercase tracking-widest leading-relaxed mb-1">हवामान</div>
                   <div className="text-lg font-black text-slate-900 italic leading-relaxed">३४°C / स्वच्छ</div>
                </div>
             </div>
             <div className="w-[1px] h-10 bg-slate-100 italic"></div>
             <div className="flex items-center space-x-4">
                <div className="p-3 bg-blue-50 rounded-xl">
                   <Sun className="h-6 w-6 text-blue-500" />
                </div>
                <div>
                   <div className="text-[10px] font-black text-slate-300 uppercase tracking-widest leading-relaxed mb-1">आर्द्रता</div>
                   <div className="text-lg font-black text-slate-900 italic leading-relaxed">४५%</div>
                </div>
             </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
           
           {/* Mandi Prices Dashboard */}
           <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-[4rem] shadow-2xl border border-slate-50 overflow-hidden"
              >
                 <div className="p-12 border-b border-slate-50 flex items-center justify-between bg-slate-50/20">
                    <div className="flex items-center space-x-5">
                       <div className="p-4 bg-slate-900 rounded-2xl text-white">
                          <LineChart className="h-6 w-6" />
                       </div>
                       <h3 className="text-2xl font-black text-slate-900 italic tracking-normal italic">आजचे बाजार भाव (वरोरा मंडी)</h3>
                    </div>
                    <button className="p-4 bg-white rounded-2xl border border-slate-100 text-slate-300 hover:text-primary-600 transition-colors shadow-sm">
                       <Table className="h-6 w-6" />
                    </button>
                 </div>
                 
                 <div className="p-12 grid grid-cols-1 md:grid-cols-2 gap-8">
                    {mandiPrices.map((p, i) => (
                      <div key={i} className="bg-slate-50/50 p-8 rounded-[2.5rem] border border-slate-50 hover:border-primary-100 transition-all group">
                         <div className="flex justify-between items-start mb-6">
                            <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest italic">{p.crop}</span>
                            <div className={`px-4 py-1.5 rounded-full text-[10px] font-black flex items-center ${p.trend === 'up' ? 'bg-emerald-50 text-emerald-600' : (p.trend === 'down' ? 'bg-red-50 text-red-600' : 'bg-slate-100 text-slate-400')}`}>
                               {p.change} {p.trend === 'up' && <ArrowUpRight className="h-3 w-3 ml-1" />}
                            </div>
                         </div>
                         <div className="text-3xl font-black text-slate-900 italic tracking-normal italic group-hover:text-primary-600 transition-colors italic">{p.price}</div>
                         <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mt-2 italic group-hover:opacity-100 transition-opacity">प्रति क्विंटल</div>
                      </div>
                    ))}
                 </div>
                 
                 <div className="px-12 py-8 bg-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6">
                    <div className="flex items-center space-x-4">
                       <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                       <span className="text-sm font-black text-slate-400 italic">माहिती शेवटची अपडेट: १० मिनिटांपूर्वी</span>
                    </div>
                    <button className="text-[10px] font-black uppercase tracking-[0.2em] text-primary-400 hover:text-white transition-colors">सर्व पिकांचे भाव पहा</button>
                 </div>
              </motion.div>
           </div>

           {/* Expert Advisory Sidebar */}
           <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-primary-600 rounded-[4rem] p-12 text-white shadow-2xl shadow-primary-500/30 relative overflow-hidden group"
              >
                  <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:scale-125 transition-transform duration-700">
                     <Sprout className="h-40 w-40" />
                  </div>
                  <h4 className="text-2xl font-black mb-8 italic tracking-normal italic">या आठवड्याचा <br/> कृषी सल्ला</h4>
                  <p className="text-primary-50 font-medium italic leading-relaxed mb-10 opacity-80">
                    पुढील ३ दिवसात हलका पाऊस पडण्याची शक्यता आहे. कापूस वेचणी पूर्ण करून घ्यावी. खत व्यवस्थापनासाठी माती परीक्षण करून घ्यावे.
                  </p>
                  <button className="w-full py-5 bg-white text-primary-600 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-900 hover:text-white transition-all shadow-xl">
                    विस्तृत सल्ला वाचा
                  </button>
              </motion.div>

              <div className="bg-white rounded-[4rem] shadow-2xl border border-slate-50 overflow-hidden">
                 <div className="p-10 border-b border-slate-50">
                    <h4 className="text-xl font-black text-slate-900 italic tracking-tight italic flex items-center">
                       <Leaf className="h-5 w-5 mr-3 text-primary-600" /> कृषी योजना
                    </h4>
                 </div>
                 <div className="p-10 space-y-8">
                    {govtSchemes.map((s, i) => (
                      <div key={i} className="group cursor-pointer">
                         <h5 className="text-sm font-black text-slate-800 group-hover:text-primary-600 transition-colors uppercase tracking-tight italic mb-2">{s.title}</h5>
                         <p className="text-[10px] text-slate-400 font-bold italic leading-relaxed">{s.description}</p>
                      </div>
                    ))}
                 </div>
                 <div className="p-10 bg-slate-50/50">
                    <button className="w-full py-5 bg-white border border-slate-100 rounded-3xl font-black text-[10px] uppercase tracking-[0.2em] text-slate-400 hover:text-primary-600 hover:border-primary-100 transition-all">सर्व योजना पहा</button>
                 </div>
              </div>
           </div>

        </div>
      </div>
    </div>
  );
};

export default Agriculture;
