// create a nodejs server that prints hello word

const http = require("http"); // nodejs inbuilt package
const myMoudles = require("./myCustomModule"); // my own custom module

http
  .createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/html" }); // html tag
    // calling my own custom module methods
    const date = myMoudles.myDate();
    const myTime = myMoudles.myTime();
    res.write(
      "<h1> Hello , Basanti</h1> <p>" + date + "</p><p>" + myTime + "</p>"
    ); // body
    res.end();
  })
  .listen(5555);

console.log("App is running on port 5555");

// localhost: 5555 in browser // run the file
