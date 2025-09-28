const axios = require('axios');

// Debug: Check what environment variables are available
const availableApiEnvVars = Object.keys(process.env).filter(key => key.includes('API'));
console.log('Available env vars:', availableApiEnvVars);
console.log('GROQ_API_KEY exists:', Boolean(process.env.GROQ_API_KEY));
console.log('GROK_API_KEY exists:', Boolean(process.env.GROK_API_KEY));

const groqKey = process.env.GROQ_API_KEY || process.env.GROK_API_KEY;

if (!groqKey) {
  throw new Error('GROQ_API_KEY (or GROK_API_KEY) is missing. Check your .env file.');
}

const model = process.env.GROQ_MODEL || process.env.GROK_MODEL || 'llama-3.3-70b-versatile';
const endpoint = process.env.GROQ_API_URL || process.env.GROK_API_URL || 'https://api.groq.com/openai/v1/chat/completions';

const temperatureEnv = process.env.GROQ_TEMPERATURE ?? process.env.GROK_TEMPERATURE;
const temperature = Number.isFinite(Number(temperatureEnv)) ? Number(temperatureEnv) : 0.7;
const maxTokensEnv = process.env.GROQ_MAX_TOKENS || process.env.GROK_MAX_TOKENS;
const maxTokens = Number.isFinite(Number(maxTokensEnv)) ? Number(maxTokensEnv) : 1024;
const topPEnv = process.env.GROQ_TOP_P ?? process.env.GROK_TOP_P;
const topP = Number.isFinite(Number(topPEnv)) ? Number(topPEnv) : 1;

async function generatePost(topic, sources) {
  const prompt = `
Write a detailed blog post about "${topic}" for CRM, a San Diego-based asphalt paving and site work contractor.
Keep the narrative focused strictly on asphalt paving services such as driveway paving, parking lot paving, asphalt resurfacing, sealcoating, grading, and drainage improvements.
We want to boost SEO for asphalt paving in San Diego County, so work in localized keywords and neighborhood references naturally.
Use the following research snippets to ground the article with timely insights:

${sources.join('\n\n')}

Structure:
- H1 headline highlighting asphalt paving expertise
- At least three H2 sections (for example: benefits, process, maintenance tips, compliance)
- Bulleted or numbered lists where helpful
- Closing paragraph with a strong CTA inviting readers to request a paving estimate or on-site assessment from CRM.

Tone: authoritative, professional, and approachable. Avoid controversial opinions and keep the copy service-focused.
`;

  try {
    const response = await axios.post(
      endpoint,
      {
        model,
        messages: [
          {
            role: 'system',
            content: 'You are an experienced marketing copywriter for a family-owned asphalt paving company in San Diego. Write persuasive, local-SEO-optimized content that builds trust and highlights paving expertise.'
          },
          { role: 'user', content: prompt }
        ],
        temperature,
        top_p: topP,
        max_completion_tokens: maxTokens,
        max_tokens: maxTokens
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${groqKey}`
        }
      }
    );

    const message = response.data?.choices?.[0]?.message?.content;

    if (!message) {
      throw new Error('Groq API response did not include message content.');
    }

    return message.trim();
  } catch (error) {
    const status = error.response?.status;
    const data = error.response?.data;
    console.error('Groq API error detail:', status, JSON.stringify(data, null, 2));
    const apiMessage = data?.error?.message || error.message;
    throw new Error(`Groq API request failed: ${apiMessage}`);
  }
}

module.exports = generatePost;
