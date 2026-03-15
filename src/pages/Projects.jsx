import { motion } from 'framer-motion';
import { 
  BarChart2, 
  Briefcase, 
  CheckCircle2, 
  ChevronRight, 
  Clock, 
  Construction, 
  ExternalLink, 
  Image as ImageIcon 
} from 'lucide-react';
import React, { useState } from 'react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      name: 'सिमेंट रोड बांधकाम (Phase 1)',
      budget: '₹ २५,००,०००',
      contractor: 'गायकवाड कन्स्ट्रक्शन्स',
      startDate: '१५ जाने २०२४',
      completionDate: '३० मार्च २०२४',
      status: 'In Progress',
      category: 'Infrastructure',
      progress: 65,
      description: 'गावातील मुख्य चौकापासून रेल्वे स्थानकापर्यंत सिमेंट रोडचे बांधकाम सुरू आहे.',
      photos: {
        before: 'https://images.unsplash.com/photo-1590086782792-42dd23501102?q=80&w=2000&auto=format&fit=crop',
        after: 'https://images.unsplash.com/photo-1545143333-636a6a441c0e?q=80&w=2000&auto=format&fit=crop'
      }
    },
    {
      id: 2,
      name: 'नवीन सौर पथदीप बसवणे',
      budget: '₹ ५,५०,०००',
      contractor: 'महावितरण सोलर सर्व्हिसेस',
      startDate: '१० फेब २०२४',
      completionDate: '१५ फेब २०२४',
      status: 'Completed',
      category: 'Utilities',
      progress: 100,
      description: 'गावातील ५० महत्त्वाच्या ठिकाणी हाय-टेक सौर दिवे बसवण्यात आले आहेत.',
      photos: {
        before: 'https://images.unsplash.com/photo-1542153023-eb5e4d257125?q=80&w=2000&auto=format&fit=crop',
        after: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?q=80&w=2000&auto=format&fit=crop'
      }
    }
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(p => p.status.toLowerCase() === filter.toLowerCase());

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
                 <Construction className="h-6 w-6" />
              </div>
              <h1 className="text-4xl font-black text-slate-900 italic tracking-normal italic">विकास <span className="text-primary-600">प्रकल्प</span></h1>
            </div>
            <p className="text-slate-500 font-bold uppercase text-[10px] tracking-[0.2em] ml-16 italic">गावातील रस्ते, वीज आणि पाण्याच्या प्रकल्पांची माहिती.</p>
          </motion.div>
          
          <div className="flex p-2 bg-white rounded-3xl shadow-xl border border-slate-100">
             {['all', 'In Progress', 'Completed'].map((f) => (
                <button 
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-8 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${filter === f ? 'bg-primary-600 text-white shadow-lg' : 'text-slate-400 hover:text-slate-900'}`}
                >
                   {f === 'all' ? 'सर्व' : (f === 'In Progress' ? 'प्रगत' : 'पूर्ण')}
                </button>
             ))}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-[4rem] shadow-2xl border border-slate-50 overflow-hidden group"
            >
              <div className="flex flex-col lg:flex-row">
                {/* Visual Section */}
                <div className="lg:w-2/5 relative h-[400px] lg:h-auto overflow-hidden">
                   <div className="absolute inset-0 bg-slate-900/40 z-10"></div>
                   <img src={project.photos.after} alt={project.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                   
                   <div className="absolute inset-0 z-20 p-12 flex flex-col justify-between">
                      <div className="flex justify-between items-start">
                         <div className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest backdrop-blur-md shadow-lg ${project.status === 'Completed' ? 'bg-emerald-500/20 text-emerald-100 border border-emerald-500/30' : 'bg-primary-600 text-white'}`}>
                            {project.status === 'Completed' ? 'पूर्ण (Success)' : 'सुरू आहे (Active)'}
                         </div>
                         <div className="bg-white/10 backdrop-blur-md px-4 py-2 rounded-xl text-[10px] font-black text-white uppercase tracking-widest border border-white/20">
                            {project.category}
                         </div>
                      </div>
                      
                      <div className="space-y-4">
                         <div className="text-white/60 text-[10px] font-black uppercase tracking-[0.2em] italic">अंदाजित बजेट</div>
                         <div className="text-4xl font-black text-white italic tracking-normal italic">{project.budget}</div>
                      </div>
                   </div>
                </div>

                {/* Content Section */}
                <div className="lg:w-3/5 p-12 md:p-16">
                   <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                      <div>
                        <h3 className="text-3xl font-black text-slate-900 italic tracking-normal italic mb-2">{project.name}</h3>
                        <p className="text-slate-400 font-bold italic leading-relaxed text-sm">{project.description}</p>
                      </div>
                      <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-all shadow-xl shadow-slate-200/50">
                         {project.status === 'Completed' ? <CheckCircle2 className="h-10 w-10" /> : <Clock className="h-10 w-10 animate-pulse" />}
                      </div>
                   </div>

                   <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-12">
                      <div className="space-y-1">
                         <div className="text-[10px] font-black text-slate-300 uppercase tracking-widest">कंत्राटदार</div>
                         <div className="text-sm font-black text-slate-700 italic flex items-center"><Briefcase className="h-3 w-3 mr-2 opacity-30" /> {project.contractor}</div>
                      </div>
                      <div className="space-y-1">
                         <div className="text-[10px] font-black text-slate-300 uppercase tracking-widest">सुरुवात तारीख</div>
                         <div className="text-sm font-black text-slate-700 italic flex items-center"><ChevronRight className="h-3 w-3 mr-2 opacity-30" /> {project.startDate}</div>
                      </div>
                      <div className="space-y-1">
                         <div className="text-[10px] font-black text-slate-300 uppercase tracking-widest">अपेक्षित पूर्तता</div>
                         <div className="text-sm font-black text-slate-700 italic flex items-center"><CheckCircle2 className="h-3 w-3 mr-2 opacity-30" /> {project.completionDate}</div>
                      </div>
                   </div>

                   {/* Progress Bar */}
                   <div className="space-y-4 mb-12">
                      <div className="flex justify-between items-end">
                         <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">प्रकल्प प्रगती (Progress)</span>
                         <span className="text-xl font-black text-primary-600 italic">{project.progress}%</span>
                      </div>
                      <div className="h-3 bg-slate-50 rounded-full overflow-hidden border border-slate-100 p-0.5">
                         <motion.div 
                           initial={{ width: 0 }}
                           whileInView={{ width: `${project.progress}%` }}
                           className="h-full bg-primary-600 rounded-full shadow-lg shadow-primary-500/30"
                         ></motion.div>
                      </div>
                   </div>

                   <div className="flex items-center gap-4">
                      <button className="flex-grow flex items-center justify-center py-5 bg-slate-900 text-white rounded-[2rem] font-black text-xs uppercase tracking-[0.2em] shadow-2xl hover:bg-primary-600 transition-all group/btn">
                         विस्तृत अहवाल पहा <ExternalLink className="ml-3 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                      <button className="w-16 h-16 bg-slate-50 text-slate-400 rounded-[2rem] flex items-center justify-center hover:bg-primary-50 hover:text-primary-600 transition-all shadow-sm">
                         <ImageIcon className="h-6 w-6" />
                      </button>
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-slate-900 rounded-[4rem] text-center relative overflow-hidden group">
           <div className="absolute inset-0 bg-primary-600/5 blur-3xl rounded-full translate-x-1/2 group-hover:scale-150 transition-transform duration-700"></div>
           <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="text-left">
                 <h4 className="text-2xl font-black text-white italic mb-2 tracking-normal italic">कायदर्शक पारदर्शकता</h4>
                 <p className="text-slate-400 font-bold italic text-sm">आम्ही ग्रामस्थांच्या प्रत्येक पैशाचा हिशोब पारदर्शकपणे मांडण्यास बांधील आहोत.</p>
              </div>
              <button className="px-10 py-5 bg-white text-slate-900 rounded-[1.5rem] font-black text-xs uppercase tracking-widest hover:bg-primary-600 hover:text-white transition-all shadow-xl">
                 आर्थिक अहवाल डाऊनलोड करा
              </button>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
