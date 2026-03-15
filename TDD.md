# Technical Design Document (TDD)

Project: **Gram Panchayat Dongargaon Railway Website**

---

# 1. System Architecture

Architecture Type: **Serverless Web Application**

Structure:

```
User Browser
     │
     ▼
React Frontend (Vercel Hosting)
     │
     ▼
Supabase Backend
     │
 ┌───────────────┬───────────────┬───────────────┐
 │ PostgreSQL DB │ Authentication │ Storage      │
 │               │ (Google OAuth) │ (Images/docs)│
 └───────────────┴───────────────┴───────────────┘
```

Explanation:

Frontend

* React application
* Handles UI and user interactions.

Backend

* Supabase PostgreSQL database
* Authentication (Google login)
* File storage for documents and images.

---

# 2. Technology Stack

Frontend

* React
* React Router
* Axios
* Tailwind CSS

Backend

* Supabase

Database

* PostgreSQL (Supabase)

Hosting

* Vercel

Authentication

* Google OAuth (Supabase Auth)

Storage

* Supabase Storage

---

# 3. Frontend Folder Structure

```
src
│
├── components
│   ├── UploadDocuments
│   ├── GalleryManager
│   ├── ManageProjects
│   ├── ManageSabha
│   ├── ManageAgriculture
│   ├── ManageEmergency
│   └── ManageUtility
│
├── pages
│   ├── Home
│   ├── PanchayatInfo
│   ├── Schemes
│   ├── Complaints
│   ├── Services
│   ├── Notices
│   ├── Tenders
│   ├── MeetingMinutes
│   ├── Gallery
│   ├── Budget
│   ├── RTI
│   ├── Transport
│   ├── Industries
│   ├── PlacesToVisit
│   ├── Projects
│   ├── GramSabha
│   ├── Emergency
│   ├── Agriculture
│   ├── Jobs
│   ├── Directory
│   ├── WaterWaste
│   ├── History
│   └── Contact
│
├── components
│   ├── Navbar
│   ├── Footer
│   ├── NoticeCard
│   ├── ComplaintForm
│   ├── SchemeCard
│   └── WhatsAppButton
│
├── services
│   └── supabaseClient.js
│
├── utils
│   └── helpers.js
│
└── App.js
```

---

# 4. Database Design

## Users Table

```
users
------
id
name
email
role
created_at
```

Role values:

* citizen
* admin
* staff

---

## Complaints Table

```
complaints
-----------
id
title
description
name
email
anonymous
status
created_at
updated_at
```

Status values:

* pending
* in_progress
* resolved

---

## Service Requests Table

```
service_requests
----------------
id
user_id
service_type
details
status
created_at
```

Service types:

* birth_certificate
* death_certificate

---

## Notices Table

```
notices
-------
id
title
description
document_url
created_at
```

---

## Schemes Table

```
schemes
-------
id
scheme_name
description
eligibility
documents_required
created_at
```

---

## Gallery Table

```
gallery
-------
id
image_url
title
description
uploaded_at
```

---

## Documents Table

```
documents
---------
id
title
document_url
category
uploaded_at
```

Categories:

* forms
* reports
* resolutions

---

## Panchayat Members Table

```
panchayat_members
-----------------
id
name
position
photo_url
contact
```

---

## Meeting Minutes Table

```
meeting_minutes
---------------
id
title
document_url
date
```

---

## Budget Table

```
budget_reports
--------------
id
title
document_url
year
```

---

## Transport Table

```
transport_info
--------------
id
type
route
time
description
```

Example entries:

Train
Wardha → Ballarshah Passenger
7:30 AM

Train
Ballarshah → Wardha Passenger
8:00 PM

Bus
Warora → Kharwad
Every 45 minutes

---

## Industries Table

```
industries
----------
id
name
distance
description
```

Example:

Coal Mine — 5km
Fluoride Stone Area — 1km

---

## Tourist Places Table

```
tourist_places
--------------
id
name
description
distance
image_url
```

---

# 5. Authentication Design

Using Supabase Auth.

Login Methods:

Google Login
Required for:

* Service requests
* Certificate requests

Public Access:

* View content
* Submit complaints.

---

# 6. File Storage Structure

Supabase Storage Buckets:

```
documents
gallery
notices
meeting_minutes
budget_reports
```

---

# 7. API Interaction

React communicates with Supabase using:

```
supabase.from("table").select()
supabase.from("table").insert()
supabase.from("table").update()
```

Example:

Insert complaint

```
supabase
.from("complaints")
.insert([{title, description, name, anonymous}])
```

Fetch notices

```
supabase
.from("notices")
.select("*")
```

---

# 8. Admin Panel Design

Admin Dashboard sections:

* Complaints Management
* Schemes Management
* Notices Management
* Documents Upload
* Gallery Manager
* Panchayat Members Manager
* Budget Reports Upload
* Transport Info Update
* Tourist Places Manager

Admin operations:

Create
Update
Delete
Publish

---

# 9. Security Rules

Supabase Row Level Security:

Public access:

* Read notices
* Read schemes
* Submit complaints

Authenticated users:

* Create service requests

Admin only:

* Insert / update / delete data.

---

# 10. Deployment Pipeline

Step 1
Develop frontend with React

Step 2
Configure Supabase database

Step 3
Connect frontend to Supabase

Step 4
Deploy frontend to Vercel

Step 5
Connect custom domain.

---

# 11. Performance Considerations

* Lazy loading for images
* Pagination for notices
* CDN via Vercel
* Image compression.

---
