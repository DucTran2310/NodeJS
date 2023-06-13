// `Mind grenade` (hay là `mind-grenade`) không phải là một thuật ngữ chính thức trong Node.js. 
// Cụm từ này thường được sử dụng để chỉ đến một khối lớn của mã hoặc hàm có quá nhiều chức năng 
// và gây ra khó khăn trong việc lập trình và bảo trì trong dự án.

// Khi để một `mind grenade` tồn tại trong dự án, sẽ trở nên khó khăn khi phải thực hiện các thay đổi 
// hoặc cải tiến, và việc thêm tính năng mới có thể dẫn đến các vấn đề phức tạp khó xử lý. 
// Ngoài ra, việc đọc và hiểu mã cũng sẽ trở nên khó khăn đối với các lập trình viên mới tham gia vào dự án.

// Để tránh `mind grenades` trong dự án Node.js của bạn, 
// bạn nên tuân theo một số quy tắc lập trình chung như sử dụng tên biến và 
// hằng số đúng quy tắc và tránh sử dụng các biến toàn cục. 
// Bạn cũng nên cố gắng phân chia mã của mình thành các chức năng nhỏ hơn và dễ quản lý hơn. 
// Trong Node.js, bạn có thể sử dụng các module để phân chia mã thành các phần nhỏ hơn và có tính tương tác thấp hơn, 
// giúp làm cho mã dễ đọc và bảo trì hơn.

const num1 = 5
const num2 = 10

function addValues() {
  console.log(`the sum is : ${num1 + num2}`)
}

addValues()