import { AlertCircle, ShieldAlert } from 'lucide-react';
import React from 'react';
import { useAuth } from '../context/AuthContext';

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();

  // In a real app, you'd check a metadata field like user.user_metadata.role === 'admin'
  // For this demo, let's assume specific email is admin or just allow if logged in for now
  const isAdmin = user && (user.email === 'gpdongargaon95@gmail.com' || user.email?.includes('admin'));

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (!isAdmin) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <div className="bg-white rounded-[2.5rem] shadow-xl p-12 border border-red-50">
          <div className="bg-red-50 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-8 text-red-600">
            <ShieldAlert className="h-10 w-10" />
          </div>
          <h2 className="text-3xl font-black text-gray-900 mb-4">प्रवेश नाकारला (Access Denied)</h2>
          <p className="text-gray-500 mb-10 text-lg max-w-sm mx-auto">
            हा विभाग फक्त ग्रामपंचायत प्रशासकांसाठी (Admin) राखीव आहे.
          </p>
          <div className="mt-8 p-4 bg-gray-50 rounded-2xl border border-gray-100 text-gray-400 text-sm">
            कृपया अधिकृत ईमेल आयडीने लॉग-इन करा.
          </div>
        </div>
      </div>
    );
  }

  return children;
};

export default AdminRoute;
