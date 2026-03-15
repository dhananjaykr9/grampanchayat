import { motion } from 'framer-motion';
import { 
  Calendar as CalendarIcon, 
  ChevronLeft, 
  ChevronRight, 
  Flag, 
  Gavel, 
  Info, 
  Music, 
  Users 
} from 'lucide-react';
import React, { useState } from 'react';

const CalendarPage = () => {
  const [currentMonth, setCurrentMonth] = useState('मार्च २०२४');

  const events = [
    { day: 15, title: 'मोफत आरोग्य शिबिर', category: 'Health', color: 'bg-emerald-500' },
    { day: 22, title: 'पाणी पुरवठा समिती बैठक', category: 'Meeting', color: 'bg-blue-500' },
    { day: 25, title: 'ग्रामसभा (महत्त्वाचे)', category: 'Sabha', color: 'bg-red-500' },
    { day: 28, title: 'होळी उत्सव (गाव चौक)', category: 'Festival', color: 'bg-orange-500' }
  ];

  const days = Array.from({ length: 31 }, (_, i) => i + 1);

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
                 <CalendarIcon className="h-6 w-6" />
              </div>
              <h1 className="text-4xl font-black text-slate-900 italic tracking-tighter italic">गाव <span className="text-primary-600">कॅलेंडर</span></h1>
            </div>
            <p className="text-slate-500 font-bold uppercase text-[10px] tracking-[0.2em] ml-16 italic">सण, उत्सव आणि शासकीय उपक्रमांची दिनदर्शिका.</p>
          </motion.div>

          <div className="flex items-center bg-white p-4 rounded-3xl shadow-xl border border-slate-50">
             <button className="p-3 hover:bg-slate-50 rounded-2xl transition-colors"><ChevronLeft className="h-5 w-5 text-slate-400" /></button>
             <span className="px-10 text-xl font-black text-slate-900 italic tracking-tight italic">{currentMonth}</span>
             <button className="p-3 hover:bg-slate-50 rounded-2xl transition-colors"><ChevronRight className="h-5 w-5 text-slate-400" /></button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
           
           {/* Calendar Grid */}
           <div className="lg:col-span-3">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-[4rem] shadow-2xl border border-slate-50 p-10 md:p-14"
              >
                 <div className="grid grid-cols-7 gap-4 mb-10 text-center">
                    {['रवि', 'सोम', 'मंगळ', 'बुध', 'गुरु', 'शुक्र', 'शनि'].map(d => (
                       <div key={d} className="text-[10px] font-black text-slate-300 uppercase tracking-widest">{d}</div>
                    ))}
                 </div>
                 
                 <div className="grid grid-cols-7 gap-4">
                    {/* Add empty slots for month start (Mocking March 2024 which starts on Friday) */}
                    {[...Array(5)].map((_, i) => (
                       <div key={`empty-${i}`} className="aspect-square"></div>
                    ))}
                    
                    {days.map(d => {
                       const dayEvents = events.filter(e => e.day === d);
                       return (
                          <div key={d} className={`aspect-square rounded-[1.5rem] p-4 flex flex-col justify-between border transition-all ${dayEvents.length > 0 ? 'bg-primary-50 border-primary-100 shadow-lg shadow-primary-500/5' : 'bg-slate-50/20 border-slate-50 hover:border-slate-100'}`}>
                             <span className={`text-lg font-black italic tracking-tighter italic ${dayEvents.length > 0 ? 'text-primary-600' : 'text-slate-400'}`}>{d}</span>
                             <div className="flex gap-1">
                                {dayEvents.map((e, idx) => (
                                   <div key={idx} className={`w-2 h-2 rounded-full ${e.color}`}></div>
                                ))}
                             </div>
                          </div>
                       );
                    })}
                 </div>
              </motion.div>
           </div>

           {/* Event List Sidebar */}
           <div className="space-y-8">
              <div className="bg-white rounded-[3.5rem] shadow-2xl border border-slate-50 overflow-hidden">
                 <div className="p-10 border-b border-slate-50 bg-slate-50/10">
                    <h3 className="text-xl font-black text-slate-900 italic tracking-tight italic">या महिन्यातील कार्यक्रम</h3>
                 </div>
                 <div className="p-10 space-y-8">
                    {events.map((e, i) => (
                       <div key={i} className="flex items-start space-x-5 group cursor-pointer">
                          <div className={`w-14 h-14 rounded-2xl flex flex-col items-center justify-center shrink-0 border border-white shadow-lg ${e.color} text-white`}>
                             <span className="text-xl font-black leading-none">{e.day}</span>
                             <span className="text-[8px] font-black uppercase tracking-widest mt-1 opacity-80">मार्च</span>
                          </div>
                          <div>
                             <h4 className="text-sm font-black text-slate-800 group-hover:text-primary-600 transition-colors uppercase tracking-tight italic mb-1">{e.title}</h4>
                             <p className="text-[10px] text-slate-400 font-bold italic">{e.category}</p>
                          </div>
                       </div>
                    ))}
                 </div>
              </div>

              <div className="bg-slate-900 p-10 rounded-[3.5rem] text-white overflow-hidden relative group">
                 <div className="absolute top-0 right-0 p-8 opacity-10">
                    <Info className="h-16 w-16" />
                 </div>
                 <h4 className="text-lg font-black italic mb-4">सुविधा कॅलेंडर</h4>
                 <p className="text-slate-400 text-[10px] font-bold italic leading-relaxed">
                    तुमच्या प्रभागातील धार्मिक किंवा सामाजिक कार्यक्रमाची नोंद करण्यासाठी ग्रामपंचायत कार्यालयात संपर्क साधा.
                 </p>
                 <button className="w-full mt-8 py-4 bg-white/10 hover:bg-primary-600 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all">नवीन नोंदणी</button>
              </div>
           </div>

        </div>

        {/* Categories Legend */}
        <div className="mt-16 flex flex-wrap justify-center gap-10">
           {[
             { label: 'शासकीय सभे' , color: 'bg-red-500', icon: Gavel },
             { label: 'आरोग्य शिबिरे', color: 'bg-emerald-500', icon: Users },
             { label: 'धार्मिक उत्सव', color: 'bg-orange-500', icon: Music },
             { label: 'विकासाची कामे', color: 'bg-blue-500', icon: Flag }
           ].map((l, i) => (
              <div key={i} className="flex items-center space-x-3">
                 <div className={`w-3 h-3 rounded-full ${l.color}`}></div>
                 <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic">{l.label}</span>
              </div>
           ))}
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
