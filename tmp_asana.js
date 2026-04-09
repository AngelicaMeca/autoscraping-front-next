const https = require('https');

const data = JSON.stringify({
  data: {
    name: 'test - mock user',
    notes: 'test notes',
    projects: ['1207932529612201'],
    assignee: '1200406301286304',
    custom_fields: {
      '1207924907815057': '1211497116209656',
      '1208364656285594': '1208364976463842',
      '1211494644261322': '1211494644261324',
      '1211494644908422': '1211494644908426',
      '1211494644908452': 'mock user',
      '1211494644908454': 'mock@example.com',
      '1211494644908456': '12345678',
    },
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
