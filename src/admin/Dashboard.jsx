import { motion } from 'framer-motion';
import { 
  BarChart3, 
  Bus,
  Camera,
  ChevronRight, 
  CloudUpload,
  FileCheck, 
  FileText, 
  LayoutDashboard, 
  MapPin,
  MessageSquare, 
  Plus, 
  Settings, 
  Users
} from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const stats = [
    { label: 'एकूण तक्रारी', value: '२४', icon: MessageSquare, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'प्रलंबित तक्रारी', value: '८', icon: BarChart3, color: 'text-amber-600', bg: 'bg-amber-50' },
    { label: 'सेवा विनंत्या', value: '१५', icon: FileCheck, color: 'text-emerald-600', bg: 'bg-emerald-50' },
    { label: 'एकूण सूचना', value: '१२', icon: FileText, color: 'text-purple-600', bg: 'bg-purple-50' },
  ];

  const menuItems = [
    { title: 'तक्रारी व्यवस्थापन', icon: MessageSquare, path: '/admin/complaints', active: true },
    { title: 'योजना व्यवस्थापन', icon: FileCheck, path: '/admin/schemes' },
    { title: 'सूचना व्यवस्थापन', icon: FileText, path: '/admin/notices' },
    { title: 'दस्तऐवज व्यवस्थापन', icon: CloudUpload, path: '/admin/documents' },
    { title: 'गॅलरी व्यवस्थापन', icon: Camera, path: '/admin/gallery' },
    { title: 'वाहतूक व्यवस्थापन', icon: Bus, path: '/admin/transport' },
    { title: 'पर्यटन व्यवस्थापन', icon: MapPin, path: '/admin/places' },
    { title: 'सदस्य व्यवस्थापन', icon: Users, path: '/admin/members' },
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
                 <LayoutDashboard className="h-6 w-6" />
              </div>
              <h1 className="text-4xl font-black text-slate-900 italic tracking-tighter italic">अॅडमिन डॅशबोर्ड</h1>
            </div>
            <p className="text-slate-500 font-bold uppercase text-[10px] tracking-[0.2em] ml-16 italic">प्रशासकीय कार्यप्रणाली आणि व्यवस्थापन</p>
          </motion.div>
          
          <div className="flex gap-4">
            <button className="flex items-center px-8 py-4 bg-primary-600 text-white rounded-[1.5rem] font-black shadow-2xl shadow-primary-500/30 hover:bg-primary-700 transition-all group">
              <Plus className="h-5 w-5 mr-3 group-hover:rotate-90 transition-transform" />
              सर्वात महत्त्वाचे अपडेट करा
            </button>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-10 rounded-[3rem] shadow-xl border border-slate-50 flex items-center justify-between group hover:border-primary-200 transition-all"
            >
              <div>
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 italic leading-none">{stat.label}</div>
                <div className="text-4xl font-black text-slate-900 italic tracking-tighter italic">{stat.value}</div>
              </div>
              <div className={`${stat.bg} ${stat.color} w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg shadow-current/10`}>
                <stat.icon className="h-8 w-8" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Actions & Recent Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-[4rem] shadow-2xl border border-slate-50 overflow-hidden">
              <div className="p-10 border-b border-slate-50 flex items-center justify-between">
                <h3 className="text-2xl font-black text-slate-900 italic tracking-tight italic">नुकत्याच आलेल्या तक्रारी</h3>
                <Link to="/admin/complaints" className="px-6 py-2 bg-slate-50 text-slate-400 rounded-full font-black text-[10px] uppercase tracking-widest hover:bg-primary-50 hover:text-primary-600 transition-all">सर्व पहा</Link>
              </div>
              <div className="divide-y divide-slate-50">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="p-10 hover:bg-slate-50 transition-colors flex items-center justify-between group">
                    <div className="flex items-center gap-6">
                      <div className="w-14 h-14 bg-slate-100 rounded-[1.2rem] flex items-center justify-center text-slate-300 group-hover:bg-primary-50 group-hover:text-primary-600 transition-all">
                        <MessageSquare className="h-7 w-7" />
                      </div>
                      <div>
                        <div className="text-lg font-black text-slate-900 group-hover:text-primary-600 transition-colors italic tracking-tight italic">पाणी पुरवठा समस्या</div>
                        <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">१४ मार्च २०२४ • <span className="text-amber-500 italic">प्रलंबित</span></div>
                      </div>
                    </div>
                    <button className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-slate-200 group-hover:text-primary-600 group-hover:translate-x-2 transition-all">
                      <ChevronRight className="h-8 w-8" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-10">
            <div className="bg-white p-12 rounded-[4rem] shadow-2xl border border-slate-50">
              <h3 className="text-2xl font-black text-slate-900 mb-10 italic tracking-tight italic border-b border-slate-50 pb-6 inline-block">व्यवस्थापन मेनू</h3>
              <div className="grid grid-cols-1 gap-4 font-black">
                {menuItems.map((item, idx) => (
                  <Link 
                    key={idx}
                    to={item.path} 
                    className={`flex items-center px-6 py-4 rounded-2xl transition-all group ${item.active ? 'bg-primary-600 text-white shadow-xl shadow-primary-500/30' : 'bg-slate-50 text-slate-500 hover:bg-slate-100 hover:text-slate-900'}`}
                  >
                    <item.icon className={`h-5 w-5 mr-5 ${item.active ? 'text-white' : 'text-slate-400 group-hover:text-primary-600'}`} /> 
                    <span className="text-sm uppercase tracking-widest leading-none">{item.title}</span>
                  </Link>
                ))}
                
                <button className="w-full flex items-center px-6 py-4 bg-slate-50 text-slate-400 rounded-2xl hover:bg-slate-100 hover:text-slate-900 transition-all group mt-4">
                   <Settings className="h-5 w-5 mr-5 text-slate-300 group-hover:text-primary-600" />
                   <span className="text-sm uppercase tracking-widest leading-none">सिस्टम सेटिंग्ज</span>
                </button>
              </div>
            </div>

            <div className="bg-slate-900 p-12 rounded-[4rem] shadow-2xl text-white relative overflow-hidden group">
               <div className="absolute inset-0 bg-primary-600/5 blur-3xl rounded-full translate-x-1/2 pointer-events-none group-hover:scale-125 transition-transform duration-700"></div>
               <div className="relative z-10">
                  <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-primary-400 mb-8">
                     <Users className="h-7 w-7" />
                  </div>
                  <h4 className="text-xl font-black mb-4 italic tracking-tight italic">मदत हवी आहे?</h4>
                  <p className="text-slate-400 font-medium text-sm mb-10 italic opacity-80 leading-relaxed">डॅशबोर्ड ऑपरेट करताना समस्या येत असल्यास तांत्रिक टीमशी संपर्क साधा.</p>
                  <button className="w-full py-4 bg-white text-slate-900 rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-primary-600 hover:text-white transition-all shadow-xl">
                   मदत केंद्र पहा
                  </button>
               </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
