import { createServer } from 'http';
import fs from 'fs';

const server = createServer((req, res) => {
  res.setHeader('Content-type', 'text/html');

  if (req.url === '/styles.css') {
    res.setHeader('Content-type', 'text/css');
    fs.readFile('./public/styles.css', (err, data) => {
      if (err) {
        console.log(err);
        res.end();
      } else {
        res.end(data);
      }
    });
    return;
  }

  let path = './views/';
  switch(req.url) {
    case '/': 
      path += 'index.html';
      res.statusCode = 200;
      break;
    case '/about':
      path += 'about.html'
      res.statusCode = 200;
      break;
    case '/about-me':
      res.statusCode = 301;
      res.setHeader('Location', '/about');
      res.end();
      break
    case '/contact-me':
      path += 'contact-me.html'
      res.statusCode = 200;
      break;
    case '/contact':
      res.statusCode = 301;
      res.setHeader('Location', '/contact-me')
      res.end();
      break;
    default:
      path += '404.html'
      res.statusCode = 404;
      break; 
  }

  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.end(data);
    }
  });
});

server.listen(3000, 'localhost', () => {
  console.log('Listening for requests on port 3000');
});