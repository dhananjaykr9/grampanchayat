import { motion } from 'framer-motion';
import { 
  Building2, 
  Hospital, 
  Map as MapIcon, 
  School, 
  Search, 
  ShoppingBag, 
  Stethoscope 
} from 'lucide-react';
import React, { useState } from 'react';

const Directory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const originalCategories = [
    {
      title: 'शिक्षण संस्था (Schools)',
      icon: School,
      items: [
        { name: 'जिल्हा परिषद प्राथमिक शाळा', contact: 'Dongargaon Railway', type: 'School' },
        { name: 'अंगणवाडी केंद्र १', contact: 'Near Temple', type: 'Anganwadi' },
        { name: 'अंगणवाडी केंद्र २', contact: 'Panchayat Area', type: 'Anganwadi' }
      ]
    },
    {
      title: 'आरोग्य सेवा (Health Centers)',
      icon: Hospital,
      items: [
        { name: 'उप-आरोग्य केंद्र', contact: '९८७६५ ४३२१०', type: 'Govt Health' },
        { name: 'खाजगी दवाखाना १', contact: '९०१२३ ४५६७८', type: 'Clinic' }
      ]
    },
    {
      title: 'धार्मिक स्थळे (Temples)',
      icon: Building2,
      items: [
        { name: 'हनुमान मंदिर', contact: 'Main Square', type: 'Temple' },
        { name: 'विठ्ठल मंदिर', contact: 'Old Ward', type: 'Temple' },
        { name: 'दुर्गा माता मंदिर', contact: 'Station Road', type: 'Temple' }
      ]
    },
    {
      title: 'बाजार आणि दुकाने (Shops)',
      icon: ShoppingBag,
      items: [
        { name: 'किराणा स्टोअर्स', contact: 'Main Market', type: 'Shop' },
        { name: 'औषध दुकान (Pharmacy)', contact: '९४२२१ २३४५६', type: 'Medical' },
        { name: 'दुध डेअरी', contact: 'Panchayat Road', type: 'Shop' }
      ]
    }
  ];

  const filteredCategories = originalCategories.map(cat => ({
    ...cat,
    items: cat.items.filter(item => 
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.type.toLowerCase().includes(searchTerm.toLowerCase())
    )
  })).filter(cat => cat.items.length > 0);

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
                 <Building2 className="h-6 w-6" />
              </div>
              <h1 className="text-4xl font-black text-slate-900 italic tracking-normal">गावाची <span className="text-primary-600">डिरेक्टरी</span></h1>
            </div>
            <p className="text-slate-500 font-bold uppercase text-[10px] tracking-[0.2em] ml-16 italic">शाळा, रुग्णालये, मंदिरे आणि स्थानिक सेवांची सूची.</p>
          </motion.div>
          
          <div className="relative w-full md:w-96">
             <Search className="absolute left-6 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-300" />
             <input 
                type="text" 
                placeholder="नाव किंवा प्रकार शोधा..." 
                className="w-full bg-white border border-slate-100 rounded-[1.5rem] py-4 pl-16 pr-8 outline-none focus:ring-4 focus:ring-primary-50 transition-all font-bold text-sm shadow-sm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
             />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {filteredCategories.map((category, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white rounded-[4rem] shadow-2xl border border-slate-50 overflow-hidden"
            >
              <div className="p-10 border-b border-slate-50 flex items-center justify-between bg-slate-50/20">
                 <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary-600 rounded-2xl text-white shadow-lg shadow-primary-500/20">
                       <category.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 italic tracking-normal">{category.title}</h3>
                 </div>
                 <span className="text-[10px] font-black text-slate-300 uppercase tracking-widest">{category.items.length} एकूण</span>
              </div>
              
              <div className="p-10 space-y-6">
                {category.items.map((item, i) => (
                  <div key={i} className="flex items-center justify-between group">
                    <div className="flex items-center space-x-5">
                       <div className="w-2 h-10 bg-slate-50 rounded-full group-hover:bg-primary-600 transition-colors"></div>
                       <div>
                          <div className="text-lg font-black text-slate-800 group-hover:text-primary-600 transition-colors italic tracking-normal">{item.name}</div>
                          <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1 italic">{item.type}</div>
                       </div>
                    </div>
                    <div className="text-xs font-black text-slate-400 group-hover:text-slate-900 transition-colors italic">{item.contact}</div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-40">
             <div className="bg-slate-100 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
                <Search className="h-10 w-10 text-slate-300" />
             </div>
             <h2 className="text-2xl font-black text-slate-300 italic">कोणतेही निकाल आढळले नाहीत.</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default Directory;
