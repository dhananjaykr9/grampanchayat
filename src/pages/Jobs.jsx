import { motion } from 'framer-motion';
import { 
  Briefcase, 
  Building, 
  ChevronRight, 
  ExternalLink, 
  Globe, 
  GraduationCap, 
  MapPin, 
  Trophy 
} from 'lucide-react';
import React from 'react';

const Jobs = () => {
  const jobPostings = [
    {
      id: 1,
      title: 'माइनिंग ऑपरेटर (HEMM Operator)',
      company: 'वेस्टर्न कोलफील्ड्स लिमिटेड (WCL)',
      location: 'वरोरा एरिया',
      type: 'सरकारी नोकरी (Full Time)',
      salary: 'नियमानुसार',
      deadline: '३० मार्च २०२४',
      category: 'Mines'
    },
    {
      id: 2,
      title: 'सिक्युरिटी गार्ड (Security Guard)',
      company: 'स्थानिक कोळसा खाण प्रकल्प',
      location: 'डोंगरगाव रेल्वे परिसर',
      type: 'कंत्राटी (Contract)',
      salary: '₹ १५,००० - १८,०००',
      deadline: '२० मार्च २०२४',
      category: 'Security'
    },
    {
      id: 3,
      title: 'डेटा एन्ट्री ऑपरेटर',
      company: 'वरोरा तहसील कार्यालय',
      location: 'वरोरा शहर',
      type: 'अंशकालीन (Part Time)',
      salary: '₹ १२,०००',
      deadline: '२५ मार्च २०२४',
      category: 'Office'
    }
  ];

  const skillPrograms = [
    { title: 'डिजिटल साक्षरता अभियान', duration: '२ महिने', description: 'संगणकाचे मूलभूत ज्ञान आणि इंटरनेट वापर.' },
    { title: 'मल्टी-स्किल टेक्निशियन', duration: '३ महिने', description: 'इलेक्ट्रिशियन, प्लंबर आणि वेल्डिंग प्रशिक्षण.' }
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
                 <Briefcase className="h-6 w-6" />
              </div>
              <h1 className="text-4xl font-black text-slate-900 italic tracking-tighter italic">रोजगार <span className="text-primary-600">संधी</span></h1>
            </div>
            <p className="text-slate-500 font-bold uppercase text-[10px] tracking-[0.2em] ml-16 italic">स्थानिक खाणी, उद्योग आणि सरकारी नोकरीच्या संधी.</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Main Job Board */}
          <div className="lg:col-span-2 space-y-8">
             {jobPostings.map((job, idx) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white p-10 rounded-[4rem] shadow-2xl border border-slate-50 group hover:border-primary-100 transition-all"
                >
                   <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
                      <div className="flex items-start space-x-6">
                         <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center text-slate-300 group-hover:bg-primary-50 group-hover:text-primary-600 transition-all shadow-xl shadow-slate-200/50">
                            <Building className="h-10 w-10" />
                         </div>
                         <div>
                            <div className="text-[10px] font-black text-primary-600 uppercase tracking-widest mb-2 italic">{job.type}</div>
                            <h3 className="text-2xl font-black text-slate-900 italic tracking-tighter italic group-hover:text-primary-600 transition-colors italic mb-2">{job.title}</h3>
                            <div className="flex flex-wrap items-center gap-4">
                               <span className="text-xs font-black text-slate-400 italic flex items-center"><Building className="h-3 w-3 mr-2" /> {job.company}</span>
                               <span className="text-xs font-black text-slate-400 italic flex items-center"><MapPin className="h-3 w-3 mr-2" /> {job.location}</span>
                            </div>
                         </div>
                      </div>
                      
                      <div className="flex flex-col items-end gap-2 text-right">
                         <div className="text-lg font-black text-slate-900 border-b-2 border-primary-100 pb-1">{job.salary}</div>
                         <div className="text-[10px] font-black text-red-400 uppercase tracking-widest italic">अंतिम तारीख: {job.deadline}</div>
                      </div>
                   </div>
                   
                   <div className="mt-10 pt-8 border-t border-slate-50 flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                         <div className="px-4 py-2 bg-slate-50 rounded-xl text-[10px] font-black text-slate-400 uppercase tracking-widest italic">Category: {job.category}</div>
                      </div>
                      <button className="flex items-center px-8 py-3 bg-slate-900 text-white rounded-2xl font-black text-[10px] uppercase tracking-widest shadow-xl hover:bg-primary-600 transition-all">
                         अर्ज करा (Apply) <ArrowRight className="ml-3 h-4 w-4" />
                      </button>
                   </div>
                </motion.div>
             ))}
          </div>

          {/* Sidebar Area */}
          <div className="space-y-12">
             <div className="bg-slate-900 rounded-[4rem] p-12 text-white shadow-2xl relative overflow-hidden group">
                <div className="absolute top-0 right-0 p-10 opacity-10 group-hover:scale-125 transition-transform duration-700">
                   <Trophy className="h-40 w-40" />
                </div>
                <h4 className="text-2xl font-black mb-8 italic tracking-tight italic">कौशल्य विकास <br/> केंद्र</h4>
                <div className="space-y-8">
                   {skillPrograms.map((p, i) => (
                     <div key={i} className="group/item">
                        <div className="flex items-center space-x-3 mb-2">
                           <GraduationCap className="h-5 w-5 text-primary-400" />
                           <h5 className="text-sm font-black text-white uppercase tracking-tight italic">{p.title}</h5>
                        </div>
                        <p className="text-[10px] text-slate-400 font-bold italic leading-relaxed">{p.description} • कालावधी: {p.duration}</p>
                     </div>
                   ))}
                </div>
                <button className="w-full mt-10 py-5 bg-white text-slate-900 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-primary-600 hover:text-white transition-all shadow-xl">
                  नाव नोंदवा
                </button>
             </div>

             <div className="bg-white rounded-[4rem] shadow-2xl border border-slate-50 p-12 text-center group">
                <div className="w-20 h-20 bg-primary-50 rounded-3xl flex items-center justify-center text-primary-600 mx-auto mb-8 group-hover:scale-110 transition-transform">
                   <Globe className="h-10 w-10 " />
                </div>
                <h4 className="text-xl font-black text-slate-900 mb-4 italic tracking-tight italic italic">सरकारी नोकरी अपडेट</h4>
                <p className="text-xs text-slate-400 font-bold italic mb-8 leading-relaxed">रेल्वे, बँकिंग आणि एमपीएससी च्या नवीन जाहिराती पाहण्यासाठी खाली क्लिक करा.</p>
                <button className="w-full py-5 bg-slate-50 text-slate-400 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-primary-600 hover:text-white transition-all">
                  पोर्टलवर जा <ExternalLink className="inline ml-2 h-3 w-3" />
                </button>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Jobs;
