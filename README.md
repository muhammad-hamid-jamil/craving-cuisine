# Craving Cuisine - Food Delivery Website

A modern, responsive food delivery website built with Next.js 14, TailwindCSS, and TypeScript. This website showcases a professional catering service specializing in office meals, business meetings, and special events in Lahore, Pakistan.

## 🚀 Features

### 🎨 Modern Design
- **Responsive Design**: Fully responsive across mobile, tablet, and desktop
- **Modern UI/UX**: Clean, professional design with smooth animations
- **Interactive Elements**: Hover effects, transitions, and micro-interactions
- **Color Scheme**: Consistent orange-red theme throughout

### 🍽️ Food Menu System
- **Interactive Tabs**: Breakfast, Lunch, Dinner categories with smooth transitions
- **High-Quality Images**: Professional food photography from Unsplash
- **Detailed Descriptions**: Comprehensive dish information
- **Order Integration**: Direct phone links for immediate ordering

### 🎉 Weekend Deals Slider
- **Professional Slider**: One deal per slide with navigation controls
- **Featured Offers**: Special weekend pricing with visual badges
- **Interactive Navigation**: Arrow buttons and dot indicators
- **Responsive Layout**: Optimized for all screen sizes

### 📞 Contact System
- **Email Integration**: Contact form submissions sent to your email
- **Professional Templates**: Formatted email templates with all details
- **Error Handling**: Proper error messages and success feedback
- **Form Validation**: Client-side validation for better UX

### 🎯 Business Features
- **Service Showcase**: Office catering, business meetings, special events
- **Package Options**: Small, medium, and large group packages
- **Area Coverage**: Service areas across Lahore
- **Professional Branding**: Consistent branding and messaging

## 🛠️ Technology Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: TailwindCSS 4.x
- **Language**: TypeScript
- **Email**: Nodemailer
- **Images**: Next.js Image Optimization
- **Deployment**: Vercel Ready

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd craving-cuisine
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` with your email credentials:
   ```env
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📧 Email Setup

### Gmail Configuration
1. **Enable 2-Factor Authentication** on your Gmail account
2. **Generate App Password**:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate password for "Mail"
3. **Use App Password** as `EMAIL_PASS` in your `.env.local`

### Email Features
- **Professional Templates**: Formatted HTML emails
- **Complete Information**: All form fields included
- **Auto-Response**: Success/error messages to users
- **Direct Delivery**: Emails sent to `muhammadhamidofficial0@gmail.com`

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px (Single column layouts)
- **Tablet**: 768px - 1024px (Two column layouts)
- **Desktop**: > 1024px (Multi-column layouts)

### Key Responsive Features
- **Flexible Grids**: CSS Grid and Flexbox
- **Responsive Images**: Next.js Image optimization
- **Mobile Navigation**: Hamburger menu
- **Touch-Friendly**: Large buttons and touch targets
- **Fluid Typography**: Responsive text sizing

## 🎨 Design System

### Colors
- **Primary**: Orange (#ea580c)
- **Secondary**: Red (#dc2626)
- **Background**: White, Gray-50, Gray-100
- **Text**: Gray-900, Gray-600

### Typography
- **Headings**: Bold, large sizes
- **Body**: Regular weight, readable sizes
- **Buttons**: Semibold, prominent

### Spacing
- **Consistent**: Tailwind spacing scale
- **Generous**: Ample whitespace
- **Hierarchical**: Clear content hierarchy

## 📄 Pages

### Homepage (`/`)
- **Hero Slider**: 5 rotating images with animations
- **Services**: Office catering, meetings, events
- **Food Menu**: Interactive tabs with 18 dishes
- **Weekend Deals**: Professional slider with 3 offers
- **Packages**: Small, medium, large group options
- **Areas**: Service coverage in Lahore
- **Contact CTA**: Call-to-action section

### About Page (`/about`)
- **Company Story**: Mission and values
- **Why Choose Us**: Key differentiators
- **Professional Layout**: Clean, informative design

### Contact Page (`/contact`)
- **Contact Form**: Comprehensive inquiry form
- **Email Integration**: Direct email delivery
- **Business Information**: Contact details and hours

## 🚀 Deployment

### Vercel (Recommended)
1. **Connect Repository** to Vercel
2. **Set Environment Variables** in Vercel dashboard
3. **Deploy** automatically on push

### Manual Deployment
```bash
npm run build
npm start
```

## 📞 Contact Information

- **Phone**: +92 301 6828719
- **Email**: muhammadhamidofficial0@gmail.com
- **Service Areas**: Gulberg, Model Town, Garden Town, Johar Town, Wapda Town, Thokar, Township

## 🎯 Business Information

### Services
- **Office Catering**: Daily fresh meals for teams
- **Business Meetings**: Professional catering for meetings
- **Special Events**: Event catering for celebrations

### Package Sizes
- **Small Office**: 5-20 people
- **Medium Office**: 20-80 people  
- **Large Events**: 80-150 people

### Menu Categories
- **Breakfast**: Traditional Pakistani breakfast items
- **Lunch**: Main course meals and rice dishes
- **Dinner**: Evening meals and special dishes

## 🔧 Development

### Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### File Structure
```
app/
├── api/contact/route.ts    # Email API endpoint
├── about/page.tsx          # About page
├── contact/page.tsx        # Contact page
├── components/Navbar.tsx   # Navigation component
├── globals.css            # Global styles
├── layout.tsx             # Root layout
└── page.tsx               # Homepage
```

## 📝 License

This project is private and proprietary to Craving Cuisine.

## 🤝 Support

For technical support or questions about this website, contact:
- **Email**: muhammadhamidofficial0@gmail.com
- **Phone**: +92 301 6828719

---

**Built with ❤️ for Craving Cuisine - Your trusted food delivery partner in Lahore**