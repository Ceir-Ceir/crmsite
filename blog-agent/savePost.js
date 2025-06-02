const fs = require('fs');
const path = require('path');

function savePost(slug, title, content) {
  try {
    // Create the slug directory if it doesn't exist
    const slugDir = path.join(process.cwd(), 'src', 'app', 'blog', slug);
    if (!fs.existsSync(slugDir)) {
      fs.mkdirSync(slugDir, { recursive: true });
    }
    
    const filePath = path.join(slugDir, 'page.mdx');
    const frontMatter = `---
title: "${title}"
date: "${new Date().toISOString()}"
slug: "${slug}"
---

`;

    fs.writeFileSync(filePath, frontMatter + content);
    console.log(`📁 File saved to: ${filePath}`);
  } catch (error) {
    console.error("Error saving post:", error);
    throw error;
  }
}

module.exports = savePost;