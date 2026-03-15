import { motion } from 'framer-motion';
import { Bus, Clock, MapPin, Search, Train } from 'lucide-react';
import React, { useState } from 'react';

const Transport = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const services = [
    { type: 'Train', name: 'वर्धा → बल्लारशाह पॅसेंजर', station: 'चिकनी रोड स्टेशन', time: 'सकाळी ७:३० (AM)', icon: Train, bg: 'bg-blue-50', color: 'text-blue-600' },
    { type: 'Train', name: 'बल्लारशाह → वर्धा पॅसेंजर', station: 'चिकनी रोड स्टेशन', time: 'संध्याकाळी ८:०० (PM)', icon: Train, bg: 'bg-blue-50', color: 'text-blue-600' },
    { type: 'Bus', name: 'वरोरा → खरवड (मार्गे डोंगरगाव)', station: 'डोंगरगाव बस स्टॉप', time: 'दर ४५ मिनिटांनी', icon: Bus, bg: 'bg-amber-50', color: 'text-amber-600' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Header */}
      <div className="bg-slate-900 pt-48 pb-32 px-4 relative overflow-hidden">
        <div className="section-container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight italic">वाहतूक माहिती (Transport)</h1>
            <p className="text-xl text-primary-300 font-medium">डोंगरगाव (रेल्वे) परिसरातील रेल्वे आणि बस सेवेचे वेळापत्रक.</p>
          </motion.div>
        </div>
      </div>

      <div className="section-container -mt-16">
        {/* Search Bar */}
        <div className="max-w-3xl mx-auto mb-16 relative group">
           <Search className="absolute left-8 top-1/2 -translate-y-1/2 h-6 w-6 text-slate-400 group-hover:text-primary-600 transition-colors" />
           <input 
             type="text" 
             placeholder="वेळापत्रक शोधा (उदा. ट्रेन्स, बस...)" 
             value={searchTerm}
             onChange={(e) => setSearchTerm(e.target.value)}
             className="w-full bg-white border border-slate-100 rounded-[2.5rem] py-6 pl-20 pr-10 shadow-2xl outline-none focus:ring-4 focus:ring-primary-100 transition-all font-bold text-lg text-slate-900" 
           />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-[3rem] shadow-xl border border-slate-50 overflow-hidden group hover:border-primary-200 transition-all duration-500 flex flex-col"
            >
              <div className="p-10 flex-grow">
                 <div className={`${service.bg} ${service.color} w-20 h-20 rounded-[2rem] flex items-center justify-center mb-8 shadow-lg shadow-current/10 group-hover:scale-110 transition-transform`}>
                    <service.icon className="h-10 w-10" />
                 </div>
                 <div className="flex items-center gap-3 mb-4">
                   <div className="w-1.5 h-1.5 bg-primary-600 rounded-full"></div>
                   <span className="text-xs font-black text-primary-600 uppercase tracking-widest">{service.type} SEVICE</span>
                 </div>
                 <h3 className="text-2xl font-black text-slate-900 mb-6 group-hover:text-primary-600 transition-colors leading-tight italic">{service.name}</h3>
                 
                 <div className="space-y-6 pt-6 border-t border-slate-50">
                    <div className="flex items-center text-slate-600">
                       <MapPin className="h-5 w-5 mr-4 text-slate-400" />
                       <span className="font-bold">{service.station}</span>
                    </div>
                    <div className="flex items-center text-slate-600">
                       <Clock className="h-5 w-5 mr-4 text-slate-400" />
                       <span className="font-extrabold text-slate-900">{service.time}</span>
                    </div>
                 </div>
              </div>
              
              <div className="px-10 py-8 bg-slate-50 flex items-center justify-between group-hover:bg-primary-50 transition-colors">
                 <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest italic leading-none">दैनिक सेवा (Daily)</span>
                 <button className="text-primary-600 font-black text-xs uppercase tracking-widest underline decoration-primary-200 underline-offset-4">लोकेशन पहा</button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24 p-12 bg-slate-900 rounded-[3.5rem] text-white flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden group">
           <div className="absolute inset-0 bg-primary-600/5 blur-3xl rounded-full translate-x-1/2 pointer-events-none"></div>
           <div className="relative z-10 text-center md:text-left">
              <h4 className="text-2xl font-black mb-2 tracking-tight">महत्वाची सूचना</h4>
              <p className="text-slate-400 font-medium italic">वेळापत्रकामध्ये रेल्वे/बस प्रशासनाकडून बदल होऊ शकतो. कृपया अधिकृत ॲप्सवर तपासणी करा.</p>
           </div>
           <button className="relative z-10 px-8 py-4 bg-white text-slate-900 rounded-2xl font-black text-sm hover:bg-primary-600 hover:text-white transition-all shadow-xl">
             लाइव्ह स्टेटस तपासा
           </button>
        </div>
      </div>
    </div>
  );
};

export default Transport;
