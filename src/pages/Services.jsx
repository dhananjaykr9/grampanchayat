import { AnimatePresence, motion } from 'framer-motion';
import { 
  ArrowRight, 
  Baby, 
  ChevronRight, 
  CreditCard, 
  FileCheck, 
  FileText, 
  Lock, 
  Search, 
  UserMinus,
  Building2,
  Zap,
  ClipboardCheck,
  HelpCircle,
  Info
} from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import SchemeCard from '../components/SchemeCard';

const Services = () => {
  const { signInWithGoogle, user } = useAuth();
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('services'); // 'services' or 'schemes'

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const tab = params.get('tab');
    if (tab === 'schemes') {
      setActiveTab('schemes');
    } else if (tab === 'services') {
      setActiveTab('services');
    }
  }, [location]);

  const services = [
    { 
      id: 's1',
      title: 'जन्म दाखला (Birth Certificate)', 
      icon: Baby, 
      desc: 'गावात झालेल्या जन्मांची नोंद आणि प्रमाणपत्र मिळवा.',
      requiresAuth: true,
      color: 'bg-blue-600'
    },
    { 
      id: 's2',
      title: 'मृत्यू दाखला (Death Certificate)', 
      icon: UserMinus, 
      desc: 'गावातील सदस्याच्या मृत्यूची नोंद आणि दाखला अर्ज करा.',
      requiresAuth: true,
      color: 'bg-slate-700'
    },
    { 
      id: 's3',
      title: 'विवाह नोंदणी (Marriage Registration)', 
      icon: FileCheck, 
      desc: 'विवाहाची अधिकृत नोंद करून प्रमाणपत्र मिळवा.',
      requiresAuth: true,
      color: 'bg-emerald-600'
    },
    { 
      id: 's4',
      title: 'उत्पन्न दाखला (Income Certificate)', 
      icon: CreditCard, 
      desc: 'तहसीलदार कार्यालयासाठी उत्पन्नाचा दाखला मिळवा.',
      requiresAuth: true,
      color: 'bg-amber-600'
    },
  ];

  const allSchemes = [
    {
      id: 1,
      scheme_name: 'पंतप्रधान आवास योजना (PMAY)',
      description: 'बेघर कुटुंबांना स्वतःचे पक्के घर बांधण्यासाठी आर्थिक मदत दिली जाते.',
      eligibility: 'उत्पन्न गट, बेघर किंवा कच्चे घर असलेले कुटुंब.',
      documents_required: 'सातबारा, आधार कार्ड, बँक पासबुक, उत्पन्नाचा दाखला.'
    },
    {
      id: 2,
      scheme_name: 'शेतकरी सन्मान निधी योजना',
      description: 'शेतकऱ्यांना शेतीसाठी आर्थिक पाठबळ देण्यासाठी दरवर्षी ६,००० रुपये दिले जातात.',
      eligibility: 'क्षेत्रफळ २ हेक्टरपर्यंत असणारे अल्पभूधारक शेतकरी.',
      documents_required: '७/१२ उतारा, ८-अ, आधार कार्ड, बँक खाते.'
    },
    {
      id: 3,
      scheme_name: 'संजय गांधी निराधार योजना',
      description: 'निराधार व्यक्ती, विधवा आणि अपंगांना मासिक निवृत्ती वेतन दिले जाते.',
      eligibility: 'उत्पन्न २१,००० रुपयांपेक्षा कमी असलेले निराधार नागरिक.',
      documents_required: 'वयाचा दाखला, उत्पन्नाचा दाखला, आधार कार्ड.'
    },
    {
      id: 4,
      scheme_name: 'महात्मा गांधी रोजगार हमी योजना (MGNREGA)',
      description: 'ग्रामीण भागातील मजुरांना १०० दिवसांच्या रोजगाराची हमी दिली जाते.',
      eligibility: 'गावातील १८ वर्षांवरील इच्छुक मजूर.',
      documents_required: 'जॉब कार्ड, आधार कार्ड, बँक पासबुक.'
    }
  ];

  const filteredServices = services.filter(s => s.title.toLowerCase().includes(searchTerm.toLowerCase()));
  const filteredSchemes = allSchemes.filter(s => 
    s.scheme_name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    s.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-slate-50 min-h-screen pb-24 text-slate-900">
      {/* Header */}
      <div className="bg-slate-900 pt-48 pb-32 px-4 relative overflow-hidden text-center">
         <div className="section-container relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight italic underline decoration-primary-500/30 underline-offset-12">
                नागरिक <span className="text-primary-400">पोर्टल</span>
              </h1>
              <p className="text-xl text-primary-300 font-medium">शासकीय सेवा आणि योजनांचा एकात्मिक डिजिटल प्लॅटफॉर्म.</p>
            </motion.div>
         </div>
      </div>

      <div className="section-container -mt-16 relative z-10">
        {/* Search & Tab Switcher Bar */}
        <div className="max-w-5xl mx-auto mb-20">
           <div className="bg-white p-4 rounded-[2.5rem] shadow-2xl border border-slate-50 flex flex-col md:flex-row gap-6 items-center">
              <div className="relative flex-grow w-full group">
                 <Search className="absolute left-8 top-1/2 -translate-y-1/2 h-6 w-6 text-slate-400 group-focus-within:text-primary-600 transition-colors" />
                 <input 
                   type="text" 
                   placeholder={activeTab === 'services' ? "सेवेचे नाव शोधा..." : "योजनेचे नाव शोधा..."}
                   value={searchTerm}
                   onChange={(e) => setSearchTerm(e.target.value)}
                   className="w-full bg-slate-50/50 border-none rounded-[2rem] py-6 pl-20 pr-10 outline-none focus:ring-4 focus:ring-primary-100 transition-all font-bold text-lg text-slate-900" 
                 />
              </div>
              
              <div className="flex bg-slate-100 p-2 rounded-[2rem] w-full md:w-auto shrink-0">
                 <button 
                  onClick={() => setActiveTab('services')}
                  className={`flex-1 md:flex-none px-8 py-4 rounded-[1.5rem] font-black text-xs uppercase tracking-widest transition-all ${activeTab === 'services' ? 'bg-white text-primary-600 shadow-lg' : 'text-slate-500 hover:text-slate-900'}`}
                 >
                    सेवा (Services)
                 </button>
                 <button 
                  onClick={() => setActiveTab('schemes')}
                  className={`flex-1 md:flex-none px-8 py-4 rounded-[1.5rem] font-black text-xs uppercase tracking-widest transition-all ${activeTab === 'schemes' ? 'bg-white text-primary-600 shadow-lg' : 'text-slate-500 hover:text-slate-900'}`}
                 >
                    योजना (Schemes)
                 </button>
              </div>
           </div>
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'services' ? (
            <motion.div
              key="services-tab"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              {!user && (
                <div className="mb-20 bg-gradient-to-r from-primary-600 to-indigo-700 p-12 rounded-[4rem] text-white flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden group">
                   <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -ml-32 -mt-32 pointer-events-none group-hover:scale-110 transition-transform duration-700"></div>
                   <div className="relative z-10 text-center md:text-left">
                      <div className="inline-flex items-center px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-widest mb-6 border border-white/20">
                         <Lock className="h-3 w-3 mr-2" /> सुरक्षित प्रवेश
                      </div>
                      <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight italic">प्रमाणपत्रांसाठी लॉगिन आवश्यक आहे</h2>
                      <p className="text-primary-100 font-medium leading-relaxed max-w-lg italic">
                        दाखले आणि शासकीय सेवांचे अर्ज भरण्यासाठी कृपया तुमच्या गुगल (Google) खात्याने लॉगिन करा.
                      </p>
                   </div>
                   <button 
                    onClick={login}
                    className="relative z-10 px-12 py-5 bg-white text-slate-900 rounded-2xl font-black shadow-2xl hover:bg-slate-50 transition-all flex items-center group"
                   >
                     लॉगिन करा (Login) <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                   </button>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {filteredServices.map((service) => (
                  <motion.div
                    key={service.id}
                    className={`bg-white rounded-[3rem] p-10 md:p-12 shadow-xl border border-slate-50 flex flex-col h-full group transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${!user ? 'opacity-70 saturate-50' : 'hover:border-primary-200'}`}
                  >
                     <div className={`w-20 h-20 ${service.color} rounded-[2rem] flex items-center justify-center mb-8 shadow-lg shadow-slate-200 group-hover:scale-110 transition-transform`}>
                        <service.icon className="h-10 w-10 text-white" />
                     </div>
                     <h3 className="text-2xl font-black text-slate-900 mb-6 italic leading-tight group-hover:text-primary-600 transition-colors tracking-tighter">{service.title}</h3>
                     <p className="text-slate-500 font-medium leading-relaxed mb-10 flex-grow italic">{service.desc}</p>
                     <div className="pt-8 border-t border-slate-50 flex items-center justify-between mt-auto">
                        <div className="flex items-center space-x-2">
                           <FileText className="h-4 w-4 text-slate-300" />
                           <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest leading-none">डिजिटल प्रत उपलब्ध</span>
                        </div>
                        <button 
                          disabled={!user}
                          className={`px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all ${user ? 'bg-slate-900 text-white hover:bg-primary-600 shadow-xl shadow-slate-900/10' : 'bg-slate-100 text-slate-400 cursor-not-allowed'}`}
                        >
                          अर्ज करा <ChevronRight className="inline ml-1 h-4 w-4" />
                        </button>
                     </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="schemes-tab"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-10"
            >
              {filteredSchemes.map((scheme) => (
                <SchemeCard key={scheme.id} scheme={scheme} />
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {(activeTab === 'services' ? filteredServices.length === 0 : filteredSchemes.length === 0) && (
          <div className="text-center py-40">
             <div className="bg-white w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl text-slate-200">
                <Info className="h-12 w-12" />
             </div>
             <p className="text-2xl font-black text-slate-400 italic">कोणतीही माहिती आढळली नाही.</p>
          </div>
        )}

        {/* Accountability Box */}
        <div className="mt-24 p-12 md:p-20 bg-white rounded-[4rem] text-center shadow-2xl border border-slate-50 relative overflow-hidden group">
           <div className="absolute top-0 left-0 w-32 h-32 bg-primary-50 rounded-full blur-3xl -ml-16 -mt-16 group-hover:bg-primary-100 transition-colors duration-700"></div>
           <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-6 italic tracking-tight">गाव प्रगतीपथावर, नागरिक सशक्त!</h3>
           <p className="text-slate-400 font-medium max-w-2xl mx-auto italic leading-relaxed text-lg">
             डिजिटल ग्रामपंचायतीच्या माध्यमातून सर्व शासकीय योजना आणि सेवा आता तुमच्या एका क्लिकवर उपलब्ध आहेत. पारदर्शकतेसाठी आम्ही बांधील आहोत.
           </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
