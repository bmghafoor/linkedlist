/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    let newNode = new Node(val);
    if (this.head === null) this.head = newNode;
    if (this.tail !== null) this.tail.next = newNode;
    this.tail = newNode;
    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let newNode = new Node(val);
    if (this.tail === null) this.tail = newNode;
    if (this.head !== null) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      this.head = newNode;
    }
    this.length += 1;
  }

  /** pop(): return & remove last item. */

  pop() {
    if (this.length === 1) {
      let nodeToRemove = this.head.val;
      this.length -= 1;
      this.head = null;
      this.tail = null;
      return nodeToRemove;
    }
    let currentNode = this.head;
    let nodeToRemove = this.tail.val;
    while (currentNode.next.next) {
      currentNode = currentNode.next;
    }
    this.tail = currentNode;
    //  Otherwise, the old tail node's "next" property will still point to the second-to-last node, causing the list to remain connected to the removed node.
    this.tail.next = null;
    this.length -= 1;
    return nodeToRemove;
  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.length === 1) {
      let nodeToRemove = this.head.val;
      this.length -= 1;
      this.head = null;
      this.tail = null;
      return nodeToRemove;
    }

    let nodeToRemove = this.head.val;
    this.head = this.head.next;
    this.length -= 1;
    return nodeToRemove;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let count = 0;
    let currentNode = this.head;
    while (currentNode.next) {
      if (count === idx) {
        return currentNode.val;
      }
      currentNode = currentNode.next;
      count += 1;
    }
    return currentNode.val;
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let count = 0;
    let currentNode = this.head;
    while (currentNode.next) {
      if (count === idx) {
        currentNode.val = val;
      }
      currentNode = currentNode.next;
      count += 1;
    }
    currentNode.val = val;
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (this.head === null || this.length <= idx) {
      this.push(val);
    }
    let count = 0;
    let currentNode = this.head;
    while (currentNode.next) {
      // has to be +1 since we need to assign the next value to it and the preivious node of the new Node next value should be set to new Node
      if (count + 1 === idx) {
        const newNode = new Node(val);
        newNode.next = currentNode.next;
        currentNode.next = newNode;
        this.length += 1;
        break;
      }
      currentNode = currentNode.next;
      count += 1;
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx === 0) {
      return this.shift();
    }
    if (idx >= this.length - 1) {
      return this.pop();
    }
    let count = 0;
    let currentNode = this.head;
    while (currentNode.next) {
      if (count + 1 === idx) {
        currentNode.next = currentNode.next.next;
        this.length -= 1;
        break;
      }
      currentNode = currentNode.next;
      count += 1;
    }
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) {
      return 0;
    }
    let total = this.head.val;
    let currentNode = this.head;
    while (currentNode.next) {
      currentNode = currentNode.next;
      total += currentNode.val;
    }
    return total / this.length;
  }
}

module.exports = LinkedList;
