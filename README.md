Steps to run the microservices - 
  1. Clone the repository and open in your choice of IDE.
  2. Open a new terminal on the microservice folder.
  3. Run 'npm install' command to install the required npm dependencies.
  4. Run 'npm start' command to start the NodeJS server (runs with --watch enabled).
  5. Open https://localhost:3000 on your browser to use the microservice.

<br/>
DESCRIPTION : 
<br/>
<br/>
This is a list of microservices which have been completed as a part of FreeCodeCamp Backend and API development challenge. Below is the list of services and their description - 

1. Timestamp Microservice -
     * A request to /api/:date? with a valid date returns a JSON object with a unix key that is a Unix timestamp of the input date in milliseconds (as type Number)
     * A request to /api/:date? with a valid date returns a JSON object with a utc key that is a string of the input date in the format: Thu, 01 Jan 1970 00:00:00 GMT
     * A request to /api/1451001600000 returns { unix: 1451001600000, utc: "Fri, 25 Dec 2015 00:00:00 GMT" }
     * If the input date string is invalid, the API returns an object having the structure { error : "Invalid Date" }
     * An empty date parameter returns the current time in a JSON object with a unix and UTC keys.

2. Header Parser -
     * A request to /api/whoami returns a JSON object with your IP address in the ipaddress key, your preferred language in the language key and your software in the software key.
  
3. URL Shortener Microservice -
     * You can POST a URL to /api/shorturl and get a JSON response with original_url and short_url properties. Here's an example: { original_url : 'https://youtube.com', short_url : 1}.
     * When you visit /api/shorturl/<short_url>, you will be redirected to the original URL.
     * If you pass an invalid URL that doesn't follow the valid http://www.example.com format, the JSON response will contain { error: 'invalid url' }.
  
4. File Metadata Microservice -
     * When you submit a file, you receive the file name, type, and size in bytes within the JSON response.
