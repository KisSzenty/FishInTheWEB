const fs = require('fs');

module.exports = class PostHandler {
  constructor(req, res) {
    this.allData = '';

    req.on('data', (chunk) => {
      this.allData += chunk;
    });

    req.on('end', () => {
      this.allData = JSON.parse(this.allData);

      fs.readFile('./json/users.json', 'utf8', (err, jsonString) => {
        const users = JSON.parse(jsonString);
        users.push(this.allData);

        fs.writeFile('./json/users.json', JSON.stringify(users, null, 4), 'utf8', (err) => {
          res.end('Köszi.');
        });
      });

      console.log(this.allData);
    });
  }
}
