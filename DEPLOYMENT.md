# 🚀 Deployment Guide for Prajna Construction Website

## GitHub Pages Deployment

This guide will help you deploy your Prajna Construction website to GitHub Pages for free hosting.

### Prerequisites

1. **GitHub Account**: Make sure you have a GitHub account
2. **Git Installed**: Install Git on your computer
3. **Repository Access**: You should have access to the `prajna-constructions` repository

### Step 1: Push Code to GitHub

If you haven't already pushed the code to GitHub:

1. **Initialize Git Repository** (if not already done):
```bash
git init
git add .
git commit -m "Initial commit: Prajna Construction website"
```

2. **Add GitHub Remote**:
```bash
git remote add origin https://github.com/Shashikamal-RC/prajna-constructions.git
```

3. **Push to GitHub**:
```bash
git branch -M main
git push -u origin main
```

### Step 2: Manual Deployment

You can deploy manually using the npm script:

```bash
npm run deploy
```

This command will:
1. Build the project (`npm run build`)
2. Create a `gh-pages` branch
3. Deploy the built files to GitHub Pages

### Step 3: Enable GitHub Pages (First Time Only)

1. Go to your repository on GitHub: `https://github.com/Shashikamal-RC/prajna-constructions`
2. Click on **Settings** tab
3. Scroll down to **Pages** section in the left sidebar
4. Under **Source**, select **Deploy from a branch**
5. Choose **gh-pages** branch
6. Choose **/ (root)** folder
7. Click **Save**

### Step 4: Access Your Website

Your website will be available at:
```
https://Shashikamal-RC.github.io/prajna-constructions/
```

**Note**: It may take a few minutes for the site to be available after first deployment.

## Automatic Deployment with GitHub Actions

The repository includes a GitHub Actions workflow that automatically deploys your site when you push to the main branch.

### How It Works

1. **Trigger**: Automatic deployment occurs on every push to the `main` branch
2. **Process**: 
   - Checks out the code
   - Sets up Node.js
   - Installs dependencies
   - Builds the project
   - Deploys to GitHub Pages

### GitHub Actions Setup

The workflow file is already created at `.github/workflows/deploy.yml`. No additional setup required!

### Enabling GitHub Actions (First Time)

1. Go to your repository on GitHub
2. Click on **Actions** tab
3. If prompted, click **I understand my workflows, go ahead and enable them**
4. The workflow will run automatically on the next push

## Manual Deployment Commands

### Build Only
```bash
npm run build
```
Builds the project for production in the `dist` folder.

### Preview Build Locally
```bash
npm run preview
```
Serves the production build locally for testing.

### Deploy to GitHub Pages
```bash
npm run deploy
```
Builds and deploys to GitHub Pages.

## Updating the Website

### For Content Changes

1. **Edit Files**: Make changes to components in `src/pages/` or `src/components/`
2. **Test Locally**: Run `npm run dev` to test changes
3. **Commit Changes**:
```bash
git add .
git commit -m "Update: describe your changes"
git push origin main
```
4. **Automatic Deployment**: GitHub Actions will automatically deploy the changes

### For Image Updates

1. **Add Images**: Place new images in `public/images/`
2. **Update References**: Update image paths in component files if needed
3. **Test and Deploy**: Follow the same process as content changes

## Custom Domain (Optional)

To use a custom domain like `www.prajnaconstruction.com`:

1. **Domain Setup**:
   - Purchase a domain from a registrar
   - Configure DNS to point to GitHub Pages
   - Add CNAME records as required

2. **GitHub Configuration**:
   - Go to repository Settings > Pages
   - Add your custom domain
   - Enable "Enforce HTTPS"

3. **Update Configuration**:
   - Update `homepage` in `package.json`
   - Update `base` in `vite.config.ts`

## Troubleshooting

### Common Issues

1. **404 Page Not Found**:
   - Check that GitHub Pages is enabled
   - Verify the correct branch is selected (gh-pages)
   - Wait a few minutes after deployment

2. **Images Not Loading**:
   - Ensure images are in `public/images/` directory
   - Check image file names match exactly (case-sensitive)
   - Verify images are pushed to the repository

3. **Build Failures**:
   - Check the Actions tab for error details
   - Ensure all dependencies are listed in `package.json`
   - Fix any TypeScript/ESLint errors

4. **Routing Issues**:
   - The app uses hash routing for GitHub Pages compatibility
   - All routes should work correctly with the current setup

### Getting Help

If you encounter issues:

1. **Check GitHub Actions**: Look at the Actions tab for build logs
2. **Browser Console**: Check for JavaScript errors in browser developer tools
3. **GitHub Issues**: Create an issue in the repository if needed

## Performance Optimization

### Before Deployment

1. **Optimize Images**: Compress images to reduce load times
2. **Test Performance**: Use browser dev tools to check loading speeds
3. **Mobile Testing**: Test on various devices and screen sizes

### After Deployment

1. **Monitor Loading**: Use tools like Google PageSpeed Insights
2. **Update Content**: Regularly update project portfolio and testimonials
3. **Backup**: Keep local backups of all content and images

## Security Considerations

1. **No Sensitive Data**: Never commit API keys or sensitive information
2. **Contact Forms**: The forms are frontend-only; integrate with a backend service for functionality
3. **HTTPS**: GitHub Pages provides free HTTPS automatically

## Maintenance

### Regular Updates

1. **Dependencies**: Update npm packages periodically
2. **Content**: Keep project portfolio and company information current
3. **Security**: Monitor for security updates in dependencies

### Backup Strategy

1. **Repository**: GitHub serves as your backup
2. **Images**: Keep original high-resolution images separately
3. **Content**: Document any customizations for future reference

---

Your Prajna Construction website is now ready for the world! 🎉

For any questions or support, refer to the main README.md file or create an issue in the repository.
