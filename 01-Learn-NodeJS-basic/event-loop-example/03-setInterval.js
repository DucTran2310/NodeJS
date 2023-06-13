setInterval(() => {
  console.log('hello world')
}, 2000)
console.log(`I will run first`)
// process stays alive unless
// Kill Process CONTROL + C
// unexpected error
// setInterval sẽ vô hàng đợi và nó sẽ thực hiện các tác vụ sau, sau đó quay lại thực hiện bên trong setInterval