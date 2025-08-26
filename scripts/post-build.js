// scripts/post-build.js - COMPLETE SCRIPT VERSION WITH IMPROVED MENU LINK HANDLING
const fs = require('fs');
const path = require('path');

console.log('🚀 Starting post-build optimization...');

function walk(dir, ext = '.html', fileList = []) {
  if (!fs.existsSync(dir)) {
    console.log(`⚠️  Directory ${dir} does not exist, skipping...`);
    return fileList;
  }

  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walk(fullPath, ext, fileList);
    } else if (fullPath.endsWith(ext)) {
      fileList.push(fullPath);
    }
  });
  return fileList;
}

function deleteFiles(dir, ext = '.txt') {
  if (!fs.existsSync(dir)) {
    console.log(`⚠️  Directory ${dir} does not exist, skipping file deletion...`);
    return;
  }

  let deletedCount = 0;
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      deleteFiles(fullPath, ext);
    } else if (fullPath.endsWith(ext)) {
      fs.unlinkSync(fullPath);
      deletedCount++;
      console.log(`🗑️  Deleted: ${fullPath}`);
    }
  });

  if (deletedCount > 0) {
    console.log(`✅ Deleted ${deletedCount} ${ext} files`);
  }
}

function deleteJsFileWithString(dir, searchString = 'Failed to fetch RSC payload') {
  if (!fs.existsSync(dir)) {
    console.log(`⚠️  Directory ${dir} does not exist, skipping JS cleanup...`);
    return;
  }

  let deletedCount = 0;
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      deleteJsFileWithString(fullPath, searchString);
    } else if (fullPath.endsWith('.js')) {
      try {
        const content = fs.readFileSync(fullPath, 'utf8');
        if (content.includes(searchString)) {
          fs.unlinkSync(fullPath);
          deletedCount++;
          console.log(`🗑️  Deleted problematic JS: ${fullPath}`);
        }
      } catch (error) {
        console.log(`⚠️  Could not read ${fullPath}: ${error.message}`);
      }
    }
  });

  if (deletedCount > 0) {
    console.log(`✅ Deleted ${deletedCount} problematic JS files`);
  }
}

