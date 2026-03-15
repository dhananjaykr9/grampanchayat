import { Calendar, Download, FileText } from 'lucide-react';
import React from 'react';

const NoticeCard = ({ notice }) => {
  const { title, date, description, document_url } = notice;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
      <div className="p-5">
        <div className="flex items-center text-xs font-medium text-primary-600 mb-2 uppercase tracking-wider">
          <Calendar className="h-3.5 w-3.5 mr-1" />
          {date}
        </div>
        <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1">{title}</h3>
        <p className="text-gray-500 text-sm mb-4 line-clamp-2">{description}</p>
        
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-50">
          <div className="flex items-center text-xs text-gray-400">
            <FileText className="h-3.5 w-3.5 mr-1" />
            PDF document
          </div>
          <a 
            href={document_url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm font-semibold text-primary-600 hover:text-primary-700"
          >
            <Download className="h-4 w-4 mr-1.5" />
            डाउनलोड करा
          </a>
        </div>
      </div>
    </div>
  );
};

export default NoticeCard;
