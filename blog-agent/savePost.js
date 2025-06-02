const fs = require('fs');
const path = require('path');

function savePost(slug, title, content) {
  try {
    // Ensure the posts directory exists
    const postsDir = path.join(process.cwd(), 'src', 'app', 'blog', 'posts');
    console.log(`Creating directory: ${postsDir}`);
    fs.mkdirSync(postsDir, { recursive: true });
    
    // Create a .gitkeep file to ensure the directory is tracked
    const gitkeepPath = path.join(postsDir, '.gitkeep');
    if (!fs.existsSync(gitkeepPath)) {
      fs.writeFileSync(gitkeepPath, '');
    }
    
    // Save the blog post
    const filePath = path.join(postsDir, `${slug}.mdx`);
    const frontMatter = `---
title: "${title}"
date: "${new Date().toISOString()}"
slug: "${slug}"
---

`;

    fs.writeFileSync(filePath, frontMatter + content);
    console.log(`✅ Blog post saved to: ${filePath}`);
    
    // Verify the file was created
    if (fs.existsSync(filePath)) {
      console.log(`✅ Verified: File exists at ${filePath}`);
      console.log(`📏 File size: ${fs.statSync(filePath).size} bytes`);
    } else {
      throw new Error('File was not created successfully');
    }
  } catch (error) {
    console.error("❌ Error saving post:", error);
    throw error;
  }
}

module.exports = savePost;