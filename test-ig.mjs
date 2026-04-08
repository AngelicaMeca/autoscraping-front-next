async function testPicuki() {
  console.log('Testing Picuki Scrape...');
  try {
    const res = await fetch('https://www.picuki.com/profile/autoscraping', {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36',
      },
    });
    console.log('Picuki status:', res.status);
    const html = await res.text();
    // Parse the HTML to find posts
    // Posts are usually in a ul.box-photos > li
    const fs = await import('fs');
    fs.writeFileSync('picuki.html', html);
    console.log('Saved to picuki.html');
  } catch (err) {
    console.error('Picuki Scrape failed:', err);
  }
}
testPicuki();
