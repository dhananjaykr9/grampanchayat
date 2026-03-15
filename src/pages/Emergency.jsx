import { motion } from 'framer-motion';
import { 
  Ambulance, 
  Flame, 
  HeartPulse, 
  Phone, 
  ShieldAlert, 
  Siren, 
  UserSquare2 
} from 'lucide-react';
import React from 'react';

const Emergency = () => {
  const contacts = [
    {
      category: 'पोलीस स्टेशन (Police)',
      icon: ShieldAlert,
      color: 'bg-red-50 text-red-600',
      shadow: 'shadow-red-500/10',
      items: [
        { name: 'वरोरा पोलीस स्टेशन', number: '०७१७६-२८२३३५' },
        { name: 'आपत्कालीन', number: '१००' }
      ]
    },
    {
      category: 'आरोग्य सेवा (Medical)',
      icon: HeartPulse,
      color: 'bg-emerald-50 text-emerald-600',
      shadow: 'shadow-emerald-500/10',
      items: [
        { name: 'प्राथमिक आरोग्य केंद्र (PHC)', number: '९४२२१ २३४५६' },
        { name: 'ॲम्ब्युलन्स (Ambulance)', number: '१०८' }
      ]
    },
    {
      category: 'अग्निशमन दल (Fire)',
      icon: Flame,
      color: 'bg-orange-50 text-orange-600',
      shadow: 'shadow-orange-500/10',
      items: [
        { name: 'वरोरा अग्निशमन दल', number: '१०१' },
        { name: 'नगरपालिका अग्निशमन', number: '०७१७६-२८२००१' }
      ]
    },
    {
      category: 'ग्रामपंचायत (Panchayat)',
      icon: UserSquare2,
      color: 'bg-primary-50 text-primary-600',
      shadow: 'shadow-primary-500/10',
      items: [
        { name: 'सरपंच (Sarpanch)', number: '९८७६५ ४३२१०' },
        { name: 'ग्रामसेवक (Gramsevak)', number: '९०१२३ ४५६७८' },
        { name: 'पंचायत कार्यालय', number: '०७१७६-२३४५६७' }
      ]
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8 font-sans pt-32">
      <div className="max-w-7xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-red-600 rounded-[4rem] p-12 md:p-20 text-white mb-20 relative overflow-hidden group shadow-2xl shadow-red-600/20"
        >
          <div className="absolute top-0 right-0 p-10 rotate-12 opacity-10 group-hover:scale-150 group-hover:-rotate-12 transition-transform duration-700">
             <Siren className="h-64 w-64" />
          </div>
          <div className="relative z-10 max-w-2xl">
            <div className="flex items-center space-x-3 bg-white/20 px-4 py-2 rounded-full w-fit mb-8 backdrop-blur-md">
               <ShieldAlert className="h-4 w-4 text-white" />
               <span className="text-[10px] font-black uppercase tracking-widest">आणीबाणी मदत केंद्र</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black italic tracking-tighter italic mb-8">संकट काळात <br/> आम्ही <span className="text-red-200">तुमच्या सोबत</span> आहोत</h1>
            <p className="text-xl md:text-2xl font-bold opacity-80 leading-relaxed italic border-l-4 border-white/30 pl-8">
              खालील क्रमांकावर त्वरित संपर्क साधा. आमची यंत्रणा तुम्हाला मदत करण्यासाठी सदैव तयार आहे.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contacts.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white p-10 rounded-[3rem] shadow-xl border border-slate-50 hover:border-red-100 transition-all group"
            >
              <div className={`${cat.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-10 shadow-lg ${cat.shadow} group-hover:scale-110 transition-transform`}>
                 <cat.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-8 italic tracking-tight italic border-b border-slate-50 pb-4 inline-block">{cat.category}</h3>
              
              <div className="space-y-6">
                {cat.items.map((item, i) => (
                  <div key={i} className="group/item">
                    <div className="text-[10px] font-black text-slate-300 uppercase tracking-widest mb-1 italic group-hover/item:text-slate-400">{item.name}</div>
                    <a 
                      href={`tel:${item.number}`}
                      className="flex items-center text-xl font-black text-slate-800 hover:text-red-600 transition-all italic tracking-tight italic"
                    >
                       <Phone className="h-4 w-4 mr-3 opacity-30 group-hover/item:opacity-100" />
                       {item.number}
                    </a>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 bg-slate-900 rounded-[3rem] p-10 text-center relative overflow-hidden">
           <div className="absolute inset-0 bg-primary-600/5 blur-3xl rounded-full"></div>
           <p className="relative z-10 text-slate-400 font-bold italic">
             महत्वाची टीप: कृपया अफवा पसरवू नका आणि या क्रमांकांचा वापर केवळ आणीबाणीच्या वेळीच करा.
           </p>
        </div>
      </div>
    </div>
  );
};

export default Emergency;
