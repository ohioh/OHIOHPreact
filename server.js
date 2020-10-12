/*
Copyright 2018 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
const express = require('express');
const app = express();

// This serves static files from the specified directory
app.use(express.static(__dirname));

const server = app.listen(8081, () => {

  const host = server.address().address;
  const port = server.address().port;

  console.log('App listening at http://%s:%s', host, port);
});

// // In production, the app should be served over HTTPS
// const path = require('path');
// const express = require('express');
// const http = require('http');

// const app = express();

// // Change this, if required
// const port = 8080;

// app.all('*', (request, response) => {
//   if (request.url === '/favicon.ico' || request.url === '/robots.txt') {
//     return;
//   } else {
//     return response.sendFile(path.join(`${__dirname}/${request.url}`));
//   }
// });

// const httpServer = http.createServer(app).listen(port, () => console.log(`HTTP Server is up on ${port}`));