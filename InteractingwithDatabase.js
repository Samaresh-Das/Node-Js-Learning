const http = require('http');
const fs = require('fs');

// GET request handler
const handleGetRequest = (req, res) => {
 if (req.url === '/users') {
   // Loads the database and searches for data
   makeDatabaseRequest('users', (err, payload) => {
      if (err) {
        res.writeHeader(400);
        res.write("Error retrieving data");
      } else {
        // Process successful request
        console.log(payload);
        res.writeHeader(200, {"Content-Type": "application/json"});  
        res.write(JSON.stringify(payload));
      }
      res.end(); 
   });
 }
}

// Creates server instance
const server = http.createServer((req, res) => {
  const { method } = req;
 
  switch(method) {
    case 'GET':
      return handleGetRequest(req, res);
    default:
      throw new Error(`Unsupported request method: ${method}`);
  }
});

// Starts server listening on specified port
server.listen(4001, () => {
  const { address, port } = server.address();
  console.log(`Server is listening on: http://${address}:${port}`);
});

function makeDatabaseRequest(type, cb) {
  fs.readFile('./database.json', 'utf8', function (err, payload) {
    if (err) {
      cb(err, null); 
    } else {
      cb(null, JSON.parse(payload)[type]);
    }
  });
}

/*While we have encountered simple examples of servers handling HTTP requests, some requests require a bit more work than returning a simple string such as 'Hello World'. In real-world applications, servers are responsible for helping to persist and retrieve data, usually through interaction with a database.

Databases are remote resources to which the server must make a request. When this happens, the server making the request functions as the client, sending HTTP messages to the database server. Databases usually have their own Software Development Kits (SDKs) and Object-Relational Mapping (ORMs) that can be used to connect to them easily. But with the right information, requests could potentially be made in a raw form directly from your server using something like the HTTP .request() method.

As seen in the diagram above, a single server often does not represent the final destination in processing a request from a client. Instead, a client sends a request, which is then processed partially, generating a separate HTTP request from the server to the database. When received, the server waits for the database’s response and will ultimately relay that information as a response back to the original caller.*/