# Gram Panchayat Dongargaon Railway Website — Implementation Plan

A full-stack web portal for the Gram Panchayat of Dongargaon Railway village (Warora Taluka, Chandrapur District, Maharashtra). The portal provides public information, government schemes, complaint submission, online service requests, and a staff/admin panel.

## User Review Required

> [!IMPORTANT]
> **Supabase credentials needed**: You will need to create a [Supabase](https://supabase.com) project and provide the `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY` before the app can connect to a live database. A `.env.example` file will be created with placeholder values.

> [!IMPORTANT]
> **Google OAuth setup**: Enable Google provider in your Supabase project's Auth settings and add the OAuth redirect URL. This is required for the Online Services section (birth/death certificate requests).

> [!NOTE]
> The app will work in a **demo/static mode** even without Supabase credentials — all pages render with mock data. Live features (complaints, notices, service requests) require a configured Supabase project.

---

## Proposed Changes

### Project Scaffolding

#### [NEW] React + Vite project in `D:\VNIT\grampanchayat`
- Scaffold with `npx create-vite@latest . --template react`
- Install: `react-router-dom`, `@supabase/supabase-js`, `react-icons`, `react-hot-toast`
- Configure **Tailwind CSS v3**

---

### Configuration & Services

#### [NEW] `.env.example`
Placeholder file showing required Supabase environment variables.

#### [NEW] `src/services/supabaseClient.js`
Supabase client singleton initialized from `VITE_SUPABASE_URL` and `VITE_SUPABASE_ANON_KEY`.

#### [NEW] `src/context/AuthContext.jsx`
React context providing `user`, `session`, `loading`, `signInWithGoogle()`, `signOut()` using Supabase Auth.

#### [NEW] `src/utils/helpers.js`
Date formatting, status badge helpers, text truncation, Marathi/English label map.

---

### Core Components

#### [NEW] `src/components/Navbar.jsx`
- Site logo + village name (Marathi)
- Navigation links to all sections
- Google Login / Logout button
- Mobile hamburger menu

#### [NEW] `src/components/Footer.jsx`
- Panchayat contact info
- Quick links
- Copyright

#### [NEW] `src/components/NoticeCard.jsx`
Card for displaying a notice with title, date, and download link.

#### [NEW] `src/components/SchemeCard.jsx`
Card showing scheme name, eligibility, documents, and application info.

#### [NEW] `src/components/ComplaintForm.jsx`
Form with: title, description, optional name/email, anonymous toggle.

#### [NEW] `src/components/ProtectedRoute.jsx`
Redirects unauthenticated users to login prompt for service request pages.

#### [NEW] `src/components/AdminRoute.jsx`
Restricts admin panel routes to users with `role = 'admin'`.

---

### Public Pages (15 pages)

#### [NEW] `src/pages/Home.jsx`
Hero section, village intro, latest 3 notices, quick-link cards to all sections.

#### [NEW] `src/pages/PanchayatInfo.jsx`
Sarpanch details, member cards (photo, role, contact), office address, embedded map.

#### [NEW] `src/pages/Schemes.jsx`
Fetches all schemes from Supabase, renders `<SchemeCard>` list.

#### [NEW] `src/pages/Services.jsx`
Birth/Death Certificate request form — requires Google login. Submits to `service_requests` table.

#### [NEW] `src/pages/Complaints.jsx`
Tabbed: Submit complaint (using `<ComplaintForm>`) + Track status (by complaint ID).

#### [NEW] `src/pages/Notices.jsx`
Paginated list of notices with download links. Fetches from `notices` table.

#### [NEW] `src/pages/Tenders.jsx`
List of tender notices with documents and deadlines (static or from Supabase).

#### [NEW] `src/pages/MeetingMinutes.jsx`
List of Gram Sabha meeting records with download links.

#### [NEW] `src/pages/RTI.jsx`
RTI officer name, contact, application procedure, downloadable forms.

#### [NEW] `src/pages/Budget.jsx`
Budget reports by year with downloadable PDFs.

#### [NEW] `src/pages/Documents.jsx`
Categorized documents (forms, reports, resolutions) with download links.

#### [NEW] `src/pages/Transport.jsx`
Train schedule table (Wardha↔Ballarshah via Chikni Road) + bus route (Warora–Kharwad, every 45 min).

#### [NEW] `src/pages/Industries.jsx`
Cards for Coal Mine (~5 km) and Fluoride Stone Area (~1 km) with info.

#### [NEW] `src/pages/PlacesToVisit.jsx`
Grid of tourist/cultural places with name, description, distance, photo.

#### [NEW] `src/pages/Contact.jsx`
Panchayat contact form, office details, Google Maps embed.

---

### Admin Panel

#### [NEW] `src/admin/Dashboard.jsx`
Summary cards: total complaints, open complaints, notices, documents. Sidebar nav.

#### [NEW] `src/admin/ManageComplaints.jsx`
Table of all complaints, status update dropdown (Pending/In Progress/Resolved), bulk filter.

#### [NEW] `src/admin/ManageSchemes.jsx`
Add/Edit/Delete scheme records.

#### [NEW] `src/admin/ManageNotices.jsx`
Post/Edit/Delete notices, upload document to Supabase Storage.

#### [NEW] `src/admin/UploadDocuments.jsx`
Upload categorized documents (forms, reports, resolutions) to Supabase Storage.

#### [NEW] `src/admin/GalleryManager.jsx`
Upload/delete gallery images.

---

### Routing

#### [MODIFY] `src/App.jsx`
React Router v6 routes for all 15 public pages + admin routes. Wraps app in `AuthProvider`.

---

### Database Schema

#### [NEW] `supabase/schema.sql`
Complete SQL file for all 12 tables:
- `users`, `complaints`, `service_requests`, `notices`, `schemes`
- `gallery`, `documents`, `panchayat_members`, `meeting_minutes`
- `budget_reports`, `transport_info`, `industries`, `tourist_places`

Includes Row Level Security (RLS) policies for public read, authenticated insert, and admin-only write.

---

## Verification Plan

### Automated / Dev Server Tests
```
# 1. Start the dev server
cd D:\VNIT\grampanchayat
npm run dev
```
Open browser at `http://localhost:5173` — all pages should render without errors.

### Browser Navigation Test (via browser subagent)
The following routes will be verified in the browser:
- `/` — Home page loads with hero + notice section
- `/panchayat-info` — Members section renders
- `/complaints` — Tab switching works, form submits
- `/transport` — Train schedule table renders
- `/industries` — Industry cards render
- `/admin` — Redirects non-admin users

### Manual Verification Steps (for you to test)
1. Open `http://localhost:5173` — confirm the Marathi title and Hero section appear
2. Click "Online Services" in navbar → confirm it prompts for Google login
3. Submit a test complaint → confirm success toast appears
4. Navigate to `/admin` → confirm it redirects non-logged-in users
5. After setting up Supabase credentials, confirm data appears on Notices/Schemes pages
