// Đoạn code trên tạo một server HTTP đơn giản sử dụng module `http` của Node.js, 
// khi có yêu cầu HTTP đến, server sẽ trả về nội dung của file `big.txt` trong thư mục `content`

// Để hiển thị nội dung của file `big.txt`, đoạn code tạo một đối tượng `ReadStream` của module `fs`, 
// và sử dụng phương thức `pipe` để ghi dữ liệu từ `ReadStream` vào response của server. 
// `pipe` là một phương thức của đối tượng `Stream`, 
// được sử dụng để đổ dữ liệu từ một stream này sang stream khác.

// Khi stream được tạo (bằng phương thức `fs.createReadStream`), 
// server sẽ gắn `ReadStream` này vào response sử dụng `pipe`. 
// Khi có dữ liệu được ghi vào `ReadStream`, nó sẽ tự động được chuyển đến response của server. 
// Việc này loại bỏ việc đọc và ghi toàn bộ nội dung của file vào bộ nhớ trong khi vẫn duy trì tính năng hiển thị nội dung của file.

// Nếu có lỗi khi đọc file, server sẽ gọi sự kiện `error` và ghi lỗi vào response. 
// Chú ý rằng, phương thức `end` của response được gọi để đánh dấu kết thúc response 
// và trả về cho client.

// Nếu bạn sử dụng phương thức đồng bộ `fs.readFileSync` (bị tắt comment trong mã), 
// Node.js sẽ đọc toàn bộ nội dung của file vào bộ nhớ (vì phương thức này trả về nội dung của file), 
// và sau đó server mới trả về nội dung đó cho client. 
// Điều này gây tốn tài nguyên (RAM) và thời gian chờ đợi cho việc đọc file.


const http = require('http')
const fs = require('fs')

http
  .createServer(function (req, res) {
    // const text = fs.readFileSync('./content/big.txt', 'utf8')
    // res.end(text)
    const fileStream = fs.createReadStream('./content/big.txt', 'utf8')
    fileStream.on('open', () => {
      fileStream.pipe(res)
    })
    fileStream.on('error', (err) => {
      res.end(err)
    })
  })
  .listen(5000)