function copyDirectory(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }

  const items = fs.readdirSync(src);

  items.forEach(item => {
    const srcPath = path.join(src, item);
    const destPath = path.join(dest, item);

    const stat = fs.statSync(srcPath);

    if (stat.isDirectory()) {
      copyDirectory(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  });
}

function getRelativePathPrefix(filePath) {
  // Calculate how deep the file is nested
  const relativePath = path.relative('./out', filePath);
  const depth = relativePath.split(path.sep).length - 1;

  if (depth === 0) {
    return './'; // Root level files
  } else {
    return '../'.repeat(depth); // Go up for nested files
  }
}

// JavaScript code for menu functionality - MANDATORY FOR MENU
const menuScript = `
<script>
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const mobileMenuButton = document.querySelector('[aria-label="Toggle menu"]');
  // Find the mobile menu container - it's the second div with lg:hidden class (after the button container)
  const lgHiddenElements = document.querySelectorAll('header .lg\\\\:hidden');
  const mobileMenuContainer = lgHiddenElements[1]; // Second element is the menu
  let isMobileMenuOpen = false;

  if (mobileMenuButton && mobileMenuContainer) {
    mobileMenuButton.addEventListener('click', function() {
      isMobileMenuOpen = !isMobileMenuOpen;

      // Toggle menu visibility
      if (isMobileMenuOpen) {
        mobileMenuContainer.style.display = 'block';
      } else {
        mobileMenuContainer.style.display = 'none';
      }

      // Toggle burger/X icon
      const menuIcon = mobileMenuButton.querySelector('.lucide-menu');
      const xIcon = mobileMenuButton.querySelector('.lucide-x');

      if (menuIcon && xIcon) {
        if (isMobileMenuOpen) {
          menuIcon.style.display = 'none';
          xIcon.style.display = 'block';
        } else {
          menuIcon.style.display = 'block';
          xIcon.style.display = 'none';
        }
      }
    });
  } else {
    console.log('Mobile menu elements not found:', {
      button: !!mobileMenuButton,
      container: !!mobileMenuContainer
    });
  }

  // Close mobile menu when clicking on links
  const mobileMenuLinks = document.querySelectorAll('header .lg\\\\:hidden a');
  mobileMenuLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (mobileMenuContainer) {
        mobileMenuContainer.style.display = 'none';
        isMobileMenuOpen = false;

        const menuIcon = mobileMenuButton.querySelector('.lucide-menu');
        const xIcon = mobileMenuButton.querySelector('.lucide-x');

        if (menuIcon && xIcon) {
          menuIcon.style.display = 'block';
          xIcon.style.display = 'none';
        }
      }
    });
  });
});
</script>`;

// Step 1: Clean up unnecessary files first
console.log('\n📁 Cleaning up files...');
deleteFiles('./out', '.txt');
deleteJsFileWithString('./out');

// Step 2: Fix HTML paths and add menu functionality
console.log('\n🔧 Fixing HTML paths and adding menu functionality...');
const htmlFiles = walk('./out');

if (htmlFiles.length === 0) {
  console.log('⚠️  No HTML files found to process');
} else {
  console.log(`📄 Processing ${htmlFiles.length} HTML files...`);
}

let processedCount = 0;
htmlFiles.forEach(file => {
  try {
    let content = fs.readFileSync(file, 'utf8');
    let originalContent = content;

    // Get the correct relative path prefix for this file
    const relativePrefix = getRelativePathPrefix(file);
    console.log(`🔍 Processing ${file} with prefix: ${relativePrefix}`);

    // Fix all src attributes - convert absolute paths to correct relative paths
    content = content.replace(/src=["']\/(?!\/|https?:\/\/)/g, `src="${relativePrefix}`);

    // Define clean navigation pages (these should NEVER have .html extension in menu)
    const mainNavPages = [
      'services',
      'about',
      'guarantees',
      'return-policy',
      'contact',
      'blog',
      'privacy-policy',
      'terms-conditions',
      'cookie-policy',
      'impressum',
      'contact-success',
      'newsletter-success'
    ];

    // Define blog article pages
    const blogPages = [
      'blog/typische-fehler-im-it-vorstellungsgespraech',
      'blog/effiziente-programmierkurse-schweiz-ueberblick',
      'blog/effiziente-wege-programmierungserziehung-schweiz',
      'blog/effektive-programmierkurse-schweiz-fortschritt',
      'blog/entfaltung-digitaler-talente-schweiz',
      'blog/schluesselstrategien-erfolg-programmierkursen'
    ];

    // Process main navigation links
    mainNavPages.forEach(page => {
      // Replace any href="/page" with correct relative path WITHOUT .html
      const absolutePattern = new RegExp(`href=["']/+${page}["']`, 'g');
      content = content.replace(absolutePattern, `href="${relativePrefix}${page}"`);

      // Replace any href="./page.html" with href="./page" (remove .html from navigation)
      const htmlPattern = new RegExp(`href=["']${relativePrefix.replace(/\./g, '\\.')}${page}\\.html["']`, 'g');
      content = content.replace(htmlPattern, `href="${relativePrefix}${page}"`);
    });

    // Process blog article links
    blogPages.forEach(page => {
      // Replace any href="/blog/article" with correct relative path WITHOUT .html
      const absolutePattern = new RegExp(`href=["']/+${page}["']`, 'g');
      content = content.replace(absolutePattern, `href="${relativePrefix}${page}"`);

      // Replace any href="./blog/article.html" with href="./blog/article" (remove .html)
      const htmlPattern = new RegExp(`href=["']${relativePrefix.replace(/\./g, '\\.')}${page}\\.html["']`, 'g');
      content = content.replace(htmlPattern, `href="${relativePrefix}${page}"`);
    });

    // Special handling for blog index page - fix broken article links
    if (file.includes('blog.html')) {
      console.log('🔧 Fixing blog article links in blog index...');

      // Fix specific broken links that point to "./" instead of actual articles
      blogPages.forEach(articlePath => {
        const articleSlug = articlePath.replace('blog/', '');

        // Replace href="./" with correct article path for each article
        // We need to be more specific about which links to replace
        const articlePattern = new RegExp(`(<a[^>]*class="[^"]*font-semibold[^"]*"[^>]*href=["'])\\./["']([^>]*>Weiterlesen)`, 'g');
        content = content.replace(articlePattern, `$1${relativePrefix}${articlePath}$2`);

        const articleButtonPattern = new RegExp(`(<a[^>]*class="[^"]*bg-brand-primary[^"]*"[^>]*href=["'])\\./["']([^>]*>Artikel lesen)`, 'g');
        content = content.replace(articleButtonPattern, `$1${relativePrefix}${articlePath}$2`);
      });

      // More specific fix for blog article links
      content = content.replace(/href=["']\.\/"([^"']*>(?:Weiterlesen|Artikel lesen))/g, (match, rest) => {
        // Default to first article if we can't determine which one
        return `href="${relativePrefix}blog/typische-fehler-im-it-vorstellungsgespraech"${rest}`;
      });
    }

    // Fix logo link to point to root
    content = content.replace(/(<a[^>]*class="[^"]*flex items-center[^"]*"[^>]*href=["']).*?(["'])/g, `$1${relativePrefix}$2`);

    // Ensure proper X icon for mobile menu (add it if missing)
    if (!content.includes('lucide-x')) {
      content = content.replace(
        /<svg[^>]*class="lucide lucide-menu[^"]*"[^>]*>[\s\S]*?<\/svg>/,
        `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu h-6 w-6"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x h-6 w-6" style="display: none;"><path d="m18 6-12 12"></path><path d="m6 6 12 12"></path></svg>`
      );
    }

    // Add menu script before closing body tag
    content = content.replace('</body>', `${menuScript}\n</body>`);

    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(file, content, 'utf8');
      processedCount++;
      console.log(`✏️  Updated: ${file}`);
    }
  } catch (error) {
    console.error(`❌ Error processing ${file}: ${error.message}`);
  }
});

// Step 3: Create blog/index.html to ensure /blog always works
console.log('\n📁 Creating blog/index.html...');
const blogHtmlPath = './out/blog.html';
const blogIndexPath = './out/blog/index.html';

if (fs.existsSync(blogHtmlPath)) {
  // Create blog directory if it doesn't exist
  const blogDir = path.dirname(blogIndexPath);
  if (!fs.existsSync(blogDir)) {
    fs.mkdirSync(blogDir, { recursive: true });
  }

  // Copy blog.html to blog/index.html with adjusted paths
  let blogContent = fs.readFileSync(blogHtmlPath, 'utf8');

  // Adjust relative paths since we're now one level deeper
  blogContent = blogContent.replace(/src=["']\.\/(?!blog)/g, 'src="../');
  blogContent = blogContent.replace(/href=["']\.\/(?!blog)/g, 'href="../');

  // Fix blog article links to be relative to blog/ directory
  blogContent = blogContent.replace(/href=["']\.\/(blog\/[^"']+)["']/g, 'href="../$1"');

  fs.writeFileSync(blogIndexPath, blogContent);
  console.log('✅ Created blog/index.html');
}

// Step 4: Create website folder and copy everything
console.log('\n📦 Creating website folder...');
const websiteDir = './website';

// Remove existing website directory
if (fs.existsSync(websiteDir)) {
  fs.rmSync(websiteDir, { recursive: true, force: true });
  console.log('🗑️  Removed existing website directory');
}

// Create new website directory and copy all files
copyDirectory('./out', websiteDir);
console.log('📁 Copied all files to website directory');

// Verify the copy
const websiteFiles = walk(websiteDir);
console.log(`✅ Website contains ${websiteFiles.length} HTML files`);

console.log(`\n✅ Post-build optimization complete!`);
console.log(`📊 Summary:`);
console.log(`   - HTML files processed: ${processedCount}/${htmlFiles.length}`);
console.log(`   - Website ready in /website folder`);
console.log(`   - Main navigation links kept clean (no .html)`);
console.log(`   - Blog article links kept clean (no .html)`);
console.log(`   - Blog index created at /blog/index.html`);
console.log(`   - Logo links point to root directory`);
console.log(`   - Menu functionality added`);
console.log(`   - RSC issues cleaned up`);
console.log(`   - Ready for static hosting`);
