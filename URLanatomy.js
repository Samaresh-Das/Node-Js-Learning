const http = require('http');

const url = 'http://example.com/users/25/projects?type=personal&month=january';

// Make a GET request with the URL and process the response.
http.get(url, (res) => {
  let data = '';
  
  res.on('data', (chunk) => {
    data += chunk;
  });
  
  res.on('end', () => {
    console.log(data);
  });
});

/* Setting up a Server with HTTP
The Anatomy of the URL

HTTP servers have to break down requests into their constituent parts to effectively process them and provide adequate responses. In that same vein, designing an API (Application Programming Interface) with endpoints intended to process specific requests in certain ways requires an understanding of the semantics of these requests, which are ultimately embodied within a URL (Uniform Resource Locator).

A URL can provide a great deal of information about a request and how it is expected to behave. The image below provides a breakdown of the different parts of a URL and their meanings. A URL is made up of the following parts:

1) Protocol: The protocol of the URL denotes what protocol is being used for this particular resource. For instance, a URL could have a protocol of HTTP or HTTPS.

2) Domain: The domain of the URL is a unique reference that identifies a website on the Internet.

3) Path: The path refers to a file or directory on the web server. Paths oftentimes contain path parameters that APIs can process as a way to provide additional data when processing. For instance, to request a resource for a user with ID number 15, we can add the user’s ID to the URL like this: /users/15.

4) Query: The query is commonly found on pages that contain dynamic content. Queries are prefixed by a ? and appear at the end of a URL. Queries can be comprised of multiple key/value pairs, separated by a &, with each key being assigned its corresponding value using a =. Queries are often used in conjunction with GET requests to pass filter parameters in order to provide specificity for the requested resource. For instance, to request all users that are active members, we could append a key/value pair of active=true to the end of our URL like this: /users?active=true.
*/