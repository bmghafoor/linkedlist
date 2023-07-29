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

  shift() {}

  /** getAt(idx): get val at idx. */

  getAt(idx) {}

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {}

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {}

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {}

  /** average(): return an average of all values in the list */

  average() {}
}

module.exports = LinkedList;
