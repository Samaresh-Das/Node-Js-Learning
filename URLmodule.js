const url = require('url')

const URL_TO_PARSE = 'https://www.example.com/p/a/t/h?prop1=value1&prop2=value2';

const myUrl = new URL(URL_TO_PARSE)

const hostname = myUrl.hostname;
const pathname = myUrl.pathname;
const searchParams = myUrl.searchParams;


/* Typically, an HTTP server will require information from the request URL to accurately process a request. This request URL is located on the url property contained within the req object itself. To parse the different parts of this URL easily, Node.js provides the built-in url module. The core of the url module revolves around the URL class. A new URL object can be instantiated using the URL class as follows:

Once instantiated, different parts of the URL can be accessed and modified via various properties, which include:

    hostname: Gets and sets the host name portion of the URL.
    pathname: Gets and sets the path portion of the URL.
    searchParams: Gets the search parameter object representing the query parameters contained within the URL. Returns an instance of the URLSearchParams class.

You might recognize the URL and URLSearchParams classes if you are familiar with browser-based JavaScript. It’s because they are actually the same thing! These classes are defined by the WHATWG URL specification. Both the browser and Node.js implement this API, which means developers can have a similar developer experience working with both client and server-side JavaScript.

Using these properties, one can break the URL down into easily usable parts for processing the request.

While the url module can be used to deconstruct a URL into its constituent parts, it can also be used to construct a URL. Constructing a URL via this method relies on most of the same properties listed above to set values on the URL instead of retrieving them. This can be done by setting each of these values equal to a value for the newly constructed URL. Once all parts of the URL have been added, the composed URL can be obtained using the .toString() method.*/