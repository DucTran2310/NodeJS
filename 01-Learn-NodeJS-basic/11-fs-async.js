// const { readFile, writeFile } = require('fs')

// Trong đoạn mã JavaScript này, phương thức `readFile` 
// chứa một callback được thực thi trong quá trình bất đồng bộ, 
// có nghĩa là nó sẽ không chờ cho đến khi việc đọc tệp tin hoàn tất, 
// mà thay vào đó, tiếp tục thực thi các dòng mã tiếp theo. 
// Do đó, dòng `console.log('starting next task')` 
// sẽ được thực thi ngay lập tức sau khi phương thức `readFile` được gọi.

// console.log('start')
// readFile('./content/first.txt', 'utf8', (err, result) => {
//   if (err) {
//     console.log(err)
//     return
//   }
//   const first = result
//   readFile('./content/second.txt', 'utf8', (err, result) => {
//     if (err) {
//       console.log(err)
//       return
//     }
//     const second = result
//     writeFile(
//       './content/result-async.txt',
//       `Here is the result : ${first}, ${second}`,
//       (err, result) => {
//         if (err) {
//           console.log(err)
//           return
//         }
//         console.log('done with this task')
//       }
//     )
//   })
// })
// console.log('starting next task')

// sử dụng async await
const { readFile, writeFile } = require('fs');
// `promisify` là một phương thức trong module `util` của Node.js, 
// nó được sử dụng để chuyển đổi các hàm bất đồng bộ truyền thống sử dụng callback thành các hàm trả về Promise.
const { promisify } = require('util');
const readFileAsync = promisify(readFile);
const writeFileAsync = promisify(writeFile);

console.log('start');
(async () => {
    try {
        const first = await readFileAsync('./content/first.txt', 'utf8');
        const second = await readFileAsync('./content/second.txt', 'utf8');
        await writeFileAsync('./content/result-async.txt', `Here is the result : ${first}, ${second}`);
        console.log('done with this task');
    } catch (err) {
        console.log(err);
    }
    console.log('starting next task');
})();