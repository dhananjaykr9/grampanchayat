import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  Calendar, 
  ChevronRight, 
  FileCheck2, 
  FileText, 
  Gavel, 
  MapPin, 
  Users 
} from 'lucide-react';
import React from 'react';

const GramSabha = () => {
  const upcomingMeetings = [
    {
      id: 1,
      date: '२५ मार्च २०२४',
      time: 'सकाळी ११:०० वाजता',
      location: 'पंचायत भवन परिसर',
      title: 'वार्षिक विकास आराखडा सभा',
      agenda: ['नवीन पाणी पुरवठा योजना चर्चा', 'रस्ते बांधकामाचे निकष', 'महिला बचत गट निधी वितरण']
    }
  ];

  const meetingMinutes = [
    { title: 'ग्रामसभा वार्षिक नियोजन बैठक', date: '१५ मार्च २०२४', attendees: '१२०+', type: 'Gram Sabha' },
    { title: 'पाणी पुरवठा समिती मासिक बैठक', date: '१० मार्च २०२४', attendees: '१५', type: 'Committee' },
    { title: 'स्वच्छता अभियान नियोजन सभा', date: '०५ मार्च २०२४', attendees: '४५', type: 'Special' },
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
                 <Gavel className="h-6 w-6" />
              </div>
              <h1 className="text-4xl font-black text-slate-900 italic tracking-normal">ग्रामसभा <span className="text-primary-600">वृत्तांत</span></h1>
            </div>
            <p className="text-slate-500 font-bold uppercase text-[10px] tracking-[0.2em] ml-16 italic">गावातील निर्णय आणि लोकशाहीचे केंद्र.</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Upcoming Meeting - High Visibility Card */}
          <div className="lg:col-span-2">
             <motion.div
               initial={{ opacity: 0, y: 30 }}
               animate={{ opacity: 1, y: 0 }}
               className="bg-white rounded-[4rem] shadow-2xl border border-slate-50 overflow-hidden relative group"
             >
                <div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none group-hover:scale-150 transition-transform duration-700">
                   <Calendar className="h-48 w-48 text-slate-900" />
                </div>
                
                <div className="p-12 md:p-16 border-b border-slate-50 bg-slate-50/20">
                   <div className="flex items-center space-x-3 mb-8">
                      <div className="w-3 h-3 bg-red-500 rounded-full animate-ping"></div>
                      <span className="text-[10px] font-black text-red-600 uppercase tracking-widest italic">पुढील महत्त्वाची सभा</span>
                   </div>
                   <h2 className="text-4xl font-black text-slate-900 italic tracking-normal mb-10">{upcomingMeetings[0].title}</h2>
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="flex items-center space-x-5">
                         <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center text-primary-600 border border-slate-50">
                            <Calendar className="h-7 w-7" />
                         </div>
                         <div>
                            <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">तारीख आणि वेळ</div>
                            <div className="text-lg font-black text-slate-900 italic tracking-normal">{upcomingMeetings[0].date} • {upcomingMeetings[0].time}</div>
                         </div>
                      </div>
                      <div className="flex items-center space-x-5">
                         <div className="w-16 h-16 bg-white rounded-2xl shadow-lg flex items-center justify-center text-primary-600 border border-slate-50">
                            <MapPin className="h-7 w-7" />
                         </div>
                         <div>
                            <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest">स्थळ</div>
                            <div className="text-lg font-black text-slate-900 italic tracking-normal">{upcomingMeetings[0].location}</div>
                         </div>
                      </div>
                   </div>
                </div>

                <div className="p-12 md:p-16 bg-white">
                   <h3 className="text-xl font-black text-slate-900 mb-10 italic uppercase tracking-wider flex items-center">
                      <ArrowRight className="h-5 w-5 mr-3 text-primary-600" /> सभेचा विषय (Agenda)
                   </h3>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {upcomingMeetings[0].agenda.map((item, i) => (
                        <div key={i} className="flex items-center space-x-4 group/item">
                           <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center text-slate-300 group-hover/item:bg-primary-50 group-hover/item:text-primary-600 transition-all">
                              <FileCheck2 className="h-6 w-6" />
                           </div>
                           <span className="font-black text-slate-700 italic group-hover/item:text-slate-900 transition-colors">{item}</span>
                        </div>
                      ))}
                   </div>
                </div>
                
                <div className="px-12 py-10 bg-slate-900 flex flex-col md:flex-row items-center justify-between gap-6">
                   <div className="flex items-center space-x-4">
                      <Users className="h-6 w-6 text-primary-400" />
                      <span className="text-sm font-black text-slate-400 italic">जास्तीत जास्त ग्रामस्थांनी उपस्थित राहावे ही विनंती.</span>
                   </div>
                   <button className="px-8 py-3 bg-primary-600 text-white rounded-xl font-black text-[10px] uppercase tracking-widest shadow-xl shadow-primary-500/20 hover:bg-primary-700 transition-all">दिनदर्शिकेत जोडा</button>
                </div>
             </motion.div>

             <div className="mt-20 space-y-8">
                <h3 className="text-2xl font-black text-slate-900 italic tracking-normal mb-8">सभा वृत्तांत डाउनलोड करा</h3>
                {meetingMinutes.map((meeting, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-50 hover:border-primary-200 hover:shadow-2xl transition-all group flex flex-col md:flex-row md:items-center justify-between gap-6"
                  >
                     <div className="flex items-center gap-6">
                        <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-all">
                           <FileCheck2 className="h-8 w-8" />
                        </div>
                        <div>
                           <div className="flex items-center gap-3 mb-1">
                              <span className="px-3 py-1 bg-slate-50 text-[10px] font-black uppercase tracking-widest text-slate-400 rounded-lg">
                                 {meeting.type}
                              </span>
                              <div className="text-slate-400 text-[10px] font-bold italic flex items-center">
                                 <Calendar className="h-3 w-3 mr-1" /> {meeting.date}
                              </div>
                           </div>
                           <h4 className="text-xl font-black text-slate-900 group-hover:text-primary-600 transition-colors tracking-normal">
                              {meeting.title}
                           </h4>
                        </div>
                     </div>
                     <button className="w-12 h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center hover:bg-primary-600 transition-all shadow-xl group/btn">
                        <FileText className="h-5 w-5 group-hover/btn:translate-y-1 transition-transform" />
                     </button>
                  </motion.div>
                ))}
             </div>
          </div>

          {/* Past Records Sidebar */}
          <div>
             <div className="bg-white rounded-[4rem] shadow-2xl border border-slate-50 overflow-hidden sticky top-32">
                <div className="p-10 border-b border-slate-50 bg-slate-50/10">
                   <h3 className="text-2xl font-black text-slate-900 italic tracking-normal">आकडेवारी</h3>
                </div>
                <div className="p-10 space-y-8">
                   <div className="bg-slate-50 p-6 rounded-3xl">
                      <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">सरासरी उपस्थिती</div>
                      <div className="text-3xl font-black text-slate-900 italic tracking-normal">८०% +</div>
                   </div>
                   <div className="bg-slate-50 p-6 rounded-3xl">
                      <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">एकूण ठराव २०२४</div>
                      <div className="text-3xl font-black text-slate-900 italic tracking-normal">४२</div>
                   </div>
                   <div className="p-6 bg-primary-600 rounded-3xl text-white">
                      <h4 className="font-black text-lg mb-2">सहभागातून विकास</h4>
                      <p className="text-xs text-primary-100 font-bold italic">प्रत्येक सभेचा वृत्तांत पारदर्शकपणे उपलब्ध करून दिला जातो.</p>
                   </div>
                </div>
             </div>
          </div>

        </div>

        {/* Accountability Banner */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-20 p-12 bg-primary-600 rounded-[4rem] text-center relative overflow-hidden shadow-2xl shadow-primary-500/30"
        >
           <div className="absolute inset-0 bg-white/5 blur-3xl rounded-full -translate-x-1/2"></div>
           <div className="relative z-10 flex flex-col md:flex-row items-center justify-center gap-10">
              <div className="text-center md:text-left max-w-xl text-white">
                 <h4 className="text-2xl font-black italic mb-2 tracking-normal">सहभागातून विकास</h4>
                 <p className="font-bold italic text-sm opacity-80 leading-relaxed">ग्रामसभेने घेतलेले प्रत्येक निर्णय गावाची दिशा ठरवतात. या लोकशाहीच्या उत्सवाचा भाग बना.</p>
              </div>
           </div>
        </motion.div>

      </div>
    </div>
  );
};

export default GramSabha;
