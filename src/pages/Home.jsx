import { motion } from 'framer-motion';
import {
  ArrowRight,
  Award,
  Building2,
  ChevronRight,
  Clock,
  FileText,
  Home as HomeIcon,
  Info,
  MapPin,
  Users,
  Zap
} from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import NoticeCard from '../components/NoticeCard';

const Home = () => {
  const stats = [
    { label: 'एकूण लोकसंख्या', value: '१,४२७', icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'एकूण कुटुंबे', value: '३४१', icon: HomeIcon, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { label: 'साक्षरता प्रमाण', value: '७२.५३%', icon: Award, color: 'text-amber-600', bg: 'bg-amber-50' },
    { label: 'पिन कोड', value: '४४२९०७', icon: MapPin, color: 'text-red-600', bg: 'bg-red-50' },
  ];

  const quickServices = [
    { title: 'प्रशासकीय (Panchayat)', icon: Building2, path: '/services?tab=schemes', desc: 'योजना, सूचना, अंदाजपत्रक आणि अधिकृत दस्तऐवज पहा.' },
    { title: 'लोकसेवा (Services)', icon: Zap, path: '/services?tab=services', desc: 'दाखले, प्रमाणपत्रे आणि तक्रार निवारण सुविधा.' },
    { title: 'गाव माहिती (Village)', icon: Info, path: '/history', desc: 'इतिहास, निर्देशिका, नकाशा आणि पर्यटन स्थळे.' },
    { title: 'उपजीविका (Livelihood)', icon: Users, path: '/agriculture', desc: 'कृषी सल्ले, रोजगार आणि स्थानिक उद्योगांची माहिती.' },
    { title: 'उपयोगिता (Utilities)', icon: MapPin, path: '/transport', desc: 'वाहतूक वेळ, पाणी पुरवठा आणि स्वच्छता वेळापत्रक.' },
    { title: 'संपर्क (Contact)', icon: HomeIcon, path: '/contact', desc: 'ग्रामपंचायत कार्यालय संपर्क आणि आपत्कालीन क्रमांक.' },
  ];

  const featuredNotices = [
    { title: 'नवीन रस्ते विकास आराखडा २०२४', date: '१४ मार्च २०२४', type: 'सूचना' },
    { title: 'पाणी पुरवठा वेळेत बदल', date: '१२ मार्च २०२४', type: 'महत्वाचे' },
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 scale-105">
          <img
            src="/dongargaon_village_hero.png"
            alt="Dongargaon (Railway)"
            className="w-full h-full object-cover filter brightness-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
        </div>

        <div className="section-container relative z-10 text-center pt-32 md:pt-40 pb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-primary-600/20 backdrop-blur-md border border-primary-400/30 text-primary-200 text-xs font-black uppercase tracking-[0.2em] mb-8">
              आमच्या गावात आपले स्वागत आहे
            </span>
            <h1 className="text-5xl md:text-8xl font-black text-white mb-8 tracking-normal leading-[1.1] md:leading-[1.1]">
              ग्रामपंचायत <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-sky-300">डोंगरगाव (रेल्वे)</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 mb-12 max-w-2xl mx-auto font-medium leading-relaxed opacity-90">
              प्रगतशील, डिजिटल आणि पारदर्शक ग्रामप्रशासन. <br className="hidden md:block" /> समृद्ध गाव, आत्मनिर्भर नागरिक!
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-20 -mt-16 px-4">
        <div className="section-container">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-slate-100 flex items-center justify-between group hover:border-primary-200 transition-all"
              >
                <div>
                  <div className="text-xs font-black text-slate-400 uppercase tracking-widest mb-1">{stat.label}</div>
                  <div className="text-3xl font-black text-slate-900">{stat.value}</div>
                </div>
                <div className={`${stat.bg} ${stat.color} w-14 h-14 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-current/10`}>
                  <stat.icon className="h-6 w-6" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Services Grid */}
      <section className="py-32 section-container">
        <div className="text-center mb-20">
          <span className="text-primary-600 font-black tracking-widest uppercase text-xs">जलद सुविधा</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-4">डिजिटल ग्रामपंचायत</h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto font-medium">आमच्या सर्व सेवा आता ऑनलाइन उपलब्ध आहेत, जेणेकरून आपल्याला कार्यालयात येण्याची गरज पडणार नाही.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {quickServices.map((service, idx) => (
            <Link key={idx} to={service.path} className="group">
              <div className="bg-white p-10 rounded-[3rem] border border-slate-50 shadow-sm hover:shadow-2xl hover:border-primary-100 transition-all duration-500 h-full flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-primary-50 rounded-[2rem] flex items-center justify-center mb-8 text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-all duration-500 shadow-lg shadow-primary-200/50">
                  <service.icon className="h-10 w-10" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4">{service.title}</h3>
                <p className="text-slate-500 leading-relaxed font-medium mb-8 px-4">{service.desc}</p>
                <div className="mt-auto flex items-center text-primary-600 font-black text-sm uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                  सुरू करा <ChevronRight className="ml-1 h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 bg-slate-900 rounded-[4rem] sm:rounded-[6rem] mx-4 overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <img src="https://www.transparenttextures.com/patterns/carbon-fibre.png" alt="texture" className="w-full h-full object-repeat" />
        </div>
        <div className="section-container relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="text-primary-400 font-black tracking-widest uppercase text-xs mb-6 block">आमच्या गावाबद्दल</span>
              <h2 className="text-4xl md:text-6xl font-black text-white mb-10 leading-relaxed">डोंगरगाव (रेल्वे): एक प्रगतशील गाव</h2>
              <div className="space-y-8 text-slate-300 text-lg leading-relaxed font-medium">
                <p>
                  डोंगरगाव हे चंद्रपूर जिल्ह्यातील वरोरा तालुक्यातील एक महत्त्वाचे गाव आहे. रेल्वे मार्गाच्या सानिध्यात असल्याने याला 'डोंगरगाव (रेल्वे)' असे संबोधले जाते.
                </p>
                <div className="grid grid-cols-2 gap-8 pt-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                      <Clock className="h-5 w-5 text-primary-400" />
                    </div>
                    <div>
                      <div className="text-white font-black">सतत कार्यरत</div>
                      <div className="text-xs text-slate-400 mt-1 uppercase tracking-tighter">२४/७ सेवा उपलब्ध</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0">
                      <FileText className="h-5 w-5 text-primary-400" />
                    </div>
                    <div>
                      <div className="text-white font-black">पारदर्शक कारभार</div>
                      <div className="text-xs text-slate-400 mt-1 uppercase tracking-tighter">सर्व कागदपत्रे डिजिटल</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square rounded-[3rem] overflow-hidden shadow-2xl rotate-3 bg-primary-600">
                <img src="/dongargaon_village_hero.png" alt="Village profile" className="w-full h-full object-cover mix-blend-overlay opacity-60" />
              </div>
              <div className="absolute -bottom-10 -right-10 bg-white p-10 rounded-[3rem] shadow-2xl hidden md:block">
                <div className="text-5xl font-black text-slate-900 mb-2">१००%</div>
                <div className="text-xs font-black text-slate-400 uppercase tracking-widest">मोफत सरकारी योजना माहिती</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Latest Updates Section */}
      <section className="py-32 section-container">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 text-center md:text-left">
          <div>
            <span className="text-primary-600 font-black tracking-widest uppercase text-xs">काय चालू आहे?</span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mt-4 tracking-normal">नवीनतम सूचना</h2>
          </div>
          <Link to="/notices" className="inline-flex items-center px-8 py-4 bg-slate-900 text-white rounded-2xl font-black text-sm hover:bg-primary-600 transition-all">
            सर्व सूचना पहा <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {featuredNotices.map((notice, idx) => (
            <div key={idx} className="bg-white p-12 rounded-[3.5rem] shadow-sm border border-slate-50 flex flex-col items-center text-center md:text-left md:items-start group hover:shadow-2xl hover:border-primary-100 transition-all">
              <span className="px-5 py-2 bg-primary-50 text-primary-600 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 border border-primary-100">{notice.type}</span>
              <h3 className="text-3xl font-black text-slate-900 mb-4 group-hover:text-primary-600 transition-colors leading-tight">{notice.title}</h3>
              <div className="flex items-center text-slate-400 font-bold mb-8 text-sm">
                <Clock className="h-4 w-4 mr-2" />
                प्रसिद्ध: {notice.date}
              </div>
              <button className="flex items-center mt-auto text-slate-900 font-black text-sm group-hover:translate-x-2 transition-transform underline decoration-primary-200 underline-offset-8">
                विस्तृत माहिती <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
