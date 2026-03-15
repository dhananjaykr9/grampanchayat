import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, Globe, LogIn, LogOut, Menu, ShieldAlert, X } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { user, signInWithGoogle, signOut, mockAdminLogin } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { title: 'होम', path: '/' },
    {
      title: 'प्रशासन',
      submenu: [
        { title: 'माहिती (Info)', path: '/panchayat-info' },
        { title: 'योजना (Schemes)', path: '/services?tab=schemes' },
        { title: 'सूचना (Notices)', path: '/notices' },
        { title: 'निविदा (Tenders)', path: '/tenders' },
        { title: 'अंदाजपत्रक (Budget)', path: '/budget' },
        { title: 'ग्रामसभा (Gram Sabha)', path: '/gram-sabha' },
        { title: 'आरटीआय (RTI)', path: '/rti' },
        { title: 'दस्तऐवज (Documents)', path: '/documents' },
      ]
    },
    {
      title: 'माझे गाव',
      submenu: [
        { title: 'इतिहास (History)', path: '/history' },
        { title: 'निर्देशिका (Directory)', path: '/directory' },
        { title: 'आपत्कालीन (Emergency)', path: '/emergency' },
        { title: 'नकाशा (Map)', path: '/village-map' },
        { title: 'दिनदर्शिका (Calendar)', path: '/calendar' },
        { title: 'पर्यटन (Places)', path: '/places-to-visit' },
        { title: 'छायाचित्र (Gallery)', path: '/gallery' },
      ]
    },
    {
      title: 'नागरिक सेवा',
      submenu: [
        { title: 'सेवा (Services)', path: '/services?tab=services' },
        { title: 'तक्रार (Complaints)', path: '/complaints' },
        { title: 'विकास कामे (Projects)', path: '/projects' },
        { title: 'कृषी (Agriculture)', path: '/agriculture' },
        { title: 'रोजगार (Jobs)', path: '/jobs' },
        { title: 'उद्योग (Industries)', path: '/industries' },
        { title: 'अभिप्राय (Feedback)', path: '/feedback' },
      ]
    },
    {
      title: 'उपयोगिता',
      submenu: [
        { title: 'वाहतूक (Transport)', path: '/transport' },
        { title: 'स्वच्छता (Water/Waste)', path: '/water-waste' },
        { title: 'लो इंटरनेट मोड', path: '/low-internet' },
        { title: 'संपर्क (Contact)', path: '/contact' },
      ]
    },
  ];

  const adminLink = user?.email?.includes('admin') || user?.email === 'gpdongargaon95@gmail.com' ? { title: 'अॅडमिन (Admin)', path: '/admin' } : null;

  return (
    <nav className={`sticky top-0 w-full z-50 transition-all duration-500 ${scrolled || location.pathname !== '/' ? 'py-3' : 'py-4'} bg-white/90 backdrop-blur-xl shadow-xl`}>
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className={`relative px-2 py-3 rounded-2xl transition-all duration-500 flex items-center justify-between bg-transparent`}>

          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-4 group shrink-0">
            <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center transition-all duration-500 ${(scrolled || location.pathname !== '/') ? 'bg-primary-600 shadow-lg shadow-primary-500/20' : 'bg-white shadow-xl'}`}>
              <Globe className={`h-6 w-6 md:h-7 md:w-7 ${(scrolled || location.pathname !== '/') ? 'text-white' : 'text-primary-600'}`} />
            </div>
            <div className="flex flex-col">
              <span className={`text-lg md:text-xl font-black tracking-normal leading-tight ${(scrolled || location.pathname !== '/') ? 'text-slate-900' : 'text-white'}`}>डोंगरगाव (रेल्वे)</span>
              <span className={`text-[10px] font-bold uppercase tracking-[0.15em] mt-1 ${(scrolled || location.pathname !== '/') ? 'text-primary-600' : 'text-primary-200'}`}>ग्रामपंचायत</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden xl:flex items-center space-x-1">
            {navLinks.map((link, idx) => (
              <div key={idx} className="relative group">
                {link.submenu ? (
                  <button className={`flex items-center px-4 py-2.5 rounded-xl text-sm font-bold transition-all ${(scrolled || location.pathname !== '/') ? 'text-slate-600 hover:bg-slate-50 hover:text-primary-600' : 'text-white/80 hover:bg-white/10 hover:text-white'}`}>
                    {link.title} <ChevronDown className="h-4 w-4 ml-1.5 opacity-50" />
                  </button>
                ) : (
                  <Link
                    to={link.path}
                    className={`px-4 py-2.5 rounded-xl text-sm font-bold transition-all block ${location.pathname === link.path ? 'bg-primary-600 text-white shadow-xl shadow-primary-500/30' : (scrolled || location.pathname !== '/') ? 'text-slate-600 hover:bg-slate-50 hover:text-primary-600' : 'text-white/80 hover:bg-white/10 hover:text-white'}`}
                  >
                    {link.title}
                  </Link>
                )}

                {link.submenu && (
                  <div className="absolute top-full left-0 mt-2 w-64 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-300">
                    <div className="bg-white rounded-2xl shadow-2xl border border-slate-100 p-2 max-h-[80vh] overflow-y-auto custom-scrollbar">
                      {link.submenu.map((sub, sIdx) => (
                        <Link
                          key={sIdx}
                          to={sub.path}
                          className="block px-4 py-2.5 rounded-xl text-xs font-bold text-slate-600 hover:bg-primary-50 hover:text-primary-600 transition-all"
                        >
                          {sub.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            {adminLink && (
              <Link
                to={adminLink.path}
                className={`px-5 py-2.5 rounded-xl text-sm font-black transition-all ${(scrolled || location.pathname !== '/') ? 'text-amber-600 hover:bg-amber-50' : 'text-amber-400 hover:bg-white/10'}`}
              >
                {adminLink.title}
              </Link>
            )}
          </div>

          {/* Auth Button */}
          <div className="hidden xl:block ml-4">
            {user ? (
              <div className="flex items-center space-x-4">
                <div className="flex flex-col items-end">
                  <span className={`text-[10px] font-black uppercase tracking-widest ${(scrolled || location.pathname !== '/') ? 'text-slate-400' : 'text-white/50'}`}>स्वागत आहे,</span>
                  <span className={`text-xs font-bold ${(scrolled || location.pathname !== '/') ? 'text-slate-900' : 'text-white'}`}>{user.email.split('@')[0]}</span>
                </div>
                <button
                  onClick={signOut}
                  className="w-10 h-10 rounded-xl bg-red-50 text-red-600 flex items-center justify-center hover:bg-red-600 hover:text-white transition-all shadow-sm"
                  title="लॉग-आउट करा"
                >
                  <LogOut className="h-5 w-5" />
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <button
                  onClick={signInWithGoogle}
                  className="flex items-center space-x-3 px-6 py-2.5 bg-primary-600 text-white rounded-2xl font-black text-sm hover:bg-primary-700 transition-all shadow-xl shadow-primary-500/25 group"
                >
                  <span>प्रवेश करा (Login)</span>
                  <LogIn className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
                {/* Admin Testing Bypass Button
                <button 
                  onClick={mockAdminLogin}
                  className="w-10 h-10 flex items-center justify-center bg-slate-100 text-slate-400 rounded-xl hover:bg-amber-100 hover:text-amber-600 transition-all"
                  title="Dev: Login as Admin"
                >
                  <ShieldAlert className="h-5 w-5" />
                </button> */}
              </div>
            )}
          </div>

          {/* Mobile Toggle */}
          <button
            className="xl:hidden p-3 rounded-2xl text-primary-600 bg-white/80 shadow-md focus:outline-none focus:ring-2 focus:ring-primary-300"
            aria-label="Toggle menu"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-7 w-7" /> : <Menu className={`h-7 w-7 ${(scrolled || location.pathname !== '/') ? 'text-slate-900' : 'text-primary-600'}`} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="xl:hidden fixed inset-0 bg-black/40 z-[60] flex justify-end"
            onClick={() => setIsOpen(false)}
          >
            <div
              className="w-[85vw] max-w-xs h-full bg-white/95 backdrop-blur-2xl rounded-l-3xl shadow-2xl border-l border-slate-100 overflow-y-auto p-6 space-y-4 flex flex-col"
              onClick={e => e.stopPropagation()}
            >
              {navLinks.map((link, idx) => (
                <div key={idx} className="space-y-3">
                  {link.submenu ? (
                    <>
                      <div className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4">{link.title}</div>
                      {link.submenu.map((sub, sIdx) => (
                        <Link
                          key={sIdx}
                          to={sub.path}
                          onClick={() => setIsOpen(false)}
                          className="block px-6 py-4 bg-slate-50 text-slate-700 rounded-[1.5rem] font-bold text-sm"
                        >
                          {sub.title}
                        </Link>
                      ))}
                    </>
                  ) : (
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className={`block px-6 py-4 rounded-[1.5rem] font-black text-sm ${location.pathname === link.path ? 'bg-primary-600 text-white' : 'bg-slate-50 text-slate-700'}`}
                    >
                      {link.title}
                    </Link>
                  )}
                </div>
              ))}

              <div className="pt-6 border-t border-slate-100 mt-auto">
                {user ? (
                  <button onClick={() => { signOut(); setIsOpen(false); }} className="w-full py-4 bg-red-50 text-red-600 rounded-[1.5rem] font-black text-sm flex items-center justify-center space-x-3">
                    <LogOut className="h-5 w-5" /> <span>लॉग-आउट करा</span>
                  </button>
                ) : (
                  <button onClick={() => { signInWithGoogle(); setIsOpen(false); }} className="w-full py-4 bg-primary-600 text-white rounded-[1.5rem] font-black text-sm flex items-center justify-center space-x-3">
                    <LogIn className="h-5 w-5" /> <span>प्रवेश करा (Login)</span>
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
