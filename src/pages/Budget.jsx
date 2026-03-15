import { motion } from 'framer-motion';
import { 
  ArrowUpRight, 
  BarChart3, 
  CheckCircle2, 
  Download, 
  FileText, 
  PieChart, 
  TrendingUp 
} from 'lucide-react';
import React from 'react';

const Budget = () => {
  const stats = [
    { label: 'एकूण तरतूद (Total)', value: '₹१ कोटी+', icon: TrendingUp, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { label: 'विकास खर्च (Dev)', value: '₹६५ लाख', icon: BarChart3, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'सिल्लक निधी (Balance)', value: '₹३५ लाख', icon: PieChart, color: 'text-amber-600', bg: 'bg-amber-50' },
  ];

  const reports = [
    { title: 'वार्षिक अर्थसंकल्प २०२३-२४', year: '२०२३-२४', type: 'Budget' },
    { title: 'विकास निधी विनियोग अहवाल', year: '२०२३', type: 'Report' },
    { title: '१५ वा वित्त आयोग निधी विवरण', year: '२०२४', type: 'Finance' },
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
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight italic italic underline decoration-primary-500/30 underline-offset-12">अर्थसंकल्प आणि पारदर्शकता (Budget)</h1>
              <p className="text-xl text-primary-300 font-medium">डोंगरगाव (रेल्वे) ग्रामपंचायतीचा आर्थिक लेखाजोखा आणि विकास निधीची माहिती.</p>
            </motion.div>
         </div>
      </div>

      <div className="section-container -mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-10 rounded-[3.5rem] shadow-2xl border border-slate-50 flex items-center group hover:border-primary-200 transition-all duration-500 shrink-0"
            >
               <div className={`${stat.bg} ${stat.color} w-20 h-20 rounded-[1.5rem] flex items-center justify-center mr-8 flex-shrink-0 shadow-lg shadow-current/10 group-hover:scale-110 transition-transform`}>
                  <stat.icon className="h-10 w-10" />
               </div>
               <div>
                  <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 italic leading-none">{stat.label}</div>
                  <div className="text-3xl font-black text-slate-900 italic tracking-tighter italic">{stat.value}</div>
               </div>
            </motion.div>
          ))}
        </div>

        <div className="bg-white rounded-[5rem] shadow-2xl border border-slate-50 overflow-hidden mb-24 relative group">
           <div className="absolute top-0 right-0 w-96 h-96 bg-primary-50 rounded-full blur-3xl -mr-48 -mt-48 pointer-events-none group-hover:bg-primary-100 transition-colors duration-700"></div>
           
           <div className="p-12 md:p-20 relative z-10">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-20">
                 <div>
                    <span className="text-primary-600 font-black tracking-widest uppercase text-xs mb-4 block">वित्तीय अहवाल</span>
                    <h2 className="text-4xl md:text-5xl font-black italic tracking-tighter italic">अधिकृत दस्तऐवज</h2>
                 </div>
                 <button className="px-10 py-5 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-primary-600 transition-all shadow-xl shadow-slate-900/10 flex items-center">
                    सर्व डाउनलोड करा <ArrowUpRight className="ml-3 h-5 w-5" />
                 </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                 {reports.map((report, idx) => (
                   <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: idx * 0.1 }}
                      className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100 hover:bg-white hover:border-primary-200 hover:shadow-2xl transition-all duration-500 group/report flex flex-col"
                   >
                      <div className="flex items-center justify-between mb-8">
                         <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm text-slate-400 group-hover/report:text-primary-600 group-hover/report:scale-110 transition-all">
                            <FileText className="h-6 w-6" />
                         </div>
                         <span className="px-4 py-1.5 bg-white rounded-lg text-[10px] font-black uppercase tracking-widest text-slate-300 shadow-sm">{report.type}</span>
                      </div>
                      
                      <h3 className="text-xl font-black text-slate-900 mb-2 leading-tight italic tracking-tighter italic group-hover/report:text-primary-600 transition-colors">
                         {report.title}
                      </h3>
                      <div className="text-xs font-bold text-slate-400 mb-8 italic">आर्थिक वर्ष: {report.year}</div>

                      <button className="mt-auto w-full py-4 bg-white border border-slate-200 text-slate-900 rounded-xl font-black text-[10px] uppercase tracking-widest flex items-center justify-center group-hover/report:bg-slate-900 group-hover/report:text-white group-hover/report:border-slate-900 transition-all shadow-sm">
                         पहा आणि डाउनलोड करा <Download className="ml-2 h-4 w-4" />
                      </button>
                   </motion.div>
                 ))}
              </div>
           </div>
        </div>

        {/* Accountability Box */}
        <div className="bg-slate-900 p-16 md:p-24 rounded-[4rem] text-center text-white relative overflow-hidden group">
           <div className="absolute inset-0 bg-primary-600/5 blur-3xl rounded-full translate-x-1/3 pointer-events-none group-hover:scale-110 transition-transform duration-700"></div>
           <div className="relative z-10">
              <div className="inline-flex items-center px-6 py-2 bg-white/10 backdrop-blur-md rounded-full text-xs font-black uppercase tracking-[0.2em] mb-10 border border-white/20">
                 <CheckCircle2 className="h-4 w-4 mr-3 text-primary-400" /> पारदर्शक कारभार
              </div>
              <h3 className="text-4xl md:text-5xl font-black mb-8 leading-tight italic tracking-tight italic">लोकशाहीमध्ये पारदर्शकता ही सर्वात मोठी शक्ती आहे.</h3>
              <p className="text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed text-lg italic opacity-80">
                तुमच्या हक्काचा पैसा कुठे आणि कसा खर्च झाला, याची माहिती मिळवणे हा तुमचा अधिकार आहे. डोंगरगाव ग्रामपंचायत पूर्णपणे पारदर्शक कारभारासाठी बांधील आहे.
              </p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Budget;
