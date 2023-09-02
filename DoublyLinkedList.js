const Node = require('./Node');

// DoublyLinkedList class
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  // push method
  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
  }

  // pop method
  pop() {
    if (!this.head) return undefined;
    const removedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = removedNode.prev;
      this.tail.next = null;
      removedNode.prev = null;
    }
    this.length--;
    return removedNode.value;
  }

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }
    this.length++;
  }
  shift() {
    if (!this.head) return undefined;
    const removedNode = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = removedNode.next;
      this.head.prev = null;
      removedNode.next = null;
    }
    this.length--;
    return removedNode.value;
  }
   // insert method
   insert(index, val) {
    if (index < 0 || index > this.length) return false;

    const newNode = new Node(val);

    if (index === 0) {
      // Insert at the beginning
      newNode.next = this.head;
      if (this.head) {
        this.head.prev = newNode;
      } else {
        this.tail = newNode;
      }
      this.head = newNode;
    } else if (index === this.length) {
      // Insert at the end
      newNode.prev = this.tail;
      if (this.tail) {
        this.tail.next = newNode;
      } else {
        this.head = newNode;
      }
      this.tail = newNode;
    } else {
      // Insert at the specified index
      const currentNode = this.getNodeAt(index);
      const previousNode = currentNode.prev;
      newNode.next = currentNode;
      newNode.prev = previousNode;
      previousNode.next = newNode;
      currentNode.prev = newNode;
    }

    this.length++;
    return true;
  }

  // Helper method to get the node at a specific index
  getNodeAt(index) {
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }
    // get method
    get(index) {
        if (index < 0 || index >= this.length) return undefined;
        
        if (index <= this.length / 2) {
          // Search from the beginning
          let current = this.head;
          for (let i = 0; i < index; i++) {
            current = current.next;
          }
          return current.value;
        } else {
          // Search from the end (to optimize for large indices)
          let current = this.tail;
          for (let i = this.length - 1; i > index; i--) {
            current = current.prev;
          }
          return current.value;
        }
      }
       // set method
  set(index, val) {
    if (index < 0 || index >= this.length) return false;

    if (index <= this.length / 2) {
      // Search from the beginning
      let current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.next;
      }
      current.value = val;
    } else {
      // Search from the end (to optimize for large indices)
      let current = this.tail;
      for (let i = this.length - 1; i > index; i--) {
        current = current.prev;
      }
      current.value = val;
    }
    
    return true;
  }
       // remove method
  remove(index) {
    if (index < 0 || index >= this.length) return false;

    if (index === 0) {
      // Remove the head
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = this.head.next;
        this.head.prev = null;
      }
    } else if (index === this.length - 1) {
      // Remove the tail
      this.tail = this.tail.prev;
      this.tail.next = null;
    } else {
      // Remove a node in the middle
      const currentNode = this.getNodeAt(index);
      const previousNode = currentNode.prev;
      const nextNode = currentNode.next;
      previousNode.next = nextNode;
      nextNode.prev = previousNode;
    }

    this.length--;
    return true;
  }

  // Helper method to get the node at a specific index
  getNodeAt(index) {
    let current = this.head;
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current;
  }
    
}

module.exports = DoublyLinkedList;