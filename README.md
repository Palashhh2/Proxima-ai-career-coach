# AI Career Coach 🚀

> A comprehensive **Full Stack AI Career Coach** application that provides personalized career guidance using advanced AI technologies.
> 
## ✨ Features

### 🤖 AI-Powered Tools
- **AI Resume Generator** - Create personalized, professional rseume tailored to specific job roles and companies
- **Career Planning Assistant** - Get AI-generated tests , intrests and skill  analysis

### 👤 User Management
- **Secure Authentication** - OAuth and email/password login with Clerk
- **Progressive Onboarding** - Step-by-step profile setup for personalized experience
- **User Dashboard** - Comprehensive overview of career progress and generated documents

### 📊 Career Tracking
- **Progress Monitoring** - Track career development milestones and achievements
- **Skills Assessment** - Analyze current skills and identify improvement areas

---

## 🛠️ Tech Stack

### Frontend
- **[Next.js 14](https://nextjs.org/)** - React framework with App Router
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[ShadCN UI](https://ui.shadcn.com/)** - Modern component library built on Radix UI

### Backend
- **[Next.js API Routes](https://nextjs.org/docs/api-routes/introduction)** - Server-side API endpoints
- **[Prisma ORM](https://www.prisma.io/)** - Type-safe database toolkit
- **[Neon DB](https://neon.tech/)** - Serverless PostgreSQL database
- **[Inngest](https://www.inngest.com/)** - Background job processing and workflow orchestration

### AI & Authentication
- **[Google Gemini AI](https://ai.google.dev/)** - Advanced AI model for content generation
- **[Clerk](https://clerk.com/)** - Authentication and user management service

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm package manager
- PostgreSQL database (Neon DB account)
- Clerk account for authentication
- Google AI Studio account for Gemini API

## 🗄️ Database Schema

The application uses Prisma ORM with PostgreSQL. Key models include:

### User Model
```prisma
model User {
  id            String   @id @default(cuid())
  clerkId       String   @unique
  email         String   @unique
  firstName     String?
  lastName      String?
  profileImage  String?
  onboarded     Boolean  @default(false)
  currentRole   String?
  experience    String?
  skills        String[]
  careerGoals   String?
  createdAt     DateTime @default(now())
  updatedAt     DateTime @updatedAt
  
  @@map("users")
}
```
---

## 🤖 AI Integration

### Gemini AI Implementation

The application leverages Google's Gemini AI for various features:

### AI Features

1. **Resume Generation** - Personalized based on user profile and job requirements
2. **Career Advice** - Contextual guidance based on user's current situation
3. **Skill Analysis** - AI-powered skill gap identification
4. **Interview Preparation** - Customized interview questions and answers

---
## 🎨 UI Components

Built with ShadCN UI components for a modern, accessible interface:

### Key Components
- **Button** - Various button styles and sizes
- **Input** - Form input fields with validation
- **Card** - Content containers with headers and footers
- **Dialog** - Modal dialogs for forms and confirmations
- **Progress** - Progress bars for career tracking
- **Badge** - Skill tags and status indicators

### Custom Components
- **CareerPlanCard** - Display career plans with progress
- **SkillsSelector** - Multi-select component for skills
- **OnboardingWizard** - Step-by-step onboarding flow

---

## 📱 User Flow

### Registration & Onboarding
1. User signs up/signs in via Clerk
2. Redirected to onboarding flow
3. Completes profile setup (role, skills, goals)
4. Profile data saved to database
5. Redirected to dashboard

### Resume Generation
1. User navigates to AI resume page
2. Enters job title, company, and job description and other skills
3. AI generates personalized resume
4. User can edit or save as pdf to the resume created

---

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deployment Options

#### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Environment Configuration
Ensure all environment variables are properly set in your deployment platform.

---

## 🔒 Security

### Authentication Security
- **JWT Tokens** - Secure session management with Clerk
- **Role-Based Access** - Protected routes and API endpoints
- **CSRF Protection** - Cross-site request forgery prevention

### Data Security
- **Input Validation** - Sanitize all user inputs
- **SQL Injection Prevention** - Prisma ORM protection
- **XSS Prevention** - Sanitized output rendering

### API Security
- **Rate Limiting** - Prevent API abuse
- **Authentication Middleware** - Secure API endpoints
- **CORS Configuration** - Controlled cross-origin requests

---

## 🙏 Acknowledgments

- **[Google Gemini AI](https://ai.google.dev/)** - For providing advanced AI capabilities
- **[Clerk](https://clerk.com/)** - For seamless authentication services
- **[Vercel](https://vercel.com/)** - For excellent deployment platform
- **[Prisma](https://www.prisma.io/)** - For type-safe database operations
- **[ShadCN](https://ui.shadcn.com/)** - For beautiful UI components

---

<p align="center">
  <strong>Built with ❤️ by Palash Jaiswal</strong>
</p>

<p align="center">
  <em>Empowering careers through AI-driven guidance and personalized recommendations.</em>
</p>

---

<p align="center">
  <a href="#ai-career-coach-">Back to top</a>
</p>
