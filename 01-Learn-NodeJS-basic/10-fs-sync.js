const { readFileSync, writeFileSync } = require('fs')
console.log('start')
// Đọc tệp tin đồng bộ
const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

// Ghi nội dung vào tệp tin đồng bộ
// flag: 'a': sẽ ghi tiếp vào, flag: 'w' sẽ ghi đè lên cái cũ
writeFileSync(
  './content/result-sync.txt',
  `Here is the result : ${first}, ${second}`,
  { flag: 'a' }
)
console.log('done with this task')
console.log('starting the next one')