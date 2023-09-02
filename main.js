const DoublyLinkedList = require('./DoublyLinkedList');

const myList = new DoublyLinkedList();

myList.push(1);
myList.push(2);
myList.push(3);

console.log(myList.pop()); // Outputs: 3

myList.unshift(0);
console.log(myList.shift()); // Outputs: 0

myList.insert(1, 2.5);
console.log(myList.get(1)); // Outputs: 2.5

myList.set(0, 0.5);
console.log(myList.get(0)); // Outputs: 0.5

console.log(myList.remove(1)); // Outputs: true

// You can continue testing the other methods here