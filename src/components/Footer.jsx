import { ArrowRight, Facebook, Instagram, Mail, MapPin, Phone, Twitter } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white pt-32 pb-12 overflow-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-96 bg-primary-600/10 blur-[120px] rounded-full -mt-48 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-20 mb-20">
          
          {/* Brand & Mission */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-8">
               <div className="w-14 h-14 bg-primary-600 rounded-2xl flex items-center justify-center shadow-2xl shadow-primary-600/30">
                 <MapPin className="h-7 w-7 text-white" />
               </div>
               <div>
                  <h3 className="text-2xl font-black tracking-tight leading-none">डोंगरगाव (रेल्वे)</h3>
                  <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary-400 mt-2">डिजिटल ग्रामपंचायत पोर्टल</p>
               </div>
            </div>
            <p className="text-slate-400 text-lg leading-relaxed max-w-lg mb-10 font-medium">
              आमचे ध्येय गावाचा सर्वांगीण विकास आणि नागरिकांना पारदर्शक, जलद आणि आधुनिक सेवा पुरवणे हे आहे. तंत्रज्ञानाच्या माध्यमातून आम्ही डोंगरगाव अधिक प्रगत बनवण्यासाठी कटिबद्ध आहोत.
            </p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram].map((Icon, idx) => (
                <a key={idx} href="#" className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-primary-600 hover:text-white hover:border-primary-600 transition-all group">
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-black mb-10 border-b border-white/10 pb-4 inline-block tracking-tight text-white/90">महत्वाच्या लिंक्स</h4>
            <ul className="space-y-6">
              {[
                { name: 'शासकीय योजना', path: '/schemes' },
                { name: 'ऑनलाइन सेवा', path: '/services' },
                { name: 'तक्रार निवारण', path: '/complaints' },
                { name: 'वाहतूक माहिती', path: '/transport' },
                { name: 'सभेत झालेले निर्णय', path: '/meeting-minutes' }
              ].map((link, idx) => (
                <li key={idx}>
                  <Link to={link.path} className="text-slate-400 hover:text-primary-400 font-bold transition-all flex items-center group">
                    <div className="w-1 h-1 bg-primary-600 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-black mb-10 border-b border-white/10 pb-4 inline-block tracking-tight text-white/90">संपर्क तपशील</h4>
            <ul className="space-y-8">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-primary-500 mr-4 shrink-0 mt-1" />
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">फोन नंबर</div>
                  <div className="text-slate-200 font-bold">+९१ ९१४६२४५३८९</div>
                </div>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-primary-500 mr-4 shrink-0 mt-1" />
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">ईमेल आयडी</div>
                  <div className="text-slate-200 font-bold break-all">gpdongargaon95@gmail.com</div>
                </div>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-primary-500 mr-4 shrink-0 mt-1" />
                <div>
                  <div className="text-[10px] font-black uppercase tracking-widest text-slate-500 mb-1">कार्यालय पत्ता</div>
                  <div className="text-slate-200 font-bold italic">ग्रामपंचायत डोंगरगाव, ता. वरोरा, जि. चंद्रपूर.</div>
                </div>
              </li>
            </ul>
          </div>

        </div>

        {/* Newsletter / CTA */}
        <div className="bg-gradient-to-r from-primary-600 to-blue-700 p-12 rounded-[3.5rem] mb-20 flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl shadow-primary-900/40 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl group-hover:scale-110 transition-transform duration-700"></div>
            <div className="relative z-10 text-center md:text-left">
               <h3 className="text-3xl font-black text-white mb-4 tracking-tight">डिजिटल क्रांतीमध्ये सहभागी व्हा!</h3>
               <p className="text-primary-100 font-medium">आमच्या नवीन अपडेट्ससाठी सबस्क्राईब करा.</p>
            </div>
            <div className="relative z-10 w-full md:w-auto">
               <div className="flex flex-col sm:flex-row gap-4">
                  <input type="email" placeholder="तुमचा ईमेल टाका" className="w-full sm:w-72 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-6 py-4 outline-none placeholder:text-white/40 font-medium text-white focus:bg-white/20 transition-all" />
                  <button className="px-8 py-4 bg-white text-slate-900 rounded-2xl font-black shadow-xl hover:bg-slate-100 transition-all flex items-center justify-center whitespace-nowrap">
                    सामील व्हा <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
               </div>
            </div>
        </div>

        {/* Copyright */}
        <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/5 gap-6">
          <p className="text-slate-500 text-sm font-medium">© २०२४ ग्रामपंचायत डोंगरगाव (रेल्वे). सर्व हक्क राखीव.</p>
          <div className="flex items-center space-x-8 text-xs font-black uppercase tracking-tighter text-slate-500">
            <a href="#" className="hover:text-primary-500 transition-colors">गोपनीयता धोरण</a>
            <a href="#" className="hover:text-primary-500 transition-colors">अटी आणि शर्ती</a>
            <a href="#" className="hover:text-primary-500 transition-colors">मदत केंद्र</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
