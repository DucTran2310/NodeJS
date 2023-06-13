const { createReadStream } = require('fs')

// default 64kb
// last buffer - remainder
// highWaterMark - control size
// const stream = createReadStream('./content/big.txt', { highWaterMark: 90000 })
// const stream = createReadStream('../content/big.txt', { encoding: 'utf8' })

// Trong Node.js, khi bạn đọc một file sử dụng phương thức `createReadStream` 
// như trong đoạn mã của bạn và sử dụng sự kiện "data" để lắng nghe dữ liệu của stream, 
// khi stream đọc dữ liệu từ file, nó sẽ đọc theo từng mảnh nhỏ gọi là "chunks" (đoạn). 
// Mỗi chunk là một buffer, một đối tượng trong Node.js được sử dụng để đại diện cho một mảnh dữ liệu nhị phân. 
// Để hiển thị nội dung của từng chunk dưới dạng chuỗi, 
// bạn cần chuyển đổi nó sang giá trị chuỗi bằng cách sử dụng phương thức `toString()`.
// const stream = createReadStream('./content/big.txt', { encoding: 'utf8' })
const stream = createReadStream('./content/big.txt')

stream.on('data', (result) => {
  console.log(result)
})
stream.on('error', (err) => console.log(err))