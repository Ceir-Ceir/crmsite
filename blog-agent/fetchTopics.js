const axios = require('axios');

async function fetchTopics(query) {
  const res = await axios.get('https://api.search.brave.com/res/v1/web/search', {
    headers: {
      'Accept': 'application/json',
      'X-Subscription-Token': process.env.BRAVE_API_KEY
    },
    params: {
      q: query,
      count: 5
    }
  });

  return res.data.web.results.map(r => r.title + "\n" + r.description);
}

module.exports = fetchTopics;