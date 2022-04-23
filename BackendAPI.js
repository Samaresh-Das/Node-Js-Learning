const http = require('http');

const handleGetRequest = (req, res) => {
  const options = {
    hostname: 'static-assets.codecademy.com',
    path: '/Courses/Learn-Node/http/data.json',
    method: 'GET',
    hostname: '/Courses/Learn-Node/http/data.json',
    headers: {
      'Content-Type': 'application/json'
    }
  }
  
  const request = http.request(options, response => {
    let data = '';

    // Aggregate data chunks as they come in from the API
    response.on('data', (chunk) => {
      data += chunk;
    });

    // Handle the end of the request
    response.on('end', () => {
      console.log("Retrieved Data:", data);
      res.end(data);
    });
  });

  request.end();
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

/*Just like with databases, sometimes servers need to make requests to external APIs to accomplish some goal. There are a variety of reasons to reach out to external services. Some common situations are payment processing, service integrations with other products, webhooks, and so on.

There are a few methods provided by the http module that facilitate making HTTP requests to external services. One of these methods is the request() method. The request() method takes two arguments; it takes a configuration object containing details about the request as well as a callback to handle the response.

const options = {
  hostname: 'example.com',
  port: 8080,
  path: '/projects',
  method: 'GET',
  headers: {
    'Content-Type': 'application/json'
  }
}
 
const request = http.request(options, res => {
  // Handle response here
})

For convenience, the http module provides a convenient method for making GET requests in the form of the get() method. This method differs from the request() method in that it automatically sets the method to GET and calls req.end() automatically.

The fact that servers can make HTTP requests to other services opens up possibilities for different architecture designs for back-ends. One example of an architecture made possible by this ability is microservice architectures. Microservice architectures divide needs into separate lightweight services that communicate via HTTP over a network. As such, a single application can be comprised of dozens of microservices, which could all be written in different programming languages, but work together by communicating over HTTP.*/