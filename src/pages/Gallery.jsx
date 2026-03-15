import { motion } from 'framer-motion';
import { Camera, Image as ImageIcon, Maximize2 } from 'lucide-react';
import React, { useState } from 'react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    { id: 1, title: 'ग्रामपंचायत भवन', category: 'Infrastructure', url: 'https://images.unsplash.com/photo-1590487988256-9ed24133863e?q=80&w=2000&auto=format&fit=crop' },
    { id: 2, title: 'जिल्हा परिषद शाळा', category: 'Education', url: 'https://images.unsplash.com/photo-1503676260728-1c00da07aa5e?q=80&w=2000&auto=format&fit=crop' },
    { id: 3, title: 'गावची मुख्य बाजारपेठ', category: 'Public Spaces', url: 'https://images.unsplash.com/photo-1510674485131-dc88d9809fa0?q=80&w=2000&auto=format&fit=crop' },
    { id: 4, title: 'कृषी प्रदर्शन २०२३', category: 'Events', url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=2000&auto=format&fit=crop' },
    { id: 5, title: 'स्वच्छता अभियान', category: 'Events', url: 'https://images.unsplash.com/photo-1532187863486-abf9d39d6627?q=80&w=2000&auto=format&fit=crop' },
    { id: 6, title: 'रेल्वे गेट परिसर', category: 'Infrastructure', url: 'https://images.unsplash.com/photo-1474487548417-781cb71495f3?q=80&w=2000&auto=format&fit=crop' },
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
              <h1 className="text-4xl md:text-6xl font-black text-white mb-6 uppercase tracking-tight italic italic underline decoration-primary-500/30 underline-offset-12">ग्राम छायाचित्र दालन (Gallery)</h1>
              <p className="text-xl text-primary-300 font-medium italic">डोंगरगाव (रेल्वे) गावातील विकास कामे आणि संस्कृतीची झलक.</p>
            </motion.div>
         </div>
      </div>

      <div className="section-container -mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
           {images.map((img, idx) => (
             <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-white rounded-[3rem] overflow-hidden shadow-2xl border border-slate-50 aspect-[4/5] cursor-pointer"
              onClick={() => setSelectedImage(img)}
             >
                <img 
                  src={img.url} 
                  alt={img.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 filter saturate-50 group-hover:saturate-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                
                <div className="absolute top-8 right-8">
                   <div className="w-12 h-12 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-white border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity scale-75 group-hover:scale-100">
                      <Maximize2 className="h-5 w-5" />
                   </div>
                </div>

                <div className="absolute bottom-10 left-10 right-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                   <div className="inline-block px-4 py-1.5 bg-primary-600 text-white rounded-full text-[10px] font-black uppercase tracking-widest mb-4 italic">
                      {img.category}
                   </div>
                   <h3 className="text-2xl font-black text-white italic tracking-tighter italic">{img.title}</h3>
                </div>
             </motion.div>
           ))}
        </div>

        {/* Info Box */}
        <div className="mt-24 p-12 md:p-20 bg-slate-900 rounded-[4rem] text-white flex flex-col md:flex-row items-center justify-between gap-12 shadow-2xl relative overflow-hidden group">
           <div className="absolute inset-0 bg-primary-600/5 blur-3xl rounded-full translate-x-1/2 pointer-events-none group-hover:scale-110 transition-transform duration-700"></div>
           <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-primary-400">
                 <Camera className="h-8 w-8" />
              </div>
              <div className="text-center md:text-left">
                 <h4 className="text-2xl font-black mb-2 italic tracking-tight italic">छायाचित्र शेअर करा</h4>
                 <p className="text-slate-400 font-medium italic opacity-80">गावातील ऐतिहासिक किंवा विकास कामांचे जुने फोटो असल्यास आम्हाला ईमेल करा.</p>
              </div>
           </div>
           <div className="relative z-10 flex items-center px-10 py-5 bg-white/5 border border-white/10 rounded-2xl font-black text-sm text-primary-400 italic italic">
              gpdongargaon95@gmail.com
           </div>
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-2xl flex items-center justify-center p-4 md:p-10"
          onClick={() => setSelectedImage(null)}
        >
           <div className="relative max-w-6xl w-full h-full flex flex-col items-center justify-center gap-8">
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl border border-white/10 max-h-[70vh]">
                 <img src={selectedImage.url} alt={selectedImage.title} className="w-full h-full object-contain" />
              </div>
              <div className="text-center">
                 <h2 className="text-4xl font-black text-white italic tracking-tight italic mb-2">{selectedImage.title}</h2>
                 <p className="text-primary-400 font-bold uppercase tracking-widest text-sm">{selectedImage.category}</p>
              </div>
              <button className="absolute top-0 right-0 p-4 text-white hover:text-primary-400 transition-colors">
                 <Maximize2 className="h-10 w-10 rotate-45" />
              </button>
           </div>
        </motion.div>
      )}
    </div>
  );
};

export default Gallery;
