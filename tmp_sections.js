const https = require('https');

const options = {
  hostname: 'app.asana.com',
  port: 443,
  path: '/api/1.0/projects/1207932529612201/sections',
  method: 'GET',
  headers: {
    'Authorization': 'Bearer YOUR_ASANA_TOKEN',
  }
};

const req = https.request(options, (res) => {
  let body = '';
  res.on('data', d => body += d);
  res.on('end', () => console.log(JSON.stringify(JSON.parse(body), null, 2)));
});

req.on('error', error => console.error(error));
req.end();
