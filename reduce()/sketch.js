const fs = require('fs')

const output = fs.readFileSync('data.txt', 'utf8')
  .trim()
  .split('\n')
  .map(line => line.split('\t'))
  .reduce((customers, line) => {
    /*  reduce takes a callback function with 2 values.
     *  the accumulator(first value) will accumulate the return values.
     *  callback sets the accumulator, takes current value @ current index
     *  either creates an empty array or inserts mark/nikita array.
     *  then pushes data into the array of objects.
     */
    customers[line[0]] = customers[line[0]] || []
    customers[line[0]].push({
      name: line[1],
      price: line[2],
      quantity: line[3]
    })
    return customers
},{})



//this is the object we created using functional programming.
{
  'mark johansson': [
    { name: 'waffle iron', price: '80', quantity: '2'},
    { name: 'blender', price: '200', quantity: '1'}
    { name: 'knife', price: '10', quantity: '4'}
  ],
  'Nikita Smith': [
    { name: 'waffle iron', price: '80', quantity: '1'},
    { name: 'knife', price: '10', quantity: '2'},
    { name: 'pot', price: '20', quantity: '3'},
  ]
}
