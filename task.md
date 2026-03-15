# Gram Panchayat Dongargaon Railway Website

## Phase 1: Project Setup
- [x] Scaffold React app using Vite (with Tailwind CSS)
- [x] Install dependencies: react-router-dom, @supabase/supabase-js, axios, react-icons
- [x] Set up Supabase client (supabaseClient.js)
- [x] Set up .env file for Supabase credentials
- [x] Configure React Router in App.jsx
- [x] Set up Tailwind CSS config

## Phase 2: Core Components
- [x] Navbar (with Marathi + English labels, Google login button)
- [x] Footer
- [x] NoticeCard component
- [x] SchemeCard component
- [x] ComplaintForm component
- [x] ProtectedRoute (for Google Auth guarded pages)

## Phase 3: Public Pages (14 pages)
- [x] Home Page (hero, announcements, quick links, notices)
- [x] Panchayat Info (sarpanch, members, contact, map)
- [x] Government Schemes
- [x] Online Services (birth/death certificate request, Google login required)
- [x] Complaint / Grievance System (submit + track)
- [x] Notices & Announcements (view + download)
- [x] Tender Notices
- [x] Meeting Minutes
- [x] RTI Information
- [x] Budget & Financial Transparency
- [x] Document Download Section
- [x] Village Transportation Information (train + bus)
- [x] Nearby Industries
- [x] Places to Visit (tourist spots)
- [x] Contact Page

## Phase 4: Admin Panel
- [/] Admin Dashboard layout
- [/] Manage Complaints (view/update status)
- [ ] Manage Schemes (CRUD)
- [ ] Manage Notices (CRUD + file upload)
- [ ] Upload Documents
- [ ] Gallery Manager

## Phase 5: Authentication
- [ ] Google OAuth via Supabase Auth
- [ ] Auth context/hook (useAuth)
- [ ] Protected routes for service pages
- [ ] Admin-only route guard

## Phase 6: Supabase DB Setup
- [ ] SQL schema for all tables (complaints, notices, schemes, service_requests, etc.)
- [ ] Storage buckets configuration
- [ ] Row Level Security policies

## Phase 7: Styling & Polish
- [ ] Marathi + English bilingual UI labels
- [ ] Responsive design (mobile-first)
- [ ] Lazy loading for images
- [ ] Page transitions / animations

## Phase 8: Verification
- [ ] All pages render correctly in browser
- [ ] Navigation works between all routes
- [ ] Complaint form submits and shows success
- [ ] Google login flow works
- [ ] Admin panel accessible only to admins
- [ ] Documents/notices downloadable
