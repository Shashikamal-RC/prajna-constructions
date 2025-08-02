# Image Setup Guide for Prajna Construction Website

## 📸 Required Images

To complete the website setup, you'll need to add the following images to the `public/images/` directory:

### Hero & Background Images
- `hero-bg.jpg` - Main hero background (1920x1080px recommended)
- `company-story.jpg` - About page story image (800x600px)
- `team.jpg` - Team photo for homepage (800x600px)
- `why-choose-us.jpg` - Benefits section image (800x600px)
- `featured-project.jpg` - Featured project showcase (800x600px)

### Service Images
- `residential.jpg` - Residential construction service (600x400px)
- `commercial.jpg` - Commercial construction service (600x400px)
- `renovation.jpg` - Renovation service (600x400px)
- `residential-service.jpg` - Detailed residential service page (600x400px)
- `commercial-service.jpg` - Detailed commercial service page (600x400px)
- `renovation-service.jpg` - Detailed renovation service page (600x400px)
- `project-management.jpg` - Project management service (600x400px)
- `design-build.jpg` - Design & build service (600x400px)
- `maintenance.jpg` - Maintenance service (600x400px)

### Team Member Photos
- `team1.jpg` - Rajesh Sharma, Founder & CEO (400x400px)
- `team2.jpg` - Priya Patel, Project Manager (400x400px)
- `team3.jpg` - Kumar Singh, Lead Architect (400x400px)
- `team4.jpg` - Anita Rao, Quality Control Manager (400x400px)

### Project Portfolio Images
- `project1.jpg` - Modern Family Home main image (800x600px)
- `project1-1.jpg` - Modern Family Home gallery image 1 (800x600px)
- `project1-2.jpg` - Modern Family Home gallery image 2 (800x600px)
- `project1-3.jpg` - Modern Family Home gallery image 3 (800x600px)
- `project2.jpg` - Corporate Office Complex main image (800x600px)
- `project2-1.jpg` - Corporate Office Complex gallery image 1 (800x600px)
- `project2-2.jpg` - Corporate Office Complex gallery image 2 (800x600px)
- `project2-3.jpg` - Corporate Office Complex gallery image 3 (800x600px)
- `project3.jpg` - Luxury Villa Renovation main image (800x600px)
- `project3-1.jpg` - Luxury Villa Renovation gallery image 1 (800x600px)
- `project3-2.jpg` - Luxury Villa Renovation gallery image 2 (800x600px)
- `project3-3.jpg` - Luxury Villa Renovation gallery image 3 (800x600px)
- `project4.jpg` - Retail Shopping Center main image (800x600px)
- `project4-1.jpg` - Retail Shopping Center gallery image 1 (800x600px)
- `project4-2.jpg` - Retail Shopping Center gallery image 2 (800x600px)
- `project4-3.jpg` - Retail Shopping Center gallery image 3 (800x600px)
- `project5.jpg` - Eco-Friendly Townhouses main image (800x600px)
- `project5-1.jpg` - Eco-Friendly Townhouses gallery image 1 (800x600px)
- `project5-2.jpg` - Eco-Friendly Townhouses gallery image 2 (800x600px)
- `project5-3.jpg` - Eco-Friendly Townhouses gallery image 3 (800x600px)
- `project6.jpg` - Kitchen & Bath Remodel main image (800x600px)
- `project6-1.jpg` - Kitchen & Bath Remodel gallery image 1 (800x600px)
- `project6-2.jpg` - Kitchen & Bath Remodel gallery image 2 (800x600px)
- `project6-3.jpg` - Kitchen & Bath Remodel gallery image 3 (800x600px)

## 📐 Image Specifications

### General Guidelines
- **Format**: JPEG for photos, PNG for logos/icons with transparency
- **Quality**: High quality but optimized for web (70-80% compression)
- **Color**: Professional, high-contrast images that represent your work well

### Specific Requirements

#### Hero Background (`hero-bg.jpg`)
- **Size**: 1920x1080px (Full HD)
- **Content**: Construction site, completed building, or team at work
- **Style**: Professional, inspiring, with space for text overlay

#### Service Images
- **Size**: 600x400px (3:2 aspect ratio)
- **Content**: Relevant to each service (homes for residential, offices for commercial, etc.)
- **Style**: Clean, professional, showing completed work

#### Team Photos
- **Size**: 400x400px (Square)
- **Content**: Professional headshots or workplace photos
- **Style**: Consistent lighting and background across all team members

#### Project Images
- **Size**: 800x600px (4:3 aspect ratio)
- **Content**: High-quality photos of completed projects
- **Style**: Well-lit, showing the best angles of your work

## 🖼️ Image Optimization Tips

1. **Compression**: Use tools like TinyPNG or ImageOptim to reduce file sizes
2. **Naming**: Use descriptive, SEO-friendly filenames
3. **Alt Text**: The website is already configured with proper alt text for accessibility
4. **Loading**: Images are optimized for fast loading with proper CSS

## 📁 Directory Structure

Your `public/images/` directory should look like this:

```
public/images/
├── hero-bg.jpg
├── company-story.jpg
├── team.jpg
├── why-choose-us.jpg
├── featured-project.jpg
├── residential.jpg
├── commercial.jpg
├── renovation.jpg
├── residential-service.jpg
├── commercial-service.jpg
├── renovation-service.jpg
├── project-management.jpg
├── design-build.jpg
├── maintenance.jpg
├── team1.jpg
├── team2.jpg
├── team3.jpg
├── team4.jpg
├── project1.jpg
├── project1-1.jpg
├── project1-2.jpg
├── project1-3.jpg
├── project2.jpg
├── project2-1.jpg
├── project2-2.jpg
├── project2-3.jpg
├── project3.jpg
├── project3-1.jpg
├── project3-2.jpg
├── project3-3.jpg
├── project4.jpg
├── project4-1.jpg
├── project4-2.jpg
├── project4-3.jpg
├── project5.jpg
├── project5-1.jpg
├── project5-2.jpg
├── project5-3.jpg
├── project6.jpg
├── project6-1.jpg
├── project6-2.jpg
└── project6-3.jpg
```

## 🎨 Placeholder Images

If you don't have images ready yet, you can use placeholder services like:
- [Picsum Photos](https://picsum.photos/) - For general construction/building images
- [Unsplash](https://unsplash.com/) - For high-quality professional photos
- [Pexels](https://pexels.com/) - For free stock photography

Example placeholder URLs:
- `https://picsum.photos/1920/1080` for hero background
- `https://picsum.photos/800/600` for project images
- `https://picsum.photos/600/400` for service images

## ⚠️ Important Notes

1. **Copyright**: Ensure you have rights to use all images
2. **File Sizes**: Keep individual files under 500KB for optimal loading
3. **Backup**: Keep original high-resolution versions separate
4. **Testing**: Test the website after adding images to ensure proper display

## 🚀 After Adding Images

1. Test the website locally: `npm run dev`
2. Build for production: `npm run build`
3. Deploy to GitHub Pages: `npm run deploy`

Your Prajna Construction website will be fully functional and visually complete!
