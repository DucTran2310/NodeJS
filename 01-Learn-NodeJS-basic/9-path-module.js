const path = require('path')

// `path.sep` là một thuộc tính của module `path` trong Node.js, 
// được sử dụng để trả về dấu phân cách thư mục phù hợp với hệ điều hành đang sử dụng. 
// Điều này đảm bảo rằng mã có thể hoạt động trên nhiều hệ điều hành khác nhau mà không cần phải quan tâm đến dấu phân cách của từng hệ thống.

// Ví dụ, đối với hệ thống Windows, `path.sep` trả về dấu `\` để phân cách giữa các thư mục. 
// Tuy nhiên, trên các hệ thống Unix và macOS, dấu `/` được sử dụng để phân cách thư mục.

// Vì vậy, với `path.sep`, mã có thể được viết một cách chung chung mà không cần phải quan tâm 
// đến hệ điều hành cụ thể đang sử dụng.
console.log(path.sep)

const filePath = path.join('/content/', 'subfolder', 'test.txt')
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)

// Tạo một đường dẫn tương đối đến thư mục gốc của ứng dụng
const relativePath = '../..';

// Biến đổi đường dẫn tương đối thành đường dẫn tuyệt đối bằng path.resolve()
const absolutePath = path.resolve(relativePath);

console.log(`The absolute path is: ${absolutePath}`);