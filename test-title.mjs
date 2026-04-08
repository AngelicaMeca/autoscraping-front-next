async function getOg() {
  try {
    const res = await fetch('https://www.instagram.com/reel/DUQ0Y2VjjCD/');
    const html = await res.text();
    const descMatch = html.match(/<meta property="og:title" content="([^"]+)"/);
    if(descMatch) {
       console.log("FULL OG:", descMatch[1]);
    }
  } catch(e) {}
}
getOg();
