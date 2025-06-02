import { execSync } from 'child_process';
import fs from 'fs';
import { Configuration, OpenAIApi } from 'openai';
import simpleGit from 'simple-git';
import fetch from 'node-fetch';

const openai = new OpenAIApi(new Configuration({ apiKey: process.env.OPENAI_API_KEY }));
const git = simpleGit();

async function fetchTrendingTopic() {
  const res = await fetch('https://api.search.brave.com/res/v1/web/search?q=CRM+services&count=5', {
    headers: { 'X-Subscription-Token': process.env.BRAVE_API_KEY }
  });
  const data = await res.json();
  return data.web.results[0]?.title || "Modern CRM Strategies";
}

async function generatePost(topic) {
  const prompt = `Write a 600-word blog post on the topic: "${topic}" focusing on small business CRM services. Make it helpful, SEO-optimized, and local-service friendly.`;
  const response = await openai.createChatCompletion({
    model: "gpt-4",
    messages: [{ role: "user", content: prompt }],
  });
  return response.data.choices[0].message.content;
}

async function writeBlogFile(title, content) {
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  fs.writeFileSync(`./posts/${slug}.md`, `# ${title}\n\n${content}`);
}

async function buildAndDeploy() {
  execSync('npm run prod');
  await git.add('.');
  await git.commit('🤖 Auto-generated blog post');
  await git.push('origin', 'main');
}

(async () => {
  const topic = await fetchTrendingTopic();
  const content = await generatePost(topic);
  await writeBlogFile(topic, content);
  await buildAndDeploy();
})();
