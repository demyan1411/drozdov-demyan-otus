// import http from 'http';
//
// const hostname = '127.0.0.1';
// const port = 4004;
//
// const server = http.createServer((req, res) => {
//   let body = '';
//   req.setEncoding('utf8');
//   req.on('data', (chunk) => {
//     console.log(321, chunk);
//     body += chunk;
//   });
//   req.on('end', () => {
//     try {
//       const data = JSON.stringify(JSON.parse(body));
//       // Write back something interesting to the user:
//       res.write(data);
//       res.write(typeof data);
//       res.end();
//     } catch (er) {
//       // uh oh! bad json!
//       res.statusCode = 400;
//       return res.end(`error: ${er.message}`);
//     }
//   });
//
//   // req.on('data', () => {
//   //   console.log(321);
//   // }).on('end');
//   // res.statusCode = 200;
//   // res.setHeader('Content-Type', 'text/plain');
//   // res.end('Hello World');
// });
//
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

// var input = "";

// process.stdin.on('data', (data) => {
//   input += (data+"\n");
//   // console.log(111, data);
//   // const chunk = data;
//   // if (chunk !== null) {
//   //   process.stdout.write(`data: ${chunk}`);
//   //   // process.end();
//   // }
// });
// process.stdin.on("end", function () {
//   // When we reach here, we are done with inputting things according to our wish.
//   // Now, we can do the processing on the input and create a result.
//   process.stdout.write(input);
// });

// process.stdin.on('end', () => {
//   console.log(666);
//   process.stdout.write('end');
// });

// process.stdin.pipe(process.stdout);

// process.stdin.on("data", function(data) {
//   const chunk = data;
//   if (chunk !== null) {
//     process.stdout.write(`data: ${chunk}`);
//     // process.end();
//   }
// });
//
// process.stdin.emit('data', 'abc');

// process.st

// function qwe (ads) {
//   console.log(111);
// }
// process.stdin.pipe(qwe);


////////////////////////////////

console.log(process.argv);
// console.log(1+1);
