import React, { Suspense, lazy } from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { AuthProvider } from './context/AuthContext';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const PanchayatInfo = lazy(() => import('./pages/PanchayatInfo'));
const Services = lazy(() => import('./pages/Services'));
const Complaints = lazy(() => import('./pages/Complaints'));
const Notices = lazy(() => import('./pages/Notices'));
const Tenders = lazy(() => import('./pages/Tenders'));

const RTI = lazy(() => import('./pages/RTI'));
const Budget = lazy(() => import('./pages/Budget'));
const Documents = lazy(() => import('./pages/Documents'));
const Transport = lazy(() => import('./pages/Transport'));
const Industries = lazy(() => import('./pages/Industries'));
const PlacesToVisit = lazy(() => import('./pages/PlacesToVisit'));
const Contact = lazy(() => import('./pages/Contact'));
const Gallery = lazy(() => import('./pages/Gallery'));

// V2.0 Module A Pages
const History = lazy(() => import('./pages/History'));
const Directory = lazy(() => import('./pages/Directory'));
const Emergency = lazy(() => import('./pages/Emergency'));
const LowInternetMode = lazy(() => import('./pages/LowInternetMode'));

// V2.0 Module B Pages
const Projects = lazy(() => import('./pages/Projects'));
const GramSabha = lazy(() => import('./pages/GramSabha'));
const Feedback = lazy(() => import('./pages/Feedback'));

// V2.0 Module C Pages
const Agriculture = lazy(() => import('./pages/Agriculture'));
const Jobs = lazy(() => import('./pages/Jobs'));
const WaterWaste = lazy(() => import('./pages/WaterWaste'));

// V2.0 Module D Pages
const CalendarPage = lazy(() => import('./pages/Calendar'));
const VillageMap = lazy(() => import('./pages/VillageMap'));

// Admin Pages
const AdminDashboard = lazy(() => import('./admin/Dashboard'));
const ManageComplaints = lazy(() => import('./admin/ManageComplaints'));
const ManageSchemes = lazy(() => import('./admin/ManageSchemes'));
const ManageNotices = lazy(() => import('./admin/ManageNotices'));
const UploadDocuments = lazy(() => import('./admin/UploadDocuments'));
const GalleryManager = lazy(() => import('./admin/GalleryManager'));
const ManageTransport = lazy(() => import('./admin/ManageTransport'));
const ManagePlaces = lazy(() => import('./admin/ManagePlaces'));
const ManageMembers = lazy(() => import('./admin/ManageMembers'));

// Guard
const AdminRoute = lazy(() => import('./components/AdminRoute'));

function App() {
  return (
    <Router>
      <AuthProvider>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Suspense fallback={
              <div className="flex items-center justify-center min-h-[60vh]">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary-600"></div>
              </div>
            }>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/panchayat-info" element={<PanchayatInfo />} />
                <Route path="/schemes" element={<Services />} />
                <Route path="/services" element={<Services />} />
                <Route path="/complaints" element={<Complaints />} />
                <Route path="/notices" element={<Notices />} />
                <Route path="/tenders" element={<Tenders />} />

                <Route path="/rti" element={<RTI />} />
                <Route path="/budget" element={<Budget />} />
                <Route path="/documents" element={<Documents />} />
                <Route path="/transport" element={<Transport />} />
                <Route path="/industries" element={<Industries />} />
                <Route path="/places-to-visit" element={<PlacesToVisit />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/gallery" element={<Gallery />} />
                
                {/* V2.0 Module A */}
                <Route path="/history" element={<History />} />
                <Route path="/directory" element={<Directory />} />
                <Route path="/emergency" element={<Emergency />} />
                <Route path="/low-internet" element={<LowInternetMode />} />

                {/* V2.0 Module B */}
                <Route path="/projects" element={<Projects />} />
                <Route path="/gram-sabha" element={<GramSabha />} />
                <Route path="/feedback" element={<Feedback />} />

                {/* V2.0 Module C */}
                <Route path="/agriculture" element={<Agriculture />} />
                <Route path="/jobs" element={<Jobs />} />
                <Route path="/water-waste" element={<WaterWaste />} />

                {/* V2.0 Module D */}
                <Route path="/calendar" element={<CalendarPage />} />
                <Route path="/village-map" element={<VillageMap />} />
                
                {/* Admin Routes */}
                <Route path="/admin" element={
                  <AdminRoute>
                    <AdminDashboard />
                  </AdminRoute>
                } />
                <Route path="/admin/complaints" element={
                  <AdminRoute>
                    <ManageComplaints />
                  </AdminRoute>
                } />
                <Route path="/admin/schemes" element={
                  <AdminRoute>
                    <ManageSchemes />
                  </AdminRoute>
                } />
                <Route path="/admin/notices" element={
                  <AdminRoute>
                    <ManageNotices />
                  </AdminRoute>
                } />
                <Route path="/admin/documents" element={
                  <AdminRoute>
                    <UploadDocuments />
                  </AdminRoute>
                } />
                <Route path="/admin/gallery" element={
                  <AdminRoute>
                    <GalleryManager />
                  </AdminRoute>
                } />
                <Route path="/admin/transport" element={
                  <AdminRoute>
                    <ManageTransport />
                  </AdminRoute>
                } />
                <Route path="/admin/places" element={
                  <AdminRoute>
                    <ManagePlaces />
                  </AdminRoute>
                } />
                <Route path="/admin/members" element={
                  <AdminRoute>
                    <ManageMembers />
                  </AdminRoute>
                } />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
