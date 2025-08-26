# Code Werkstatt Website

A modern, responsive website for Code Werkstatt - programming courses in Switzerland. Built with Next.js 15 and deployed as a static site with automated GitHub Actions workflow.

## 🚀 Live Website

The website is automatically built and deployed via GitHub Actions. Each push to the `main` branch creates a new release with a downloadable static website archive.

**📁 [Latest Release](https://github.com/marsh051stan/code-werkstatt-website/releases/latest)** - Download the latest static site build

## 🛠️ Technology Stack

- **Framework**: Next.js 15.3.2 with static export
- **Package Manager**: Bun
- **Styling**: Tailwind CSS with shadcn/ui components
- **Deployment**: GitHub Actions → Static HTML/CSS/JS
- **Hosting**: Static file hosting (compatible with any web server)

## 📁 Project Structure

```
code-werkstatt/
├── src/
│   ├── app/           # Next.js app directory
│   │   ├── blog/      # Blog posts and articles
│   │   ├── about/     # About page
│   │   ├── contact/   # Contact forms
│   │   └── ...        # Other pages
│   └── components/    # Reusable React components
├── public/            # Static assets (images, logos)
├── scripts/           # Build and post-processing scripts
│   └── post-build.js  # Static site optimization
├── .github/
│   └── workflows/
│       └── deploy.yml # Automated deployment
└── website/           # Generated static site (ignored in git)
```

## 🏗️ Build Process

The build process consists of multiple stages:

1. **Next.js Build**: `bun run build`
   - Generates static HTML, CSS, and JS files in `/out` directory
   - Optimizes assets and creates production build

2. **Post-Build Optimization**: `node scripts/post-build.js`
   - Fixes relative paths for static hosting
   - Adds mobile menu functionality
   - Cleans up unnecessary files
   - Creates `/website` directory with final output

3. **GitHub Actions Deployment**:
   - Builds the site automatically on push to main
   - Creates a zip archive of the static website
   - Publishes as a GitHub release for easy download

## 🚀 Getting Started

### Development

```bash
# Clone the repository
git clone https://github.com/marsh051stan/code-werkstatt-website.git
cd code-werkstatt-website

# Install dependencies
bun install

# Start development server
bun run dev
```

The development server will start at `http://localhost:3000`.

### Building Locally

```bash
# Build the static site
bun run build

# The optimized static site will be in the /website directory
```

### Deployment

Deployment is fully automated via GitHub Actions:

1. Push changes to the `main` branch
2. GitHub Actions automatically builds the site
3. A new release is created with the static site archive
4. Download and extract the archive to your web server

## 📋 Pages & Features

- **Homepage**: Course overview and value propositions
- **Services**: Detailed programming course offerings
- **About**: Company information and approach
- **Blog**: Programming tutorials and career advice
- **Contact**: Contact forms and company details
- **Legal Pages**: Privacy policy, terms, impressum, etc.

### Key Features

- ✅ Fully responsive design (mobile, tablet, desktop)
- ✅ Static site generation for fast loading
- ✅ SEO optimized with proper meta tags
- ✅ Mobile-friendly navigation with hamburger menu
- ✅ Blog system with article pages
- ✅ Contact forms and newsletter signup
- ✅ Cookie consent and privacy compliance
- ✅ Clean URLs without .html extensions

## 🔧 Configuration

### Next.js Configuration

The site uses static export mode configured in `next.config.js`:

```javascript
const nextConfig = {
  output: 'export',        // Static site generation
  distDir: 'out',         // Output directory
  trailingSlash: false,   // Clean URLs
  images: {
    unoptimized: true     // Static image optimization
  }
};
```

### GitHub Actions Workflow

Automated deployment is configured in `.github/workflows/deploy.yml`:

- **Triggers**: Push to main branch
- **Build Environment**: Ubuntu with Bun
- **Output**: Zip archive published as GitHub release
- **Features**: Automatic versioning, release notes, artifact upload

## 📦 Deployment Options

The generated static site can be deployed to any static hosting service:

- **Netlify**: Drag & drop the website folder
- **Vercel**: Import the repository
- **GitHub Pages**: Upload the static files
- **Traditional Web Hosting**: Upload via FTP/SFTP
- **CDN**: CloudFlare, AWS CloudFront, etc.

## 🐛 Troubleshooting

### Build Issues

1. **Node/Bun Version**: Ensure you're using a compatible version
2. **Dependencies**: Run `bun install` to update packages
3. **Cache**: Clear Next.js cache with `rm -rf .next`

### Deployment Issues

1. **Paths**: The post-build script fixes relative paths automatically
2. **Assets**: All assets are included in the website folder
3. **JavaScript**: Menu functionality is embedded in HTML

## 📄 License

This project is proprietary to Code Werkstatt. All rights reserved.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test the build locally
5. Submit a pull request

## 📞 Support

For technical support or questions about the website:

- **Email**: Contact through the website contact form
- **Issues**: Use GitHub Issues for bug reports
- **Documentation**: Check the `/scripts/post-build.js` for build details

---

**Built with ❤️ for Code Werkstatt programming courses in Switzerland**
