import 'dotenv/config';
import cron from 'node-cron';
import { fetchTopics } from './fetchTopics.mjs';
import { generatePost } from './generatePost.mjs';
import { savePost } from './savePost.mjs';
import slugify from 'slugify';

const keywords = [
  // Dumpster Rental
  "sustainable dumpster rental San Diego",
  "how to dispose of renovation debris responsibly",
  "dumpster rental tips for contractors",
  // Excavation
  "excavation safety tips San Diego",
  "how to prepare land for construction",
  "best practices for excavation crews",
  // Demolition
  "safe demolition techniques San Diego",
  "how to recycle demolition debris",
  "residential vs commercial demolition",
  // Concrete Washouts
  "managing concrete washout water",
  "how to comply with California washout regulations",
  "eco-friendly concrete disposal methods"
];

async function runAgent() {
  const keyword = keywords[Math.floor(Math.random() * keywords.length)];
  console.log(`📝 Generating blog for: ${keyword}`);

  try {
    const sources = await fetchTopics(keyword);
    const title = `Top Insights on ${keyword}`;
    const content = await generatePost(title, sources);
    const slug = slugify(title, { lower: true });

    savePost(slug, title, content);
    console.log(`✅ Blog saved as ${slug}.mdx`);
  } catch (err) {
    console.error("❌ Blog generation failed:", err.message);
  }
}

// ⏰ Schedule: Run once daily at 9:00am
cron.schedule('0 9 * * *', () => {
  console.log("⏰ Running daily blog generation...");
  runAgent();
});

// 👉 Run immediately once for testing
runAgent();
