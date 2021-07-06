// let util = require('util')
const http = require('http');

// class Foo {
//   constructor() {
//     this.a = 42;
//   }
//
//   bar(delay, callback) {
//     console.log(111, callback);
//     setTimeout(() => {
//       callback(null, this.a)
//     }, delay);
//   }
//
//   qwe() {
//     return new Promise(res => {
//       setTimeout(() => {
//         res(this.a);
//       }, 1000);
//     })
//   }
// }
//
// const foo = new Foo();
// const bindBar = util.promisify(foo.bar).bind(foo);
//
// (async function () {
//   // foo.a = 10;
//   const a = await bindBar(1).then((a, b) => {
//     return a + 5;
//   });
//   console.log(222, a);
//
//   // bindBar().then(function (a) {
//   //   console.log(a)
//   // });
//
//
//   // const qwe = await foo.qwe().then((a) => a);
//   // console.log(222, qwe);
// })();

// const hostname = '127.0.0.1';
// const port = 4004;
//
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello World');
// });
//
// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

const qwe = {
  "name": 1,
  "items": [{
    "name": 2,
    "items": [{ "name": 3 }, { "name": 4 }]
  }, {
    "name": 5,
    "items": [{ "name": 6 }]
  }]
};
console.log([1,2,3].join(''));
console.log([1,2,3].join(''));

