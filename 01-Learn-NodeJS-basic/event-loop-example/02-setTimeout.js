// started operating system process
console.log('first')
setTimeout(() => {
  console.log('second')
}, 0)
console.log('third')
// completed and exited operating system process
// Điều này xảy ra bởi vì hàm setTimeout() được sử dụng để thiết lập một tác vụ chạy bất đồng bộ 
// (asynchronously) sau một khoảng thời gian nhất định. 
// Khi bạn gọi hàm setTimeout() và truyền giá trị là 0 cho tham số thứ hai, 
// điều này có nghĩa là tác vụ được lên lịch sẽ được thực thi ngay lập tức, 
// nhưng nó sẽ được đặt vào trong một hàng đợi (queue) bất đồng bộ để chờ thời gian xử lý 
// và sự kiện khác.

// Trong trường hợp của bạn, lệnh console.log("first") được thực thi đầu tiên 
// (vì nó nằm ở đầu file). Sau đó, tác vụ của hàm setTimeout() được đặt vào queue bất đồng bộ 
// và chờ để được thực thi trong tương lai. 
// Tiếp theo, lệnh console.log("third") được thực thi, in ra chuỗi "third". 
// Sau đó, khi tác vụ của hàm setTimeout() đã được hoàn thành, 
// nó sẽ được đưa vào hàng đợi callback và được thực thi ngay sau đó. 
// Do đó, chuỗi "second" sẽ được in ra cuối cùng.