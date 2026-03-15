import { motion } from 'framer-motion';
import { 
  Camera, 
  CheckCircle2, 
  ImageIcon, 
  ImagePlus, 
  Trash2, 
  X 
} from 'lucide-react';
import React, { useState } from 'react';

const GalleryManager = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [images, setImages] = useState([
    { id: 1, title: 'ग्रामपंचायत भवन', category: 'Infrastructure', url: 'https://images.unsplash.com/photo-1590487988256-9ed24133863e?q=80&w=2000&auto=format&fit=crop' },
    { id: 2, title: 'जिल्हा परिषद शाळा', category: 'Education', url: 'https://images.unsplash.com/photo-1503676260728-1c00da07aa5e?q=80&w=2000&auto=format&fit=crop' },
  ]);

  const handleDelete = (id) => {
    if(window.confirm('हे छायाचित्र हटवायचे आहे का?')) {
      setImages(images.filter(img => img.id !== id));
    }
  };

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
                 <Camera className="h-6 w-6" />
              </div>
              <h1 className="text-4xl font-black text-slate-900 italic tracking-tighter italic italic underline decoration-primary-500/30 underline-offset-12">गॅलरी व्यवस्थापन</h1>
            </div>
            <p className="text-slate-500 font-bold uppercase text-[10px] tracking-[0.2em] ml-16 italic mt-4">गावातील छायाचित्रांचे दालन अद्ययावत करा.</p>
          </motion.div>
          
          <button 
            onClick={() => setShowAddModal(true)}
            className="flex items-center px-10 py-5 bg-primary-600 text-white rounded-[1.5rem] font-black shadow-2xl shadow-primary-500/30 hover:bg-primary-700 transition-all group"
          >
            <ImagePlus className="h-5 w-5 mr-3 group-hover:scale-110 transition-transform" />
            नवीन फोटो जोडा
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
           {images.map((img, i) => (
             <motion.div 
               key={img.id}
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: i * 0.05 }}
               className="bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-50 relative group aspect-square lg:aspect-auto h-[400px]"
             >
                <img src={img.url} alt={img.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity"></div>
                
                <div className="absolute top-6 right-6 flex gap-2">
                   <button 
                     onClick={() => handleDelete(img.id)}
                     className="w-10 h-10 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center text-white border border-white/20 hover:bg-red-600 hover:border-red-600 transition-all"
                   >
                      <Trash2 className="h-4 w-4" />
                   </button>
                </div>

                <div className="absolute bottom-8 left-8 right-8">
                   <div className="text-[10px] font-black uppercase tracking-widest text-primary-400 mb-1 italic leading-none">{img.category}</div>
                   <h3 className="text-lg font-black text-white italic tracking-tight italic leading-tight">{img.title}</h3>
                </div>
             </motion.div>
           ))}

           {/* Add Placeholder */}
           <div 
             onClick={() => setShowAddModal(true)}
             className="bg-slate-50 rounded-[2.5rem] border-4 border-dashed border-slate-200 flex flex-col items-center justify-center text-slate-300 hover:border-primary-200 hover:text-primary-600 transition-all cursor-pointer group"
           >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform mb-4">
                 <ImagePlus className="h-7 w-7" />
              </div>
              <span className="font-black text-xs uppercase tracking-widest italic">नवीन फोटो</span>
           </div>
        </div>
      </div>

      {/* Add Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-[100] bg-slate-950/90 backdrop-blur-2xl flex items-center justify-center p-4">
           <motion.div 
             initial={{ opacity: 0, scale: 0.9 }}
             animate={{ opacity: 1, scale: 1 }}
             className="bg-white rounded-[4rem] w-full max-w-2xl overflow-hidden shadow-2xl border border-white/20"
           >
              <div className="p-10 md:p-14 bg-slate-950 text-white flex items-center justify-between">
                 <h2 className="text-3xl font-black italic tracking-tighter italic">नवीन फोटो अपलोड करा</h2>
                 <button onClick={() => setShowAddModal(false)} className="w-12 h-12 rounded-2xl hover:bg-white/10 flex items-center justify-center transition-colors">
                    <X className="h-6 w-6" />
                 </button>
              </div>
              <div className="p-10 md:p-14 space-y-10">
                 {/* Upload placeholder */}
                 <div className="w-full aspect-video bg-slate-50 border-4 border-dashed border-slate-100 rounded-[2.5rem] flex flex-col items-center justify-center text-center group cursor-pointer hover:border-primary-200">
                    <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-4 text-slate-200 group-hover:text-primary-600 transition-all">
                       <ImageIcon className="h-8 w-8" />
                    </div>
                    <p className="text-slate-400 font-bold italic text-sm">फोटो येथे ओढा किंवा निवडा</p>
                 </div>

                 <div className="space-y-3">
                    <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-4 italic">फोटोचे नाव (Title)</label>
                    <input type="text" className="w-full bg-slate-50 border-none rounded-2xl p-6 text-lg font-bold outline-none focus:ring-4 focus:ring-primary-100 transition-all" />
                 </div>

                 <button className="w-full py-8 bg-slate-900 text-white rounded-[2.5rem] font-black text-lg uppercase tracking-[0.2em] shadow-2xl hover:bg-primary-600 transition-all flex items-center justify-center group">
                    अपलोड करा (Upload) <CheckCircle2 className="ml-4 h-6 w-6 group-hover:scale-110 transition-transform" />
                 </button>
              </div>
           </motion.div>
        </div>
      )}
    </div>
  );
};

export default GalleryManager;
