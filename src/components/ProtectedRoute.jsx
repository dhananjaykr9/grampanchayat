import { AlertCircle, Lock } from 'lucide-react';
import React from 'react';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user, loading, signInWithGoogle } = useAuth();

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <div className="bg-white rounded-[2.5rem] shadow-xl p-12 border border-blue-50">
          <div className="bg-blue-50 w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-8 text-blue-600">
            <Lock className="h-10 w-10" />
          </div>
          <h2 className="text-3xl font-black text-gray-900 mb-4">प्रवेश आवश्यक आहे</h2>
          <p className="text-gray-500 mb-10 text-lg max-w-md mx-auto">
            प्रमाणपत्रे किंवा ऑनलाईन सेवांसाठी अर्ज करण्यासाठी तुम्हाला तुमच्या गुगल (Google) खात्याने लॉग-इन करणे आवश्यक आहे.
          </p>
          <button 
            onClick={signInWithGoogle}
            className="px-10 py-4 bg-primary-600 text-white rounded-2xl font-black hover:bg-primary-700 transition-all shadow-xl shadow-primary-600/20 flex items-center justify-center mx-auto"
          >
            Google ने प्रवेश करा
          </button>
          
          <div className="mt-12 flex items-center justify-center p-4 bg-amber-50 rounded-2xl border border-amber-100/50 text-amber-800 text-sm max-w-sm mx-auto">
            <AlertCircle className="h-4 w-4 mr-2 shrink-0" />
            तुमचा डेटा सुरक्षित ठेवण्यासाठी हे बंधनकारक आहे.
          </div>
        </div>
      </div>
    );
  }

  return children;
};

export default ProtectedRoute;
