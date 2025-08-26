// scripts/post-build.js - IMPROVED VERSION WITH BLOG LINK FIXES
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
  const relativePath = path.relative('./out', filePath);
  const depth = relativePath.split(path.sep).length - 1;

  if (depth === 0) {
    return './';
  } else {
    return '../'.repeat(depth);
  }
}

const menuScript = `
<script>
document.addEventListener('DOMContentLoaded', function() {
  const mobileMenuButton = document.querySelector('[aria-label="Toggle menu"]');
  const lgHiddenElements = document.querySelectorAll('header .lg\\\\:hidden');
  const mobileMenuContainer = lgHiddenElements[1];
  let isMobileMenuOpen = false;

  if (mobileMenuButton && mobileMenuContainer) {
    mobileMenuButton.addEventListener('click', function() {
      isMobileMenuOpen = !isMobileMenuOpen;

      if (isMobileMenuOpen) {
        mobileMenuContainer.style.display = 'block';
      } else {
        mobileMenuContainer.style.display = 'none';
      }

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
  }

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

// Step 1: Clean up files
console.log('\n📁 Cleaning up files...');
deleteFiles('./out', '.txt');
deleteJsFileWithString('./out');

// Step 2: Fix HTML
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

    const relativePrefix = getRelativePathPrefix(file);
    console.log(`🔍 Processing ${file} with prefix: ${relativePrefix}`);

    // Fix src attributes
    content = content.replace(/src=["']\/(?!\/|https?:\/\/)/g, `src="${relativePrefix}`);

    const mainNavPages = [
      'services', 'about', 'guarantees', 'return-policy', 'contact', 'blog',
      'privacy-policy', 'terms-conditions', 'cookie-policy', 'impressum',
      'contact-success', 'newsletter-success'
    ];

    const blogPages = [
      'blog/typische-fehler-im-it-vorstellungsgespraech',
      'blog/effiziente-programmierkurse-schweiz-ueberblick',
      'blog/effiziente-wege-programmierungserziehung-schweiz',
      'blog/effektive-programmierkurse-schweiz-fortschritt',
      'blog/entfaltung-digitaler-talente-schweiz',
      'blog/schluesselstrategien-erfolg-programmierkursen'
    ];

    // Process main navigation
    mainNavPages.forEach(page => {
      const absolutePattern = new RegExp(`href=["']/+${page}["']`, 'g');
      content = content.replace(absolutePattern, `href="${relativePrefix}${page}"`);

      const htmlPattern = new RegExp(`href=["']${relativePrefix.replace(/\./g, '\\.')}${page}\\.html["']`, 'g');
      content = content.replace(htmlPattern, `href="${relativePrefix}${page}"`);
    });

    // Process blog article links
    blogPages.forEach(page => {
      const absolutePattern = new RegExp(`href=["']/+${page}["']`, 'g');
      content = content.replace(absolutePattern, `href="${relativePrefix}${page}"`);

      const htmlPattern = new RegExp(`href=["']${relativePrefix.replace(/\./g, '\\.')}${page}\\.html["']`, 'g');
      content = content.replace(htmlPattern, `href="${relativePrefix}${page}"`);
    });

    // IMPROVED: Fix broken blog article links
    if (file.includes('blog') && (file.includes('index.html') || file.includes('blog.html'))) {
      console.log('🔧 FIXING BROKEN BLOG ARTICLE LINKS...');

      const articleSlugs = [
        'typische-fehler-im-it-vorstellungsgespraech',
        'effiziente-programmierkurse-schweiz-ueberblick',
        'effiziente-wege-programmierungserziehung-schweiz',
        'effektive-programmierkurse-schweiz-fortschritt',
        'entfaltung-digitaler-talente-schweiz',
        'schluesselstrategien-erfolg-programmierkursen'
      ];

      let articleIndex = 0;

      // Fix featured article "Artikel lesen" button
      content = content.replace(/(<a[^>]*class="[^"]*bg-brand-primary[^"]*"[^>]*href=["'])[^"']*?(["'][^>]*>Artikel lesen)/g, (match, prefix, suffix) => {
        const correctSlug = articleSlugs[0];
        console.log(`🔗 Fixed featured article link to: ${correctSlug}`);
        return `${prefix}${relativePrefix}blog/${correctSlug}${suffix}`;
      });

      // Fix grid article "Weiterlesen" links - match each article in order
      content = content.replace(/(<a[^>]*class="[^"]*text-brand-primary[^"]*font-semibold[^"]*"[^>]*href=["'])[^"']*?(["'][^>]*>Weiterlesen)/g, (match, prefix, suffix) => {
        const correctSlug = articleSlugs[articleIndex % articleSlugs.length];
        console.log(`🔗 Fixed article ${articleIndex} link to: ${correctSlug}`);
        articleIndex++;
        return `${prefix}${relativePrefix}blog/${correctSlug}${suffix}`;
      });
    }

    // Fix logo link
    content = content.replace(/(<a[^>]*class="[^"]*flex items-center[^"]*"[^>]*href=["']).*?(["'])/g, `$1${relativePrefix}$2`);

    // Add X icon if missing
    if (!content.includes('lucide-x')) {
      content = content.replace(
        /<svg[^>]*class="lucide lucide-menu[^"]*"[^>]*>[\s\S]*?<\/svg>/,
        `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu h-6 w-6"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x h-6 w-6" style="display: none;"><path d="m18 6-12 12"></path><path d="m6 6 12 12"></path></svg>`
      );
    }

    // Add menu script
    content = content.replace('</body>', `${menuScript}\n</body>`);

    if (content !== originalContent) {
      fs.writeFileSync(file, content, 'utf8');
      processedCount++;
      console.log(`✏️  Updated: ${file}`);
    }
  } catch (error) {
    console.error(`❌ Error processing ${file}: ${error.message}`);
  }
});

// Step 3: Create blog/index.html
console.log('\n📁 Creating blog/index.html...');
const blogHtmlPath = './out/blog.html';
const blogIndexPath = './out/blog/index.html';

if (fs.existsSync(blogHtmlPath)) {
  const blogDir = path.dirname(blogIndexPath);
  if (!fs.existsSync(blogDir)) {
    fs.mkdirSync(blogDir, { recursive: true });
  }

  let blogContent = fs.readFileSync(blogHtmlPath, 'utf8');

  blogContent = blogContent.replace(/src=["']\.\/(?!blog)/g, 'src="../');
  blogContent = blogContent.replace(/href=["']\.\/(?!blog)/g, 'href="../');
  blogContent = blogContent.replace(/href=["']\.\/(blog\/[^"']+)["']/g, 'href="../$1"');

  fs.writeFileSync(blogIndexPath, blogContent);
  console.log('✅ Created blog/index.html');
}

// Step 4: Create website folder
console.log('\n📦 Creating website folder...');
const websiteDir = './website';

if (fs.existsSync(websiteDir)) {
  fs.rmSync(websiteDir, { recursive: true, force: true });
  console.log('🗑️  Removed existing website directory');
}

copyDirectory('./out', websiteDir);
console.log('📁 Copied all files to website directory');

const websiteFiles = walk(websiteDir);
console.log(`✅ Website contains ${websiteFiles.length} HTML files`);

console.log(`\n✅ Post-build optimization complete!`);
console.log(`📊 Summary:`);
console.log(`   - HTML files processed: ${processedCount}/${htmlFiles.length}`);
console.log(`   - Website ready in /website folder`);
console.log(`   - Blog article links fixed`);
console.log(`   - Navigation links cleaned`);
console.log(`   - Menu functionality added`);
console.log(`   - Ready for static hosting`);
