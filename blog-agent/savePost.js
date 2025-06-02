const fs = require('fs');
const path = require('path');

function savePost(slug, title, content) {
  try {
    // Save all posts in a central posts directory
    const postsDir = path.join(process.cwd(), 'src', 'app', 'blog', 'posts');
    if (!fs.existsSync(postsDir)) {
      fs.mkdirSync(postsDir, { recursive: true });
    }
    
    // Save as [slug].mdx in the posts directory
    const filePath = path.join(postsDir, `${slug}.mdx`);
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