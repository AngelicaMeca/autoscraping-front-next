async function test() {
  try {
    const res = await fetch('https://www.instagram.com/p/DUQ0Y2VjjCD/media/?size=l');
    console.log(res.status, res.url);
  } catch (err) {
    console.log(err);
  }
}
test();
