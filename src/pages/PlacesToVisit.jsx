import { motion } from 'framer-motion';
import { 
  Camera, 
  ChevronRight, 
  Instagram, 
  MapPin, 
  Navigation, 
  Palmtree, 
  Sun, 
  Tent 
} from 'lucide-react';
import React from 'react';

const PlacesToVisit = () => {
  const places = [
    {
      name: 'वरोरा नगरी (Warora)',
      distance: '१० किमी',
      desc: 'बाबाजानी आमटे यांचे कर्मभूमी आणि ऐतिहासिक व्यापारासाठी प्रसिद्ध असलेले जवळचे मोठे शहर.',
      icon: BuildingIcon,
      image: 'https://images.unsplash.com/photo-1548013146-72479768bbaa?q=80&w=2070&auto=format&fit=crop'
    },
    {
      name: 'स्थानिक धार्मिक स्थळे',
      distance: '१ किमी',
      desc: 'गावातील ऐतिहासिक मंदिरे आणि शांत परिसर जो ग्रामस्थांचे श्रद्धास्थान आहे.',
      icon: Palmtree,
      image: 'https://images.unsplash.com/photo-1626245914945-8f6946011400?q=80&w=2070&auto=format&fit=crop'
    },
    {
      name: 'निसर्गरम्य परिसर',
      distance: '५०० मी',
      desc: 'गावाबाहेरील शेती आणि रेल्वे मार्गाच्या सानिध्यातील हिरवागार निसर्ग पर्यटनासाठी उत्तम.',
      icon: Sun,
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2070&auto=format&fit=crop'
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen pb-24 text-slate-900 font-sans">
      {/* Header */}
      <div className="bg-slate-900 pt-48 pb-32 px-4 relative overflow-hidden">
         <div className="section-container relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight italic italic underline decoration-primary-500/30 underline-offset-12">पर्यटन आणि प्रेक्षणीय स्थळे (Tourism)</h1>
              <p className="text-xl text-primary-300 font-medium">डोंगरगाव (रेल्वे) आणि परिसरातील भेट देण्यासारखी महत्वाची ठिकाणे.</p>
            </motion.div>
         </div>
      </div>

      <div className="section-container -mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {places.map((place, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-[4rem] shadow-2xl border border-slate-50 overflow-hidden flex flex-col group hover:border-primary-200 transition-all duration-500"
            >
               <div className="relative h-80 overflow-hidden shrink-0">
                  <img src={place.image} alt={place.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter group-hover:saturate-100 saturate-50 brightness-90 group-hover:brightness-100" />
                  <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors"></div>
                  <div className="absolute top-8 right-8">
                     <div className="w-14 h-14 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white border border-white/20">
                        <place.icon className="h-7 w-7" />
                     </div>
                  </div>
                  <div className="absolute bottom-8 left-8">
                     <div className="px-5 py-2 bg-white rounded-full text-[10px] font-black uppercase tracking-widest text-slate-900 shadow-xl italic">
                        Distance: {place.distance}
                     </div>
                  </div>
               </div>

               <div className="p-10 md:p-12 flex-grow space-y-6 flex flex-col">
                  <h3 className="text-2xl font-black text-slate-900 italic tracking-tighter italic leading-tight group-hover:text-primary-600 transition-colors">
                     {place.name}
                  </h3>
                  <p className="text-slate-500 font-medium leading-relaxed italic text-base flex-grow">
                     {place.desc}
                  </p>
                  
                  <div className="pt-8 border-t border-slate-50 flex items-center justify-between mt-auto">
                     <button className="flex items-center text-[10px] font-black text-primary-600 uppercase tracking-widest group-hover:translate-x-2 transition-transform">
                        मार्ग पहा (Navigate) <Navigation className="ml-2 h-4 w-4" />
                     </button>
                     <div className="flex space-x-4 opacity-30">
                        <Camera className="h-4 w-4" />
                        <Instagram className="h-4 w-4" />
                     </div>
                  </div>
               </div>
            </motion.div>
          ))}
        </div>

        {/* Explore more */}
        <div className="mt-24 p-12 md:p-20 bg-white rounded-[4rem] shadow-2xl border border-slate-50 flex flex-col lg:flex-row items-center justify-between gap-12 relative overflow-hidden group">
           <div className="absolute top-0 right-0 w-64 h-64 bg-primary-50 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none group-hover:bg-primary-100 transition-colors duration-700"></div>
           <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
              <div className="w-20 h-20 bg-primary-600 rounded-[2rem] flex items-center justify-center text-white shadow-2xl shadow-primary-500/30">
                 <Tent className="h-10 w-10" />
              </div>
              <div className="text-center md:text-left">
                 <h4 className="text-2xl font-black text-slate-900 mb-2 italic tracking-tight italic">नवीन ठिकाणे सुचवा</h4>
                 <p className="text-slate-400 font-medium italic">गावातील किंवा जवळच्या प्रेक्षणीय स्थळांची माहिती आम्हाला द्या जेणेकरून आम्ही येथे जोडू शकू.</p>
              </div>
           </div>
           <button className="relative z-10 px-10 py-5 bg-slate-900 text-white rounded-2xl font-black text-sm uppercase tracking-widest hover:bg-primary-600 transition-all shadow-xl shadow-slate-900/10 flex items-center group">
             फॉर्म भरा <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
           </button>
        </div>
      </div>
    </div>
  );
};

export default PlacesToVisit;

const BuildingIcon = ({ className, ...props }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2.5" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className} 
    {...props}
  >
    <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"/>
    <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"/>
    <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"/>
    <path d="M10 6h4"/>
    <path d="M10 10h4"/>
    <path d="M10 14h4"/>
    <path d="M10 18h4"/>
  </svg>
);
