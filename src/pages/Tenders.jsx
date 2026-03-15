import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Calendar, 
  CheckCircle2, 
  ChevronRight, 
  DollarSign, 
  FileSearch, 
  Info 
} from 'lucide-react';
import React from 'react';

const Tenders = () => {
  const tenders = [
    {
      title: 'सिमेंट रोड बांधकाम - वॉर्ड क्र. १',
      date: '२० मार्च २०२४',
      amount: '१२,५०,०००/-',
      status: 'सुरू (Open)',
      ref: 'GPD/ROAD/2024/001'
    },
    {
      title: 'गावातील सौर दिवे बसविणे',
      date: '२५ मार्च २०२४',
      amount: '५,००,०००/-',
      status: 'सुरू (Open)',
      ref: 'GPD/ELEC/2024/004'
    },
    {
      title: 'पशुवैद्यकीय रुग्णालय दुरुस्ती',
      date: '१५ मार्च २०२४',
      amount: '३,४०,०००/-',
      status: 'बंद (Closed)',
      ref: 'GPD/CIVIL/2023/089'
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24 text-slate-900">
      {/* Header */}
      <div className="bg-slate-900 pt-48 pb-32 px-4 relative overflow-hidden">
         <div className="section-container relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight italic italic underline decoration-primary-500/30 underline-offset-12">निविदा सूचना (Tenders)</h1>
              <p className="text-xl text-primary-300 font-medium">ग्रामपंचायतीच्या वतीने राबविण्यात येणाऱ्या विकास कामांच्या निविदांची माहिती.</p>
            </motion.div>
         </div>
      </div>

      <div className="section-container -mt-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {tenders.map((tender, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-[4rem] shadow-xl border border-slate-50 overflow-hidden flex flex-col group hover:shadow-2xl hover:border-primary-200 transition-all duration-500"
            >
               <div className="p-10 md:p-14">
                  <div className="flex items-center justify-between mb-10">
                     <span className={`px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest border ${tender.status.includes('Open') ? 'bg-emerald-50 text-emerald-600 border-emerald-100' : 'bg-red-50 text-red-600 border-red-100'}`}>
                        {tender.status}
                     </span>
                     <div className="text-[10px] font-black text-slate-300 uppercase tracking-widest leading-none bg-slate-50 px-4 py-2 rounded-lg">REF: {tender.ref}</div>
                  </div>
                  
                  <h3 className="text-3xl font-black text-slate-900 mb-10 group-hover:text-primary-600 transition-colors leading-tight italic tracking-tighter italic">
                     {tender.title}
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 py-10 border-y border-slate-50 border-dotted group-hover:border-primary-100 transition-colors">
                     <div className="flex items-center">
                        <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mr-5 text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-all shadow-sm">
                           <DollarSign className="h-5 w-5" />
                        </div>
                        <div>
                           <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 leading-none italic">निविदा रक्कम</div>
                           <div className="text-xl font-black text-slate-900 tracking-tight leading-none italic">{tender.amount}</div>
                        </div>
                     </div>
                     <div className="flex items-center">
                        <div className="w-12 h-12 bg-amber-50 rounded-xl flex items-center justify-center mr-5 text-amber-600 group-hover:bg-amber-600 group-hover:text-white transition-all shadow-sm">
                           <Calendar className="h-5 w-5" />
                        </div>
                        <div>
                           <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 leading-none italic">अंतिम तारीख</div>
                           <div className="text-xl font-black text-slate-900 tracking-tight leading-none italic">{tender.date}</div>
                        </div>
                     </div>
                  </div>

                  <div className="mt-10 flex flex-col sm:flex-row gap-4">
                     <button className="flex-1 py-5 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-primary-600 transition-all shadow-xl shadow-slate-900/10 active:scale-95 flex items-center justify-center">
                        <FileSearch className="h-4 w-4 mr-2" /> दस्तऐवज पहा
                     </button>
                     <button className="flex-1 py-5 bg-white text-slate-900 border border-slate-200 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-slate-50 transition-all active:scale-95 flex items-center justify-center">
                        <Info className="h-4 w-4 mr-2" /> अधिक माहिती
                     </button>
                  </div>
               </div>
               
               <div className="px-10 py-6 bg-slate-50 border-t border-slate-50 flex items-center justify-between group-hover:bg-primary-50 transition-colors">
                  <div className="flex items-center text-[10px] font-black text-primary-600 uppercase tracking-widest">
                     <Briefcase className="h-4 w-4 mr-2" /> विकास प्रकल्प
                  </div>
                  <ChevronRight className="h-4 w-4 text-slate-300 group-hover:text-primary-600 group-hover:translate-x-2 transition-all" />
               </div>
            </motion.div>
          ))}
        </div>

        {/* Info Box */}
        <div className="mt-24 p-12 bg-primary-600 rounded-[3.5rem] text-white flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden group">
           <div className="absolute inset-0 bg-white/5 blur-3xl rounded-full translate-x-1/2 pointer-events-none group-hover:scale-110 transition-transform duration-700"></div>
           <div className="relative z-10 text-center md:text-left">
              <h4 className="text-2xl font-black mb-4 tracking-tight italic">कंत्राटदारांसाठी सूचना</h4>
              <p className="text-primary-100 font-medium leading-relaxed italic">
                निविदा भरण्यासाठी आवश्यक अटी आणि शर्ती अधिकृत दस्तऐवजामध्ये नमूद केल्या आहेत. कृपया वेळेत अर्ज सादर करावेत.
              </p>
           </div>
           <button className="relative z-10 px-10 py-5 bg-white text-primary-600 rounded-2xl font-black text-sm uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl">
             नियम आणि अटी
           </button>
        </div>
      </div>
    </div>
  );
};

export default Tenders;
