const {readFile} = require('fs')

console.log('started a first task')

// CHECK FILE PATH
// Hàm "readFile()" được sử dụng để đọc nội dung của tệp "first.txt" trong thư mục "content". 
// Lưu ý rằng tác vụ đọc tệp dữ liệu được thực hiện "phi đồng bộ" (asynchronously). 
// Khi Node.js gặp một tác vụ phi đồng bộ, nó sẽ thực hiện các tác vụ tiếp theo 
// và chỉ xử lý tác vụ phi đồng bộ ("non-blocking") sau khi nó hoàn thành.
readFile('./content/first.txt', 'utf8', (err, result) => {
  if (err) {
    console.log('ERROR', err)
    return
  }

  console.log('RESULT', result)
  console.log('complete first task')
})

console.log('starting next task')

// việc đọc file là bất đồng bộ nên nó sẽ chạy tiếp các dòng ở dưới khi nào việc đọc file xong nó 
// sẽ quay lại xử tiếp bên trong
