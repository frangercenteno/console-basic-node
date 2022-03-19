const fs = require('fs');

// Clear console when node is run
console.clear();

console.log('=============');
console.log('   5 Table   ')
console.log('=============');

const base = 5
let output = '';

for (let index = 1; index <= 10; index++) {
  output += `${base} * ${ index } = ${ index * 5 }\n`;  
}

fs.writeFile(`table-${base}.txt`, output, (err) => {
  if(err) throw err;

  console.log(`Created Table ${base}`);
});