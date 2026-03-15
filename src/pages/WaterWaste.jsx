import { motion } from 'framer-motion';
import { 
  AlertCircle, 
  Bell, 
  Clock, 
  Droplets, 
  Info, 
  ShieldCheck, 
  Trash2, 
  Waves 
} from 'lucide-react';
import React from 'react';

const WaterWaste = () => {
  const waterSchedule = [
    { ward: 'वॉर्ड क्र. १ आणि २', time: 'सकाळी ७:०० - ८:३०', status: 'On Schedule', day: 'दररोज' },
    { ward: 'वॉर्ड क्र. ३ आणि ४', time: 'सकाळी ८:३० - १०:००', status: 'Maintenance', day: 'सोम, बुध, शुक्र' },
    { ward: 'रेल्वे कॉलनी परिसर', time: 'संध्याकाळी ६:०० - ७:३०', status: 'On Schedule', day: 'दररोज' }
  ];

  const wasteSchedule = [
    { area: 'सर्व गाव (घरोघरी संकलन)', type: 'ओला कचरा', time: 'सकाळी ८:०० - १०:००', icon: Droplets },
    { area: 'सर्व गाव (घरोघरी संकलन)', type: 'सुका कचरा', time: 'सकाळी १०:०० - १२:००', icon: Trash2 }
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
              <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white shadow-xl shadow-blue-500/20">
                 <Waves className="h-6 w-6" />
              </div>
              <h1 className="text-4xl font-black text-slate-900 italic tracking-tighter italic">पाणी आणि <span className="text-blue-600">स्वच्छता</span></h1>
            </div>
            <p className="text-slate-500 font-bold uppercase text-[10px] tracking-[0.2em] ml-16 italic">पाणी पुरवठा वेळापत्रक आणि कचरा व्यवस्थापन माहिती.</p>
          </motion.div>
          
          <div className="bg-emerald-50 px-8 py-4 rounded-[1.5rem] border border-emerald-100 flex items-center space-x-4">
             <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
             <span className="text-sm font-black text-emerald-800 italic uppercase tracking-wider">आजची सेवा: सुरळीत</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
           
           {/* Water Supply Section */}
           <motion.div
             initial={{ opacity: 0, scale: 0.98 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="bg-white rounded-[4rem] shadow-2xl border border-slate-50 overflow-hidden"
           >
              <div className="p-12 border-b border-slate-50 flex items-center justify-between bg-blue-50/20">
                 <div className="flex items-center space-x-5">
                    <div className="p-4 bg-blue-600 rounded-2xl text-white shadow-lg shadow-blue-500/30">
                       <Droplets className="h-7 w-7" />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 italic tracking-tight italic">पाणी पुरवठा वेळापत्रक</h3>
                 </div>
                 <button className="p-4 bg-white rounded-2xl border border-slate-100 text-slate-300 hover:text-blue-600 transition-colors shadow-sm">
                    <Bell className="h-6 w-6" />
                 </button>
              </div>
              
              <div className="p-12 space-y-8">
                 {waterSchedule.map((item, i) => (
                   <div key={i} className="flex flex-col md:flex-row md:items-center justify-between gap-6 p-8 bg-slate-50/50 rounded-[2.5rem] border border-slate-50 group hover:border-blue-100 transition-all">
                      <div className="flex items-center space-x-6">
                         <div className={`w-14 h-14 rounded-2xl flex items-center justify-center font-black text-sm italic ${item.status === 'Maintenance' ? 'bg-amber-100 text-amber-600' : 'bg-blue-100 text-blue-600'}`}>
                            {i + 1}
                         </div>
                         <div>
                            <h4 className="text-lg font-black text-slate-900 italic tracking-tight italic mb-1">{item.ward}</h4>
                            <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{item.day}</div>
                         </div>
                      </div>
                      <div className="flex items-center gap-8">
                         <div className="text-right">
                            <div className="text-sm font-black text-slate-900 italic flex items-center justify-end"><Clock className="h-3 w-3 mr-2 text-blue-600" /> {item.time}</div>
                            <div className={`text-[10px] font-black uppercase tracking-widest mt-1 ${item.status === 'Maintenance' ? 'text-amber-500' : 'text-emerald-500'}`}>{item.status}</div>
                         </div>
                      </div>
                   </div>
                 ))}
              </div>

              <div className="px-12 py-8 bg-slate-950 text-white">
                 <div className="flex items-center space-x-4">
                    <AlertCircle className="h-5 w-5 text-amber-400" />
                    <p className="text-xs font-bold text-slate-400 italic">नोंद: देखभाल कामामुळे बुधवारी पाणी पुरवठा १ तास उशिरा होऊ शकतो.</p>
                 </div>
              </div>
           </motion.div>

           {/* Waste Management Section */}
           <motion.div
             initial={{ opacity: 0, scale: 0.98 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="bg-white rounded-[4rem] shadow-2xl border border-slate-50 overflow-hidden flex flex-col"
           >
              <div className="p-12 border-b border-slate-50 flex items-center justify-between bg-emerald-50/20">
                 <div className="flex items-center space-x-5">
                    <div className="p-4 bg-emerald-600 rounded-2xl text-white shadow-lg shadow-emerald-500/30">
                       <Trash2 className="h-7 w-7" />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 italic tracking-tight italic">कचरा व्यवस्थापन</h3>
                 </div>
              </div>

              <div className="p-12 space-y-10 flex-grow">
                 <div className="bg-slate-900 p-10 rounded-[3rem] text-white overflow-hidden relative group mb-8">
                    <div className="absolute top-0 right-0 p-8 opacity-10">
                       <ShieldCheck className="h-20 w-20" />
                    </div>
                    <h4 className="text-xl font-black italic mb-6">स्वच्छता मोहीम २०२४</h4>
                    <p className="text-slate-400 text-sm font-bold italic leading-relaxed">
                       आपले डोंगरगाव प्रदूषणमुक्त आणि प्लास्टिकमुक्त करण्यासाठी सहकार्य करा. कचरा कुंडीतच टाका.
                    </p>
                 </div>

                 <div className="space-y-6">
                    {wasteSchedule.map((item, i) => (
                       <div key={i} className="flex items-center justify-between p-8 bg-slate-50 rounded-[2.5rem] border border-slate-50 group hover:bg-white hover:shadow-xl transition-all">
                          <div className="flex items-center space-x-6">
                             <div className="p-4 bg-white rounded-2xl text-emerald-600 shadow-sm">
                                <item.icon className="h-6 w-6" />
                             </div>
                             <div>
                                <h5 className="text-sm font-black text-slate-900 uppercase tracking-tight italic mb-1">{item.type}</h5>
                                <p className="text-[10px] text-slate-400 font-bold italic">{item.area}</p>
                             </div>
                          </div>
                          <div className="text-right">
                             <div className="text-sm font-black text-slate-800 italic">{item.time}</div>
                             <div className="text-[10px] font-black text-emerald-500 uppercase tracking-widest mt-1 italic">सक्रीय</div>
                          </div>
                       </div>
                    ))}
                 </div>
              </div>

              <div className="p-12 bg-slate-50 border-t border-slate-100 text-center">
                 <button className="w-full py-5 bg-white border border-slate-200 rounded-3xl font-black text-[10px] uppercase tracking-[0.2em] text-slate-400 hover:text-emerald-600 hover:border-emerald-100 transition-all flex items-center justify-center">
                    <Info className="h-4 w-4 mr-3" /> अधिक माहिती आणि तक्रारी
                 </button>
              </div>
           </motion.div>

        </div>
      </div>
    </div>
  );
};

export default WaterWaste;
