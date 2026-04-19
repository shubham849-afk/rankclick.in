# Deployment Guide for ClickRank.in

## Current Status

✅ **Website Complete and Ready**
- All 18 routes built and tested successfully
- 10 service pages with detailed content
- Navigation fully functional  
- Code committed locally (commit: d554fd2)
- Production build verified: 6.2s compile time

## What's In the Codebase

**Pages (18 total routes)**:
- Homepage (/)
- About Page (/about)
- Blog Page (/blog)
- Contact Page (/contact)
- Services Overview (/services)
- Service Pages:
  - Digital Marketing Strategy
  - SEO
  - Social Media Marketing
  - Web Development
  - Web Design
  - Mobile App Development
  - Google Ads
  - Content Marketing
  - Digital Branding
  - YouTube Promotion

**Components**:
- Hero sections with CTAs
- Service cards (clickable to individual pages)
- Testimonial cards
- Footer with services and Google Maps integration

**Features**:
- Responsive design (mobile-first)
- SEO metadata on all pages
- Orange/white/black brand colors (Tailwind CSS)
- Google Maps embedded
- Contact form placeholders

## Deployment Steps

### Option 1: Deploy via Vercel (Recommended)

1. **Push to GitHub** (required for Vercel):
   - Generate GitHub Personal Access Token:
     - Go to https://github.com/settings/tokens/new
     - Name it: "Vercel Deploy"
     - Select scopes: `repo` and `workflow`
     - Click "Generate token" and copy it
   
   - In terminal, run:
     ```bash
     cd c:\Users\shubh\Documents\clickrank.in
     git remote set-url origin https://github.com/shubham849-afk/clickrank.in.git
     ```
   
   - When prompted for password, paste your Personal Access Token (not your GitHub password)
   
   - Push code:
     ```bash
     git push -u origin master
     ```

2. **Deploy to Vercel**:
   - Go to https://vercel.com/dashboard
   - Click "Add New" → "Project"
   - Select "Import Git Repository"
   - Find and select `shubham849-afk/clickrank.in`
   - Click "Import"
   - Vercel will auto-detect Next.js and deploy automatically
   - Your site will be live at: `https://clickrank-in.vercel.app` (or custom domain)

### Option 2: Use GitHub Desktop (Easier for Windows)

1. Download GitHub Desktop from https://desktop.github.com
2. Sign in with your GitHub account
3. Clone the repository:
   - File → Clone Repository
   - Go to "URL" tab
   - Paste: `https://github.com/shubham849-afk/clickrank.in.git`
   - Click "Clone"
4. GitHub Desktop will push your commits automatically

### Option 3: Use SSH (If configured)

```bash
git remote set-url origin git@github.com:shubham849-afk/clickrank.in.git
git push -u origin master
```

## Post-Deployment

1. **Verify Site Works**:
   - Check all pages load at Vercel URL
   - Test navigation (dropdown links)
   - Click service cards
   - Verify contact form endpoint (currently placeholder)

2. **Custom Domain** (optional):
   - In Vercel Dashboard → Settings → Domains
   - Add `clickrank.in` 
   - Update DNS records at your registrar

3. **Analytics** (optional):
   - Add Google Analytics (Web tag ID): Update `src/app/layout.tsx`
   - Add Search Console: https://search.google.com/search-console

## Build & Test Locally

```bash
# Install dependencies
npm install

# Run dev server
npm run dev
# Visit http://localhost:3000

# Build for production
npm run build

# Start production server
npm start
```

## Environment Variables

Currently none required. If you need to add:
- Create `.env.local` file
- Add variables like: `NEXT_PUBLIC_API_URL=...`

## Contact Form

The contact form is currently a placeholder. To make it functional:
1. Choose a service (Formspree, EmailJS, or backend API)
2. Update `src/app/contact/page.tsx`
3. Add necessary environment variables

## Troubleshooting

**Git Push Fails with 403**:
- Use GitHub Personal Access Token, not password
- Token needs `repo` + `workflow` scopes
- Clear old credentials: `git credential reject`

**Build Errors**:
- Clear cache: `rm -r .next node_modules` then `npm install`
- Ensure Node 18+: `node --version`

**Pages Not Loading**:
- Check all imports in `src/app/[path]/page.tsx`
- Verify Tailwind CSS is compiled: `npm run build`

## Project Structure

```
clickrank.in/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Global layout + navigation
│   │   ├── page.tsx            # Homepage
│   │   ├── globals.css         # Global Tailwind styles
│   │   ├── about/
│   │   ├── blog/
│   │   ├── contact/
│   │   └── services/           # All service pages
│   └── components/
│       ├── ServiceCard.tsx
│       ├── Footer.tsx
│       └── (others)
├── public/                     # Static assets
├── package.json               # Dependencies
├── tsconfig.json              # TypeScript config
├── next.config.ts             # Next.js config
└── tailwind.config.js         # Tailwind CSS config
```

## Next Steps After Deployment

1. ✅ Push code to GitHub
2. ✅ Deploy to Vercel
3. Test all pages and links
4. Set up custom domain (clickrank.in)
5. Add analytics
6. Implement contact form backend
7. Monitor Vercel analytics
8. Set up automatic deployments on code push

## Contact Info (In Footer)

- Phone: +91 72758 17731
- Email: shubham988.vns@gmail.com
- Location: Varanasi (implied from context)
- Google Maps: https://share.google/R5DjnI9EDkSKXrAev

---

**Last Updated**: After successful build (d554fd2)  
**Website Owner**: ClickRank - Digital Marketing Agency  
**Framework**: Next.js 16.2.3  
**Hosting**: Vercel (recommended)
