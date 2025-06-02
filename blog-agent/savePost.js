const fs = require('fs');
const path = require('path');

function savePost(slug, title, content) {
  const filePath = path.join(process.cwd(), 'src', 'app', 'blog', `${slug}.mdx`);
  const frontMatter = `---
title: "${title}"
date: "${new Date().toISOString()}"
slug: "${slug}"
---

`;

  fs.writeFileSync(filePath, frontMatter + content);
}

module.exports = savePost;