async function getChannelRss(handle) {
  try {
    const res = await fetch(`https://www.youtube.com/@${handle}`, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' },
    });
    const html = await res.text();
    const m = html.match(/application\/rss\+xml" title="RSS" href="([^"]+)"/);
    if (!m) return { handle, error: 'RSS link not found' };
    const rssUrl = m[1];
    
    // Fetch the RSS feed
    const rssRes = await fetch(rssUrl);
    const rssXml = await rssRes.text();
    const entryMatch = rssXml.match(/<entry>([\s\S]*?)<\/entry>/);
    if (!entryMatch) return { handle, rssUrl, latest: null };
    
    const entry = entryMatch[1];
    const titleMatch = entry.match(/<title>([^<]+)<\/title>/);
    const pubMatch = entry.match(/<published>([^<]+)<\/published>/);
    const linkMatch = entry.match(/<link rel="alternate" href="([^"]+)"/);

    return {
      handle,
      rssUrl,
      latestVideo: {
        title: titleMatch ? titleMatch[1] : '',
        published: pubMatch ? pubMatch[1] : '',
        link: linkMatch ? linkMatch[1] : '',
      },
    };
  } catch (err) {
    return { handle, error: err.message };
  }
}

const handles = ['ICLNoticias', 'MeteoroBrasil', 'canalmeio', 'cartacapital'];
for (const h of handles) {
  const data = await getChannelRss(h);
  console.log(JSON.stringify(data, null, 2));
}
