# Prajna Construction - Company Website

A modern, responsive website for Prajna Construction built with React, TypeScript, and Vite. Features include project showcases, service listings, about us section, and contact forms.

## 🚀 Features

- **Modern Design**: Clean, professional design optimized for construction industry
- **Responsive Layout**: Mobile-first design that looks great on all devices
- **Interactive Components**: Smooth animations and transitions using Framer Motion
- **Project Portfolio**: Showcase of completed construction projects with filtering
- **Service Pages**: Detailed information about construction services offered
- **Contact Forms**: Functional contact forms with validation using React Hook Form
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Fast Loading**: Optimized build with Vite for fast performance

## 🛠️ Technology Stack

- **Frontend**: React 19 with TypeScript
- **Build Tool**: Vite
- **Routing**: React Router DOM
- **Styling**: CSS3 with modern features
- **Animations**: Framer Motion
- **Forms**: React Hook Form
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## 📱 Pages

1. **Home**: Hero section, services preview, stats, testimonials
2. **About**: Company story, team, values, timeline
3. **Services**: Detailed service offerings and process
4. **Projects**: Portfolio with filtering and project details
5. **Contact**: Contact forms, location map, business info

## 🚀 Getting Started

### Prerequisites

- Node.js (v20.14.0 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Shashikamal-RC/prajna-constructions.git
cd prajna-constructions
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 🏗️ Building for Production

To build the project for production:

```bash
npm run build
```

The built files will be in the `dist` directory.

## 🌐 Deployment to GitHub Pages

This project is configured for automatic deployment to GitHub Pages.

### Manual Deployment

To deploy manually:

```bash
npm run deploy
```

This will build the project and deploy it to the `gh-pages` branch.

## 📁 Project Structure

```
prajna-constructions/
├── public/
│   ├── images/           # Static images
│   └── index.html
├── src/
│   ├── components/       # Reusable components
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── pages/           # Page components
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── Projects.tsx
│   │   └── Contact.tsx
│   ├── App.tsx          # Main app component
│   ├── App.css          # Global styles
│   └── main.tsx         # Entry point
├── package.json
├── vite.config.ts       # Vite configuration
└── README.md
```

## 🎨 Customization

### Colors

The website uses a carefully chosen color palette:
- Primary: `#ff6b35` (Orange)
- Secondary: `#2c3e50` (Dark Blue)
- Accent: `#27ae60` (Green)
- Background: `#f8f9fa` (Light Gray)

### Images

Replace placeholder images in the `public/images/` directory with your actual project photos and company images.

### Content

Update the following files to customize content:
- `src/pages/Home.tsx` - Homepage content and testimonials
- `src/pages/About.tsx` - Company information and team details
- `src/pages/Services.tsx` - Service offerings and descriptions
- `src/pages/Projects.tsx` - Project portfolio and case studies
- `src/pages/Contact.tsx` - Contact information and forms

## 📞 Contact Information

To update contact information, modify the contact details in:
- `src/components/Navbar.tsx` - Header contact info
- `src/components/Footer.tsx` - Footer contact details
- `src/pages/Contact.tsx` - Contact page information

## 🔧 Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

## 📝 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## 📧 Support

For support and questions, please contact:
- Email: info@prajnaconstruction.com
- Phone: +1 (555) 123-4567

---

Built with ❤️ for Prajna Construction
