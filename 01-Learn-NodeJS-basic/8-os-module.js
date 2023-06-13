const os = require('os')

// info about current user
const user = os.userInfo()
console.log('Info user:', user)

// method returns the system uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`)

const currentOS = {
  name: os.type(), //Giá trị trả về cho biết loại hệ điều hành đang chạy trên hệ thống
  release: os.release(), //trả về phiên bản của hệ điều hành đang chạy trên hệ thống
  totalMem: os.totalmem(), //trả về tổng số bộ nhớ của hệ thống tính bằng byte.
  freeMem: os.freemem(), //trả về số lượng bộ nhớ còn trống trên hệ thống tính bằng byte.
}
console.log('currentOS:', currentOS)