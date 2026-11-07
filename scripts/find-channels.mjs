async function getChannelId(handle) {
  try {
    const res = await fetch(`https://www.youtube.com/@${handle}`, {
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' }
    });
    const text = await res.text();
    const m = text.match(/"channelId":"(UC[a-zA-Z0-9_-]{20,24})"/);
    return { handle, id: m ? m[1] : null };
  } catch (err) {
    return { handle, error: err.message };
  }
}

const handles = ['ICLNoticias', 'MeteoroBrasil', 'canalmeio', 'UOLNoticias', 'cartacapital', 'G1'];
const results = await Promise.all(handles.map(getChannelId));
console.log(JSON.stringify(results, null, 2));
