console.log(process.argv)

/* 

process.argv returns a list 

[
  '/usr/local/bin/node',
  '/Users/rashmikantaparida/Desktop/NodeJs/DynamicInput'
]

*/

const [, , n]=process.argv;
console.log(n);

const [, , a,b] = process.argv;

console.log(a,b);