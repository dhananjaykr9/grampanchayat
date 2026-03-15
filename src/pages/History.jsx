import { motion } from 'framer-motion';
import { 
  BookOpen, 
  History as HistoryIcon, 
  Landmark, 
  Sparkles 
} from 'lucide-react';
import React from 'react';

const History = () => {
  const events = [
    {
      year: '१८५०',
      title: 'गावाची स्थापना',
      description: 'डोंगरगाव रेल्वे गावाची स्थापना या काळात झाली. येथील प्रमुख वस्ती शेती आणि स्थानिक उद्योगावर आधारित होती.'
    },
    {
      year: '१९२०',
      title: 'रेल्वेचे आगमन',
      description: 'ब्रिटीश काळात वरोरा-बल्हारशाह रेल्वे मार्गाचे काम झाले आणि चिकणी रोड रेल्वे स्थानक कार्यान्वित झाले, ज्यामुळे गावाला नवीन ओळख मिळाली.'
    },
    {
      year: '१९५५',
      title: 'ग्रामपंचायत स्थापना',
      description: 'गावाच्या अधिकृत प्रशासनासाठी स्वतंत्र ग्रामपंचायतीची स्थापना करण्यात आली.'
    },
    {
      year: '२०००',
      title: 'विकास पर्व',
      description: 'गावात शाळा, आरोग्य केंद्र आणि सामाईक पाणी पुरवठा योजनांचे यशस्वी कार्यान्वयन झाले.'
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-10 px-4 sm:px-6 lg:px-8 font-sans pt-32 overflow-hidden">
      <div className="max-w-4xl mx-auto relative">
        
        {/* Background Decorative Elements */}
        <div className="absolute -top-20 -left-40 w-80 h-80 bg-primary-100 rounded-full blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute top-40 -right-40 w-96 h-96 bg-amber-100 rounded-full blur-3xl opacity-30"></div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20 relative z-10"
        >
          <div className="inline-flex items-center space-x-3 bg-white px-6 py-2 rounded-full shadow-sm border border-slate-100 mb-6">
            <HistoryIcon className="h-4 w-4 text-primary-600" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">ग्राम वारसा</span>
          </div>
          <h1 className="text-6xl font-black text-slate-900 italic tracking-normal mb-6">आपला <span className="text-primary-600">इतिहास</span></h1>
          <p className="text-slate-500 font-bold max-w-2xl mx-auto italic leading-relaxed">
            डोंगरगाव (रेल्वे) गावाची गौरवशाली परंपरा, सांस्कृतिक वारसा आणि विकासाच्या प्रवासातील महत्त्वाचे टप्पे.
          </p>
        </motion.div>

        {/* Timeline Section */}
        <div className="relative border-l-4 border-slate-200 ml-6 md:ml-32 space-y-16 py-10">
          {events.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative pl-12"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[30px] top-0 w-14 h-14 bg-white rounded-2xl shadow-xl flex items-center justify-center border-4 border-slate-50 group">
                <div className="w-4 h-4 bg-primary-600 rounded-full group-hover:scale-150 transition-transform"></div>
              </div>

              {/* Year Label */}
              <div className="absolute -left-32 top-3 hidden md:block">
                <span className="text-3xl font-black text-slate-900 italic opacity-20">{event.year}</span>
              </div>

              <div className="bg-white p-10 rounded-[3rem] shadow-2xl shadow-slate-200/50 border border-slate-50 relative group hover:scale-[1.02] transition-all">
                <div className="md:hidden text-xl font-black text-primary-600 mb-4">{event.year}</div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 italic tracking-normal group-hover:text-primary-600 transition-colors uppercase">{event.title}</h3>
                <p className="text-slate-500 font-medium italic leading-relaxed">
                  {event.description}
                </p>
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center -z-10 group-hover:bg-primary-50 transition-colors">
                   <Sparkles className="h-8 w-8 text-slate-200 group-hover:text-primary-200" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Landmarks / Cultural Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          <div className="bg-slate-900 p-12 rounded-[4rem] text-white overflow-hidden relative group">
             <div className="absolute top-0 right-0 p-8">
                <Landmark className="h-12 w-12 text-white/10 group-hover:text-primary-400/20 transition-colors" />
             </div>
             <h4 className="text-2xl font-black mb-6 italic tracking-normal">ऐतिहासिक खुणा</h4>
             <ul className="space-y-4 text-slate-400 font-medium italic">
                <li>• जुने रेल्वे निवासस्थाने</li>
                <li>• मारुती मंदिर संस्थान</li>
                <li>• ग्रामपंचातीची जुनी वास्तू</li>
                <li>• ब्रिटिशकालीन पाणी टाके</li>
             </ul>
          </div>

          <div className="bg-primary-600 p-12 rounded-[4rem] text-white relative group">
             <div className="absolute top-0 right-0 p-8">
                <BookOpen className="h-12 w-12 text-white/10 group-hover:text-white/20 transition-colors" />
             </div>
             <h4 className="text-2xl font-black mb-6 italic tracking-normal">लोकसंस्कृती</h4>
             <p className="text-primary-50 font-medium italic leading-relaxed">
               गावात सर्व धर्मीय सण उत्साहाने साजरे केले जातात. विशेषतः पोळा आणि दिवाळी सणांना पारंपारिक महत्त्व आहे. रेल्वे कर्मचारी आणि ग्रामस्थ यांच्यातील समन्वयामुळे गावाला एक वैविध्यपूर्ण संस्कृती लाभली आहे.
             </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default History;
