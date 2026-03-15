import { motion } from 'framer-motion';
import { 
  Building2, 
  CheckCircle2, 
  ClipboardCheck, 
  FileText, 
  HelpCircle, 
  Info 
} from 'lucide-react';
import React from 'react';

const SchemeCard = ({ scheme }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className="bg-white rounded-[3rem] shadow-xl border border-slate-50 overflow-hidden flex flex-col group hover:shadow-2xl hover:border-primary-100 transition-all duration-500"
    >
      <div className="p-10 md:p-12 flex-grow">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
          <span className="text-[10px] font-black text-primary-600 uppercase tracking-widest italic">शासन निर्णय (GR) अंतर्गत</span>
        </div>
        
        <h3 className="text-3xl font-black text-slate-900 mb-6 group-hover:text-primary-600 transition-colors leading-tight italic tracking-tighter">
          {scheme.scheme_name}
        </h3>
        
        <p className="text-slate-500 font-medium leading-relaxed mb-10 text-lg py-6 border-y border-slate-50 border-dotted group-hover:border-primary-100 transition-colors">
          {scheme.description}
        </p>

        <div className="space-y-8">
          <div className="flex items-start">
            <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center mr-6 shrink-0 group-hover:bg-primary-600 group-hover:text-white transition-all shadow-sm">
              <ClipboardCheck className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-2 flex items-center">
                पात्रता (Eligibility) <HelpCircle className="h-3 w-3 ml-2 opacity-30" />
              </h4>
              <p className="text-slate-700 font-bold">{scheme.eligibility}</p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="w-12 h-12 bg-emerald-50 rounded-xl flex items-center justify-center mr-6 shrink-0 group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-sm">
              <FileText className="h-6 w-6" />
            </div>
            <div>
              <h4 className="text-sm font-black text-slate-400 uppercase tracking-widest mb-2 flex items-center">
                कागदपत्रे (Documents) <Info className="h-3 w-3 ml-2 opacity-30" />
              </h4>
              <p className="text-slate-600 font-medium text-sm leading-relaxed italic">{scheme.documents_required}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="px-10 py-8 bg-slate-50 border-t border-slate-100 flex items-center justify-between group-hover:bg-primary-50 transition-colors mt-auto">
        <div className="flex items-center text-[10px] font-black text-primary-600 uppercase tracking-widest">
          <CheckCircle2 className="h-4 w-4 mr-2" />
          नोंदणी सुरू आहे
        </div>
        <button className="px-6 py-3 bg-white text-slate-900 rounded-xl font-black text-[10px] uppercase tracking-widest border border-slate-200 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-all shadow-sm">
          अर्ज करा (Apply)
        </button>
      </div>
    </motion.div>
  );
};

export default SchemeCard;
