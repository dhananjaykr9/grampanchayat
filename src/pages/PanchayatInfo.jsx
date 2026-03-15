import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, User as UserIcon } from 'lucide-react';
import React from 'react';

const PanchayatInfo = () => {
  const officials = [
    {
      role: 'सरपंच (Sarpanch)',
      name: 'सौं. इंदुबाई राजू खरातकर',
      contact: '+९१ ९१४६२४५३८९',
      email: 'khiratkar@email.com',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1976&auto=format&fit=crop'
    },
    {
      role: 'ग्रामसेवक (Secretary)',
      name: 'श्री. प्रितम कांबळे',
      contact: '+९१ ९८७६५४३२१०',
      email: 'kamble@email.com',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24">
      {/* Header */}
      <div className="bg-slate-900 pt-48 pb-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <img src="https://www.transparenttextures.com/patterns/carbon-fibre.png" alt="texture" className="w-full h-full object-repeat" />
        </div>
        <div className="section-container relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <h1 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight italic">प्रशासन आणि पदाधिकारी</h1>
            <p className="text-xl text-primary-300 font-medium">डोंगरगाव (रेल्वे) ग्रामपंचायतीच्या सेवाभावी नेतृत्वाची माहिती.</p>
          </motion.div>
        </div>
      </div>

      <div className="section-container -mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {officials.map((person, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="bg-white rounded-[3rem] shadow-2xl border border-slate-100 overflow-hidden flex flex-col group hover:border-primary-200 transition-all duration-500"
            >
              <div className="relative h-96 overflow-hidden">
                <img 
                  src={person.image} 
                  alt={person.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter saturate-50 group-hover:saturate-100"
                />
                <div className="absolute inset-x-0 bottom-0 p-10 bg-gradient-to-t from-slate-900 to-transparent">
                  <span className="inline-block px-4 py-1.5 bg-primary-600 text-white rounded-full text-[10px] font-black uppercase tracking-[0.2em] mb-3 shadow-lg">
                    {person.role}
                  </span>
                  <h3 className="text-2xl font-black text-white leading-tight">{person.name}</h3>
                </div>
              </div>
              
              <div className="p-10 space-y-8">
                <div className="grid grid-cols-1 gap-6">
                  <div className="flex items-center p-6 bg-slate-50 rounded-2xl border border-slate-100 group-hover:bg-primary-50 transition-colors">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mr-5 text-primary-600">
                      <Phone className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">फोन नंबर</div>
                      <div className="text-slate-900 font-bold">{person.contact}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center p-6 bg-slate-50 rounded-2xl border border-slate-100 group-hover:bg-primary-50 transition-colors">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mr-5 text-primary-600">
                      <Mail className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">ईमेल आयडी</div>
                      <div className="text-slate-900 font-bold break-all">{person.email}</div>
                    </div>
                  </div>
                </div>

                <button className="w-full py-5 bg-slate-900 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-primary-600 transition-all shadow-xl hover:shadow-primary-600/30">
                  अधिकृत पत्रव्यवहार करा
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Office Location */}
        <section className="mt-32">
          <div className="bg-white rounded-[4rem] shadow-2xl border border-slate-50 overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="p-12 md:p-20">
                <span className="text-primary-600 font-black tracking-widest uppercase text-xs mb-6 block">मुख्य कार्यालय</span>
                <h2 className="text-4xl font-black text-slate-900 mb-10 leading-tight italic">येथे भेट द्या</h2>
                
                <div className="space-y-10">
                   <div className="flex items-start">
                     <div className="w-14 h-14 bg-primary-50 rounded-2xl flex items-center justify-center mr-6 shrink-0 shadow-lg shadow-primary-200/50">
                        <MapPin className="h-7 w-7 text-primary-600" />
                     </div>
                     <div>
                       <h4 className="text-xl font-black text-slate-900 mb-2">पत्ता:</h4>
                       <p className="text-slate-500 font-medium leading-relaxed italic pr-12">
                         ग्रामपंचायत कार्यालय, पो. डोंगरगाव (रेल्वे), ता. वरोरा, जिल्हा चंद्रपूर, महाराष्ट्र - ४४२९०७.
                       </p>
                     </div>
                   </div>

                   <div className="p-10 bg-slate-900 rounded-[2.5rem] text-white">
                      <h4 className="text-lg font-black mb-4 flex items-center">
                        <UserIcon className="h-5 w-5 mr-3 text-primary-400" />
                        कार्यालयीन वेळ
                      </h4>
                      <p className="text-slate-400 font-medium text-sm leading-relaxed italic">
                        सोमवार ते शनिवार: सकाळी १०:०० ते संध्याकाळी ६:०० <br />
                        रविवार आणि शासकीय सुट्ट्या: कार्यालय बंद
                      </p>
                   </div>
                </div>
              </div>
              
              <div className="h-[500px] lg:h-auto bg-slate-200">
                {/* Mock Map Placeholder */}
                <iframe 
                  title="office-map"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15024.498453489873!2d79.0559194!3d20.2110291!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd2d53957599023%3A0x6aefda02564cf909!2sWarora!5e0!3m2!1sen!2sin!4v1710492837385!5m2!1sen!2sin" 
                  className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700 outline-none"
                  allowFullScreen="" 
                  loading="lazy"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PanchayatInfo;
