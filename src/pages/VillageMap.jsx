import { motion } from 'framer-motion';
import { 
  BusIcon, 
  ExternalLink, 
  Landmark, 
  Layers, 
  Map as MapIcon, 
  Navigation, 
  School, 
  Train 
} from 'lucide-react';
import React from 'react';

const VillageMap = () => {
  const locations = [
    { name: 'ग्रामपंचायत कार्यालय', category: 'Admin', icon: Landmark, pos: 'top-[30%] left-[45%]' },
    { name: 'जिल्हा परिषद शाळा', category: 'Education', icon: School, pos: 'top-[50%] left-[25%]' },
    { name: 'रेल्वे स्थानक (Chikni Road)', category: 'Transport', icon: Train, pos: 'top-[70%] left-[80%]' },
    { name: 'बस स्टॉप (वरोरा रोड)', category: 'Transport', icon: BusIcon, pos: 'top-[20%] left-[10%]' }
  ];

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
                 <MapIcon className="h-6 w-6" />
              </div>
              <h1 className="text-4xl font-black text-slate-900 italic tracking-tighter italic">डिजिटल <span className="text-primary-600">नकाशा</span></h1>
            </div>
            <p className="text-slate-500 font-bold uppercase text-[10px] tracking-[0.2em] ml-16 italic">गावातील महत्त्वाच्या ठिकाणांचे अचूक स्थान.</p>
          </motion.div>

          <button className="flex items-center px-10 py-5 bg-primary-600 text-white rounded-[1.5rem] font-black shadow-2xl shadow-primary-500/30 hover:bg-primary-700 transition-all group">
            मोठ्या नकाशावर पहा <ExternalLink className="ml-3 h-5 w-5 group-hover:scale-110 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
           
           {/* Interactive Map Area (Visual Mockup) */}
           <div className="lg:col-span-3">
              <motion.div 
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-white rounded-[4rem] shadow-2xl border border-slate-50 p-6 md:p-12 relative overflow-hidden h-[600px]"
              >
                 {/* Map Placeholder Texture */}
                 <div className="absolute inset-0 bg-slate-50 opacity-50 flex items-center justify-center">
                    <div className="w-full h-full border-[20px] border-white/50 rounded-[3rem] shadow-inner grid grid-cols-12 grid-rows-12 gap-1">
                       {[...Array(144)].map((_, i) => (
                          <div key={i} className="border-[1px] border-slate-100/30"></div>
                       ))}
                    </div>
                 </div>

                 {/* Road & River Mocks */}
                 <div className="absolute w-full h-10 bg-slate-200 top-1/2 -translate-y-1/2 rotate-12 opacity-30"></div>
                 <div className="absolute w-10 h-full bg-blue-100 left-1/3 opacity-20 blur-xl"></div>

                 {/* Markers */}
                 {locations.map((loc, i) => (
                    <motion.div
                       key={i}
                       initial={{ opacity: 0, y: 10 }}
                       animate={{ opacity: 1, y: 0 }}
                       transition={{ delay: 0.5 + (i * 0.1) }}
                       className={`absolute ${loc.pos} group cursor-pointer z-20`}
                    >
                       <div className="relative">
                          <div className="absolute inset-0 bg-primary-600/20 blur-xl scale-150 rounded-full animate-pulse"></div>
                          <div className="relative bg-white p-4 rounded-2xl shadow-2xl border border-slate-50 group-hover:scale-110 group-hover:-translate-y-2 transition-all">
                             <loc.icon className="h-6 w-6 text-primary-600" />
                          </div>
                          <div className="absolute top-full mt-4 left-1/2 -translate-x-1/2 bg-slate-900 px-6 py-2 rounded-xl text-[10px] font-black text-white whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 transition-opacity">
                             {loc.name}
                          </div>
                       </div>
                    </motion.div>
                 ))}

                 {/* Control UI */}
                 <div className="absolute bottom-12 right-12 z-30 flex flex-col gap-4">
                    <div className="bg-white p-4 rounded-2xl shadow-2xl border border-slate-50 text-slate-400 hover:text-primary-600 cursor-pointer">
                       <Layers className="h-6 w-6" />
                    </div>
                    <div className="bg-white p-4 rounded-2xl shadow-2xl border border-slate-50 text-primary-600 cursor-pointer scale-110">
                       <Navigation className="h-6 w-6" />
                    </div>
                 </div>
              </motion.div>
           </div>

           {/* Sidebar Info */}
           <div className="space-y-8">
              <div className="bg-white rounded-[3.5rem] shadow-2xl border border-slate-50 overflow-hidden">
                 <div className="p-10 border-b border-slate-50 bg-slate-50/10">
                    <h3 className="text-xl font-black text-slate-900 italic tracking-tight italic">यादी (Locations)</h3>
                 </div>
                 <div className="p-8 space-y-4">
                    {locations.map((loc, i) => (
                       <div key={i} className="flex items-center p-4 hover:bg-slate-50 rounded-2xl transition-colors cursor-pointer group">
                          <div className="p-3 bg-white border border-slate-100 rounded-xl text-slate-300 group-hover:text-primary-600 transition-colors">
                             <loc.icon className="h-5 w-5" />
                          </div>
                          <div className="ml-5">
                             <div className="text-sm font-black text-slate-800 italic uppercase italic">{loc.name}</div>
                             <div className="text-[8px] font-black text-slate-400 italic">{loc.category}</div>
                          </div>
                       </div>
                    ))}
                 </div>
              </div>

              <div className="bg-slate-900 p-10 rounded-[3.5rem] text-white overflow-hidden relative group">
                 <div className="absolute top-0 right-0 p-8 opacity-10">
                    <Navigation className="h-16 w-16" />
                 </div>
                 <h4 className="text-xl font-black italic mb-4">कसे याल?</h4>
                 <p className="text-slate-400 text-xs font-bold italic leading-relaxed mb-8">
                    वरोराहून बल्हारशाहकडे जाणाऱ्या रस्त्यावर डोंगरगाव (रेल्वे) फाटा आहे. तिथून १ किमी अंतरावर गाव आहे.
                 </p>
                 <button className="w-full py-5 bg-primary-600 hover:bg-primary-700 text-white rounded-2xl text-[10px] font-black uppercase tracking-widest shadow-xl transition-all">Google Maps उघडा</button>
              </div>
           </div>

        </div>
      </div>
    </div>
  );
};

export default VillageMap;
