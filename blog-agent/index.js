require('dotenv').config();
const fetchTopics = require('./fetchTopics.js');
const generatePost = require('./generatePost.js');
const savePost = require('./savePost.js');
const slugify = require('slugify');

const keywords = [
  // Asphalt Paving
  "asphalt paving services San Diego",
  "driveway paving contractors San Diego",
  "parking lot asphalt maintenance tips",
  "asphalt resurfacing vs repaving",
  "sealcoating benefits for commercial asphalt",
  "how to improve asphalt drainage",
  "permitting for asphalt paving projects",
  "ADA compliant asphalt striping best practices",
  "eco-friendly asphalt paving solutions",
  "preventing asphalt driveway cracks"
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
    
    // Exit successfully
    process.exit(0);
  } catch (err) {
    console.error("❌ Blog generation failed:", err.message);
    // Exit with error code
    process.exit(1);
  }
}

// Check if running in GitHub Actions or locally
if (process.env.GITHUB_ACTIONS || process.env.CI) {
  // In GitHub Actions, just run once and exit
  runAgent();
} else {
  // For local development, you can still use the cron schedule
  const cron = require('node-cron');
  
  // Run once immediately for testing
  console.log("🧪 Running blog generation for testing...");
  runAgent();
  
  // Schedule for local development (optional)
  cron.schedule('0 9 * * *', () => {
    console.log("⏰ Running scheduled blog generation...");
    runAgent();
  });
}
