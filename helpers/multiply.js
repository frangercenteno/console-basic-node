const fs = require('fs');
require('colors');

const multiply = async (base = 0, until = 0, list) => {
  try {
    let output = '';
    let outputPrint = '';


    for (let index = 1; index <= until; index++) {
      output += `${base} ${ 'x'.blue } ${index} = ${index * until}\n`;
      outputPrint += `${base} x ${index} = ${index * until}\n`;

    }

    if (list) {
      console.log('============='.cyan);
      console.log(`   ${base} Table   `.green)
      console.log('============='.cyan);
      console.log(output);
    }

    fs.writeFileSync(`./out/table-${base}.txt`, outputPrint);
    console.log(`table-${base}.txt`.rainbow ,"File created")
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  multiply
}