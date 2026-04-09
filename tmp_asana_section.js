const https = require('https');

const data = JSON.stringify({
  data: {
    name: 'test - in Prospeccion',
    notes: 'test notes',
    projects: ['1207932529612201'],
    memberships: [
      {
        project: '1207932529612201',
        section: '1212522172385195'
      }
    ],
    assignee: '1200406301286304'
  },
});

const options = {
  hostname: 'app.asana.com',
  port: 443,
  path: '/api/1.0/tasks',
  method: 'POST',
  headers: {
    'Authorization': 'Bearer YOUR_ASANA_TOKEN',
    'Content-Type': 'application/json',
    'Content-Length': data.length
  }
};

const req = https.request(options, (res) => {
  let body = '';
  res.on('data', d => body += d);
  res.on('end', () => console.log('Status:', res.statusCode, 'Body:', body));
});

req.on('error', error => console.error(error));
req.write(data);
req.end();
