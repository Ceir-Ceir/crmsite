require('dotenv').config(); // Load .env first
const OpenAI = require('openai');

// Debug: Ensure API key is loaded
if (!process.env.OPENAI_API_KEY) {
  throw new Error("❌ OPENAI_API_KEY is missing. Check your .env file.");
}

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

async function generatePost(topic, sources) {
  const prompt = `
Write a detailed blog post about "${topic}" for a San Diego-based construction company named CRM.
Do not include any controversial opinions. The post should focus on improving SEO for these four core services:
- Dumpster rental
- Excavation
- Demolition
- Concrete washouts

Use relevant keywords throughout to help us rank higher on Google for these services in San Diego.

Incorporate the following context from trending web results:
\n\n${sources.join("\n\n")}

Format the post with:
- An H1 title
- At least 3 H2 subheadings
- A conclusion with a strong CTA encouraging readers to book a free estimate.
`;

  const res = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: [{ role: 'user', content: prompt }],
  });

  return res.choices[0].message.content;
}

module.exports = generatePost;