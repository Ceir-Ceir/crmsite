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
  "preventing asphalt driveway cracks",
  "asphalt patch repair guide",
  "how to prepare a site for asphalt paving",
  "asphalt paving cost factors",
  "parking lot line striping best practices",
  "how long does asphalt curing take",

  // Demolition
  "demolition services San Diego",
  "residential demolition checklist",
  "commercial demolition planning tips",
  "demolition permit requirements California",
  "interior demolition safety checklist",
  "how to handle concrete debris disposal",
  "selective demolition vs full demolition",
  "how to protect adjacent structures during demolition",
  "demolition project timeline planning",
  "site cleanup after demolition",

  // Excavation
  "excavation services San Diego",
  "site grading and leveling basics",
  "excavation safety best practices",
  "trenching vs excavation differences",
  "utility locating before excavation",
  "soil compaction testing basics",
  "drainage planning for excavation projects",
  "how to prepare for foundation excavation",
  "excavation equipment selection guide",
  "erosion control for construction sites",

  // Dumpster Rentals
  "dumpster rental San Diego",
  "how to choose dumpster size",
  "what can go in a construction dumpster",
  "dumpster rental permit requirements",
  "roll off dumpster rental tips",
  "construction debris disposal guide",
  "same day dumpster delivery tips",
  "how to avoid dumpster overage fees",
  "jobsite waste management plan",
  "dumpster rental for remodel projects",

  // Concrete Washouts
  "concrete washout services San Diego",
  "why concrete washout compliance matters",
  "best practices for concrete washout containment",
  "how to prevent concrete slurry runoff",
  "jobsite concrete washout setup guide",
  "temporary vs permanent washout stations",
  "environmental regulations for concrete washout",
  "washout container sizing tips",
  "washout maintenance checklist",
  "concrete washout disposal process",

  // Trucking and Deliveries
  "construction trucking services San Diego",
  "aggregate hauling best practices",
  "material delivery scheduling tips",
  "how to reduce jobsite delivery delays",
  "hauling dirt and debris safety",
  "dump truck capacity planning",
  "equipment transport checklist",
  "site access planning for deliveries",
  "same day trucking services guide",
  "trucking logistics for construction sites",

  // General Engineering
  "general engineering contractor San Diego",
  "site work planning guide",
  "grading and drainage for new builds",
  "retaining wall construction basics",
  "ADA compliance for site improvements",
  "stormwater management for construction sites",
  "utility installation coordination tips",
  "construction project phasing checklist",
  "value engineering for site work",
  "preconstruction site assessment guide"
];

async function runAgent() {
  const keyword = keywords[Math.floor(Math.random() * keywords.length)];
  console.log(`📝 Generating blog for: ${keyword}`);

  try {
    const sources = await fetchTopics(keyword);
    const title = `Top Insights on ${keyword}`;
    const content = await generatePost(title, sources);
    const dateStamp = new Date().toISOString().slice(0, 10);
    const slug = slugify(`${dateStamp}-${title}`, { lower: true });

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
