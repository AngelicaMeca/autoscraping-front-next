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
  res.on('end', () => {
    const data = JSON.parse(body);
    const pros= data.data.find(s => s.name.toLowerCase().includes('prospecci'));
    console.log('Prospeccion Section ID is:', pros ? pros.gid : 'NOT FOUND');
  });
});

req.on('error', error => console.error(error));
req.end();
