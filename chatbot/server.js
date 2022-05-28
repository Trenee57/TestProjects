const http = require('http');
const fs = require('fs')
const url = require('url');
const querystring = require('querystring');
const figlet = require('figlet')

const server = http.createServer((req, res) => {
  let readWriteHead = (fileName, contentType) => {
    fs.readFile(fileName, function(err, data) {
      res.writeHead(200, {'Content-Type': contentType});
      res.write(data);
      res.end();
    });
  }
  const page = url.parse(req.url).pathname;
  const params = querystring.parse(url.parse(req.url).query);
  console.log(page);
  
  switch (page){
    case '/' :
      readWriteHead('index.html', 'text/html');
      break;
    // case '/otherpage' :
    //   readWriteHead('otherpage.html', 'text/html');
    //   break;
    // case '/otherotherpage' :
    //   readWriteHead('otherotherpage.html', 'text/html');
    //   break;
    case '/css/style.css' :
      fs.readFile('css/style.css', function(err, data) {
        res.write(data);
        res.end();
      });
      break;
    case '/js/main.js' :
      readWriteHead('js/main.js', 'text/javascript');
      break;
    case '/api' :
      let personName = 'Balance Check';
      let personStatus = 'Transfer';
      let personOccupation = 'Deposit';
    //   let flipRes = Math.ceil(Math.random() * 2) === 1 ? 'heads' : 'tails'
      let objToJson = {
        name: personName,
        status: personStatus,
        currentOccupation: personOccupation,
      }
      // API Query Parameter
      if (params['person'] == 'leon'){
          res.writeHead(200, {'Content-Type': 'application/json'});
          let objToJson = {
            name: "leon",
            status: "Boss Man",
            currentOccupation: "Baller",
          }
          res.end(JSON.stringify(objToJson));
      }else{
          res.writeHead(200, {'Content-Type': 'application/json'});
          res.end(JSON.stringify(objToJson));
      }   
      break;
    // Error 404 Figlet
    default:
      figlet('404!!', function(err, data) {
        if (err) {
            console.log('Something went wrong...');
            console.dir(err);
            return;
        }
        res.write(data);
        res.end();
      })
  }
});

server.listen(8000);