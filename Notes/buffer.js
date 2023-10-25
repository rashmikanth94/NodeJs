var buffer = require('buffer');

//allocate memory to buffer
buf = Buffer.alloc(256);

var data =  buf.write('Hello');

console.log(data);


var buf1 = Buffer.from('12345');

var buf2 = Buffer.from('HELLO');

buf2.copy(buf1,2,2) // buffer.copy(buffer, targetStart, sourceStart)

console.log(buf1.toString());
